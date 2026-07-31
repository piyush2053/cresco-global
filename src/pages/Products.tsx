import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Building2,
  Download,
  Droplets,
  Filter,
  FlaskConical,
  Globe2,
  LayoutGrid,
  PackageSearch,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

interface Product {
  id: number;
  company: string;
  country: string;
  method: string;
  grade: string;
  application: string;
  description: string;
  datasheet: string;
  sample?: string;
}

interface FilterBarProps {
  search: string;
  company: string;
  country: string;
  method: string;
  application: string;
  companies: string[];
  countries: string[];
  methods: string[];
  applications: string[];
  onSearchChange: (value: string) => void;
  onCompanyChange: (value: string) => void;
  onCountryChange: (value: string) => void;
  onMethodChange: (value: string) => void;
  onApplicationChange: (value: string) => void;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.4 },
};

const applicationChips = [
  { label: "Paints", value: "Paints" },
  { label: "Plastics", value: "Plastics/PVC" },
  { label: "Coating", value: "Coating" },
  { label: "Masterbatch", value: "Masterbatch" },
  { label: "Inks", value: "Inks" },
];

const selectClassName =
  "w-full appearance-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10";

function FilterBar({
  search,
  company,
  country,
  method,
  application,
  companies,
  countries,
  methods,
  applications,
  onSearchChange,
  onCompanyChange,
  onCountryChange,
  onMethodChange,
  onApplicationChange,
}: FilterBarProps) {
  const selectFields = [
    { label: "Company", value: company, options: companies, onChange: onCompanyChange },
    { label: "Country", value: country, options: countries, onChange: onCountryChange },
    { label: "Method", value: method, options: methods, onChange: onMethodChange },
    { label: "Application", value: application, options: applications, onChange: onApplicationChange },
  ];

  return (
    <motion.section {...fadeUp} className="mb-10 rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <SlidersHorizontal size={20} />
        </span>
        <div>
          <h2 className="font-headline text-xl font-bold text-foreground">Find the right grade</h2>
          <p className="text-sm text-muted-foreground">Refine the product range to your specifications.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        <div className="xl:col-span-1">
          <label htmlFor="product-search" className="mb-2 block text-sm font-semibold text-foreground">Search products</label>
          <div className="flex items-center gap-3 rounded-lg border border-input bg-background px-4 transition-colors focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10">
            <Search className="shrink-0 text-muted-foreground" size={18} />
            <input
              id="product-search"
              type="text"
              placeholder="Search grade..."
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              className="min-w-0 flex-1 bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {selectFields.map((field) => (
          <label key={field.label} className="block">
            <span className="sr-only">Filter by {field.label}</span>
            <select value={field.value} onChange={(event) => field.onChange(event.target.value)} className={selectClassName}>
              <option value="All">All {field.label}s</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>
    </motion.section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.article
      {...fadeUp}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.28) }}
      className="group self-start overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-elevated"
    >
      <div className="border-b border-border bg-primary p-4">
        <div className="mb-3 flex items-start justify-between gap-4">
          <span className="rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-semibold text-primary-foreground">
            {product.application}
          </span>
          <Droplets size={20} className="shrink-0 text-primary-foreground/70" />
        </div>
        <h3 className="font-headline text-2xl font-bold tracking-tight text-primary-foreground">{product.grade}</h3>
      </div>

      <div className="p-4">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <Building2 size={16} className="mt-0.5 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Company</p>
                <p className="mt-1 truncate text-sm font-semibold text-foreground" title={product.company}>{product.company}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Globe2 size={16} className="mt-0.5 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Country</p>
                <p className="mt-1 truncate text-sm font-semibold text-foreground" title={product.country || "Global"}>{product.country || "Global"}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-3">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Manufacturing process</p>
            <span className="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
              {product.method || "Available on request"}
            </span>
          </div>

          <p className="border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <a
            href={product.datasheet}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Download size={17} />
            Datasheet
          </a>
          <a
            href={product.sample || "/products/sample-unavailable.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary bg-background px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Request Sample
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [company, setCompany] = useState("All");
  const [country, setCountry] = useState("All");
  const [method, setMethod] = useState("All");
  const [application, setApplication] = useState("All");

  useEffect(() => {
    let isMounted = true;

    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data: unknown) => {
        if (isMounted && Array.isArray(data)) {
          setProducts(data as Product[]);
        }
      })
      .catch(() => {
        if (isMounted) {
          setProducts([]);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const companies = useMemo(() => [...new Set(products.map((product) => product.company).filter(Boolean))], [products]);
  const countries = useMemo(() => [...new Set(products.map((product) => product.country).filter(Boolean))], [products]);
  const methods = useMemo(() => [...new Set(products.map((product) => product.method).filter(Boolean))], [products]);
  const applications = useMemo(() => [...new Set(products.map((product) => product.application).filter(Boolean))], [products]);

  const filteredProducts = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return products.filter((product) => (
      (!searchTerm || [product.grade, product.company, product.application].some((value) => value.toLowerCase().includes(searchTerm))) &&
      (company === "All" || product.company === company) &&
      (country === "All" || product.country === country) &&
      (method === "All" || product.method === method) &&
      (application === "All" || product.application === application)
    ));
  }, [application, company, country, method, products, search]);

  const resetFilters = () => {
    setSearch("");
    setCompany("All");
    setCountry("All");
    setMethod("All");
    setApplication("All");
  };

  return (
    <>
      <Helmet>
        <title>Products | Cresco Global</title>
      </Helmet>

      <main className="min-h-screen bg-background py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.header {...fadeUp} className="mb-10 max-w-3xl md:mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Droplets size={16} />
              Titanium Dioxide Solutions
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">Titanium Dioxide Products</h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Explore dependable titanium dioxide grades sourced for coatings, plastics, inks, and other industrial applications.
            </p>
          </motion.header>

          <section className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {[
              { title: "By Application", description: "Explore grades tailored to your end-use requirements.", Icon: LayoutGrid, action: () => setApplication("All") },
              { title: "By Process", description: "Compare grades by their manufacturing process.", Icon: FlaskConical, action: () => setMethod("All") },
            ].map(({ title, description, Icon, action }, index) => (
              <motion.button
                key={title}
                type="button"
                {...fadeUp}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={action}
                className="group flex items-start justify-between gap-6 rounded-xl border border-border bg-card p-6 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-elevated"
              >
                <div>
                  <p className="mb-2 text-sm font-semibold text-primary">Browse products</p>
                  <h2 className="font-headline text-2xl font-bold text-foreground">{title}</h2>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-muted text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon size={25} />
                </span>
              </motion.button>
            ))}
          </section>

          <motion.section {...fadeUp} className="mb-10">
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-headline text-2xl font-bold text-foreground">Browse by application</h2>
              <p className="text-sm text-muted-foreground">Select an application to narrow the range.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setApplication("All")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${application === "All" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-primary/10 hover:text-primary"}`}
              >
                All applications
              </button>
              {applicationChips.map((chip) => (
                <button
                  key={chip.value}
                  type="button"
                  onClick={() => setApplication(chip.value)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${application === chip.value ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-primary/10 hover:text-primary"}`}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </motion.section>

          <FilterBar
            search={search}
            company={company}
            country={country}
            method={method}
            application={application}
            companies={companies}
            countries={countries}
            methods={methods}
            applications={applications}
            onSearchChange={setSearch}
            onCompanyChange={setCompany}
            onCountryChange={setCountry}
            onMethodChange={setMethod}
            onApplicationChange={setApplication}
          />

          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-1 text-sm font-semibold text-primary">Product catalogue</p>
              <h2 className="font-headline text-3xl font-bold text-foreground">Available grades</h2>
            </div>
            <p className="text-sm text-muted-foreground">{filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} found</p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
            </div>
          ) : (
            <motion.section {...fadeUp} className="rounded-xl border border-border bg-card px-6 py-16 text-center shadow-card md:px-10">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-muted text-primary">
                <PackageSearch size={30} />
              </span>
              <h2 className="mt-6 font-headline text-2xl font-bold text-foreground">No matching products</h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">Try adjusting your search or filters to see more suitable grades.</p>
              <button type="button" onClick={resetFilters} className="mt-6 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                Clear all filters
              </button>
            </motion.section>
          )}
        </div>
      </main>
    </>
  );
}
