import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import KnowledgeCenter from "./pages/KnowledgeCenter";
import ContactUs from "./pages/ContactUs";
import "./index.css";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <main className="pt-16 lg:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/homepage" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/success-stories" element={<AboutUs />} />
            <Route path="/knowledge-center" element={<KnowledgeCenter />} />
            <Route path="/services" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;