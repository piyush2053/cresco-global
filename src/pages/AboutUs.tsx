import SEO from "../components/SEO";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Rocket, Phone, MessageCircle, Wrench, Globe, ShieldCheck, Cable,
  CircleDollarSign, UserCheck, Package, Handshake, Import,
  TrendingUp, Check,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

const slideFrom = (dir:any) => ({
  initial: { opacity: 0, x: dir === "left" ? -80 : 80 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
});

const strengths = [
  {
    Icon: Wrench,
    title: "Specialized Product Expertise",
    desc: "Deep industry knowledge in Titanium Dioxide (TiO₂) and performance additives enables us to deliver precisely matched solutions for customer requirements.",
  },
  {
    Icon: Globe,
    title: "Direct Global Sourcing",
    desc: "We source directly from international manufacturers, eliminating unnecessary intermediaries to ensure competitive pricing and consistent quality.",
  },
  {
    Icon: ShieldCheck,
    title: "Quality Consistency",
    desc: "Strict supplier selection and quality checks ensure uniform product performance across every shipment.",
  },
  {
    Icon: Cable,
    title: "Reliable Supply Chain",
    desc: "A robust global supply network allows us to maintain uninterrupted supply and meet demanding delivery timelines.",
  },
  {
    Icon: CircleDollarSign,
    title: "Cost Efficiency",
    desc: "Optimized logistics and long-term supplier relationships help reduce costs while maintaining premium product standards.",
  },
  {
    Icon: UserCheck,
    title: "Customer-Centric Approach",
    desc: "We work closely with clients to understand application needs and provide dependable, tailored supply solutions.",
  },
];

const visionCards = [
  {
    image: "/assets/img/about/trusted-global-partner.png",
    alt: "Trusted Global Additives Partner",
    Icon: Handshake,
    gradient: "from-blue-500 to-blue-600",
    title: "Trusted Global Additives Partner",
    desc: "To build long-term partnerships by delivering consistent, high-performance additives through transparent sourcing and dependable global relationships.",
    checks: ["Transparent sourcing", "Long-term partnerships", "Performance consistency", "Risk Mitigation"],
    reverse: false,
  },
  {
    image: "/assets/img/about/import-driven-excellence.png",
    alt: "Import-Driven Supply Excellence",
    Icon: Import,
    gradient: "from-green-500 to-green-600",
    title: "Import-Driven Supply Excellence",
    desc: "To create a streamlined, import-focused supply model that ensures reliable availability, cost efficiency, and uninterrupted supply for Indian manufacturers.",
    checks: ["Direct manufacturer sourcing", "Structured supply planning", "Cost efficiency", "Reduced dependency risk"],
    reverse: true,
  },
  {
    image: "/assets/img/about/application-led-growth.png",
    alt: "Application-Led Industry Growth",
    Icon: TrendingUp,
    gradient: "from-purple-500 to-purple-600",
    title: "Application-Led Industry Growth",
    desc: "To support customer success by aligning additive solutions with real-world applications across paints, plastics, inks, paper, and pharma industries.",
    checks: ["Application expertise", "Optimized Routing", "Industry-specific solutions", "Customer-focused innovation"],
    reverse: false,
  },
];

export default function AboutUs() {
  return (
    <>
      <SEO title="About Our Chemical Supply Network | Cresco Global" description="Learn how Cresco Global sources titanium dioxide and performance additives for Indian manufacturers with technical focus and dependable service." canonical="/success-stories" />

      {/* ===================== HERO ===================== */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Focused on Additives. Driven by Reliability.
            <br />
            <span className="text-accent">Strengthen Your Additives Supply.</span>
          </h1>
          <p className="text-white/90 max-w-3xl mx-auto mb-8">
            Cresco Global simplifies sourcing through direct manufacturer relationships
            and structured import-driven processes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/services" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-accent-foreground h-11 rounded-md px-8 bg-white/10 text-white w-full border-white/20 hover:bg-white/20">
                <Rocket size={18} className="mr-2" />
                Connect with us
              </button>
            </Link>
            <a href="tel:+919175775763" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8 bg-accent w-full hover:bg-accent/90 text-white">
                <Phone size={18} className="mr-2" />
                Call Now
              </button>
            </a>
            <a
              href="https://wa.me/919175775763"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-accent-foreground h-11 rounded-md px-8 bg-white/10 text-white border-white/20 hover:bg-white/20 w-full">
                <MessageCircle size={18} className="mr-2" />
                WhatsApp
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT US GRADIENT PANEL ===================== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 md:p-8 lg:p-10 text-white">
            <motion.div {...fadeUp} className="text-center mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">About Us</h2>
              <p className="text-sm md:text-base text-white/80 max-w-4xl mx-auto">
                We specialize in the global sourcing and supply of Titanium Dioxide (TiO₂)
                and performance &amp; functional additives, serving diverse industrial
                applications with a strong commitment to quality, reliability, and efficiency.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {strengths.map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  {...slideFrom(i % 2 === 0 ? "left" : "right")}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  </div>
                  <p className="text-base md:text-lg font-semibold text-white/90 mb-2">{title}</p>
                  <p className="text-sm text-white/70">{desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeUp} className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                  <p className="text-sm text-white/80">Last updated: Jul 28, 2026, 11:52 AM</p>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white/80">
                  <TrendingUp size={16} />
                  <span>Our Focus &amp; Strengths</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== VISION / WHAT MAKES US DIFFERENT ===================== */}
      <section className="py-12 md:py-16 lg:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Package size={16} className="text-primary" />
              <span className="text-primary text-sm font-semibold">Our Vision</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What makes us different.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              To become India's most trusted additives partner through transparent
              sourcing and long-term relationships.
            </p>
          </motion.div>

          <div className="space-y-8 md:space-y-12">
            {visionCards.map(({ image, alt, Icon, gradient, title, desc, checks, reverse }) => (
              <motion.div
                key={title}
                {...slideFrom(reverse ? "right" : "left")}
                className={`bg-background rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 card-elevated flex flex-col lg:flex ${
                  reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                  <img src={image} alt={alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="lg:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6`}
                  >
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
                  <p className="text-base text-muted-foreground mb-6">{desc}</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {checks.map((c) => (
                      <div key={c} className="flex items-center space-x-2">
                        <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                          <Check size={12} className="text-success" />
                        </div>
                        <span className="text-sm">{c}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://wa.me/919175775763"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        WhatsApp
                        <Phone size={16} className="ml-2" />
                      </button>
                    </a>
                    <Link to="/services">
                      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                        <MessageCircle size={16} className="mr-2" />
                        Connect with us.
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
