const PRODUCTS_API_URL =
  import.meta.env.VITE_PRODUCTS_API_URL ||
  "https://msl.rnj.mybluehost.me/api/public/products";

let cachedProducts = null;
let pendingRequest = null;

function normalizeProduct(product) {
  return {
    ...product,
    datasheet: typeof product?.datasheet === "string" && product.datasheet.trim() ? product.datasheet : null,
    sample: typeof product?.sample === "string" && product.sample.trim() ? product.sample : null,
    country: typeof product?.country === "string" ? product.country : "",
    category: typeof product?.category === "string" && product.category.trim() ? product.category : undefined,
  };
}

async function requestProducts(signal) {
  try {
    const response = await fetch(PRODUCTS_API_URL, { method: "GET", signal });
    if (!response.ok) throw new Error("bad-response");
    const payload = await response.json();
    if (!Array.isArray(payload)) throw new Error("bad-payload");

    const products = payload
      .filter((product) => product && typeof product === "object" && typeof product.slug === "string" && product.slug)
      .map(normalizeProduct);
    cachedProducts = products;
    return products;
  } catch (error) {
    if (error?.name === "AbortError") throw error;
    throw new Error("We couldn't load the product catalogue. Please check your connection and try again.", { cause: error });
  }
}

export function fetchProducts({ signal, force = false } = {}) {
  if (force) {
    cachedProducts = null;
    pendingRequest = null;
  }
  if (cachedProducts) return Promise.resolve(cachedProducts);
  if (signal) return requestProducts(signal);
  if (!pendingRequest) {
    pendingRequest = requestProducts().finally(() => {
      pendingRequest = null;
    });
  }
  return pendingRequest;
}
