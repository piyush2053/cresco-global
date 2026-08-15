import { Helmet } from "react-helmet-async";
import JsonLd from "./JsonLd";
import { DEFAULT_IMAGE, SITE_URL } from "../data/products";

export default function SEO({ title, description, canonical, image = DEFAULT_IMAGE, type = "website", schema = null }) {
  const url = canonical?.startsWith("http") ? canonical : `${SITE_URL}${canonical || "/"}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content="Cresco Global" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
      <JsonLd data={schema || (canonical && canonical !== "/" ? {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: title.split("|")[0].trim(), item: url },
        ],
      } : null)} />
    </>
  );
}
