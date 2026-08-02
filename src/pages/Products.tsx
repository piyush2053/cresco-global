import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Building2,
  Check,
  ChevronDown,
  Download,
  Droplets,
  FlaskConical,
  Globe2,
  Layers3,
  MessageCircle,
  PackageSearch,
  RotateCcw,
  Search,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

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
  category?: string;
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
  onClearFilters: () => void;
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

const titaniumDioxideCategory = "Titanium Dioxide (TiO2)";

const productCategories = [
  { label: titaniumDioxideCategory, Icon: Droplets },
  { label: "Optical Brightener", Icon: Sparkles },
  { label: "Wax", Icon: Layers3 },
  { label: "Stearates", Icon: FlaskConical },
  { label: "Stearic Acids", Icon: FlaskConical },
  { label: "Lithopone", Icon: Layers3 },
  { label: "Carbon", Icon: PackageSearch },
  { label: "Processing Aids", Icon: SlidersHorizontal },
];

function getProductCategory(product: Product) {
  return product.category || titaniumDioxideCategory;
}

interface FilterSelectProps {
  label: string;
  value: string;
  options: string[];
  isOpen: boolean;
  onToggle: () => void;
  onChange: (value: string) => void;
}

function FilterSelect({ label, value, options, isOpen, onToggle, onChange }: FilterSelectProps) {
  const allOption = `All ${label}s`;
  const displayValue = value === "All" ? allOption : value;

  return (
    <div className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-3 rounded-lg border border-input bg-background px-4 py-3 text-left text-sm text-foreground transition-colors hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
      >
        <span className="truncate">{displayValue}</span>
        <ChevronDown size={17} className={`shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -4, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.14, ease: "easeOut" }}
          className="absolute left-0 right-0 z-20 mt-2 overflow-hidden rounded-lg border border-border bg-popover p-1 shadow-elevated"
          role="listbox"
          aria-label={label}
        >
          {["All", ...options].map((option) => {
            const isSelected = option === value;
            const optionLabel = option === "All" ? allOption : option;

            return (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => onChange(option)}
                className={`flex w-full items-center justify-between gap-3 rounded-md px-3 py-2.5 text-left text-sm transition-colors ${isSelected ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted hover:text-primary"}`}
              >
                <span className="truncate">{optionLabel}</span>
                {isSelected && <Check size={16} className="shrink-0" />}
              </button>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}

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
  onClearFilters,
}: FilterBarProps) {
  const [openField, setOpenField] = useState<string | null>(null);
  const filterRef = useRef<HTMLElement>(null);
  const selectFields = [
    { label: "Company", value: company, options: companies, onChange: onCompanyChange },
    { label: "Country", value: country, options: countries, onChange: onCountryChange },
    { label: "Method", value: method, options: methods, onChange: onMethodChange },
    { label: "Application", value: application, options: applications, onChange: onApplicationChange },
  ];

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setOpenField(null);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  return (
    <motion.section ref={filterRef} {...fadeUp} className="mb-10 rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <SlidersHorizontal size={20} />
          </span>
          <div>
            <h2 className="font-headline text-xl font-bold text-foreground">Find the right grade</h2>
            <p className="text-sm text-muted-foreground">Refine the product range to your specifications.</p>
          </div>
        </div>
        <button type="button" onClick={onClearFilters} className="inline-flex items-center justify-center gap-2 self-start rounded-lg border border-primary bg-background px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:self-auto">
          <RotateCcw size={16} />
          Clear filters
        </button>
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
          <FilterSelect
            key={field.label}
            {...field}
            isOpen={openField === field.label}
            onToggle={() => setOpenField((current) => current === field.label ? null : field.label)}
            onChange={(value) => {
              field.onChange(value);
              setOpenField(null);
            }}
          />
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
  const [category, setCategory] = useState(titaniumDioxideCategory);
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
      getProductCategory(product) === category &&
      (company === "All" || product.company === company) &&
      (country === "All" || product.country === country) &&
      (method === "All" || product.method === method) &&
      (application === "All" || product.application === application)
    ));
  }, [application, category, company, country, method, products, search]);

  const resetFilters = () => {
    setSearch("");
    setCategory(titaniumDioxideCategory);
    setCompany("All");
    setCountry("All");
    setMethod("All");
    setApplication("All");
  };

  const clearProductFilters = () => {
    setSearch("");
    setCompany("All");
    setCountry("All");
    setMethod("All");
    setApplication("All");
  };

  const requestedGrade = search.trim() || `${category}${method !== "All" ? ` ${method}` : ""}`;
  const gradeRequestUrl = `https://wa.me/919175775763?text=${encodeURIComponent(`Hi,\nPlease Share Availability of ${requestedGrade}\nQuantity :\nDelivery Location :`)}`;

  return (
    <>
      <Helmet>
        <title>Products | Cresco Global</title>
      </Helmet>

      <main className="min-h-screen bg-background py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.header {...fadeUp} className="mb-10 max-w-3xl md:mb-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Layers3 size={16} />
              Industrial Product Range
            </div>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground md:text-5xl">Products</h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Browse product categories and discover grades selected for your manufacturing requirements.
            </p>
          </motion.header>

          <motion.section {...fadeUp} className="mb-10">
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="mb-1 text-sm font-semibold text-primary">Product categories</p>
                <h2 className="font-headline text-2xl font-bold text-foreground">Select a product</h2>
              </div>
              <p className="text-sm text-muted-foreground">Grades appear immediately after selecting a category.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {productCategories.map(({ label, Icon }, index) => {
                const isSelected = category === label;

                return (
                  <motion.button
                    key={label}
                    type="button"
                    {...fadeUp}
                    transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.18) }}
                    onClick={() => {
                      setCategory(label);
                      setMethod("All");
                      setApplication("All");
                    }}
                    className={`group flex items-center gap-3 rounded-xl border p-4 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${isSelected ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary"}`}
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 ${isSelected ? "bg-primary-foreground/10 text-primary-foreground" : "bg-muted text-primary"}`}>
                      <Icon size={20} />
                    </span>
                    <span className="text-sm font-semibold leading-tight">{label}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.section>

          {category === titaniumDioxideCategory && (
          <motion.section {...fadeUp} className="mb-10">
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="font-headline text-2xl font-bold text-foreground">Titanium Dioxide grades</h2>
              <p className="text-sm text-muted-foreground">Choose a process or application to narrow the grades.</p>
            </div>
            <div className="mb-4 flex flex-wrap gap-3">
              {[
                { label: "All grades", value: "All" },
                { label: "Rutile", value: "Rutile" },
                { label: "Anatase", value: "Anatase" },
              ].map((process) => (
                <button
                  key={process.value}
                  type="button"
                  onClick={() => setMethod(process.value)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${method === process.value ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-primary/10 hover:text-primary"}`}
                >
                  {process.label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 border-t border-border pt-4">
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
          )}

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
            onClearFilters={clearProductFilters}
          />

          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-1 text-sm font-semibold text-primary">Product catalogue</p>
              <h2 className="font-headline text-3xl font-bold text-foreground">{category} grades</h2>
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
              <h2 className="mt-6 font-headline text-2xl font-bold text-foreground">Grade unavailable</h2>
              <p className="mx-auto mt-3 max-w-md text-muted-foreground">This grade might be out of stock. Click on inquire to know the availability.</p>
              <div className="mt-6 flex flex-col items-center gap-3">
                <a
                  href={gradeRequestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary bg-background px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <MessageCircle size={18} />
                  Inquire availability
                </a>
                <button type="button" onClick={resetFilters} className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                  Clear all filters
                </button>
              </div>
            </motion.section>
          )}
        </div>
      </main>
    </>
  );
}
