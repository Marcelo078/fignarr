import { Heart, Shield, Zap, Clock, Sparkles, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Heart,
    title: "Proteção Hepática",
    description: "Suplemento alimentar líquido para saúde do fígado que auxilia na proteção e regeneração das células hepáticas."
  },
  {
    icon: Zap,
    title: "Rápida Absorção",
    description: "Fórmula líquida garante absorção superior comparada a cápsulas tradicionais."
  },
  {
    icon: Sparkles,
    title: "6 Nutrientes Especiais",
    description: "Combinação exclusiva de nutrientes desenvolvida para máxima eficácia na saúde hepática."
  },
  {
    icon: Leaf,
    title: "Ingredientes Naturais",
    description: "Fórmula com ingredientes de alta qualidade, cuidadosamente selecionados."
  },
  {
    icon: Clock,
    title: "Fácil de Usar",
    description: "Apenas algumas gotas por dia. Sabor laranja agradável, uso adulto recomendado."
  },
  {
    icon: Shield,
    title: "Aprovado ANVISA",
    description: "Produto regularizado e aprovado pela Agência Nacional de Vigilância Sanitária."
  }
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por Que Escolher Fignar Gotas?
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubra os benefícios do suplemento alimentar líquido para saúde do fígado mais recomendado
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};