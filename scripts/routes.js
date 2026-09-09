export const siteUrl = "https://crescoglobal.co.in";
export const staticRoutes = ["/", "/products", "/success-stories", "/knowledge-center", "/services", "/partner-portal", "/terms"];

// By default the product catalogue is provided by an API. For prerendering we
// try to fetch product slugs and include them as static routes so direct links
// (open in new tab) won't 404 on static hosts. If the API is unavailable we
// fall back to only static routes.
const DEFAULT_PRODUCTS_API = "https://msl.rnj.mybluehost.me/api/public/products";
const PRODUCTS_API_URL = process.env.VITE_PRODUCTS_API_URL || process.env.PRODUCTS_API_URL || DEFAULT_PRODUCTS_API;

export async function getAllRoutes() {
	try {
		const res = await fetch(PRODUCTS_API_URL, { method: "GET" });
		if (!res.ok) throw new Error("bad-response");
		const payload = await res.json();
		if (!Array.isArray(payload)) throw new Error("bad-payload");
		const productRoutes = payload
			.filter((p) => p && typeof p === "object" && typeof p.slug === "string" && p.slug)
			.map((p) => `/products/${p.slug}`);
		return [...staticRoutes, ...productRoutes];
	} catch (err) {
		// If anything goes wrong, return only static routes so the build can still succeed.
		return [...staticRoutes];
	}
}
