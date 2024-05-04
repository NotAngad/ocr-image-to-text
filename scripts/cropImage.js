const path = require("path");
const Jimp = require("jimp");

const imagePath = path.join(__dirname, "..", "input_images", "image-1.jpg");

Jimp.read(imagePath)
  .then((image) => {
    const width = image.bitmap.width * 1.6 - 800;

    const resizedWidth = image.bitmap.width * 1.6;
    const resizedHeight = image.bitmap.height * 1.6;
    image.resize(resizedWidth, resizedHeight);

    const croppedX = Math.round(0 * 1.6) + 28;
    const croppedY = Math.round(32 * 1.6);

    image.crop(croppedX, croppedY, width, 560);

    image.scale(7);

    image.brightness(0.25);

    console.log("Cropped Image added in input_images 🖼️\n");
    return image.write("input_images/cropped_image.jpg");
  })
  .catch((err) => {
    console.error(err);
  });
