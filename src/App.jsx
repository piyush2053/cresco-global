import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
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
            {/* TODO: add /success-stories, /products, /knowledge-center,
                /services, /partner-portal, /support, /privacy, /terms,
                /cookies, /compliance once those pages are built */}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;