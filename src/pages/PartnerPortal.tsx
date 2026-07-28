import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Sparkles, UserPlus, MessageCircle, Globe, TrendingUp, Shield } from "lucide-react";
import EnquiryModal from "../components/modals/EnquiryModal";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4 },
};

const highlights = [
  {
    Icon: Globe,
    title: "Active Buyer Network",
    desc: "Active Manufactures Procuring rapidly",
  },
  {
    Icon: TrendingUp,
    title: "Reliable Supply",
    desc: "Supplied Performance Additives in 13+ states",
  },
  {
    Icon: Shield,
    title: "Support Availability",
    desc: "Round-the-clock assistance for seamless operations",
  },
];

export default function PartnerPortal() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Partner Portal - GlobalTrade Hub | Join Our Global Network</title>
        <meta name="description" content="crescoglobal" />
      </Helmet>

      <section className="relative bg-gradient-to-br from-primary via-secondary to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
          <motion.div {...fadeUp} className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 mb-6">
              <Sparkles size={20} className="text-white" />
              <span className="text-white text-sm md:text-base font-medium">
                Join 5,000+ Global Partners
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6">
              Client Ecosystem Portal
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8 md:mb-10">
              Start with a simple enquiry. Access a curated range of Titanium Dioxide
              and performance additives, backed by reliable global sourcing.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8 bg-accent hover:bg-accent/90 text-white w-full sm:w-auto"
              >
                <UserPlus size={18} className="mr-2" />
                Connect with us.
              </button>
              <a
                href="https://wa.me/919175775765"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:text-accent-foreground h-11 rounded-md px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 w-full sm:w-auto">
                  <MessageCircle size={18} className="mr-2" />
                  WhatsApp Enquiry
                </button>
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {highlights.map(({ Icon, title, desc }) => (
              <motion.div
                key={title}
                {...fadeUp}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/80">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}