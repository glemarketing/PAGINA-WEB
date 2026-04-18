const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const DIRS = ['public', 'public/portfolio'];
const SOURCE_CODE_DIRS = ['src'];

const getFiles = (dir, ext) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file, ext));
    } else {
      if (ext.some(e => file.toLowerCase().endsWith(e))) {
        results.push(file);
      }
    }
  });
  return results;
};

async function optimizeImages() {
  const images = [];
  for (const dir of DIRS) {
    if (fs.existsSync(dir)) {
      images.push(...getFiles(dir, ['.png', '.jpg', '.jpeg']));
    }
  }

  console.log(`Found ${images.length} images to convert.`);

  for (const file of images) {
    const ext = path.extname(file);
    const newFile = file.slice(0, -ext.length) + '.webp';
    console.log(`Converting ${Math.round(fs.statSync(file).size / 1024)}KB ${file} to .webp...`);
    
    // Convert to webp
    await sharp(file)
      .webp({ quality: 80, effort: 6 })
      .toFile(newFile);
      
    // Delete old file
    fs.unlinkSync(file);
  }
}

function updateCodebase() {
  const codeFiles = getFiles('src', ['.astro', '.tsx', '.ts']);
  for (const file of codeFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content.replace(/\.png/g, '.webp')
                            .replace(/\.jpg/g, '.webp')
                            .replace(/\.jpeg/g, '.webp');
    if (content !== newContent) {
      fs.writeFileSync(file, newContent);
      console.log(`Updated references in ${file}`);
    }
  }
}

async function run() {
  await optimizeImages();
  updateCodebase();
  console.log('Optimization complete!');
}

run().catch(console.error);
