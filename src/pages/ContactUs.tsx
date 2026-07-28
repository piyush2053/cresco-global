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
          <div className="bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
            <iframe
              title="Cresco Global Location"
              src="https://maps.google.com/maps?q=23.1564998,75.7868373&z=15&output=embed"
              className="w-full h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}