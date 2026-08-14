import SEO from "../components/SEO";
import { SITE_URL } from "../data/products";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Sparkles, Phone, MessageCircle, Shield, Lock, Award,
  TrendingUp, Users, Truck, Globe, Layers, PaintRoller, Pen,
  Package, Pill, Database, ArrowRight, BarChart3, Bell,
  DollarSign, Headphones, Rocket, Clock,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4 },
};

const expertise = [
  { title: "Plastics & Polymers", Icon: Layers, gradient: "from-green-500 to-green-600", path: "/products" },
  { title: "Paints & Coatings", Icon: PaintRoller, gradient: "from-purple-500 to-purple-600", path: "/products" },
  { title: "Inks & Printing", Icon: Pen, gradient: "from-orange-500 to-orange-600", path: "/products" },
  { title: "Paper & Packaging", Icon: Package, gradient: "from-teal-500 to-teal-600", path: "/products" },
  { title: "Pharma", Icon: Pill, gradient: "from-pink-500 to-pink-600", path: "/products" },
  { title: "Others", Icon: Database, gradient: "from-blue-500 to-blue-600", path: "/partner-portal" },
];

const heroStats = [
  { icon: TrendingUp, value: "500+", label: "Active Buyers", trend: "+12.5%" },
  { icon: Users, value: "20+", label: "Global Partners", trend: "+8.3%" },
  { icon: Truck, value: "3900 MT", label: "Deliveries", trend: "+15.7%" },
  { icon: Globe, value: "13+", label: "States", trend: "+3" },
];

const testimonials = [
  {
    badge: "Verified Client",
    badgeClass: "bg-accent",
    name: "Mayank Doshi, Masterbatch Producer",
    date: "January 2026",
    title: "Always in Stock. Always Reliable.",
    quote:
      "With Cresco, material availability is never a question. Even when the market is tight, they manage stock and keep our production running without disruption.",
  },
  {
    badge: "Trusted Partner",
    badgeClass: "bg-success",
    name: "Shubh Daga, PVC Profiles",
    date: "January 2026",
    title: "Payment Flexibility That Works",
    quote:
      "Their payment flexibility really helps our cash flow. Credit support is straightforward, no complications, and always discussed transparently.",
  },
  {
    badge: "Long-Term Customer",
    badgeClass: "bg-primary",
    name: "Pankaj Maheshwari, Pigments",
    date: "January 2026",
    title: "Purchases Made Simple",
    quote:
      "What we like most is how simple everything is — quick confirmations, smooth logistics, and no follow-ups needed once the order is placed.",
  },
];

const numbers = [
  { Icon: DollarSign, iconClass: "text-success", value: "3900 MT", label: "Trade Volume Facilitated", desc: "Total domestic trade executed till mid 2026" },
  { Icon: Users, iconClass: "text-primary", value: "500+", label: "Active Buyer Network", desc: "Manufacturers procuring regularly" },
  { Icon: Globe, iconClass: "text-accent", value: "13+", label: "States Covered", desc: "Performance additives supplied across India" },
  { Icon: Headphones, iconClass: "text-secondary", value: "24/7", label: "Support Availability", desc: "Round-the-clock customer assistance" },
];

const certifications = [
  { code: "ISO 9001", label: "Quality Management System" },
  { code: "ISO 14001", label: "Environmental Management System" },
  { code: "ISO 45001", label: "Occupational Health & Safety" },
];

const partnerLogos = [
  { src: "/assets/img/partners/partner-1.jpg", scaleClass: "scale-125" },
  { src: "/assets/img/partners/partner-2.jpg", scaleClass: "scale-150" },
  { src: "/assets/img/partners/partner-3.jpg", scaleClass: "scale-125" },
  { src: "/assets/img/partners/partner-4.png", scaleClass: "scale-100" },
  { src: "/assets/img/partners/partner-5.png", scaleClass: "scale-100" },
  { src: "/assets/img/partners/partner-6.png", scaleClass: "scale-100" },
  { src: "/assets/img/partners/partner-7.png", scaleClass: "scale-100" },
];

