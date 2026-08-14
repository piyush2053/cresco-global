import { renderToString } from "react-dom/server";
import { StaticRouter, Routes, Route } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import TermsOfService from "./pages/TermsOfService";
import AboutUs from "./pages/AboutUs";
import KnowledgeCenter from "./pages/KnowledgeCenter";
import ContactUs from "./pages/ContactUs";
import PartnerPortal from "./pages/PartnerPortal";

/* eslint-disable react-refresh/only-export-components */

function ServerApp() {
  return <><Header /><main className="pt-16 lg:pt-20"><Routes>
    <Route path="/" element={<Home />} /><Route path="/homepage" element={<Home />} />
    <Route path="/products" element={<Products />} /><Route path="/products/:slug" element={<ProductDetail />} />
    <Route path="/terms" element={<TermsOfService />} /><Route path="/success-stories" element={<AboutUs />} />
    <Route path="/knowledge-center" element={<KnowledgeCenter />} /><Route path="/services" element={<ContactUs />} />
    <Route path="/partner-portal" element={<PartnerPortal />} />
  </Routes></main><Footer /></>;
}

export async function render(url) {
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}><ServerApp /></StaticRouter>
    </HelmetProvider>,
  );
  return { html, helmet: helmetContext.helmet };
}
