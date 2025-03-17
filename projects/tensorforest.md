---
title: TensorForest
description: ai drones to create climate insights
image: tensorforest.jpg
date: 2025-01-15
tags:
    - hardware
    - ai/ml
---

# TensorForest

![TensorForest Cover](https://www.shayaanazeem.co/tensorforest/tensorforestv1.png)

## The Problem

Wildfires have become increasingly frequent and severe, devastating forest ecosystems and contributing significantly to greenhouse gas emissions. The UN Environment Programme (UNEP) predicts a global rise in extreme wildfires by **14% by 2030**, **30% by 2050**, and **50% by 2100**. Climate change and wildfires form a dangerous feedback loop, worsening the damage and increasing the need for fire prevention.

![TensorForest V1](https://www.shayaanazeem.co/tensorforest/tensorforest%20v3%20.png)  
_Our first prototype of TensorForest, designed to capture high-resolution forest data for wildfire risk assessment._

## The Opportunity

Effective wildfire prevention requires accurate, up-to-date, real-time data. However, current solutions have major limitations:

-   **Expensive drones**: High-end wildfire monitoring drones cost **$25,000 or more**, making them inaccessible to many organizations and communities.
-   **Manual surveying**: Traditional forest monitoring methods are slow, labor-intensive, and costly.
-   **Limited access**: Fire departments in wealthier nations have access to advanced technology, while vulnerable communities (e.g., farmers in Kenya, Indonesia, and Vietnam) lack affordable wildfire prevention tools.
-   **Satellite imagery limitations**: Satellites do not provide high-resolution, up-to-date data necessary for proactive fire prevention.

## How It Works

TensorForest is an **autonomous drone system** designed to provide high-resolution forest monitoring and wildfire prediction. The process includes:

1. **Selecting a target region** for assessment.
2. **Generating a flight plan** to autonomously cover the area.
3. **Capturing multiple high-resolution images and spatial data**.
4. **Stitching images together using OpenCV** to create a detailed forest map.
5. **Generating a Digital Elevation Model (DEM)** by processing spatial points.
6. **Running the data through a vision transformer model**, integrating climate data such as temperature and precipitation.
7. **Producing a wildfire risk heat map**, classifying vegetation and identifying high-risk areas/fire spread patterns.
8. **Utilizing data for fire prevention planning**, helping determine optimal locations to cut fire lines and mitigate wildfire spread.

![TensorForest V3](/tensorforest/tensorforest%20v3%20.png)  
_The latest version of TensorForest featuring improved hardware and AI capabilities for more accurate wildfire risk prediction._

### Additional Features

![Vegetation Map Capture](https://www.shayaanazeem.co/tensorforest/vegatation%20map%20capture,%20stich1.png)  
_A stitched vegetation map created by TensorForest, showcasing our ability to create comprehensive forest visualizations from multiple drone captures._

![NDVI Capture for Heat Map](https://www.shayaanazeem.co/tensorforest/Normalized%20Difference%20Vegetation%20Index%20%20capture%20for%20heat%20map.png)  
_An NDVI capture used to generate heat maps, showing vegetation health and potential fire risk areas._

![GoPro NDVI Capture](https://www.shayaanazeem.co/tensorforest/gopro%20to%20capture%20Normalized%20Difference%20Vegetation%20Index.png)  
_Our modified GoPro setup used to capture NDVI data, providing crucial vegetation health information for risk assessment._

![Pi Computer Module](https://www.shayaanazeem.co/tensorforest/campimod.png)  
_The Raspberry Pi computer module with Edge TPU that powers our onboard image processing and AI analysis capabilities._

## Current Development & Funding Needs

We are actively seeking **microgrants and funding** to enhance TensorForest's capabilities:

1. **Scaling hardware and software**

    - Acquiring higher-resolution **LiDAR sensors** for improved accuracy.
    - Developing **longer-range drones** for large-scale forest monitoring.

2. **Enhancing AI Model Accuracy**
    - Continuing to train and refine the **wildfire risk assessment model**, requiring **more computing power** and diverse datasets for improved accuracy.

## Get Involved

We are continuously working on improving TensorForest. If you're interested in this project or want to collaborate, feel free to reach out at [rohanth.marem@gmail.com](mailto:rohanth.marem@gmail.com).
