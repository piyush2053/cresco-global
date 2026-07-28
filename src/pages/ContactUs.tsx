import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4 },
};

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Cresco Global</title>
        <meta name="description" content="crescoglobal" />
      </Helmet>

      {/* ===================== HERO ===================== */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Focused on Additives. Driven by Reliability.
            <br />
            <span className="text-accent">Strengthen Your Additives Supply.</span>
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto mb-8">
            Cresco Global simplifies sourcing through direct manufacturer relationships
            and structured import-driven processes.
          </p>
        </div>
      </section>

      {/* ===================== CONTACT + ADDRESS CARDS ===================== */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            {...fadeUp}
            className="bg-card rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">
              <a href="tel:+919175775765" className="hover:text-primary transition-colors">
                +91 91 757 757 65
              </a>
            </p>
            <p className="text-muted-foreground mt-2">
              <a href="mailto:daksh@crescoglobal.co.in" className="hover:text-primary transition-colors">
                daksh@crescoglobal.co.in
              </a>
              <br />
              <a href="mailto:saurav@crescoglobal.co.in" className="hover:text-primary transition-colors">
                saurav@crescoglobal.co.in
              </a>
              <br />
              <a href="mailto:office@crescoglobal.co.in" className="hover:text-primary transition-colors">
                office@crescoglobal.co.in
              </a>
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="bg-card rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <p className="text-muted-foreground">
              Unit 156, 1st Floor, C-21,
              <br />
              Rescomm, Ujjain,
              <br />
              Madhya Pradesh – 456010
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================== MAP ===================== */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <iframe
              title="Cresco Global Location"
              src="https://maps.google.com/maps?q=23.1564998,75.7868373&z=15&output=embed"
              className="w-full min-h-[520px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute top-6 left-6 w-full max-w-sm rounded-3xl border border-border bg-white/95 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    C-21 Res-COMM
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    C-21 MALL, Nanakheda, Dipti Parisar, Ujjain, Madhya Pradesh 456010, India
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-foreground">
                    <span className="text-primary">4.8</span>
                    <span className="text-muted-foreground">(5 reviews)</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/maps?q=23.1564998,75.7868373"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}