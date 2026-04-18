const fs = require('fs');

const files = ['src/components/PortfolioSlider.tsx', 'src/components/BrandSlider.tsx'];
for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/src: \"\/portfolio\//g, 'src: "/PAGINA-WEB/portfolio/');
  fs.writeFileSync(file, content);
  console.log('Fixed paths in: ' + file);
}
