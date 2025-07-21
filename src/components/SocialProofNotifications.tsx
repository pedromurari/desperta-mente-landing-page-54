import { useState, useEffect } from 'react';

const notifications = [
  "✅ Carla de Belo Horizonte se matriculou no curso.",
  "💬 Fernanda de São Paulo entrou em contato no WhatsApp.",
  "🕒 Juliana de Porto Alegre está negociando com a equipe.",
  "✅ Renata de Salvador se matriculou no curso.",
  "💬 Larissa de Recife chamou a equipe no WhatsApp.",
  "🕒 Amanda de Fortaleza está conversando com uma consultora.",
  "✅ Priscila de Campinas finalizou sua matrícula.",
  "💬 Tatiane de Ribeirão Preto fez contato via WhatsApp.",
  "🕒 Bruna do Rio de Janeiro está avaliando a proposta com a equipe.",
  "✅ Milena de Brasília se matriculou agora há pouco.",
  "💬 Gisele de Curitiba chamou no WhatsApp com dúvidas.",
  "🕒 Aline de São Luís pediu para falar com uma especialista.",
  "✅ Rafaela de Florianópolis garantiu sua vaga no curso.",
  "💬 Letícia de Goiânia entrou em contato pelo WhatsApp.",
  "🕒 Camila de Maceió está em conversa com o time de matrículas.",
  "✅ Beatriz de João Pessoa realizou sua inscrição agora.",
  "💬 Silvia de Teresina chamou no WhatsApp para mais informações.",
  "🕒 Luana de Natal está negociando o plano de matrícula.",
  "✅ Viviane de Aracaju completou sua inscrição no curso.",
  "💬 Thaís de Campo Grande está falando com o atendimento via WhatsApp."
];

export const SocialProofNotifications = () => {
  const [currentNotification, setCurrentNotification] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [usedNotifications, setUsedNotifications] = useState<number[]>([]);

  const getRandomNotification = () => {
    let availableIndexes = [];
    
    // Se já usamos todas as notificações, resetar
    if (usedNotifications.length >= notifications.length) {
      setUsedNotifications([]);
      availableIndexes = Array.from({ length: notifications.length }, (_, i) => i);
    } else {
      // Pegar apenas as não usadas
      availableIndexes = Array.from({ length: notifications.length }, (_, i) => i)
        .filter(index => !usedNotifications.includes(index));
    }

    const randomIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    setUsedNotifications(prev => [...prev, randomIndex]);
    return notifications[randomIndex];
  };

  const showNotification = () => {
    const notification = getRandomNotification();
    setCurrentNotification(notification);
    setIsVisible(true);

    // Esconder após 6 segundos
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentNotification(null);
      }, 300); // Tempo para a animação de fade out
    }, 6000);
  };

  useEffect(() => {
    // Primeira notificação após 3 segundos
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 3000);

    // Depois a cada 15 segundos
    const interval = setInterval(() => {
      showNotification();
    }, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!currentNotification) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-sm">
      <div
        className={`
          bg-white border border-border shadow-lg rounded-lg p-4
          transition-all duration-300 ease-in-out transform
          ${isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-95'
          }
        `}
      >
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div className="flex-1">
            <p className="text-sm text-foreground font-medium leading-relaxed">
              {currentNotification}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Agora há pouco
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};