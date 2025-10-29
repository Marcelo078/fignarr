import { Button } from "@/components/ui/button";
import { ShoppingCart, Shield, Award } from "lucide-react";
import productImage from "@/assets/fignar-suplemento-liquido-figado-produto.png";

export const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--accent)/0.05),transparent_50%)]" />
      
      <div className="container relative z-10 px-4 py-12 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
              <Award className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Fórmula Premium Aprovada</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Cuide da Saúde do Seu <span className="text-primary">Fígado</span> com Fignar Gotas
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              Suplemento alimentar líquido para saúde do fígado com <strong>6 nutrientes especiais</strong>. Fórmula cientificamente desenvolvida, sabor laranja agradável, fácil absorção.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Aprovado ANVISA</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Garantia 90 Dias</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="xl" 
                variant="cta" 
                onClick={scrollToPricing}
                className="gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Ver Ofertas Especiais
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Saiba Mais
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in animation-delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl rounded-full" />
            <img 
              src={productImage} 
              alt="Fignar Gotas - Suplemento alimentar líquido para saúde do fígado com 6 nutrientes especiais, fórmula premium aprovada pela ANVISA"
              className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};