import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(47) 2122-0942",
      description: "Atendimento 24h"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@empresa.com",
      description: "Resposta em até 2h"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "Santa Catarina - SC",
      description: "Atendemos toda região"
    },
    {
      icon: Clock,
      title: "Horários",
      info: "24h por dia",
      description: "7 dias por semana"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-background to-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você com soluções profissionais em gás natural e GLP.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-border/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-lg font-bold text-primary mb-1">{item.info}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
            
            <Card className="p-6 bg-gradient-to-br from-primary to-secondary text-background">
              <h3 className="text-xl font-bold mb-3">Atendimento de Emergência</h3>
              <p className="mb-4">
                Para situações de emergência, nossa equipe está disponível 24 horas por dia, 
                7 dias por semana. Ligue agora mesmo!
              </p>
              <Button variant="secondary" size="lg" className="w-full">
                <Phone className="w-5 h-5 mr-2" />
                Ligação de Emergência
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Solicite seu Orçamento</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome *
                  </label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone *
                  </label>
                  <Input placeholder="(47) 99999-9999" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  E-mail *
                </label>
                <Input type="email" placeholder="seu@email.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tipo de Serviço
                </label>
                <select className="w-full p-3 border border-border rounded-md bg-background text-foreground">
                  <option>Selecione o tipo de serviço</option>
                  <option>Instalação Residencial</option>
                  <option>Instalação Predial</option>
                  <option>Instalação Industrial</option>
                  <option>Instalação Comercial</option>
                  <option>Manutenção</option>
                  <option>Emergência</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem *
                </label>
                <Textarea 
                  placeholder="Descreva seu projeto ou necessidade..."
                  rows={4}
                />
              </div>
              
              <Button size="lg" className="w-full">
                Enviar Solicitação
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                * Campos obrigatórios. Responderemos em até 2 horas úteis.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;