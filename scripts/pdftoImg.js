const fs = require('fs');
const path = require('path');
const pdfPoppler = require('pdf-poppler');

function ensureOutputDirectoryExists(outputDir) {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
}

async function convertPdfToImages(pdfPath, outputDir) {
    try {
        ensureOutputDirectoryExists(outputDir);

        await pdfPoppler.convert(pdfPath, {
            format: 'jpeg',
            out_dir: outputDir,
            out_prefix: 'image',
        });

        console.log('PDF successfully converted to images: 📄\n');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

const pdfPath = path.join(__dirname, '..', 'assets', 'Sample_Text_Extract.pdf');
const outputDir = 'input_images';
convertPdfToImages(pdfPath, outputDir);
