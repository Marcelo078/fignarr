import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground fill-current" />
            </div>
            <span className="text-xl font-bold">Fignar Gotas</span>
          </div>
          
          <p className="text-sm max-w-2xl mx-auto opacity-90">
            <strong>Fignar</strong> é um suplemento alimentar líquido para saúde do fígado com 6 nutrientes especiais. 
            Este site é uma página informativa de afiliado. Para mais informações sobre o produto, acesse o site oficial 
            através dos links disponibilizados.
          </p>
          
          <div className="border-t border-secondary-foreground/20 pt-6">
            <p className="text-xs opacity-75">
              <strong>Aviso Legal:</strong> Os resultados podem variar de pessoa para pessoa. Este é um suplemento alimentar 
              e não substitui uma alimentação equilibrada. Consulte um profissional de saúde antes de iniciar o uso. 
              Produto aprovado pela ANVISA. Venda mediante prescrição de profissional habilitado, podendo este ser 
              substituído por declaração do consumidor.
            </p>
          </div>
          
          <div className="text-xs opacity-75">
            © 2025 Página de Afiliado Fignar. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};