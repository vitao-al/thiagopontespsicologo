import React, { useEffect, useRef, useState } from 'react';
import { HeartHandshake, Presentation, BookOpen, Users } from 'lucide-react';

const services = [
  {
    icon: <HeartHandshake className="h-8 w-8" />,
    title: 'Psicoterapia',
    description: (
      <>
        É um espaço de escuta, reflexão e construção sobre as diferentes experiências da vida.{' '}
        Atendimento psicológico para <strong>adultos</strong>. Nos formatos: <strong>presencial</strong> e <strong>online</strong>.
      </>
    )
  },
  {
    icon: <Presentation className="h-8 w-8" />,
    title: 'Projetos e palestras',
    description: (
      <>
        Desenvolvimento de atividades voltadas à <strong>promoção da saúde mental em diferentes contextos institucionais</strong>, considerando seus <strong> objetivos e as necessidades.</strong>{' '}
        Palestras, rodas de conversa e encontros formativos para <strong>empresas</strong>, <strong>instituições</strong>, <strong>escolas</strong> e organizações.
      </>
    )
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: 'Grupo de estudos em terapias cognitivas e contextuais',
    description: (
      <>
        Espaço de <strong>estudo</strong> e diálogo voltado a <strong>estudantes de psicologia</strong> e <strong>psicólogos</strong> interessados em aprofundar a compreensão das abordagens <strong>cognitivas</strong>, <strong>comportamentais</strong> e <strong>contextuais</strong>.
      </>
    )
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Encontros temáticos em saúde mental',
    description: (
      <>
        Espaço de estudo e diálogo voltado a <strong>estudantes de psicologia</strong> e <strong>psicólogos</strong> interessados em aprofundar a compreensão das abordagens <strong>cognitivas</strong>, <strong>comportamentais</strong> e <strong>contextuais</strong>.
      </>
    )
  }
];

type Service = {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
};

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
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
      className={`bg-gray-50 shadow-xl dark:bg-black p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="text-musgo dark:musgo mb-4">{service.icon}</div>
      <h3 className="text-lg md:text-xl font-semibold font-serif text-neutral-900 dark:text-white mb-2">{service.title}</h3>
      <p className="text-sm md:text-base text-gray-600 dark:text-white">{service.description}</p>
    </div>
  );
};

export default function Services() {
  return (
    <section id="servicos" className="bg-white dark:bg-neutral-800">
      <div className="container mx-auto px-4 py-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-musgo dark:text-white mb-4">MEUS SERVIÇOS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 font-poppins font-normal">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}