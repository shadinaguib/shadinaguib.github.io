---
title: "Autonomous UAV"
date: 2021-05-01T12:00:00+2:00
featured: true
weight: 2
layout: project
---

For the Aerial Robotics course at EPFl, we programmed a Crazyflie drone to find and precisely land on a
platform with the help of minimal sensory information. Additionally, we used sensor readings to design a robust algorithm that can avoid obstacles present in the environment.


* **Date:** Jan 2021
* **Authors:** Shadi Naguib, Gregoire Bergamo, Nikitas Papadopoulos
* **Field of Study:** Robotics, Electronics
* **Context:** EPFL MA1 *Course Project*

<div class="web-image-lg">
    <img src="../../images/project-images/uav/drone_project_map.PNG">
</div>

The arena for the final demonstration is shown in the figure above. The task we are required
to complete in this arena is composed of multiple phases:
* The drone takes off from a take-off pad placed within the starting region.
* Thanks to the optic-flow sensor and a z-range finder the drone can track its
movements and find the landing pad in the landing zone.
* Once the landing pad is found, the drone has to precisely land on it.
* Upon successful landing, the drone takes off, flies back and lands on the take-off pad.
* In the workspace, there can be a few obstacles of previously unknown dimensions
which it can detect with the multiranger deck. Our developed algorithm makes the drone avoid any collisions.

## Room setup for demonstration

<div class="web-image-lg">
    <img src="../../images/project-images/uav/151608304-cedae95a-245b-483c-a5d8-8a1c89c01a95.png">
</div>

A video showing the result can be found below. 

<video class="web-image-lg" src="/images/project-images/uav/video.mp4" controls> </video>
<br>

# Additional Material

For any more information on the project, please don't hesitate to contact me <a href="/contact">here</a>, or check out the jupyter notebook below.

<div class="row justify-content-center">
  <div class="col-auto">
    <a class="button_link" href="https://github.com/shadinaguib/uav-project" target="_blank">Code</a>
  </div>
</div>