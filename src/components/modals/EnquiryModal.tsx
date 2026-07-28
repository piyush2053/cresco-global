import { useState } from "react";
import { X, Building, Briefcase, CircleCheckBig, ChevronDown } from "lucide-react";

const countries = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "cn", label: "China" },
  { value: "jp", label: "Japan" },
  { value: "in", label: "India" },
];

// TODO: exact fields for "Product Details" weren't captured from production
// (only step 1 markup was saved) — this is a reasonable placeholder matching
// the site's field patterns (categories used elsewhere on the site).
const productCategories = [
  "Plastics & Polymers",
  "Paints & Coatings",
  "Inks & Printing",
  "Paper & Packaging",
  "Pharma",
  "Others",
];

const steps = [
  { id: 1, label: "Personal Info", Icon: Building },
  { id: 2, label: "Product Details", Icon: Briefcase },
  { id: 3, label: "Review & Submit", Icon: CircleCheckBig },
];

export default function EnquiryModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    country: "",
    productCategory: "",
    quantity: "",
    message: "",
  });
  const [countryOpen, setCountryOpen] = useState(false);

  if (!open) return null;

  const update = (field:any) => (e:any) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = () => {
    // TODO: wire up to real enquiry submission endpoint
    console.log("Enquiry submitted:", form);
    onClose();
  };

  const selectedCountry = countries.find((c) => c.value === form.country);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-elevated">
        {/* ===== Header + Step Indicator ===== */}
        <div className="bg-gradient-to-r from-primary to-secondary p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Enquiry Application</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
              aria-label="Close"
            >
              <X size={24} className="text-white" />
            </button>
          </div>

          <div className="flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s.id} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      step === s.id
                        ? "bg-white text-primary"
                        : step > s.id
                        ? "bg-white/40 text-white"
                        : "bg-white/20 text-white"
                    }`}
                  >
                    <s.Icon size={20} />
                  </div>
                  <span
                    className={`text-sm font-medium hidden sm:block ${
                      step === s.id ? "text-white" : "text-white/60"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 h-1 mx-2 rounded bg-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ===== Body ===== */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-280px)]">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Personal Information</h3>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none text-foreground" htmlFor="name">
                  Name <span className="text-destructive ml-1">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={update("name")}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-foreground" htmlFor="email">
                    Email Address <span className="text-destructive ml-1">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={update("email")}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none text-foreground" htmlFor="phone">
                    Phone Number <span className="text-destructive ml-1">*</span>
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="+91"
                    value={form.phone}
                    onChange={update("phone")}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none text-foreground" htmlFor="state">
                  State
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder="State"
                  value={form.state}
                  onChange={update("state")}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>

              <div className="relative">
                <label className="text-sm font-medium leading-none mb-2 block text-foreground">
                  Country <span className="text-destructive ml-1">*</span>
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setCountryOpen((o) => !o)}
                    aria-expanded={countryOpen}
                    aria-haspopup="listbox"
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-muted-foreground"
                  >
                    <span className="truncate">
                      {selectedCountry ? selectedCountry.label : "Select your country"}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${countryOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {countryOpen && (
                    <ul className="absolute z-10 mt-1 w-full bg-white border border-input rounded-md shadow-elevated max-h-48 overflow-y-auto">
                      {countries.map((c) => (
                        <li key={c.value}>
                          <button
                            type="button"
                            onClick={() => {
                              setForm((f) => ({ ...f, country: c.value }));
                              setCountryOpen(false);
                            }}
                            className="w-full text-left px-3 py-2 text-sm hover:bg-muted"
                          >
                            {c.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Product Details</h3>

              <div className="relative">
                <label className="text-sm font-medium leading-none mb-2 block text-foreground">
                  Product Category <span className="text-destructive ml-1">*</span>
                </label>
                <select
                  value={form.productCategory}
                  onChange={update("productCategory")}
                  className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <option value="">Select a category</option>
                  {productCategories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none text-foreground" htmlFor="quantity">
                  Estimated Quantity
                </label>
                <input
                  id="quantity"
                  type="text"
                  placeholder="e.g. 5 MT / month"
                  value={form.quantity}
                  onChange={update("quantity")}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none text-foreground" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us more about your requirement"
                  value={form.message}
                  onChange={update("message")}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Review &amp; Submit</h3>
              <div className="bg-muted rounded-lg p-6 space-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Name</span>
                  <span className="font-medium">{form.name || "—"}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-medium">{form.email || "—"}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Phone</span>
                  <span className="font-medium">{form.phone || "—"}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Country</span>
                  <span className="font-medium">{selectedCountry?.label || "—"}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Product Category</span>
                  <span className="font-medium">{form.productCategory || "—"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Estimated Quantity</span>
                  <span className="font-medium">{form.quantity || "—"}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Please review your details above. Our team will get in touch within
                24 hours of submission.
              </p>
            </div>
          )}
        </div>

        {/* ===== Footer ===== */}
        <div className="border-t p-6 flex justify-between">
          <button
            onClick={step === 1 ? onClose : handleBack}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            {step === 1 ? "Cancel" : "Back"}
          </button>
          <button
            onClick={step === 3 ? handleSubmit : handleNext}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            {step === 3 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
