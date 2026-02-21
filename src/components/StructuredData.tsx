export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Comfort Sleep Barbados",
    "description": "Premium hospitality mattresses manufactured in Guyana, distributed from Barbados across the Caribbean.",
    "url": "https://comfortsleepbarbados.com",
    "logo": "https://comfortsleepbarbados.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lot 18, Warehouse #1, Lears Business Park, Lears Road",
      "addressLocality": "St. Michael",
      "addressCountry": "BB",
      "addressRegion": "Barbados"
    },
    "telephone": "+1-246-228-7378",
    "email": "info@comfortsleepdistribution.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "areaServed": ["BB", "Caribbean"],
      "availableLanguage": "English"
    },
    "sameAs": []
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Comfort Sleep Barbados",
    "description": "Caribbean's premier supplier of climate-engineered hospitality mattresses",
    "image": "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "telephone": "+1-246-228-7378",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lot 18, Warehouse #1, Lears Business Park, Lears Road",
      "addressLocality": "St. Michael",
      "addressCountry": "BB",
      "addressRegion": "Barbados"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.1939",
      "longitude": "-59.5432"
    },
    "priceRange": "$$$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Hotel Elite Mattress Line",
    "description": "Climate-engineered hospitality mattresses for tropical environments",
    "brand": {
      "@type": "Brand",
      "name": "Comfort Sleep"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BBD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "250"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
