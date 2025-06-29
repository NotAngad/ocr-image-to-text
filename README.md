﻿# Bhumio OCR [Image-To-Text]

This project enables us to convert a PDF into an image, from which we can then extract text. This text can be saved as a CSV file later on.

## Installation

Clone the project from and move ino the directory

```bash
  git clone https://github.com/NotAngad/ocr-image-to-text.git
  cd ocr-image-to-text
```

Install the necessary modules (Node version is v20)

```bash
  npm i
```

To run tthe program simply execute the command provided below. This command will convert the pdf to images which will later be used to extract text.

```bash
  npm run start
```

After successful execution of the above command, there will be a file called "output.csv" in your root directory.

<img src="https://i.imgur.com/1Z70T06.png" width="100%" height="280">

## Problem statement

Our challenge is to extract text from images and then saving it into a csv file, enabling informed decision-making. Leveraging libraries such as Tesseract, with its powerful ML model, we can convert image-based text into actionable data, empowering analysis and strategic choices.

## Difficulties faced

During the course of this project, numerous challenges arose.

- Tesseract struggled with interpreting tables and boxes accurately.
- Additionally, when converting a PDF to an image, significant detail may be lostnecessitating preprocessing steps for optimal OCR performance.
- Preprocessing itself poses challenges, such as encountering issues like entire image whitening due to binarization.

Image whitening by binarization:
<br >
<img src="https://i.imgur.com/rE6ffMb.png" width="50%" height="320">

## How difficulties were addressed

- Realizing that processing a large amount of data simultaneously led to confusion and reduced accuracy,
- Cropping the images, feeding Tesseract three cards at a time for improved readability. Furthermore
- Scaling up the images to enhance Tesseract's performance.
- Applied filters such as brightness adjustment to further enhance readability.

Although this demonstration focused on the first three cards of the initial image, the process can be extended recursively to all images and cards, ensuring comprehensive data processing.

## What can be improved

- Implementing targeted text extraction by focusing on specific sections of an image rather than processing the entire image can enhance efficiency and accuracy.
- Experimenting with image inversion followed by binarization can potentially yield improved results, especially in scenarios where text contrast is low.
- Applying image sharpening techniques and exploring options to increase font size can significantly enhance legibility, making text extraction more accurate and reliable.
