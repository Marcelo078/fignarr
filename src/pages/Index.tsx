import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Credibility } from "@/components/Credibility";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { ProductSummary } from "@/components/ProductSummary";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Fignar Gotas",
            "description": "Suplemento alimentar líquido para saúde do fígado com 6 nutrientes especiais. Fórmula Premium aprovada pela ANVISA, sabor laranja, 30ml.",
            "brand": {
              "@type": "Brand",
              "name": "Fignar"
            },
            "offers": {
              "@type": "AggregateOffer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "BRL",
              "url": "https://app.monetizze.com.br/r/APP25503419"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "1000"
            }
          })}
        </script>
      </Helmet>
      
      <main className="min-h-screen">
        <Hero />
        <Benefits />
        <HowItWorks />
        <Credibility />
        <Pricing />
        <ProductSummary />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};

export default Index;