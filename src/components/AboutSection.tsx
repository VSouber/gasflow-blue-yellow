import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Clock, Award, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Segurança Máxima",
      description: "Trabalhamos seguindo os mais rigorosos padrões de segurança do mercado"
    },
    {
      icon: Clock,
      title: "Disponibilidade 24/7",
      description: "Atendimento disponível 24 horas por dia, 7 dias por semana"
    },
    {
      icon: Award,
      title: "Qualidade Certificada",
      description: "Equipe técnica altamente qualificada e certificada"
    },
    {
      icon: Users,
      title: "Experiência Comprovada",
      description: "Anos de experiência atendendo residências, empresas e indústrias"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-blue-light to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="mb-6">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Sobre a
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                <span className="text-primary">Industrial</span> Gás
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Com equipe técnica altamente qualificada, a Industrial Gás atua na instalação 
              e manutenção de redes de GLP e gás Natural para residências, prédios, 
              condomínios e indústrias.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nosso trabalho é pautado nos mais altos níveis de excelência, sempre prezando 
              pela segurança de nossos clientes. Utilizamos apenas os melhores equipamentos 
              do mercado, oferecendo tecnologia e inovação em cada projeto.
            </p>
            
            <Button size="lg" className="mb-8">
              Conheça mais sobre nossa história
            </Button>
          </div>

          {/* Right content - Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-border/50">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;