export default function Home() {
  const partnerTrackRef = useRef<HTMLDivElement>(null);
  const [partnerIndex, setPartnerIndex] = useState(0);
  const [partnerStep, setPartnerStep] = useState(0);
  const maxPartnerIndex = partnerLogos.length - 4;

  const showNextPartner = () => setPartnerIndex((current) => current === maxPartnerIndex ? 0 : current + 1);
  const showPreviousPartner = () => setPartnerIndex((current) => current === 0 ? maxPartnerIndex : current - 1);

  useEffect(() => {
    const updatePartnerStep = () => {
      const firstLogo = partnerTrackRef.current?.firstElementChild as HTMLElement | null;
      if (firstLogo) {
        setPartnerStep(firstLogo.offsetWidth + 24);
      }
    };

    updatePartnerStep();
    window.addEventListener("resize", updatePartnerStep);
    return () => window.removeEventListener("resize", updatePartnerStep);
  }, []);

  useEffect(() => {
    const carouselTimer = window.setInterval(showNextPartner, 2000);
    return () => window.clearInterval(carouselTimer);
  }, [maxPartnerIndex]);

  return (
    <>
      <SEO title="Chemical Additives Supplier India | Cresco Global" description="Source titanium dioxide and performance additives for paints, coatings, plastics and inks through Cresco Global's reliable India supply network." canonical="/" schema={{ "@context": "https://schema.org", "@type": "Organization", name: "Cresco Global", url: SITE_URL, logo: `${SITE_URL}/assets/img/full-logo.png`, address: { "@type": "PostalAddress", streetAddress: "79/1, Lalpur, Near Kalpataru", addressLocality: "Ujjain", addressRegion: "Madhya Pradesh", postalCode: "456010", addressCountry: "IN" }, sameAs: ["https://www.linkedin.com/company/cresco-global"] }} />

      <div className="min-h-screen bg-background">
        {/* ===================== HERO ===================== */}
        <section className="relative bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse animation-delay-300" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div {...fadeUp} className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <Sparkles size={16} className="text-white" />
                  <span className="text-white text-sm font-medium">
                    Trusted by 500+ Global Manufacturers
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Focused on Additives.{" "}
                  <span className="text-accent">Driven by Reliability.</span>
                </h1>

                <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto lg:mx-0">
                  Cresco Global is India's only fully import-driven, additives-focused
                  company, simplifying sourcing through trust and transparency.
                </p>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
                  We specialize in Titanium Dioxide (TiO₂) and performance additives
                  across paints, plastics, inks, paper, and allied industries.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="tel:+919175775763" className="w-full sm:w-auto">
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8 bg-accent hover:bg-accent/90 text-white w-full sm:w-auto">
                      <Phone size={18} className="mr-2" />
                      Call Now
                    </button>
                  </a>
                  <a
                    href="https://wa.me/919175775763?text=Hi%20I%20am%20Interested%20to%20Buy%20Tio2%20and%20Additives%20from%20Cresco%0AGrade%20-%0AQuantity%20-%0ALocation-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-accent-foreground h-11 rounded-md px-8 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 w-full sm:w-auto">
                      <MessageCircle size={18} className="mr-2" />
                      WhatsApp
                    </button>
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6">
                  <div className="flex items-center gap-2">
                    <Shield size={20} className="text-white" />
                    <span className="text-white/80 text-sm">ISO 9001 Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock size={20} className="text-white" />
                    <span className="text-white/80 text-sm">GDPR Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={20} className="text-white" />
                    <span className="text-white/80 text-sm">Industry Leader 2025</span>
                  </div>
                </div>
              </motion.div>

              <motion.div {...fadeUp} className="grid grid-cols-2 gap-4 md:gap-6">
                {heroStats.map(({ icon: Icon, value, label, trend }) => (
                  <div
                    key={label}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div className="flex items-center text-success text-xs md:text-sm font-semibold">
                        <TrendingUp size={14} />
                        <span className="ml-1">{trend}</span>
                      </div>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
                    <div className="text-xs md:text-sm text-white/70">{label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* ===================== EXPERTISE ===================== */}
        <section className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Our Expertise In
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Industry-focused additive solutions backed by global sourcing expertise.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {expertise.map(({ title, Icon, gradient, path }) => (
                <motion.div key={title} {...fadeUp}>
                  <Link
                    to={path}
                    className="group bg-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 cursor-pointer card-elevated block"
                  >
                    <div
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                    <div className="flex items-center justify-end pt-4 border-t border-border">
                      <ArrowRight
                        size={16}
                        className="text-primary group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== TESTIMONIALS ===================== */}
        <section className="py-12 md:py-16 lg:py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              {...fadeUp}
              className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-10 gap-4"
            >
              <div>
                <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                  <BarChart3 size={16} className="text-primary" />
                  <span className="text-primary text-sm font-semibold">Customer Feedbacks</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                  What Our Customers Say
                </h2>
                <p className="text-base md:text-lg text-muted-foreground">
                  Real experiences from manufacturers we work with
                </p>
              </div>
              <button className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                <span>Subscribe to Updates</span>
                <Bell size={18} />
              </button>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((t) => (
                <motion.article
                  key={t.name}
                  {...fadeUp}
                  className="relative bg-background rounded-xl border border-border hover:border-primary transition-all duration-300 card-elevated"
                >
                  <div
                    className={`absolute top-4 left-4 ${t.badgeClass} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                  >
                    {t.badge}
                  </div>
                  <div className="p-6 pt-12">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-3">
                      <span className="font-semibold text-primary">{t.name}</span>
                      <span>•</span>
                      <span>{t.date}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                      {t.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.quote}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== SUCCESS BY THE NUMBERS ===================== */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-success/10 rounded-full px-4 py-2 mb-4">
                <TrendingUp size={16} className="text-success" />
                <span className="text-success text-sm font-semibold">Proven Results</span>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-3">Success by the Numbers</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Measurable impact across sourcing, delivery, and reliability
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {numbers.map(({ Icon, iconClass, value, label, desc }) => (
                <motion.div
                  key={label}
                  {...fadeUp}
                  className="bg-card rounded-xl p-6 border border-border text-center card-elevated"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center ${iconClass}`}>
                    <Icon size={28} />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{value}</div>
                  <div className="font-semibold text-foreground mt-1">{label}</div>
                  <p className="text-sm text-muted-foreground mt-2">{desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="bg-card rounded-xl p-8 border border-border mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Certifications &amp; Compliance
                </h3>
                <p className="text-muted-foreground">
                  Adhering to global quality and safety standards
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {certifications.map((c) => (
                  <div
                    key={c.code}
                    className="bg-background rounded-lg p-4 border border-border text-center cursor-pointer hover:border-primary transition-all"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield size={24} className="text-primary" />
                    </div>
                    <div className="font-bold text-foreground">{c.code}</div>
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner brands */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground">Sourcing From Global Brands</h3>
                <p className="text-muted-foreground">Trusted partnerships across the globe</p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={showPreviousPartner}
                  aria-label="Show previous partner logos"
                  className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary bg-background text-lg font-semibold text-primary shadow-card transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground hover:shadow-elevated md:inline-flex"
                >
                  ←
                </button>
                <div className="min-w-0 flex-1 overflow-hidden">
                <motion.div
                  ref={partnerTrackRef}
                  className="flex w-full gap-6"
                  animate={{ x: -(partnerIndex * partnerStep) }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  {partnerLogos.map(({ src, scaleClass }) => (
                    <div key={src} className="flex h-24 w-1/2 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-4 transition hover:shadow-lg md:w-[calc((100%_-_4.5rem)_/_4)]">
                      <img src={src} alt="Cresco Global chemical manufacturing partner logo" loading="lazy" className={`h-12 w-full object-contain grayscale transition hover:grayscale-0 ${scaleClass}`} />
                    </div>
                  ))}
                </motion.div>
                </div>
                <button
                  type="button"
                  onClick={showNextPartner}
                  aria-label="Show next partner logos"
                  className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary bg-background text-lg font-semibold text-primary shadow-card transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground hover:shadow-elevated md:inline-flex"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== CTA BANNER ===================== */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Strengthen Your Additives Supply?
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Partner with Cresco Global for reliable sourcing, consistent quality,
                and transparent import-driven solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/919175775763?text=Hi%20I%20am%20Interested%20to%20Buy%20Tio2%20and%20Additives%20from%20Cresco%0AGrade%20-%0AQuantity%20-%0ALocation-"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8 bg-accent hover:bg-accent/90 text-white">
                    <Rocket size={18} className="mr-2" />
                    Connect with us
                  </button>
                </a>
              </div>
            </motion.div>

            <div className="text-center mt-8 flex flex-wrap items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Shield size={16} />
                <span className="text-sm">Free of cost</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span className="text-sm">Sign up anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span className="text-sm">200+ active readers</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
