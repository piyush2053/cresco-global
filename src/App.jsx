import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./index.css";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const KnowledgeCenter = lazy(() => import("./pages/KnowledgeCenter"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const PartnerPortal = lazy(() => import("./pages/PartnerPortal"));

function App() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <Suspense fallback={<div className="min-h-screen" aria-label="Loading page" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/homepage" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/success-stories" element={<AboutUs />} />
            <Route path="/knowledge-center" element={<KnowledgeCenter />} />
            <Route path="/services" element={<ContactUs />} />
            <Route path="/partner-portal" element={<PartnerPortal />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
