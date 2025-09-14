import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-dark/80 via-blue-primary/60 to-yellow-primary/40"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 min-h-screen flex items-center">
        <div className="max-w-2xl">
          <div className="mb-6">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              Redes de GLP e Gás Natural
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-background mb-6 leading-tight">
            Sua <span className="text-secondary">segurança</span> e{" "}
            <span className="text-secondary">bem-estar</span> são nossos compromissos!
          </h1>
          
          <p className="text-xl text-background/90 mb-4 leading-relaxed">
            Oferecemos atendimento <strong>24h</strong> por dia, <strong>7</strong> dias por semana!
            Entre em contato através da nossa central:
          </p>
          
          <div className="mb-8">
            <a 
              href="tel:4721220942" 
              className="text-2xl md:text-3xl font-bold text-secondary hover:text-secondary/80 transition-colors"
            >
              (47) 2122-0942
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-4 rounded-full shadow-lg"
            >
              Solicite um orçamento
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-background text-background hover:bg-background hover:text-foreground text-lg px-8 py-4 rounded-full"
            >
              Conheça nossos serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;