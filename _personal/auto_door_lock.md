---
title: "Automatic Door Lock"
date: 2021-05-01T12:00:00+2:00
featured: true
weight: 2
layout: project
---

* **Date:** Jan 2021
* **Authors:** Shadi Naguib
* **Field of Study:** Robotics, Electronics, Fun
* **Context:** Fun*

In today's digital age, our smartphones have become an indispensable part of our lives. They're our lifelines, connecting us to the world, managing our schedules, and even controlling our homes. As a tech enthusiast, I always look for ways to integrate my smartphone into various aspects of my life. This time, I decided to take on a challenge that would combine mechanics, electronics, and software: unlocking my door lock using my cell phone.

<video class="web-image-lg" src="/images/project-images/auto_door_lock/hobby_door_lock.mp4" controls> </video>
<br>

# The Idea
We've all been there – fumbling for our keys in the dark, or misplacing them just when we need them the most. I wanted a solution that would be both convenient and secure. Enter the concept of unlocking doors with a smartphone! But how to achieve it? With the magic of gears, microcontrollers, and IoT apps.

# The Mechanics
The mechanical part of the project involved designing a system of gears that could be attached to the existing door lock mechanism. These gears would be responsible for turning the lock upon receiving a signal. Given the variety of door locks, I opted for a universal design that could be adapted to most locks.

# The Electronics
At the heart of the project is a microcontroller (NodeMCU), a tiny computer on a single integrated circuit, which acts as the brain of the operation. This microcontroller listens for a signal from the smartphone and then activates the gear system to turn the lock. I chose a popular and widely supported microcontroller that is both affordable and powerful enough for this task : The NodeMCU3.
Everything was designed on EasyEDA and soldered on a custom made PCB. 

<div class="web-image-lg">
    <img src="../../images/project-images/auto_door_lock/schematic.png">
</div>

<div class="web-image-lg">
    <img src="../../images/project-images/auto_door_lock/pcb.png">
</div>

# The Software
The final piece of the puzzle was the IoT (Internet of Things) app. This app, which I installed on my smartphone, sends a secure signal to the microcontroller when I want to unlock the door. To ensure security, I implemented encryption and a handshake protocol, ensuring that only my smartphone could unlock the door.

# The Result
After some tweaking and testing, I had a fully functional system! Now, with just a tap on my smartphone, my door unlocks smoothly. Not only has this project provided me with a new convenience, but it's also given me a deeper appreciation for the intersection of mechanics, electronics, and software.

# What's Next?
The possibilities are endless! I'm considering adding features like remote monitoring, voice commands, and even integrating it with other smart home systems. The world of IoT is vast, and this project has only scratched the surface.

To all the tech enthusiasts out there, I encourage you to take on challenges that push the boundaries of what you know. The learning experience is invaluable, and the satisfaction of building something with your own two hands is unmatched. Here's to unlocking the future, one door at a time!

# Additional Material

For any more information on the project, please don't hesitate to contact me <a href="/contact">here</a>.