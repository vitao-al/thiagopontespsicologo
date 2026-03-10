import React, { useEffect, useRef, useState } from 'react';
import { Brain, UserCircle, Users,Scale, Route, HeartPulse } from 'lucide-react';

const services = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'Ansiedade e sobrecarga emocional',
    description: 'Manejo de preocupações persistentes, tensão e experiências de sobrecarga no cotidiano.'
  },
  {
    icon: <UserCircle className="h-8 w-8" />,
    title: 'Autocrítica e autoestima',
    description: 'Trabalho com formas rígidas de autocrítica e desenvolvimento de uma relação mais equilibrada consigo.'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Relações e vínculos',
    description: 'Reflexão sobre dinâmicas relacionais e construção de formas mais saudáveis de vínculo.'
  },
  {
    icon: <Scale className="h-8 w-8" />,
    title: 'Regulação emocional',
    description: 'Desenvolvimento de maior consciência emocional e de estratégias mais adaptativas de regulação.'
  },
  {
    icon: <Route className="h-8 w-8" />,
    title: 'Transições e momentos de vida',
    description: 'Acompanhamento em períodos de mudança, perdas e processos de reorganização pessoal.'
  },
  {
    icon: <HeartPulse className="h-8 w-8" />,
    title: 'Dor física e sofrimento emocional',
    description: 'Compreensão da relação entre experiências corporais e emocionais no processo terapêutico.'
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white dark:bg-black p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="text-laranja dark:text-gold-500 mb-4">{service.icon}</div>
      <h3 className="text-lg md:text-xl font-semibold font-serif text-neutral-900 dark:text-white mb-2">{service.title}</h3>
      <p className="text-sm md:text-base text-gray-600 dark:text-white">{service.description}</p>
    </div>
  );
};

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-laranja dark:text-laranja mb-4 ">ÁREAS DE ATUAÇÃO</h2>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-poppins font-normal">Como posso te ajudar?</h2>
          <p className="text-neutral-800 dark:text-white max-w-2xl mx-auto font-poppins font-normal">
            A psicoterapia é um espaço seguro para desenvolver estratégias eficazes para lidar com suas emoções e desafios da vida.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-poppins font-normal">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}