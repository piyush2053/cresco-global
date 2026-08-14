import SEO from "../components/SEO";
import { SITE_URL } from "../data/products";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Sparkles, Phone, MessageCircle, Shield, Lock, Award,
  TrendingUp, Users, Truck, Globe, Layers, PaintRoller, Pen,
  Package, Pill, Database, ArrowRight, BarChart3, Bell,
  DollarSign, Headphones, Rocket, Clock, Anchor, Target,
  CheckCircle2, PiggyBank, HeartHandshake, Navigation, Ship,
  ShieldCheck,
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

const aboutPoints = [
  {
    title: "Specialized Product Expertise",
    Icon: Target,
    desc: "Deep industry knowledge in Titanium Dioxide (TiO₂) and performance additives enables us to deliver precisely matched solutions for customer requirements.",
  },
  {
    title: "Direct Global Sourcing",
    Icon: Globe,
    desc: "We source directly from international manufacturers, eliminating unnecessary intermediaries to ensure competitive pricing and consistent quality.",
  },
  {
    title: "Quality Consistency",
    Icon: CheckCircle2,
    desc: "Strict supplier selection and quality checks ensure uniform product performance across every shipment.",
  },
  {
    title: "Reliable Supply Chain",
    Icon: Truck,
    desc: "A robust global supply network allows us to maintain uninterrupted supply and meet demanding delivery timelines.",
  },
  {
    title: "Cost Efficiency",
    Icon: PiggyBank,
    desc: "Optimized logistics and long-term supplier relationships help reduce costs while maintaining premium product standards.",
  },
  {
    title: "Customer-Centric Approach",
    Icon: HeartHandshake,
    desc: "We work closely with clients to understand application needs and provide dependable, tailored supply solutions.",
  },
];

/* ---------- Global supply route: waypoints shared by the line + the ship, no real place names ---------- */
const routeWaypoints = [
  { x: 60, y: 140 },
  { x: 260, y: 90 },
  { x: 480, y: 150 },
  { x: 700, y: 90 },
  { x: 920, y: 150 },
  { x: 1140, y: 110 },
];
const routeX = routeWaypoints.map((p) => p.x);
const routeY = routeWaypoints.map((p) => p.y);
const checkpoint = routeWaypoints[3];

// Smooth flowing curve through the waypoints (mid-x control points avoid a jagged zig-zag)
function buildSmoothPath(points:any) {
  return points.reduce((d:any, point:any, i:any) => {
    if (i === 0) return `M${point.x},${point.y}`;
    const prev = points[i - 1];
    const midX = (prev.x + point.x) / 2;
    return `${d} C${midX},${prev.y} ${midX},${point.y} ${point.x},${point.y}`;
  }, "");
}
const routePathD = buildSmoothPath(routeWaypoints);

const originPct = { left: `${(routeWaypoints[0].x / 1200) * 100}%`, top: `${(routeWaypoints[0].y / 240) * 100}%` };
const destPct = { left: `${(routeWaypoints[5].x / 1200) * 100}%`, top: `${(routeWaypoints[5].y / 240) * 100}%` };

const routeHighlights = [
  { Icon: Globe, label: "Direct global sourcing, no intermediaries" },
  { Icon: ShieldCheck, label: "Quality verified on every shipment" },
  { Icon: Truck, label: "Reliable, on-time delivery" },
];

function ShipRouteSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(46,89,132,.1),transparent_42%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="relative mx-auto mb-10 max-w-4xl text-center md:mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 shadow-sm">
            <Navigation size={16} className="text-accent" />
            <span className="text-sm font-semibold uppercase tracking-[.14em] text-accent">Import-Driven Supply Network</span>
          </div>
          <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            From Global Ports to<br className="hidden sm:block" /> <span className="text-primary">Your Production Line</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            We source directly from international manufacturers and manage every step of
            the journey ourselves, so material reaches your plant reliably — with no
            unnecessary intermediaries in between.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#062f3a] via-primary to-[#0b3046] p-4 shadow-[0_30px_80px_rgba(8,59,73,.25)] md:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-secondary/25 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-accent/15 blur-[90px]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
              backgroundSize: "36px 36px",
              maskImage: "linear-gradient(to bottom, black, transparent 95%)",
            }}
          />

          <div className="relative mb-6 flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-white/40">Supply visibility</p>
              <p className="mt-1 text-sm font-semibold text-white">Manufacturer-to-plant logistics</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.16em] text-emerald-200">
              <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" /><span className="relative h-2 w-2 rounded-full bg-emerald-300" /></span>
              Network active
            </div>
          </div>

          {/* Origin / Destination labels — positioned in % so they always line up with the SVG */}
          <div
            className="absolute z-20 flex flex-col items-start"
            style={{ left: originPct.left, top: originPct.top }}
          >
            <span className="relative mb-3 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-accent" />
            </span>
            <div className="rounded-xl border border-white/15 bg-[#052934]/90 px-3 py-2 text-center shadow-xl backdrop-blur-xl md:px-4">
              <div className="text-[9px] font-semibold uppercase tracking-[.2em] text-accent">Origin</div>
              <div className="mt-1 whitespace-nowrap text-[10px] font-semibold text-white md:text-xs">Manufacturers</div>
            </div>
          </div>

          <div
            className="absolute z-20 flex -translate-x-full flex-col items-end"
            style={{ left: destPct.left, top: destPct.top }}
          >
            <span className="relative mb-3 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-secondary" />
            </span>
            <div className="rounded-xl border border-white/15 bg-[#052934]/90 px-3 py-2 text-center shadow-xl backdrop-blur-xl md:px-4">
              <div className="text-[9px] font-semibold uppercase tracking-[.2em] text-sky-300">Destination</div>
              <div className="mt-1 whitespace-nowrap text-[10px] font-semibold text-white md:text-xs">Your Production Line</div>
            </div>
          </div>

          <svg
            viewBox="0 0 1200 240"
            className="relative mt-2 h-auto w-full"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Animated supply route from international manufacturers to your production line"
          >
            <defs>
              <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#E67E22" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#E67E22" />
              </linearGradient>
            </defs>

            {/* Base route — draws in once when scrolled into view */}
            <motion.path
              d={routePathD}
              fill="none"
              stroke="url(#routeGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="3 12"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />

            {/* Flowing overlay — one lightweight looping animation for a "live" feel */}
            <motion.path
              d={routePathD}
              fill="none"
              stroke="#E67E22"
              strokeOpacity="0.85"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="1 22"
              animate={{ strokeDashoffset: [0, -230] }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}
            />

            {/* Quality checkpoint, roughly mid-route */}
            <g transform={`translate(${checkpoint.x}, ${checkpoint.y})`}>
              <circle r="17" fill="#062f3a" stroke="#ffffff" strokeOpacity=".35" strokeWidth="1.5" />
              <circle r="13" fill="#ffffff" fillOpacity=".12" />
              <foreignObject x="-9" y="-9" width="18" height="18" style={{ overflow: "visible" }}>
                <div className="flex h-[18px] w-[18px] items-center justify-center text-white">
                  <ShieldCheck size={13} strokeWidth={2.5} />
                </div>
              </foreignObject>
            </g>

            {/* Endpoint dots */}
            <circle cx={routeWaypoints[0].x} cy={routeWaypoints[0].y} r="5" fill="#E67E22" stroke="#fff" strokeWidth="2" />
            <circle cx={routeWaypoints[5].x} cy={routeWaypoints[5].y} r="5" fill="#2E5984" stroke="#fff" strokeWidth="2" />

            {/* The ship — a single transform-only animation (x/y), cheap on the compositor */}
            <motion.g
              animate={{ x: routeX, y: routeY }}
              transition={{ duration: 16, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
            >
              <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}>
                <ellipse cx="-17" cy="2" rx="13" ry="4" fill="#fff" opacity=".12" />
                <circle r="17" fill="#E67E22" stroke="white" strokeWidth="2" />
                <foreignObject x="-10" y="-10" width="20" height="20" style={{ overflow: "visible" }}>
                  <div className="flex h-5 w-5 items-center justify-center">
                    <Ship size={13} className="text-white" strokeWidth={2.25} />
                  </div>
                </foreignObject>
              </motion.g>
            </motion.g>
          </svg>

          <div className="relative -mt-1 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.16em] text-white/60 backdrop-blur">
              <ShieldCheck size={12} className="text-emerald-300" /> Quality verification checkpoint
            </div>
          </div>

          {/* Supporting highlights, straight from what we do */}
          <div className="relative mt-7 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
            {routeHighlights.map(({ Icon, label }, index) => (
              <motion.div key={label} whileHover={{ y: -4 }} className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.06] p-4 backdrop-blur-md transition-colors hover:border-accent/40 hover:bg-white/[.1]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/10">
                  <Icon size={17} className="text-accent" />
                </div>
                <div><div className="text-[9px] font-semibold uppercase tracking-[.18em] text-white/35">Stage 0{index + 1}</div><span className="mt-1 block text-sm font-medium text-white/85">{label}</span></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Anchor size={16} className="text-primary" />
            <span className="text-primary text-sm font-semibold">About Cresco Global</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built on Sourcing You Can Depend On
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            We specialize in the global sourcing and supply of Titanium Dioxide (TiO₂) and
            performance &amp; functional additives, serving diverse industrial applications
            with a strong commitment to quality, reliability, and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {aboutPoints.map(({ title, Icon, desc }) => (
            <motion.div
              key={title}
              {...fadeUp}
              className="bg-background rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 card-elevated"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalNetworkGlobe() {
  const nodes = [
    { cx: 117, cy: 105, delay: 0 },
    { cx: 184, cy: 78, delay: 0.6 },
    { cx: 244, cy: 126, delay: 1.2 },
    { cx: 163, cy: 172, delay: 1.8 },
    { cx: 280, cy: 187, delay: 2.4 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <motion.div
        className="absolute h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[90px] md:h-[40rem] md:w-[40rem]"
        animate={{ scale: [0.94, 1.06, 0.94], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="relative h-[360px] w-[360px] md:h-[500px] md:w-[500px]"
        animate={{ y: [0, -9, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-[4%] rounded-full border border-white/15 bg-[radial-gradient(circle_at_32%_25%,rgba(255,255,255,0.18),rgba(46,89,132,0.12)_35%,rgba(8,59,73,0.4)_72%)] shadow-[inset_-35px_-28px_70px_rgba(0,0,0,0.28),0_0_80px_rgba(230,126,34,0.16)]" />
        <motion.svg
          viewBox="0 0 400 400"
          className="absolute inset-0 h-full w-full overflow-visible"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <defs>
            <clipPath id="hero-globe-clip"><circle cx="200" cy="200" r="181" /></clipPath>
            <linearGradient id="hero-globe-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#fff" stopOpacity=".08" />
              <stop offset=".55" stopColor="#fff" stopOpacity=".34" />
              <stop offset="1" stopColor="#E67E22" stopOpacity=".16" />
            </linearGradient>
            <filter id="hero-node-glow"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          </defs>
          <g clipPath="url(#hero-globe-clip)" fill="none" stroke="url(#hero-globe-line)" strokeWidth="1">
            <ellipse cx="200" cy="200" rx="178" ry="178" />
            <ellipse cx="200" cy="200" rx="132" ry="178" />
            <ellipse cx="200" cy="200" rx="75" ry="178" />
            <ellipse cx="200" cy="200" rx="178" ry="132" />
            <ellipse cx="200" cy="200" rx="178" ry="75" />
            <path d="M22 200h356M42 125h316M42 275h316" />
          </g>
        </motion.svg>

        <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full overflow-visible">
          <defs><filter id="hero-route-glow"><feGaussianBlur stdDeviation="2.5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
          <g fill="none" stroke="#E67E22" strokeLinecap="round" filter="url(#hero-route-glow)">
            <motion.path d="M117 105 Q190 22 244 126" strokeWidth="1.4" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: [0, 1, 1], opacity: [0, .8, .15] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />
            <motion.path d="M163 172 Q238 110 280 187" strokeWidth="1.2" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: [0, 1, 1], opacity: [0, .7, .12] }} transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }} />
            <motion.path d="M184 78 Q122 142 163 172" strokeWidth="1" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: [0, 1, 1], opacity: [0, .65, .1] }} transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }} />
          </g>
          {nodes.map((node) => (
            <g key={`${node.cx}-${node.cy}`} filter="url(#hero-node-glow)">
              <motion.circle cx={node.cx} cy={node.cy} r="7" fill="none" stroke="#E67E22" strokeWidth="1" animate={{ r: [4, 11, 4], opacity: [.8, 0, .8] }} transition={{ duration: 2.8, delay: node.delay, repeat: Infinity }} />
              <circle cx={node.cx} cy={node.cy} r="3" fill="#fff" />
            </g>
          ))}
        </svg>

        <motion.div className="absolute inset-[-7%] rounded-full border border-white/10" animate={{ rotateX: [62, 62], rotateZ: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} />
        <motion.div className="absolute inset-[8%] rounded-full border border-dashed border-accent/25" animate={{ rotateX: [72, 72], rotateZ: -360 }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }} />
      </motion.div>
    </div>
  );
}

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
          <div className="absolute inset-0 overflow-hidden">
            {/* soft ambient light, drifting slowly */}
            <motion.div
              className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-10"
              animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-10"
              animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* faint counter-rotating orbit rings — a quiet "global network" motif */}
            <motion.div
              className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full border border-white/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -right-32 -top-32 w-[420px] h-[420px] scale-[0.72] rounded-full border border-dashed border-white/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-28">
            <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_.98fr] gap-10 lg:gap-8 items-center">
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

              <motion.div {...fadeUp} className="relative min-h-[420px] md:min-h-[540px]">
                <GlobalNetworkGlobe />
                <div className="absolute inset-x-0 bottom-0 z-10 grid grid-cols-2 gap-3 md:gap-4">
                  {heroStats.map(({ icon: Icon, value, label, trend }, index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: .25 + index * .09, duration: .5 }}
                      className="group relative overflow-hidden rounded-xl border border-white/15 bg-[#062f3a]/70 p-4 shadow-[0_18px_50px_rgba(0,0,0,.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 md:p-5"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
                      <div className="flex items-center justify-between">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-accent"><Icon size={18} /></div>
                        <div className="flex items-center text-[11px] font-semibold text-emerald-300"><TrendingUp size={12} /><span className="ml-1">{trend}</span></div>
                      </div>
                      <div className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">{value}</div>
                      <div className="mt-1 text-xs font-medium uppercase tracking-[.12em] text-white/55">{label}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="absolute right-2 top-12 z-10 rounded-full border border-white/15 bg-[#062f3a]/65 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.18em] text-white/75 backdrop-blur-md">
                  Global supply network · Live
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* ===================== GLOBAL SUPPLY ROUTE (signature animation) ===================== */}
        <ShipRouteSection />

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

        {/* ===================== ABOUT ===================== */}
        <AboutSection />

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
