import rawProducts from "../../public/data/products.json";

export const SITE_URL = "https://crescoglobal.co.in";
export const DEFAULT_IMAGE = "/assets/img/full-logo.png";
export const PRODUCT_CATEGORY = "Titanium Dioxide (TiO2)";

export function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const gradeCounts = rawProducts.reduce((counts, product) => {
  const grade = slugify(product.grade);
  counts[grade] = (counts[grade] || 0) + 1;
  return counts;
}, {});
const baseSlugCounts = rawProducts.reduce((counts, product) => {
  const grade = slugify(product.grade);
  const base = gradeCounts[grade] > 1 ? `${grade}-${slugify(product.application)}` : grade;
  counts[base] = (counts[base] || 0) + 1;
  return counts;
}, {});

export const products = rawProducts.map((product) => {
  const gradeSlug = slugify(product.grade);
  const baseSlug = gradeCounts[gradeSlug] > 1
    ? `${gradeSlug}-${slugify(product.application)}`
    : gradeSlug;
  const slug = baseSlugCounts[baseSlug] > 1 ? `${baseSlug}-${product.id}` : baseSlug;
  const category = product.category || PRODUCT_CATEGORY;
  const process = product.method || "commercial";
  const origin = product.country || "international";
  const application = product.application || "industrial applications";
  const name = `${product.grade} ${process} Titanium Dioxide`;
  const intro = `${product.grade} is a ${process.toLowerCase()} titanium dioxide grade supplied in India by Cresco Global for ${application.toLowerCase()}. It is sourced from ${product.company}, ${origin}, for manufacturers seeking consistent pigment selection and dependable commercial supply.`;
  const body = [
    `Designed for ${application.toLowerCase()}, ${product.grade} helps formulators evaluate the balance of opacity, whiteness, dispersion and processing behaviour required in production. As application conditions vary by resin, binder, equipment and end-use target, our team supports grade selection against the customer's formulation and performance priorities.`,
    `Cresco Global coordinates enquiries, technical-document access, samples and supply discussions for buyers across India. Customers can use the published datasheet as the starting point for technical review, then confirm packing, lead time, minimum order quantity and current availability with our commercial team. This approach helps procurement and technical teams assess ${product.grade} with the information relevant to their plant rather than relying on a generic pigment comparison.`,
    `For a ${product.grade} quotation, share the intended ${application.toLowerCase()} use, monthly requirement and delivery location. We will respond with the available supply position and documentation. Product suitability should always be validated through customer trials under actual manufacturing conditions before full-scale adoption.`,
  ];

  return { ...product, category, slug, name, intro, body };
});

export const productRoutes = products.map(({ slug }) => `/products/${slug}`);
export const getProductBySlug = (slug) => products.find((product) => product.slug === slug);
