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

const files = getFiles('src', ['.astro', '.tsx']);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace double quotes
  content = content.replace(/href: "\/([^"]*)"/g, 'href: "/PAGINA-WEB/$1"');
  content = content.replace(/image: "\/([^"]*)"/g, 'image: "/PAGINA-WEB/$1"');
  content = content.replace(/src: "\/([^"]*)"/g, 'src: "/PAGINA-WEB/$1"');
  
  // Clean up any double PAGINA-WEB (in case it matched something already fixed)
  content = content.replace(/\/PAGINA-WEB\/PAGINA-WEB\//g, '/PAGINA-WEB/');

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Fixed paths manually in: ' + file);
  }
}
