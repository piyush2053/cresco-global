import { Link, useParams } from "react-router-dom";
import { Download, MessageCircle } from "lucide-react";
import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { getProductBySlug, SITE_URL } from "../data/products";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  if (!product) return <section className="mx-auto max-w-4xl px-4 py-20"><h1 className="text-4xl font-bold">Product not found</h1><p className="mt-4">This product grade is not in our current catalogue.</p><Link to="/products" className="mt-6 inline-block text-primary">Browse all products</Link></section>;

  const canonical = `/products/${product.slug}`;
  const title = `${product.grade} ${product.application} Supplier India | Cresco Global`;
  const description = `${product.grade} ${product.method} titanium dioxide for ${product.application}. Request technical data, samples and supply availability from Cresco Global India.`.slice(0, 160);
  const schema = {
    "@context": "https://schema.org", "@type": "Product", name: product.name,
    description: `${product.intro} ${product.body[0]}`, category: product.category,
    url: `${SITE_URL}${canonical}`, brand: { "@type": "Brand", name: product.company },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Grade", value: product.grade },
      { "@type": "PropertyValue", name: "Process", value: product.method || "Available on request" },
      { "@type": "PropertyValue", name: "Application", value: product.application },
      { "@type": "PropertyValue", name: "Country of origin", value: product.country || "Available on request" },
    ],
  };
  const enquiry = `https://wa.me/919175775763?text=${encodeURIComponent(`Hi, please share availability of ${product.grade}. Quantity: Delivery location:`)}`;
  return (
    <article className="min-h-screen bg-background py-12 md:py-16">
      <SEO title={title} description={description} canonical={canonical} type="product" schema={schema} />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: product.category, path: "/products" }, { name: product.grade, path: canonical }]} />
        <header className="rounded-2xl bg-primary p-8 text-primary-foreground md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground/75">{product.category} · {product.application}</p>
          <h1 className="font-headline text-4xl font-bold md:text-5xl">{product.grade} Titanium Dioxide Supplier in India</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-primary-foreground/90">{product.intro}</p>
        </header>
        <div className="grid gap-10 py-10 lg:grid-cols-[1fr_18rem]">
          <section>
            <h2 className="font-headline text-3xl font-bold">{product.grade} grade overview</h2>
            {product.body.map((paragraph) => <p key={paragraph} className="mt-5 leading-7 text-muted-foreground">{paragraph}</p>)}
            <h2 className="mt-10 font-headline text-2xl font-bold">Technical and supply information</h2>
            <dl className="mt-5 grid gap-4 rounded-xl border border-border bg-card p-6 sm:grid-cols-2">
              {[['Manufacturer', product.company], ['Origin', product.country || 'On request'], ['Process', product.method || 'On request'], ['Application', product.application]].map(([term, value]) => <div key={term}><dt className="text-sm font-semibold text-muted-foreground">{term}</dt><dd className="mt-1 font-semibold">{value}</dd></div>)}
            </dl>
          </section>
          <aside className="h-fit rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="text-xl font-bold">Request this grade</h2>
            <p className="mt-2 text-sm text-muted-foreground">Confirm current documentation, sample and commercial availability.</p>
            <a href={product.datasheet} target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground"><Download size={18} /> View datasheet</a>
            <a href={enquiry} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-primary px-4 py-3 font-semibold text-primary"><MessageCircle size={18} /> Enquire now</a>
          </aside>
        </div>
      </div>
    </article>
  );
}
