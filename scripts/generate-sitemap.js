import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = process.env.VITE_SITE_URL || 'https://heydayrealty.in';
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const SITEMAP_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');

// Define all static routes
const routes = [
  { path: '', priority: 1.0, changefreq: 'weekly' },
  { path: 'services', priority: 0.9, changefreq: 'monthly' },
  { path: 'projects', priority: 0.9, changefreq: 'daily' },
  { path: 'about', priority: 0.8, changefreq: 'monthly' },
  { path: 'contact', priority: 0.7, changefreq: 'monthly' },
  { path: 'media', priority: 0.6, changefreq: 'weekly' },
  { path: 'team', priority: 0.6, changefreq: 'monthly' },
];

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const now = new Date();
  return now.toISOString().split('T')[0];
};

// Generate XML sitemap
const generateSitemap = () => {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';
  const urlsetClose = '</urlset>';
  
  const currentDate = getCurrentDate();
  
  const urls = routes.map(route => {
    const loc = route.path ? `${SITE_URL}/${route.path}` : SITE_URL;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');
  
  const sitemap = xmlHeader + urlsetOpen + urls + '\n' + urlsetClose + '\n';
  
  return sitemap;
};

// Write sitemap to file
const writeSitemap = () => {
  try {
    const sitemap = generateSitemap();
    fs.writeFileSync(SITEMAP_FILE, sitemap, 'utf8');
    console.log('✅ Sitemap generated successfully at:', SITEMAP_FILE);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

// Run the generator
writeSitemap();
