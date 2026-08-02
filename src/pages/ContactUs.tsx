import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4 },
};

const officeAddress = "412, Princess Plaza, Scheme No. 54, Opposite Bombay Hospital, Vijay Nagar, Indore, Madhya Pradesh 452010, India";
const mapsUrl = "https://maps.google.com/maps?q=412%2C%20Princess%20Plaza%2C%20Scheme%20No.%2054%2C%20Opposite%20Bombay%20Hospital%2C%20Vijay%20Nagar%2C%20Indore%2C%20452010";

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Cresco Global</title>
        <meta name="description" content="Contact Cresco Global for industrial additives and titanium dioxide sourcing." />
      </Helmet>

      <section className="bg-gradient-to-br from-primary via-secondary to-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl">
            Focused on Additives. Driven by Reliability.
            <br />
            <span className="text-accent">Strengthen Your Additives Supply.</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-base text-primary-foreground/90 md:text-lg">
            Cresco Global simplifies sourcing through direct manufacturer relationships and structured import-driven processes.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div {...fadeUp} className="rounded-xl bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
            <h2 className="mb-4 text-xl font-semibold text-foreground">Contact</h2>
            <p className="text-muted-foreground"><a href="tel:+919175775763" className="transition-colors hover:text-primary">+91 91 757 757 65</a></p>
            <p className="mt-2 text-muted-foreground">
              <a href="mailto:daksh@crescoglobal.co.in" className="transition-colors hover:text-primary">daksh@crescoglobal.co.in</a><br />
              <a href="mailto:saurav@crescoglobal.co.in" className="transition-colors hover:text-primary">saurav@crescoglobal.co.in</a><br />
              <a href="mailto:office@crescoglobal.co.in" className="transition-colors hover:text-primary">office@crescoglobal.co.in</a>
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="rounded-xl bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
            <h2 className="mb-4 text-xl font-semibold text-foreground">Address</h2>
            <p className="leading-relaxed text-muted-foreground">{officeAddress}</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-xl shadow-elevated">
            <iframe title="Cresco Global Location" src={`${mapsUrl}&z=16&output=embed`} className="min-h-[520px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div className="absolute left-6 top-6 w-full max-w-sm rounded-xl border border-border bg-popover/95 p-6 shadow-elevated">
              <h2 className="mb-3 text-xl font-semibold text-foreground">Cresco Global</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{officeAddress}</p>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Open in Maps</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
