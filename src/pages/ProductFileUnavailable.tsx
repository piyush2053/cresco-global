import { Helmet } from "react-helmet-async";
import { FileQuestion } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function ProductFileUnavailable() {
  const { document } = useParams();
  const fileName = document?.replace(/\.pdf$/i, "").replaceAll("-", " ");

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
            <Link to="/products" className="mt-6 inline-flex rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Back to products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
