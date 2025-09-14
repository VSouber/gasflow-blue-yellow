import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <>
      {/* Top contact bar */}
      <div className="bg-secondary py-2 px-4">
        <div className="container mx-auto flex justify-end items-center gap-4 text-sm">
          <div className="flex items-center gap-2 text-secondary-foreground">
            <Phone className="w-4 h-4" />
            <span>(47) 2122-0942</span>
          </div>
          <div className="flex items-center gap-2 text-secondary-foreground">
            <Mail className="w-4 h-4" />
            <span>contato@empresa.com</span>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <header className="bg-background shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-background rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Industrial Gás</h1>
                <p className="text-xs text-muted-foreground">Soluções Profissionais</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#solucoes" className="text-foreground hover:text-primary transition-colors font-medium">
                Soluções
              </a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors font-medium">
                Sobre
              </a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors font-medium">
                Contato
              </a>
            </nav>

            {/* CTA Button */}
            <Button variant="default" size="lg" className="hidden md:flex">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;