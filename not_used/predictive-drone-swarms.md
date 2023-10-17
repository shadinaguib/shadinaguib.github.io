---
title: "Predictive Drone Swarms with Limited FOV"
date: 2018-01-01T12:00:00+02:00
featured: false
weight: 5
layout: project
---

A study of the effect of **limited field of view** on drone swarms using a state of the art **predictive** trajectory generation and collision avoidance algorithm.

* **Date:** January 2021
* **Author:** Shadi Naguib
* **Field of Study:** Aerial Robotics, Model Predictive Control
* **Context:** EPFL Ma-3 *Robotics* Semester Project


<div class="web-image-xl">
    <img src="../../images/project-images/swarm/swarm_intro.png">
</div>

# Introduction

Some robotics tasks such as manufacturing, surveillance, or search and rescue require the use of multiple agents to be accomplished. Indeed some objectives would be too time consuming or even impossible to complete if left to a single robot. Cooperation is key in the success of multi-agent tasks.

Coordination and cooperation are facilitated with a centralised approach with all agents sharing common information, but real life circumstances do not always allow for this. Therefore another way to approach the problem is by using distributed systems, where each agent is self-contained in its decision making as well as its sensing.

One standing issue with multi-agent robotics task is how to safely navigate an environment. Many algorithms mitigate certain real world constraints, and assume that each agent is able to sense every other neighbouring agent. Indeed most sensors are limited, thus adding concept of a limited field of view.

This was a semester project that I did during the final semester of my Master's degree at the Laboratory of Intelligent Systems at EPFL, Lausanne. I studied the effect of a limited field of view as it was introduced to a predictive model, combining state of the art collision avoidance algorithms with real world constraints such as the limited field of view found in off the shelf sensors.

# Goal

The goal of the project was to use online distributed model predictive control to generate trajectories with collision avoidance for a set number of agents. Each agent is given a start poistion and a goal position within a 3D workspace. The goal was to compute inputs for each time step in the predictive model while ensuring that:
* The agents reach their **end position**
* The agents do **not collide** with each other
* The agents remain **within the workspace**

# Method

We assumed that all agents are equipped with a controller for position trajectory tracking where the inputs are position references. We seperated the problem in two by solving the reference inputs first for the position of the agent using online distributed model predictive control, followed by its heading by adding field of view constraints and using proportional control to follow neighbouring agents.

## Online Distributed Model Predictive Control

We used online Distributed Model Predictive Control (DMPC) to calculate an input sequence for each agent over K time steps. The trajectory input for position is defined by a concatenation Bezier curves, constructed thanks to Bernstein polynomials of degree *p*.  The curve is characterised by a series of *p+1* control points which serve as the optimisation variables to compute each agent’s trajectory. We apply the opimal after solving the quadratic programming (QP) problem, and recalculate for the next time step.


We tested different collision avoidance alogorithms such as *Buffered Voroni Cells* (BVC) as well as *On-demand Collision Avoidance* in the input space and in the state space. *On-demand Collision Avoidance* in the input space showed the smoothest trajectories and the lowest execution time over multiple experiments and was therefore used for the rest of the project.

The cost function for the QP problem consisted of three quadratic terms to minimize:
* **Error to goal:** equal to the sum of errors between the positions at the last time steps of the horizon and the end location for each agent *i*
* **Energy:** equal to a weighted combination of the sum of squared derivatives of the input
* **Collision constraint violation:** on-demand collision avoidance was implemented as soft constraints with a penalty term for violation


## Heading Angle Control

We assumed that each agent has the same limited field of view defined by a width angle *α*, a height angle *β* and a heading direction *d<sub>,i</sub>* as shown below. The heading direction is always parallel to the *x-y* plane, so there is no vertical control of the field of view, it can only rotate around the *z*-axis.

<div class="web-image-ms">
    <img src="../../images/project-images/swarm/fov.svg">
</div>

At the beginning of each simulation we choose one of three initialisation methods that will define the heading direction of each agent:
* **Goal:** Each agent is heading towards its goal position
* **Closest:** Each agent is heading towards its closest neighbouring agent
* **Most:** Each agent is heading in the direction with the highest amount of neighbouring agents in its field of view

<div class="web-image-xl">
    <img src="../../images/project-images/swarm/init_mode.svg">
</div>

Following the assumption that agent *j*’s states are known by agent *i* if and only if agent *j* is in agent *i*’s field of view, we can update the heading inputs accordingly with proportional control, ensuring that all neighboring agents are positioned within the smallest FOV angle of the observing agent.




