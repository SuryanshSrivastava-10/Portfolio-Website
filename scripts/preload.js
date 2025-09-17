// Preload critical resources for better performance
const fs = require('fs');
const path = require('path');

// Critical resources to preload
const criticalResources = [
  '/profile-photo.png',
  '/favicon.ico'
];

// Generate preload links
const generatePreloadLinks = () => {
  const links = criticalResources.map(resource => {
    const ext = path.extname(resource);
    const as = ext === '.png' || ext === '.jpg' || ext === '.jpeg' ? 'image' : 'font';
    return `  <link rel="preload" href="${resource}" as="${as}" crossorigin>`;
  }).join('\n');
  
  return links;
};

// Update public/index.html with preload links
const updateIndexHtml = () => {
  const indexPath = path.join(__dirname, '../public/index.html');
  let html = fs.readFileSync(indexPath, 'utf8');
  
  const preloadLinks = generatePreloadLinks();
  const headEndIndex = html.indexOf('</head>');
  
  if (headEndIndex !== -1) {
    html = html.slice(0, headEndIndex) + '\n' + preloadLinks + '\n' + html.slice(headEndIndex);
    fs.writeFileSync(indexPath, html);
    console.log('✅ Preload links added to index.html');
  }
};

// Run the preload script
updateIndexHtml();
