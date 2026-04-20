const fs = require('fs');

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

const tsxFiles = getFiles('src', ['.tsx', '.ts']);
for (const file of tsxFiles) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/src: \"\/PAGINA-WEB\/([^"]*)\"/g, 'src: `${import.meta.env.BASE_URL}$1`');
  content = content.replace(/src=\"\/PAGINA-WEB\/([^"]*)\"/g, 'src={`${import.meta.env.BASE_URL}$1`}');
  fs.writeFileSync(file, content);
}

const astroFiles = getFiles('src', ['.astro']);
for (const file of astroFiles) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/href=\"\/PAGINA-WEB\/([^"]*)\"/g, 'href={import.meta.env.BASE_URL + "$1"}');
  content = content.replace(/href: \"\/PAGINA-WEB\/([^"]*)\"/g, 'href: import.meta.env.BASE_URL + "$1"');
  content = content.replace(/src=\"\/PAGINA-WEB\/([^"]*)\"/g, 'src={import.meta.env.BASE_URL + "$1"}');
  content = content.replace(/image: \"\/PAGINA-WEB\/([^"]*)\"/g, 'image: import.meta.env.BASE_URL + "$1"');
  fs.writeFileSync(file, content);
}
console.log('Dynamic paths applied.');