# Experiment

The aim of the following set of experiments is to evaluate the performance of the model
using different FOV height and width angles α and β, as well as to monitor how the heading
initialisation impacts performance.

For each initialisation mode, we run simulations with N = 3, 6 and 9 agents. We
vary the FOV angles from 15° to 180° with 15° increments and count the average number of collisions
over 5 simulations with each set of parameters.

Odd numbered agents are placed on one side of the workspace, and even numbered agents on the other. Their goal positions are on opposite ends of the workspace, creating a simulation environment where agents are likely to have colliding trajectories. Here is a quick visualisation of the setup:

<div class="web-image-md">
    <img src="../../images/project-images/swarm/experiment.svg">
</div>

After launching a simulation, we can visualize an example of collision free trajectories with N = 9 agents, using the following parameters:

* **Initialisation method**: most
* **FOV width angle**: α=60°
* **FOV height angle**: β=45°

Feel free to click about and move around the interractive plot.

<div class="plotly-graph">
  {% include project_data/swarm/traj9.html %}
</div>


# Results and Discussion

The figure below shows the average number of collisions using different FOV width and height
angles α and β over 5 experiments for each parameter combination.

By comparing rows we can clearly see that the models performance is the poorest with the *Goal* initialisation method, followed by *Closest*, and the best performing is
*Most*.

<p align="center">
<iframe width="630" height="700" frameborder="0" scrolling="no" src="//plotly.com/~ThomasKimble/1.embed?showlink=false&logo=false"></iframe>
</p>

Surprisingly, the different initialisation methods had a larger impact on the number of collisions than expected. With N = 9 agents, maximal average collisions varied from 3.4 to 8.6 when using different methods. The *Closest* method outperformed the other two methods in maximal average number of collisions, and by minimal FOV angle values with less than 1 collision on average. We find good performance with this method and FOV angles α ≥ 60° and β ≥ 90°.

When using the *Goal* method, agents generally start off the simulation with no others in their FOV, therefore leading to minimal heading corrections and imminent collisions that are only seen a moment before impact, and can not be avoided.

When using the *Closest* method, agents usually keep one other agent in their FOV, and as the closest agent is generally travelling in the same direction as itself, there is a low chance of trajectories coinciding and collisions happen with agents coming from further away. This method would perhaps work better if all agents within the swarm were heading in the same direction, but this hypothesis would need to be put to the test.

When using the *Most* method, by definition the agents were headed towards the maximal amount of others possible, therefore have more opportunities to correct their trajectory leading to less collisions. Indeed it is intuitive that an agent that can see more, can react accordingly.

If we focus more on the FOV results, independent of the initialisation mode we can see that in general a higher height angle β is required for fewer collisions when compared to the width angle α. This is due to the fact that the implementation of our model corrects the heading around the z-axis (yaw) and does not allow the heading
and FOV to rotate up and down (pitch and roll). This leads to lower width angles α performing better than lower height angles β. Indeed in many cases, agents would avoid others trajectories by flying under or over, therefore not seeing other agents from beneath or from above, leading to collisions

# Conclusion

In conclusion, we introduced the effect of a limited field of view to a previously functional predictive model, combining a state of the art collision avoidance algorithm with real world constraints such as the limited field of view found in off the shelf sensors.

After comparing multiple collision avoidance algorithms, on-demand collision avoidance was selected as it showed the best performances for the model. To create trajectories with limited FOV constraints, the model was divided in two. First, an optimisation problem for the trajectory generation and obstacle avoidance. Secondly, after position and heading initialisation, we used a proportional controller to ensure that each agent was tracking other agents within their FOV to avoid collisions.

Field of view parameters such as width and height angles were compared with different initialisation methods to show that best performances occurred with FOV width angles above 60° and height angles above 90°, when agents were initialised with the highest number of other agents possible with their FOV. We see trajectory generation and point-to-point navigation with up to 9 agents with on average less than a single collision with these parameters.

We notice that initialisation plays an important role in our model, and that it would be interesting to implement vertical heading control to lower the possible width angle lower than the reported 90° value for limited FOV.

# Additional Material

For any more information on the project and for the maths behind it all, please don't hesitate to contact me <a href="/contact">here</a>, or check out the report below. Unfortunately I can not share the code for this project due a confidentiality and non-use agreement.

<div class="row justify-content-center">
  <div class="col-auto">
    <a class="button_link" href="/images/project-images/swarm/swarm_report.pdf" target="_blank">Report</a>
  </div>
</div>
