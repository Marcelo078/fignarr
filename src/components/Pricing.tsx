import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Teste",
    bottles: "1 Frasco",
    price: "Consulte o site",
    badge: null,
    features: [
      "1 frasco de 30ml",
      "Frete grátis disponível",
      "Garantia de 90 dias",
      "Sabor laranja"
    ],
    link: "https://app.monetizze.com.br/r/APP25503419?u=c&pl=FQ194755",
    highlight: false
  },
  {
    name: "Popular",
    bottles: "3 Frascos",
    price: "Melhor Custo-Benefício",
    badge: "Mais Vendido",
    features: [
      "3 frascos de 30ml",
      "Economia significativa",
      "Garantia de 90 dias",
      "Tratamento de 3 meses",
      "Frete grátis"
    ],
    link: "https://app.monetizze.com.br/r/APP25503419?u=c&pl=FT194759",
    highlight: true
  },
  {
    name: "Oferta Especial",
    bottles: "Compre 1 Leve 3",
    price: "Oferta Limitada",
    badge: "Oferta Especial",
    features: [
      "Pague 1, leve 3 frascos",
      "Máximo desconto",
      "Garantia de 90 dias",
      "Estoque garantido",
      "Frete grátis incluso"
    ],
    link: "https://app.monetizze.com.br/r/APP25503419?u=c&pl=FW239500",
    highlight: false
  },
  {
    name: "Intensivo",
    bottles: "5 Frascos",
    price: "Tratamento Completo",
    badge: null,
    features: [
      "5 frascos de 30ml",
      "Tratamento de 5 meses",
      "Garantia de 90 dias",
      "Resultados duradouros",
      "Frete grátis incluso"
    ],
    link: "https://app.monetizze.com.br/r/APP25503419?u=c&pl=VL194778",
    highlight: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.05),transparent_70%)]" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Ofertas Especiais Disponíveis</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha Seu Pacote Fignar Gotas
          </h2>
          <p className="text-lg text-muted-foreground">
            Investir na saúde do seu fígado nunca foi tão fácil. Garantia de 90 dias em todos os pacotes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`p-6 relative ${pkg.highlight ? 'border-primary border-2 shadow-xl scale-105' : 'border-border'} hover:shadow-lg transition-all duration-300`}
            >
              {pkg.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground">
                  {pkg.badge}
                </Badge>
              )}
              
              {pkg.highlight && (
                <div className="absolute -top-3 -right-3">
                  <Star className="w-8 h-8 text-accent fill-accent" />
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">{pkg.name}</h3>
                <div className="text-2xl font-bold mb-2">{pkg.bottles}</div>
                <div className="text-lg text-primary font-semibold">{pkg.price}</div>
              </div>
              
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={pkg.highlight ? "cta" : "default"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href={pkg.link} target="_blank" rel="noopener noreferrer">
                  Comprar Agora
                </a>
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Mais opções disponíveis no site oficial
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="https://app.monetizze.com.br/r/APP25503419" target="_blank" rel="noopener noreferrer">
              Ver Todas as Ofertas
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};