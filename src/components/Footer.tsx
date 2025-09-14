import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-dark text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-yellow-dark rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-background rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Industrial Gás</h3>
                <p className="text-sm text-background/70">Soluções Profissionais</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              Especialistas em instalação e manutenção de redes de GLP e gás natural 
              para residências, empresas e indústrias.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
            <ul className="space-y-3 text-background/80">
              <li>Instalação Residencial</li>
              <li>Instalação Predial</li>
              <li>Instalação Industrial</li>
              <li>Instalação Comercial</li>
              <li>Manutenção e Reparo</li>
              <li>Atendimento de Emergência</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-background/80">(47) 2122-0942</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-background/80">contato@empresa.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-background/80">Santa Catarina - SC</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-background/80">24h - 7 dias por semana</span>
              </div>
            </div>
          </div>

          {/* Emergency */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Emergência 24h</h4>
            <div className="bg-gradient-to-br from-secondary to-yellow-dark p-6 rounded-lg">
              <h5 className="font-bold text-blue-dark mb-2">Atendimento Imediato</h5>
              <p className="text-blue-dark/80 text-sm mb-4">
                Em caso de emergência, nossa equipe está sempre pronta para atender.
              </p>
              <div className="text-2xl font-bold text-blue-dark">
                (47) 2122-0942
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-background/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm mb-4 md:mb-0">
            © 2024 Industrial Gás. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-background/60">
            <a href="#" className="hover:text-secondary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-secondary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-secondary transition-colors">Certificações</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;