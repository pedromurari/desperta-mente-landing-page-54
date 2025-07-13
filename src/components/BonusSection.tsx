
import { Gift, Users, Brain, Heart, CheckCircle } from 'lucide-react';

export const BonusSection = () => {
  const bonuses = [
    {
      icon: <Users className="h-8 md:h-12 w-8 md:w-12 text-white" />,
      title: "10 Sessões de Supervisão Clínica",
      value: "R$ 1.200,00",
      description: "Acompanhamento personalizado com supervisores experientes"
    },
    {
      icon: <Brain className="h-8 md:h-12 w-8 md:w-12 text-white" />,
      title: "Curso Essencial Practitioner em PNL",
      value: "R$ 790,00", 
      description: "Técnicas avançadas de Programação Neurolinguística"
    },
    {
      icon: <Heart className="h-8 md:h-12 w-8 md:w-12 text-white" />,
      title: 'Workshop "Cicatrizes que Curam"',
      value: "R$ 60,00",
      description: "Metodologia exclusiva para transformar traumas em força"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-idm-navy to-idm-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center bg-idm-gold text-idm-navy px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-base md:text-lg mb-4 md:mb-6">
              <Gift className="mr-2 h-5 w-5 md:h-6 md:w-6" />
              BÔNUS EXCLUSIVOS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Garanta Hoje e Receba <span className="text-idm-gold">GRÁTIS</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto px-2">
              Além da formação completa, você recebe bônus especiais que potencializam 
              ainda mais seu desenvolvimento profissional
            </p>
          </div>

          {/* Grid de bônus */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {bonuses.map((bonus, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 mx-2 md:mx-0"
              >
                <div className="bg-idm-gold rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                  {bonus.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                  {bonus.title}
                </h3>
                <div className="text-2xl md:text-3xl font-bold text-idm-gold mb-3 md:mb-4">
                  {bonus.value}
                </div>
                <p className="text-gray-200 text-sm md:text-base">
                  {bonus.description}
                </p>
              </div>
            ))}
          </div>

          {/* Valor total dos bônus */}
          <div className="bg-idm-gold rounded-2xl p-6 md:p-12 text-center mx-2 md:mx-0">
            <h3 className="text-xl md:text-3xl font-bold text-idm-navy mb-3 md:mb-4">
              Valor Total dos Bônus
            </h3>
            <div className="text-4xl md:text-6xl font-bold text-idm-navy mb-3 md:mb-4">
              R$ 2.050,00
            </div>
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <CheckCircle className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 text-idm-navy" />
              <span className="text-lg md:text-xl font-semibold text-idm-navy">
                GRATUITOS para quem garantir a vaga hoje!
              </span>
            </div>
            <p className="text-base md:text-lg text-idm-navy max-w-2xl mx-auto">
              Esta é uma oportunidade única e por tempo limitado. 
              Não perca a chance de transformar sua vida com essa formação completa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
