import { Card } from "@/components/ui/card";
import { Star, CheckCircle } from "lucide-react";

export const ProductSummary = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 border-2 border-primary/20">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-6 h-6 text-accent fill-accent" />
              <Star className="w-6 h-6 text-accent fill-accent" />
              <Star className="w-6 h-6 text-accent fill-accent" />
              <Star className="w-6 h-6 text-accent fill-accent" />
              <Star className="w-6 h-6 text-accent fill-accent" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Resumo: Vale a Pena Comprar Fignar Gotas?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              <strong>Fignar</strong> é um <strong>suplemento alimentar líquido para saúde do fígado</strong> que se destaca pela sua fórmula premium com 6 nutrientes especiais. Aprovado pela ANVISA, oferece uma solução prática e eficaz para quem busca cuidar da saúde hepática.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Pontos Positivos
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Fórmula líquida de rápida absorção</li>
                  <li>✓ 6 nutrientes especiais para o fígado</li>
                  <li>✓ Aprovado pela ANVISA</li>
                  <li>✓ Sabor laranja agradável</li>
                  <li>✓ Garantia de 90 dias</li>
                  <li>✓ Fácil de usar no dia a dia</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Diferenciais
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Formato líquido único</li>
                  <li>✓ Fórmula premium exclusiva</li>
                  <li>✓ Recomendação profissional</li>
                  <li>✓ 30ml por frasco</li>
                  <li>✓ Uso adulto seguro</li>
                  <li>✓ Diversos pacotes disponíveis</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Nossa Opinião</h3>
              <p className="text-muted-foreground">
                Fignar se mostra como uma excelente opção de <strong>suplemento alimentar líquido para saúde do fígado</strong>. 
                A combinação de aprovação ANVISA, fórmula premium com 6 nutrientes especiais e garantia de 90 dias traz 
                segurança para quem deseja investir na saúde hepática. O formato em gotas facilita o uso diário e a absorção 
                dos nutrientes. Com diversos pacotes disponíveis, é possível escolher a melhor opção para suas necessidades.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};