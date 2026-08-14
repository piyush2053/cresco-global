import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const navLinks = [
  { label: "Home", path: "/homepage" },
  { label: "About Us", path: "/success-stories" },
  { label: "Products", path: "/products" },
  { label: "Knowledge Center", path: "/knowledge-center" },
  { label: "Contact Us", path: "/services" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <header className="header shadow-elevated">
        <div className="header-container">
          <div className="header-content">
            <Link to="/homepage" className="header-logo">
              <div>
                <img
                  src="/assets/img/logo.png"
                  alt="Cresco Global chemical additives supplier logo"
                  loading="eager"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="header-logo-text">CRESCO</div>
            </Link>

            <nav className="header-nav">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`header-nav-link ${
                    pathname === link.path ? "active" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="header-cta">
              <Link to="/partner-portal" className="cta-button cta-button-secondary">
                Send Enquiry
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu button */}
      <button
        className="mobile-menu-button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? "open" : "closed"}`}>
        <div className="mobile-menu-content">
          <nav className="mobile-menu-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="mobile-menu-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/partner-portal"
              className="mobile-menu-link"
              onClick={() => setMenuOpen(false)}
            >
              Partner Portal
            </Link>
          </nav>

          <div className="mt-8 px-4 space-y-3">
            <Link to="/partner-portal" onClick={() => setMenuOpen(false)}>
              <button className="w-full cta-button cta-button-primary py-3">
                Send Enquiry
              </button>
            </Link>
          </div>

          <div className="mt-8 px-4 pt-6 border-t border-border">
            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="mailto:office@cresco.co.in"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
