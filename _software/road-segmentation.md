---
title: "Road segmentation from satellite images"
date: 2020-12-18T12:33:46+01:00
featured: true
weight: 1
layout: project
---

A study on satellite image segmentation utilized the U-Net architecture and its variants, achieving a notable accuracy of 0.947 in classifying pixels as roads or backgrounds.

* **Date:** December 2020
* **Authors:** Shadi Naguib, Leo Alvarez, Borja Rodriguez
* **Field of Study:** Data Science, Python, Pytorch, AWS
* **Context:** EPFL Ma-3 *Machine Learning* Project

# Introduction 

Semantic segmentation of satellite images aims to classify pixels as road or background. This project employed Google Maps images with ground-truth pixel-wise labels. The dataset had 100 training pairs of 400x400 pixel RGB images and 50 testing satellite RGB images of 608x608 pixels. Given the limited dataset, preprocessing was necessary, especially to address the underrepresentation of angled roads, which made up just 15% of images. Conventional Convolutional Neural Networks (CNNs) were found insufficient, leading to the application of the U-Net architecture, a top-tier model originally for medical images, adjusted for road segmentation, termed U-Net Alpha. Variants, U-Net Beta and U-Net Gamma, were also explored.

<div class="web-image-md">
    <img src="../../images/project-images/road_segmentation/example.png">
</div>

# Methodology

## Data Augmentation
To tackle the lack of abundant data, the dataset was expanded using transformations like horizontal and vertical mirroring, and various rotations. The original set was skewed with just 15% of images having tilted roads. Rotation transformations balanced this, aiding better network training. Additionally, images were cropped into 80x80 pixel patches with 40-pixel overlap, expanding the dataset size.

## Convolutional Neural Networks
CNNs, having proven their mettle in machine vision, were used as a baseline. Our model included two 2D convolutions, each succeeded by a Relu activation and a Max pooling layer. The output feature map was then reshaped and passed through three fully connected layers for final classification.

## U-Net Architecture
U-Net, initially developed for medical images, was adapted for our project. The structure consists of an encoder to extract features and a decoder to predict road positioning. U-Net's unique feature is its skip connections that retain spatial information.

## U-Net Variants
Three primary U-Net variations were explored: U-Net Alpha, U-Net Beta, and U-Net Gamma. U-Net Alpha used zero-padding for each convolution, retained input-output image dimensions, and underwent a final 1x1 convolution classification. U-Net Beta employed dilated convolutions to maintain large scale spatial information. U-Net Gamma introduced ResPaths Skip Connections to modify skip connection paths, better harmonizing encoder and decoder feature maps.

A study on satellite image segmentation utilized the U-Net architecture and its variants, achieving a notable accuracy of 0.947 in classifying pixels as roads or backgrounds.

<div class="web-image-lg">
    <img src="../../images/project-images/road_segmentation/architecture.png">
</div>

# Results
U-Net Beta was notably efficient in segmenting roads, even when obscured by obstacles. The three U-Net variants outperformed the baseline model, with U-Net Beta showing the best results with an accuracy of 0.947 and an F1 score of 0.903.

A study on satellite image segmentation utilized the U-Net architecture and its variants, achieving a notable accuracy of 0.947 in classifying pixels as roads or backgrounds.

<div class="web-image-md">
    <img src="../../images/project-images/road_segmentation/results.png">
</div>

<div class="row justify-content-center">
  <div class="col-auto">
    <a class="button_link" href="https://github.com/shadinaguib/ML_Road-Segmentation" target="_blank">Code</a>
    <a class="button_link" href="https://github.com/shadinaguib/ML_Road-Segmentation/blob/master/report/Projet_2_ML.pdf" target="_blank">Report</a>
  </div>
</div>