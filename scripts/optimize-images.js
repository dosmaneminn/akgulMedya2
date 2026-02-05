import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/images/services');
const outputDir = path.join(__dirname, '../public/images/services');

async function optimizeImages() {
    const files = fs.readdirSync(inputDir);

    for (const file of files) {
        if (file.endsWith('.png')) {
            const inputPath = path.join(inputDir, file);
            const outputPath = path.join(outputDir, file.replace('.png', '.webp'));

            try {
                await sharp(inputPath)
                    .resize(800, 600, { fit: 'cover' })
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                const inputStats = fs.statSync(inputPath);
                const outputStats = fs.statSync(outputPath);

                console.log(`✓ ${file} -> ${file.replace('.png', '.webp')}`);
                console.log(`  ${(inputStats.size / 1024 / 1024).toFixed(2)} MB -> ${(outputStats.size / 1024).toFixed(0)} KB`);
            } catch (err) {
                console.error(`✗ Error processing ${file}:`, err.message);
            }
        }
    }

    console.log('\nDone! You can now delete the original PNG files.');
}

optimizeImages();
