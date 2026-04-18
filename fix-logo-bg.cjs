const sharp = require('sharp');
const fs = require('fs');

async function removeWhiteBackground() {
  const inputFile = 'public/logo-gle-light.webp';
  const outputFile = 'public/logo-gle-light-trans.webp';

  const { data, info } = await sharp(inputFile)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Calculate distance from perfect white
    const brightness = (r + g + b) / 3;
    
    if (brightness > 240) {
      // Completely remove nearly-white pixels
      data[i + 3] = 0;
    } else if (brightness > 180) {
      // Soft antialiasing for the edges (fringe removal)
      // The closer to 240, the more transparent
      const alpha = Math.floor(255 * (1 - (brightness - 180) / 60));
      data[i + 3] = alpha;
      
      // Attempt to clean the fringe color by pushing it towards the dominant green/dark color
      // Typically anti-aliased edge pixels have their colors washed out towards white.
      // We can artificially drag them down towards original hue.
      if (alpha < 255) {
        data[i] = Math.max(0, r - 50);
        data[i + 1] = Math.max(0, g - 20); // Keep green higher
        data[i + 2] = Math.max(0, b - 50);
      }
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels
    }
  }).webp({ quality: 90 }).toFile(outputFile);
  console.log("Successfully created transparent WebP logo.");
}

removeWhiteBackground().catch(console.error);
