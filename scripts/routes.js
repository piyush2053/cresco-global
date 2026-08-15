export const siteUrl = "https://crescoglobal.co.in";
export const staticRoutes = ["/", "/products", "/success-stories", "/knowledge-center", "/services", "/partner-portal", "/terms"];

// API-owned product detail URLs remain client-routable through /products/:slug.
// Excluding them makes builds independent of API availability and stale static JSON.
export const getAllRoutes = () => [...staticRoutes];
