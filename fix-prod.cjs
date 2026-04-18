const fs = require('fs');

const filesTsx = ['src/components/Hero.tsx', 'src/components/Services.tsx', 'src/components/PortfolioSlider.tsx', 'src/components/BrandSlider.tsx'];
for (const file of filesTsx) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/src=\"\/([^"]+)\"/g, 'src="/PAGINA-WEB/$1"');
  content = content.replace(/src: \'\/([^']+)\'/g, "src: '/PAGINA-WEB/$1'");
  content = content.replace(/image: \"\/([^"]+)\"/g, 'image: "/PAGINA-WEB/$1"');
  fs.writeFileSync(file, content);
}

const filesAstro = ['src/layouts/Layout.astro', 'src/components/Pricing.astro', 'src/components/Footer.astro', 'src/components/Navbar.astro'];
for (const file of filesAstro) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/src=\"\/([^"]+)\"/g, 'src="/PAGINA-WEB/$1"');
  content = content.replace(/href=\"\/([^"]*)\"/g, 'href="/PAGINA-WEB/$1"');
  content = content.replace(/image: \'\/([^']+)\'/g, "image: '/PAGINA-WEB/$1'");
  content = content.replace(/href: \'\/([^']+)\'/g, "href: '/PAGINA-WEB/$1'");
  fs.writeFileSync(file, content);
}
console.log('Production paths applied.');
