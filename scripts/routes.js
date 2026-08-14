import fs from "node:fs";

export const siteUrl = "https://crescoglobal.co.in";
export const staticRoutes = ["/", "/products", "/success-stories", "/knowledge-center", "/services", "/partner-portal", "/terms"];

export function slugify(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function getProductRoutes() {
  const products = JSON.parse(fs.readFileSync(new URL("../public/data/products.json", import.meta.url), "utf8"));
  const counts = products.reduce((result, product) => {
    const slug = slugify(product.grade); result[slug] = (result[slug] || 0) + 1; return result;
  }, {});
  const bases = products.map((product) => {
    const grade = slugify(product.grade);
    return counts[grade] > 1 ? `${grade}-${slugify(product.application)}` : grade;
  });
  const baseCounts = bases.reduce((result, base) => { result[base] = (result[base] || 0) + 1; return result; }, {});
  return products.map((product, index) => `/products/${baseCounts[bases[index]] > 1 ? `${bases[index]}-${product.id}` : bases[index]}`);
}

export const getAllRoutes = () => [...staticRoutes, ...getProductRoutes()];
