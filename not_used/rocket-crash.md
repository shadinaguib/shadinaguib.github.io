---
title: "Rocket Crash - A Nintendo DS Game"
date: 2021-02-18T12:33:46+10:00
featured: false
weight: 3
layout: project
---

I developed an arcade-like game named Rocket-Crash and tested it on the Nintendo DS microprogrammed embedded system. I designed simple graphics and sprites and used a state machine to navigate through game modes.

* **Date:** January 2020
* **Author:** Shadi Naguib
* **Field of Study:** Software Engineering, Embedded Systems, C
* **Context:** EPFL Ma-1 *Microprogrammed Embedded Systems* Project

<div class="web-image-full">
    <img src="../../images/project-images/rocket/DS.png">
</div>

# Goal

During a semester, we had the goal of getting familiar with the architecture and functionalities of a 32 bit microprocessor. In particular we dealt with memory and different IO peripherals such as bluetooth, wifi, touch screens, buttons and sound. 

The goal of this particular project was to create a game for the Nintendo DS using all of its features: 
both ARM processors, on board timers, graphics, sound, keypad and buttons, touchscreen and external storage.

# Game

I decided to create and arcade-like game named Rocket-Crash. The aim of the game is to move a rocket around the screen while avoiding platforms. The user can use the keypad and buttons or the touchscreen to navigate through menus and to move the rocket. There are two modes in the game:
* **Infinite**: Get the highest score before crashing
* **Level**: Complete levels of a set length

Different *powers* can be obtained if the rocket hits a *power cube*. These powers are the following and can be seen in the graphics shown below:
* **x2**: Doubles the rocket's movement speed
* **÷2**: Halves the rocket's movement speed
* **Teleport**: The rocket can teleport from one side of the screen to the other
* **Invert**: Inverts the rocket's movement
* **Bomb**: Instantly explodes causing a rocket crash

In addition, high scores are saved and can be accessed via the main menu. The game can be paused and restarted at any time.

<!-- Slideshow container -->
<div class="slideshow-container">

  <!-- Full-width images with number and caption text -->
  <div class="mySlides fade">
    <img src="../../images/project-images/rocket/rocket_main.png" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="../../images/project-images/rocket/rocket_sky.png" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="../../images/project-images/rocket/rocket_sub.png" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="../../images/project-images/rocket/rocket_sprites.png" style="width:100%">
  </div>

  <div class="mySlides fade">
    <img src="../../images/project-images/rocket/rocket_tiles.png" style="width:100%">
  </div>

  <!-- Next and previous buttons -->
  <div class="prev" onclick="plusSlides(-1)">&#10094;</div>
  <div class="next" onclick="plusSlides(1)">&#10095;</div>
</div>
<br>

<!-- The dots/circles -->
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
  <span class="dot" onclick="currentSlide(4)"></span>
  <span class="dot" onclick="currentSlide(5)"></span>
</div>

<br/><br/>

The game uses different backgrounds as layers moving at different speeds to give the illusion of vertical movement. This was done by using the on bord timers. The numbers for the score, the current powers, the platforms and the keypad selector were made to be *tiles* and added as a background layer on top of the main and sub graphics. The rocket and the *power cubes* were designed as sprites to be able to move independantly of the backgrounds.

The game follows a state machine between 5 states: Menu, Play, Pause, Over and Stats. These are self explanatory in their nomenclature. The user can navigate between each state by using the keypad or the touch screen as shown here:

<div class="web-image-full">
    <img src="../../images/project-images/rocket/rocket_states.svg">
</div>


# Additional Material

For any more information on the project, please don't hesitate to contact me <a href="/contact">here</a>, or check out the code below.

<div class="row justify-content-center">
  <div class="col-auto">
    <a class="button_link" href="https://github.com/ThomasKimble/rocket-crash" target="_blank">Code</a>
  </div>
</div>
