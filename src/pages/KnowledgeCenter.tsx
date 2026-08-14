import { useState } from "react";
import SEO from "../components/SEO";
import { motion } from "framer-motion";
import {
  Layers, FileText, Globe, TrendingUp, Users, Bookmark, User,
  Headset, Award, Settings, Truck, Handshake, UserCheck, Building2,
  Clock, Mail, Shield, Sparkles,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5 },
};

const slideFrom = (dir:any) => ({
  initial: { opacity: 0, x: dir === "left" ? -40 : 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
});

const topicPills = [
  "Titanium Dioxide (TiO₂)",
  "Performance Additives",
  "Application Insights",
  "Sourcing & Logistics",
];

const heroStats = [
  { Icon: FileText, value: "2,500+", label: "Trade Resources", color: "text-accent" },
  { Icon: Globe, value: "150+", label: "Countries Covered", color: "text-success" },
  { Icon: TrendingUp, value: "Daily", label: "Market Updates", color: "text-warning" },
  { Icon: Users, value: "50K+", label: "Active Learners", color: "text-primary" },
];

const featuredArticles = [
  {
    image: "/assets/img/knowledge/tio2-coatings.png",
    alt: "Titanium Dioxide used in coatings applications",
    badges: [{ label: "Guide", className: "bg-accent text-white" }, { label: "Key Resource", className: "bg-golden-opportunity text-white" }],
    title: "Selecting the Right Titanium Dioxide for Coatings",
    excerpt: "An application-focused guide to choosing the correct TiO₂ grade based on opacity, dispersion, durability, and end-use performance in decorative and industrial coatings.",
    date: "January 2026",
    readTime: "6 min read",
  },
  {
    image: "/assets/img/knowledge/market-overview.png",
    alt: "Global additives market analysis",
    badges: [{ label: "Report", className: "bg-accent text-white" }, { label: "Key Resource", className: "bg-golden-opportunity text-white" }],
    title: "Global TiO₂ & Additives Market Overview",
    excerpt: "Market insights covering global supply trends, sourcing considerations, and pricing dynamics for Titanium Dioxide and key performance additives.",
    date: "December 2025",
    readTime: "8 min read",
  },
  {
    image: "/assets/img/knowledge/plastics-polymers.png",
    alt: "Additives used in plastics manufacturing",
    badges: [{ label: "Application Note", className: "bg-accent text-white" }],
    title: "Performance Additives for Plastics & Polymers",
    excerpt: "Overview of functional additives used in polymer processing, focusing on dispersion, consistency, and processing efficiency.",
    date: "November 2025",
    readTime: "Technical read",
  },
];

const resourceLibrary = [
  {
    image: "/assets/img/knowledge/tio2-grades.png",
    alt: "Titanium Dioxide grades and applications",
    category: "Titanium Dioxide",
    title: "Understanding Titanium Dioxide Grades and Performance Parameters",
    excerpt: "A practical overview of different TiO₂ grades, including rutile and anatase types, with guidance on opacity, brightness, dispersion, and durability across applications.",
    tag: "Product & Applications",
  },
  {
    image: "/assets/img/knowledge/paints-coatings.png",
    alt: "Paints and coatings application process",
    category: "Paints & Coatings",
    title: "Role of Performance Additives in Paints and Coatings",
    excerpt: "Explores how dispersants, rheology modifiers, and functional additives influence application properties, stability, and final coating performance.",
    tag: "Coatings Applications",
  },
  {
    image: "/assets/img/knowledge/plastics-processing.png",
    alt: "Plastics processing and compounding",
    category: "Plastics & Polymers",
    title: "Functional Additives for Plastics Processing and Performance",
    excerpt: "An application-focused note on additives used in plastics and polymers to improve processing efficiency, impact strength, surface finish, and consistency.",
    tag: "Plastics Applications",
  },
  {
    image: "/assets/img/knowledge/inks-printing.png",
    alt: "Inks and printing operations",
    category: "Inks & Printing",
    title: "Additive Selection for Inks and Printing Applications",
    excerpt: "Guidance on selecting dispersants, wetting agents, and functional additives for improved print quality, stability, and pigment performance.",
    tag: "Inks & Printing Applications",
  },
  {
    image: "/assets/img/knowledge/paper-packaging.png",
    alt: "Paper and packaging production process",
    category: "Paper & Packaging",
    title: "Performance Additives in Paper and Packaging Applications",
    excerpt: "Overview of functional additives used in paper and packaging to enhance brightness, printability, strength, and process efficiency.",
    tag: "Paper & Packaging Applications",
  },
];

const capabilityModules = [
  { Icon: Headset, title: "24/7 Customer & Technical Support", desc: "Round-the-clock assistance for order tracking, technical queries, application guidance, and urgent sourcing requirements to ensure uninterrupted operations." },
  { Icon: Award, title: "High-Grade & Consistent Materials", desc: "Supply of high-quality Titanium Dioxide and performance additives sourced directly from trusted international manufacturers for consistent batch-to-batch performance." },
  { Icon: Globe, title: "Transparent & Import-Driven Sourcing", desc: "Fully import-driven sourcing model with clear documentation, traceability, and transparent pricing—eliminating unnecessary intermediaries." },
  { Icon: Settings, title: "Application-Led Technical Expertise", desc: "Application-focused support to help customers select the right TiO₂ grades and additives for paints, plastics, inks, paper, and allied industries." },
  { Icon: Truck, title: "Reliable Logistics & Supply Planning", desc: "Structured logistics, forecasting, and inventory planning to ensure dependable availability and reduced supply chain uncertainty." },
  { Icon: Handshake, title: "Long-Term Partnership Approach", desc: "Focused on building lasting customer relationships through consistency, reliability, and commitment rather than transactional trading." },
];

const leadershipNotes = [
  {
    role: "Message from the CEO",
    quote: "At Cresco Global, our focus remains on building trust through transparent sourcing, consistent quality, and long-term partnerships. We are committed to simplifying India's niche additives sourcing by staying import-driven, process-oriented, and customer-centric.",
  },
  {
    role: "Note from the CTO",
    quote: "Our technical approach is application-led. By deeply understanding Titanium Dioxide grades and functional additives, we help customers achieve predictable performance across paints, plastics, inks, paper, and allied applications.",
  },
  {
    role: "Note from the CMO",
    quote: "Cresco Global is positioned as a focused additives partner rather than a general trader. Our messaging reflects reliability, sourcing integrity, and clarity—values that resonate strongly with global manufacturers and Indian customers alike.",
  },
  {
    role: "Note from the Director",
    quote: "Our operations are built around structured logistics, dependable supply planning, and strong supplier relationships. This ensures cost efficiency, stable availability, and reduced risk for our customers.",
  },
];

const newsletterInterests = [
  { Icon: TrendingUp, label: "Market Insights" },
  { Icon: Shield, label: "Regulatory Updates" },
  { Icon: Sparkles, label: "Trade Opportunities" },
  { Icon: Award, label: "Best Practices" },
];

export default function KnowledgeCenter() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (label: string) => {
    setSelectedInterests((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  return (
    <>
      <SEO title="Chemical Additives Knowledge Center | Cresco Global" description="Explore technical guides and sourcing insights for titanium dioxide and performance additives used in paints, plastics, inks, paper and coatings." canonical="/knowledge-center" />

      {/* ===================== HERO ===================== */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-golden-opportunity rounded-full filter blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              {...fadeUp}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8"
            >
              <Layers size={20} className="text-white" />
              <span className="text-white text-sm md:text-base font-medium">
                Cresco Global Knowledge Center
              </span>
            </motion.div>
            <motion.h1
              {...fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 font-headline"
            >
              Insights That Power Reliable Sourcing
            </motion.h1>
            <motion.p
              {...fadeUp}
              className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto"
            >
              Explore technical insights, application knowledge, and sourcing expertise
              around Titanium Dioxide and performance additives—built to support
              consistent quality and dependable supply.
            </motion.p>
            <motion.div {...fadeUp} className="mt-6 md:mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
              {topicPills.map((label) => (
                <button
                  key={label}
                  className="px-4 md:px-6 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full text-sm md:text-base transition-colors"
                >
                  {label}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== STATS BAR ===================== */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {heroStats.map(({ Icon, value, label, color }) => (
              <motion.div key={label} {...fadeUp} className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-muted mb-3 md:mb-4 ${color}`}>
                  <Icon size={24} className="md:w-8 md:h-8" />
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1 md:mb-2 font-headline">
                  {value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TECHNICAL RESOURCES & INSIGHTS ===================== */}
      <section className="bg-background py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="flex items-center justify-between mb-8 md:mb-10 lg:mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 font-headline">
                Technical Resources &amp; Insights
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Application guidance, product knowledge, and sourcing insights across additives
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredArticles.map((a) => (
              <motion.article
                key={a.title}
                {...fadeUp}
                className="bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    {a.badges.map((b) => (
                      <span
                        key={b.label}
                        className={`px-3 py-1 rounded-full text-xs md:text-sm font-semibold ${b.className}`}
                      >
                        {b.label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors font-headline">
                    {a.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-2">
                    {a.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground pt-4 border-t border-border">
                    <span>{a.date}</span>
                    <span>{a.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== RESOURCE LIBRARY ===================== */}
      <section className="bg-muted py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 font-headline">
              Resource Library
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Comprehensive collection of trade intelligence and educational materials
            </p>
          </motion.div>

          <div className="space-y-4 md:space-y-6">
            {resourceLibrary.map((r) => (
              <motion.article
                key={r.title}
                {...fadeUp}
                className="bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="relative w-full lg:w-80 h-48 lg:h-auto flex-shrink-0 overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white">
                        {r.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 cursor-pointer group-hover:text-primary transition-colors font-headline">
                          {r.title}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-2">
                          {r.excerpt}
                        </p>
                      </div>
                      <button className="ml-4 p-2 rounded-lg hover:bg-muted transition-colors flex-shrink-0">
                        <Bookmark size={20} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          <User size={20} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">
                            Cresco Technical Team
                          </div>
                          <div className="text-xs text-muted-foreground">{r.tag}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== KNOWLEDGE & CAPABILITY MODULES ===================== */}
      <section className="bg-background py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 font-headline">
              Knowledge &amp; Capability Modules
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Practical insights built around our sourcing philosophy, technical expertise,
              and customer-first approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {capabilityModules.map(({ Icon, title, desc }, i) => (
              <motion.article
                key={title}
                {...slideFrom(i % 2 === 0 ? "left" : "right")}
                className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 md:mb-6">
                  <Icon size={28} className="md:w-10 md:h-10" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 font-headline">
                  {title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">{desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== LEADERSHIP INSIGHTS ===================== */}
      <section className="bg-card py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 font-headline">
              Leadership Insights
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Perspectives from our leadership team on sourcing, quality, and long-term
              partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {leadershipNotes.map(({ role, quote }, i) => (
              <motion.article
                key={role}
                {...slideFrom(i % 2 === 0 ? "left" : "right")}
                className="bg-background rounded-xl md:rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer border-l-4 border-primary"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary">
                      <UserCheck size={24} />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs md:text-sm font-semibold bg-primary/10 text-primary">
                      Leadership Note
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    January 2026
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 font-headline">
                  {role}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-3">
                  {quote}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Building2 size={16} />
                    <span>Cresco Global</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock size={16} />
                    <span>2 min read</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== NEWSLETTER SUBSCRIBE ===================== */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-8 md:mb-10 lg:mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 mb-6">
              <Mail size={20} className="text-white" />
              <span className="text-white text-sm md:text-base font-medium">Stay Informed</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 font-headline">
              Subscribe to Trade Intelligence Updates
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              Get personalized insights, regulatory alerts, and market opportunities
              delivered to your inbox
            </p>
          </motion.div>

          <motion.form
            {...fadeUp}
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-elevated"
          >
            <div className="mb-6 md:mb-8">
              <label className="block text-sm md:text-base font-medium text-foreground mb-3">
                Select Your Interests
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {newsletterInterests?.map(({ Icon, label }: { Icon: React.ElementType; label: string }) => {
                  const active = selectedInterests.includes(label);
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() => toggleInterest(label)}
                      className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                        active
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border hover:border-primary/50 text-foreground"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          active ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      <span className="text-sm md:text-base font-medium">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mb-6 md:mb-8">
              <label className="block text-sm md:text-base font-medium text-foreground mb-3">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your.email@company.com"
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm md:text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors h-12 px-6"
            >
              Subscribe to Updates
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
