import { Droplet, Timer, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Droplet,
    number: "01",
    title: "Tome as Gotas",
    description: "Agite antes de usar. Coloque as gotas conforme orientação, direto na boca ou diluído em água. Sabor laranja agradável."
  },
  {
    icon: Timer,
    number: "02",
    title: "Absorção Rápida",
    description: "A fórmula líquida permite absorção imediata dos 6 nutrientes especiais pelo organismo."
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Resultados Progressivos",
    description: "Com uso regular, você sentirá os benefícios do suplemento alimentar líquido para saúde do fígado."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como Funciona o Fignar Gotas?
          </h2>
          <p className="text-lg text-muted-foreground">
            Simples, prático e eficaz. Veja como usar seu suplemento alimentar líquido para saúde do fígado
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary to-primary/20" />
              )}
              
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-10 h-10" />
                <span className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                  {step.number}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};