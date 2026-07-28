import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { LayoutGrid, FlaskConical } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4 },
};

const browseCards = [
  { Icon: LayoutGrid, iconClass: "text-success", title: "By Application", subtitle: "Verified Suppliers" },
  { Icon: FlaskConical, iconClass: "text-accent", title: "By Process", subtitle: "Verified Suppliers" },
];

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Products - Cresco Global</title>
        <meta name="description" content="crescoglobal" />
      </Helmet>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 auto-cols-fr">
              {browseCards.map(({ Icon, iconClass, title, subtitle }) => (
                <motion.div
                  key={title}
                  {...fadeUp}
                  className="bg-card rounded-xl p-4 md:p-6 shadow-card hover:shadow-elevated transition cursor-pointer flex flex-col h-full"
                >
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-3 rounded-lg bg-muted ${iconClass}`}>
                        <Icon size={24} />
                      </div>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{title}</p>
                      <p className="text-sm text-muted-foreground">{subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}