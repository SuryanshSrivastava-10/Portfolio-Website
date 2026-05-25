// Preload critical resources for better performance
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const criticalResources = [
  '/Suryansh_Profile_Pic.png',
  '/favicon.ico',
];

const generatePreloadLinks = () => {
  return criticalResources
    .map((resource) => {
      const ext = path.extname(resource);
      const as = ext === '.png' || ext === '.jpg' || ext === '.jpeg' ? 'image' : 'font';
      return `  <link rel="preload" href="${resource}" as="${as}" crossorigin>`;
    })
    .join('\n');
};

const updateIndexHtml = () => {
  const indexPath = path.join(__dirname, '../index.html');
  let html = fs.readFileSync(indexPath, 'utf8');

  const preloadLinks = generatePreloadLinks();
  const marker = '<!-- preload-links -->';

  if (html.includes(marker)) {
    html = html.replace(
      new RegExp(`\\s*${marker}[\\s\\S]*?${marker}`, 'm'),
      `\n${preloadLinks}\n  ${marker}`
    );
  } else {
    const headEndIndex = html.indexOf('</head>');
    if (headEndIndex !== -1) {
      html =
        html.slice(0, headEndIndex) +
        `\n  ${marker}\n${preloadLinks}\n  ${marker}\n` +
        html.slice(headEndIndex);
    }
  }

  fs.writeFileSync(indexPath, html);
  console.log('Preload links added to index.html');
};

updateIndexHtml();
