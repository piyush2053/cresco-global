import { Helmet } from "react-helmet-async";
import { FileQuestion, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function ProductFileUnavailable() {
  const { document } = useParams();
  const fileName = document?.replace(/\.pdf$/i, "").replaceAll("-", " ");
  const whatsappMessage = `Please Share TDS and availability of ${fileName || "this product"}`;
  const whatsappUrl = `https://wa.me/919175775763?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <Helmet>
        <title>Product File Unavailable | Cresco Global</title>
      </Helmet>

      <section className="min-h-[60vh] bg-background py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl rounded-xl border border-border bg-card p-8 text-center shadow-card md:p-10">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-muted text-primary">
              <FileQuestion size={28} />
            </span>
            <h1 className="mt-5 font-headline text-3xl font-bold text-foreground">File unavailable</h1>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Sorry, the product file{fileName ? ` for ${fileName}` : ""} is not handy with us right now. We will update it soon. Thank you.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle size={18} />
                Request TDS & availability
              </a>
              <Link to="/products" className="inline-flex items-center justify-center rounded-lg border border-primary bg-background px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                Back to products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
