---
title: "High voltage power supply for tethered drones"
date: 2021-05-01T12:00:00+2:00
featured: true
weight: 2
layout: project
---

For my semester project with the LAI at EPFl, I designed and built a tethered power supply system to power up a drone using a thin cable from the ground, bypassing the drone's battery limitations.

* **Date:** Jan 2021
* **Author:** Shadi Naguib
* **Field of Study:** Robotics, Electronics
* **Context:** EPFL MA1 *Semester Project*

# Goal

In recent years, supplying power to drones with a wire instead of a battery has
become more and more popular. The notable difference, in comparison to classical
battery solutions that are integrated in most drones nowadays, is the fact that with
this system the drone is supplied with the use of an electrical wire connected to a
ground power supply, giving in an infinite flight time. Such a power supply may be
placed directly on the ground, powered with mains voltage (230 VAC), or on the
board of a transport vehicle equipped with a 230 VAC output voltage. In such a
case, to supply the drone from a ground station, several methods were explored and
one of them was applied in the supply path of the flying system.

The electrical power is then transmitted to the drone, and distribution and management of the power consumed by the local devices placed on board the drone are executed.

# Method

A ground power supply converts the 230 VAC to a 600 VDC voltage, this power
is then transmitted to the drone through a high voltage cable, and converted to
the working voltage of the drone that varries depending on the drone, but typically
ranges from 12 VDC to 48VDC.

<div class="web-image-lg">
    <img src="../../images/project-images/drone_ps/final_supply_path.png">
</div>

We used a full-bridge converter circuit to convert the high 600 VDC voltage to the 24 VDC working voltage of the drone. The transformer was handmade in the lab with ferrite cores and Litz wires. 

<div class="web-image-lg">
    <img src="../../images/project-images/drone_ps/Full-bridge-DC-DC-converter-topology_W640.jpg">
</div>


# Results

We have designed a system of a 600 V - 12 V 1500 W step down power converter to be mounted on a drone. The design was first simulated on a computer, and a prototype was then built which was tested with multiple resistance values and wired to a brushless DC motor with an electronic speed controller. The results between the theory and the reality proved to be very similar, and some improvements in terms of size, weight and efficiency are yet to be made in order to optimize the performance of the device.
This project was very instructional in terms of electronics principles such as power conversion and circuit board design but also gave valuable experience in hands on skills such as micro soldering. It was also a great exercise of project planning and time management.


# Additional Material

For any more information on the project, please don't hesitate to contact me <a href="/contact">here</a>, or check out the report below.

<div class="row justify-content-center">
  <div class="col-auto">
    <a class="button_link" href="https://drive.google.com/file/d/1TAeqP1Zz-JP1-IL_FgimNVQHPNV2iqG4/view?usp=sharing" target="_blank">Report</a>
  </div>
</div>
