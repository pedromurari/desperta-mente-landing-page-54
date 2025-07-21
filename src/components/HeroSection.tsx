
import { CTAButton } from './CTAButton';
import { CheckCircle, Star, Clock, Award } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-idm-navy via-idm-blue to-idm-navy min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Logo centralizado no topo com espaçamento ajustado */}
      <div className="absolute top-6 md:top-4 left-1/2 transform -translate-x-1/2 z-20">
        <img 
          src="/lovable-uploads/be006334-c69c-4c60-b770-c9aa91e01540.png" 
          alt="Instituto DespertaMENTE"
          className="h-16 w-16 md:h-20 md:w-20"
        />
      </div>
      
      <div className="container mx-auto px-4 py-32 md:py-28 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center bg-idm-gold text-idm-navy px-4 py-2 md:px-6 md:py-2 rounded-full font-semibold mb-6 md:mb-8 text-sm md:text-base">
            <Star className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            Formação Reconhecida
          </div>
          
          {/* Headline Principal - melhor alinhamento */}
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8 text-center">
            <span className="text-idm-gold">Desperte</span> o Psicanalista<br />
            que há <span className="text-idm-gold">dentro de você!</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-2xl mb-6 md:mb-8 text-gray-200 leading-relaxed px-2 text-center">
            Inicie uma jornada de <strong>autocura</strong>, <strong>propósito</strong> e <strong>realização profissional</strong>.<br />
            Porque <span className="text-idm-gold font-semibold">antes de cuidar do outro, você aprende a cuidar de si.</span>
          </p>
          
          {/* Chamada Principal */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 md:mb-10 border border-white/20 mx-2">
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-idm-gold text-center">
              Sua vida está prestes a tomar um novo rumo.
            </h2>
            <p className="text-base md:text-xl mb-4 md:mb-6 leading-relaxed text-center">
              Descubra como acessar o poder do inconsciente, dominar suas emoções e transformar 
              a si mesmo e ao mundo ao seu redor — <strong>mesmo começando do zero.</strong>
            </p>
            
            {/* Features rápidas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="flex items-center justify-center md:justify-start text-xs md:text-base">
                <CheckCircle className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5 text-idm-gold flex-shrink-0" />
                <span>100% Online</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-xs md:text-base">
                <Clock className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5 text-idm-gold flex-shrink-0" />
                <span>14 meses</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-xs md:text-base">
                <Award className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5 text-idm-gold flex-shrink-0" />
                <span>Certificado</span>
              </div>
              <div className="flex items-center justify-center md:justify-start text-xs md:text-base">
                <CheckCircle className="mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5 text-idm-gold flex-shrink-0" />
                <span>Acesso Vitalício</span>
              </div>
            </div>
          </div>
          
          {/* CTA Principal */}
          <div className="mb-6 md:mb-8 px-2">
            <CTAButton id="btn-whatsapp-hero" text="Quero me tornar um Psicanalista" />
          </div>
          
          {/* Urgência */}
          <p className="text-base md:text-lg text-idm-gold font-semibold px-4">
            🔥 Últimas vagas com bônus exclusivos - Garanta já a sua!
          </p>
        </div>
      </div>
      
      {/* Elementos decorativos */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};
