import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que é Fignar Gotas?",
    answer: "Fignar é um suplemento alimentar líquido para saúde do fígado, desenvolvido com 6 nutrientes especiais em fórmula premium. É uma solução oral de 30ml com sabor laranja, aprovada pela ANVISA, para uso adulto."
  },
  {
    question: "Como tomar o Fignar?",
    answer: "Agite antes de usar. As gotas devem ser tomadas conforme orientação na embalagem, podendo ser ingeridas diretamente ou diluídas em água. Por ser líquido, tem absorção mais rápida que cápsulas convencionais."
  },
  {
    question: "Fignar funciona mesmo?",
    answer: "Fignar é um suplemento alimentar líquido para saúde do fígado formulado com 6 nutrientes especiais cientificamente selecionados. É aprovado pela ANVISA e conta com garantia de satisfação de 90 dias, demonstrando a confiança do fabricante nos resultados."
  },
  {
    question: "Quanto tempo dura 1 frasco?",
    answer: "Cada frasco contém 30ml do suplemento alimentar líquido para saúde do fígado. A duração depende da dosagem recomendada, geralmente durando cerca de 30 dias quando usado conforme orientação."
  },
  {
    question: "Qual a garantia oferecida?",
    answer: "Fignar oferece garantia de 90 dias. Se você não ficar satisfeito com o suplemento alimentar líquido para saúde do fígado, pode solicitar o reembolso integral do seu investimento dentro deste período."
  },
  {
    question: "É aprovado pela ANVISA?",
    answer: "Sim! Fignar é um suplemento alimentar líquido para saúde do fígado devidamente aprovado e regularizado pela ANVISA (Agência Nacional de Vigilância Sanitária), garantindo sua segurança e qualidade."
  },
  {
    question: "Quais são os 6 nutrientes especiais?",
    answer: "Fignar contém uma combinação exclusiva de 6 nutrientes especialmente selecionados para apoiar a saúde hepática. A fórmula premium foi desenvolvida para oferecer suporte nutricional completo ao fígado."
  },
  {
    question: "Qual o melhor pacote para comprar?",
    answer: "O pacote de 3 frascos é o mais popular, oferecendo melhor custo-benefício para um tratamento de 3 meses. Também há a oferta especial 'Compre 1 Leve 3' com desconto máximo. Para melhores resultados com o suplemento alimentar líquido para saúde do fígado, recomenda-se uso contínuo."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o Fignar, o suplemento alimentar líquido para saúde do fígado
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};