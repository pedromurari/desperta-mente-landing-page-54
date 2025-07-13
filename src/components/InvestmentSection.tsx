
import { CreditCard, Banknote, CheckCircle, Clock, Users, Award } from 'lucide-react';
import { CTAButton } from './CTAButton';

export const InvestmentSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-idm-navy mb-4 md:mb-6">
              Investimento na sua <span className="text-idm-gold">Transformação</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto px-2">
              Uma oportunidade única de investir em você mesmo e construir uma carreira de propósito
            </p>
          </div>

          {/* Comparação de preços */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Preço original */}
            <div className="bg-gray-100 rounded-2xl p-6 md:p-8 text-center relative mx-2 md:mx-0">
              <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-red-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold">
                PREÇO NORMAL
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-3 md:mb-4">Valor Original</h3>
              <div className="text-3xl md:text-4xl font-bold text-gray-500 mb-3 md:mb-4 line-through">
                R$ 3.200,00
              </div>
              <p className="text-gray-600 text-sm md:text-base">Preço sem os bônus exclusivos</p>
            </div>

            {/* Preço promocional */}
            <div className="bg-gradient-to-br from-idm-gold to-yellow-500 rounded-2xl p-6 md:p-8 text-center relative transform md:scale-105 shadow-xl mx-2 md:mx-0">
              <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-idm-navy text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold">
                OFERTA LIMITADA
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-idm-navy mb-3 md:mb-4">Investimento Especial</h3>
              <div className="mb-4 md:mb-6">
                <div className="text-base md:text-lg text-idm-navy mb-2">15x de</div>
                <div className="text-4xl md:text-5xl font-bold text-idm-navy mb-2">
                  R$ 99,70
                </div>
                <div className="text-base md:text-lg text-idm-navy">via boleto</div>
              </div>
              <div className="border-t border-idm-navy/20 pt-3 md:pt-4">
                <div className="text-base md:text-lg text-idm-navy mb-2">ou à vista</div>
                <div className="text-2xl md:text-3xl font-bold text-idm-navy">
                  R$ 1.197,00
                </div>
                <div className="text-sm text-idm-navy">(Pix)</div>
              </div>
            </div>
          </div>

          {/* Benefícios inclusos */}
          <div className="bg-idm-light-blue rounded-2xl p-6 md:p-12 mb-8 md:mb-12 mx-2 md:mx-0">
            <h3 className="text-2xl md:text-3xl font-bold text-idm-navy text-center mb-6 md:mb-8">
              O que está incluído no seu investimento
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                <Award className="mr-0 md:mr-4 h-8 w-8 text-idm-gold flex-shrink-0 mb-2 md:mb-0" />
                <div>
                  <h4 className="font-bold text-idm-navy mb-2">Acesso vitalício</h4>
                  <p className="text-gray-700 text-sm md:text-base">Estude no seu ritmo, para sempre</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                <CheckCircle className="mr-0 md:mr-4 h-8 w-8 text-idm-gold flex-shrink-0 mb-2 md:mb-0" />
                <div>
                  <h4 className="font-bold text-idm-navy mb-2">Certificado reconhecido</h4>
                  <p className="text-gray-700 text-sm md:text-base">Validação oficial da sua formação</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                <Users className="mr-0 md:mr-4 h-8 w-8 text-idm-gold flex-shrink-0 mb-2 md:mb-0" />
                <div>
                  <h4 className="font-bold text-idm-navy mb-2">Comunidade exclusiva</h4>
                  <p className="text-gray-700 text-sm md:text-base">Networking com outros profissionais</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formas de pagamento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-white border-2 border-idm-blue rounded-2xl p-6 md:p-8 text-center mx-2 md:mx-0">
              <CreditCard className="h-10 md:h-12 w-10 md:w-12 text-idm-blue mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-idm-navy mb-3 md:mb-4">Parcelado</h3>
              <div className="text-2xl md:text-3xl font-bold text-idm-blue mb-2">15x R$ 99,70</div>
              <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">Via boleto bancário</p>
              <ul className="text-left space-y-2">
                <li className="flex items-center justify-center md:justify-start">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-xs md:text-sm">Sem juros</span>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-xs md:text-sm">Facilita o orçamento</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 md:p-8 text-center text-white mx-2 md:mx-0">
              <Banknote className="h-10 md:h-12 w-10 md:w-12 text-white mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">À Vista</h3>
              <div className="text-2xl md:text-3xl font-bold mb-2">R$ 1.197,00</div>
              <p className="mb-3 md:mb-4 text-sm md:text-base">Via Pix</p>
              <div className="bg-white/20 rounded-lg p-2 md:p-3">
                <p className="text-xs md:text-sm font-semibold">💰 Economia de R$ 300,00</p>
              </div>
            </div>
          </div>

          {/* CTA final da seção */}
          <div className="text-center px-4">
            <CTAButton />
            <p className="text-base md:text-lg text-idm-navy mt-4 md:mt-6 font-semibold">
              ⏰ Oferta por tempo limitado - Garante sua vaga agora!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
