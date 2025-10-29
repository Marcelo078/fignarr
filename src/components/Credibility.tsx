import anvisaImage from "@/assets/fignar-anvisa-aprovado-suplemento-liquido.png";
import doctorImage from "@/assets/fignar-recomendacao-medica-suplemento-figado.png";
import guaranteeImage from "@/assets/fignar-garantia-90-dias-suplemento-figado.png";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

export const Credibility = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Confiança e Qualidade Garantidas
          </h2>
          <p className="text-lg text-muted-foreground">
            Fignar é um suplemento alimentar líquido para saúde do fígado aprovado e recomendado
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-lg transition-shadow">
            <img 
              src={anvisaImage} 
              alt="Fignar aprovado pela ANVISA - suplemento alimentar líquido para saúde do fígado regularizado"
              className="w-full max-w-sm mx-auto mb-6"
              loading="lazy"
            />
            <Badge className="mb-3 bg-primary">Aprovação Oficial</Badge>
            <h3 className="text-xl font-semibold mb-2">Aprovado pela ANVISA</h3>
            <p className="text-muted-foreground">
              Produto regularizado e aprovado pela Agência Nacional de Vigilância Sanitária, garantindo segurança e qualidade.
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-lg transition-shadow">
            <img 
              src={doctorImage} 
              alt="Médico recomenda Fignar - suplemento alimentar líquido para saúde do fígado com respaldo profissional"
              className="w-full max-w-sm mx-auto mb-6"
              loading="lazy"
            />
            <Badge className="mb-3 bg-secondary">Recomendação Médica</Badge>
            <h3 className="text-xl font-semibold mb-2">Apoio Profissional</h3>
            <p className="text-muted-foreground">
              Fórmula desenvolvida com base científica e aprovada por profissionais de saúde especializados.
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-6 text-center border border-border hover:shadow-lg transition-shadow">
            <img 
              src={guaranteeImage} 
              alt="Garantia de 90 dias Fignar - suplemento alimentar líquido para saúde do fígado com satisfação garantida"
              className="w-full max-w-sm mx-auto mb-6"
              loading="lazy"
            />
            <Badge className="mb-3 bg-accent">Satisfação Garantida</Badge>
            <h3 className="text-xl font-semibold mb-2">Garantia de 90 Dias</h3>
            <p className="text-muted-foreground">
              Experimente sem riscos. Se não ficar satisfeito, devolvemos 100% do seu dinheiro em até 90 dias.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {[
              "Fórmula Premium",
              "6 Nutrientes Especiais",
              "Sabor Laranja",
              "30ml por Frasco",
              "Uso Adulto",
              "Fácil Absorção"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};