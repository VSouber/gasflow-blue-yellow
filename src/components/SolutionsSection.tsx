import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Home, Factory, Store } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Home,
      title: "Residencial",
      description: "Instalação e manutenção de sistemas de gás para residências, garantindo segurança e eficiência para sua família.",
      features: ["Instalação completa", "Manutenção preventiva", "Atendimento 24h", "Certificação técnica"]
    },
    {
      icon: Building,
      title: "Predial",
      description: "Soluções completas para prédios e condomínios, desde o projeto até a manutenção contínua.",
      features: ["Projeto técnico", "Instalação predial", "Manutenção programada", "Laudos técnicos"]
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Sistemas robustos para indústrias, atendendo às mais altas exigências de segurança e performance.",
      features: ["Alta capacidade", "Sistemas automatizados", "Monitoramento remoto", "Suporte especializado"]
    },
    {
      icon: Store,
      title: "Comercial",
      description: "Soluções personalizadas para estabelecimentos comerciais, restaurantes e empresas.",
      features: ["Projeto personalizado", "Instalação rápida", "Manutenção flexível", "Consultoria técnica"]
    }
  ];

  return (
    <section id="solucoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossas <span className="text-primary">Soluções</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nossa ampla experiência de mercado permite que possamos prever soluções para 
            residências, prédios, condomínios, comércios e indústrias. Nossa equipe está 
            disponível 24 horas, 7 dias por semana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 group">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8 text-background" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {solution.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {solution.description}
                </p>
                
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full">
                  Saiba mais
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="px-8">
            Solicite um orçamento personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;