import { Link } from "react-router-dom";
import { Shield, Lock, Globe } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo + tagline + socials */}
          <div className="lg:col-span-2">
            <Link to="/homepage" className="inline-flex items-center space-x-3 mb-6">
              <div className="flex justify-start" style={{ marginLeft: "-40px" }}>
                <img
                  src="/assets/img/full-logo.png"
                  alt="Cresco Global"
                  className="w-full h-15 object-contain ml-0 mr-auto"
                />
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Empowering global commerce through intelligent trade solutions.
              Connect, trade, and grow with confidence in international markets.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/crescoglobal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://www.instagram.com/cresco_global?igsh=eHprcWc0eHExdmw5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 font-headline">Platform</h3>
            <ul className="space-y-3">
              <li><Link className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300" to="/products">Products</Link></li>
              <li><Link className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300" to="/success-stories">About Us</Link></li>
              <li><Link className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300" to="/partner-portal">Client Portal</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 font-headline">Resources</h3>
            <ul className="space-y-3">
              <li><Link className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300" to="/knowledge-center">Knowledge Center</Link></li>
              <li><Link className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300" to="/support">Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 font-headline">Company</h3>
            <ul className="space-y-3">
              <li><Link className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300" to="/success-stories">About Us</Link></li>
              <li><Link className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300" to="/services">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 font-headline">Legal</h3>
            <ul className="space-y-3">
              <li><Link className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300" to="/privacy">Privacy Policy</Link></li>
              <li><Link className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300" to="/terms">Terms of Service</Link></li>
              <li><Link className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300" to="/cookies">Cookie Policy</Link></li>
              <li><Link className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300" to="/compliance">Compliance</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>© 2026 CRESCO. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield size={16} />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Lock size={16} />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-muted-foreground text-center md:text-left max-w-2xl">
              CRESCO is a registered trademark. All product names, logos, and brands
              are property of their respective owners. Trade data and market
              intelligence provided for informational purposes only.
            </p>
            <div className="flex items-center space-x-4">
              <button className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center">
                <Globe size={14} className="inline mr-1" />
                English (US)
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
