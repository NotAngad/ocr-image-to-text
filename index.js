const path = require('path');
const { writeToCsv } = require("./utilities/csv");
const { readTextFromImage } = require("./utilities/tesseract");
const { splitArrayByEmptyString, extractKeyValuePairs } = require("./utilities/dataProcessing");

const imagePath = path.join(__dirname, 'input_images', 'cropped_image.jpg');
console.log('Extracting data from the image ✂️.....\n');

readTextFromImage(imagePath)
  .then((text) => {
    const arr = text.split("\n");
    const splitArray = splitArrayByEmptyString(arr);
    const filteredArray = splitArray.filter((element) => element?.length >= 4);
    const results = [];
    filteredArray.forEach((item) => {
      const data = extractKeyValuePairs(item);
      results.push(data);
    });
    console.log("Extraction complete 📤\n");
    writeToCsv(results?.flat(1));
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
