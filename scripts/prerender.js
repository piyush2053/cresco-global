import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { getAllRoutes } from "./routes.js";

const template = fs.readFileSync("dist/index.html", "utf8").replace(/\s*<title>Cresco Global<\/title>/, "");
const { render } = await import(pathToFileURL(path.resolve(".prerender/entry-server.js")));

for (const route of getAllRoutes()) {
  const rendered = await render(route);
  let html = rendered.html;
  const headTags = [];
  html = html.replace(/<(?:meta|link)\b[^>]*\/?\s*>|<title\b[^>]*>[\s\S]*?<\/title>/gi, (tag) => { headTags.push(tag); return ""; });
  html = html.replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, (tag) => { headTags.push(tag); return ""; });
  const output = template.replace("</head>", `${headTags.join("\n")}\n</head>`).replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const filename = route === "/" ? "dist/index.html" : path.join("dist", route.slice(1), "index.html");
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  fs.writeFileSync(filename, output);
}
fs.rmSync(".prerender", { recursive: true, force: true });
console.log(`Prerendered ${getAllRoutes().length} HTML routes.`);
