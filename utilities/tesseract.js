const { createWorker } = require("tesseract.js");

async function readTextFromImage(imagePath) {
    const worker = await createWorker();
    try {
        const {
            data: { text },
        } = await worker.recognize(imagePath);
        await worker.terminate();
        return text;
    } catch (error) {
        console.error("Error during text recognition:", error);
        await worker.terminate();
        throw error;
    }
}

module.exports = { readTextFromImage };
