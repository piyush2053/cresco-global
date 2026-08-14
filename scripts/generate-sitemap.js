import fs from "node:fs";
import path from "node:path";
import { getAllRoutes, siteUrl } from "./routes.js";

const today = new Date().toISOString().slice(0, 10);
const urls = getAllRoutes().map((route) => {
  const product = route.startsWith("/products/");
  const priority = route === "/" ? "1.0" : product ? "0.8" : "0.7";
  return `  <url><loc>${siteUrl}${route}</loc><lastmod>${today}</lastmod><changefreq>${product ? "monthly" : "weekly"}</changefreq><priority>${priority}</priority></url>`;
}).join("\n");
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
for (const directory of ["public", "dist"].filter(fs.existsSync)) fs.writeFileSync(path.join(directory, "sitemap.xml"), xml);
console.log(`Generated sitemap with ${getAllRoutes().length} routes.`);
