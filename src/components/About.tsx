import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Building } from 'lucide-react';
import PlayerMusic from './player';

const stats = [
  {
    icon: <Award className="h-6 w-6" />,
    value: '19+',
    label: 'Anos de Experiência'
  },
  {
    icon: <Users className="h-6 w-6" />,
    value: '1000+',
    label: 'Clientes Atendidos'
  },
  {
    icon: <Building className="h-6 w-6" />,
    value: '95%',
    label: 'Taxa de Sucesso'
  }
];

export default function About() {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="py-20 bg-berge dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-normal font-poppins text-laranja dark:text-laranja mb-6">
              Sobre mim
            </h2>
            <p className="font-poppins font-normal text-neutral-900 dark:text-white mb-6">

              Olá, sou <strong>Thiago Pontes</strong>, psicólogo com atuação em <strong>Terapia Cognitivo-Comportamental (TCC)</strong>, para adultos, idosos e famílias.
              Acredito em um <strong>cuidado</strong> que integra <strong>ciência e prática</strong>, respeitando sua singularidade, 
              promovendo qualidade de vida e bem-estar emocional em cada etapa da vida.
              <p className="font-poppins font-normal text-neutral-900 dark:text-white mb-8">
              
              </p>
            <p className="text-neutral-900 dark:text-white mb-8">
              Minha missão é ajudar você a <strong>viver de forma mais leve e conectada com o que realmente importa</strong>.
              Seja lidando com ansiedade, enfrentando mudanças da vida ou buscando autoconhecimento,
              <strong>estou aqui para caminhar ao seu lado</strong>, unindo teoria e prática em uma abordagem acolhedora e transformadora.
            </p>
            </p>
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-verde-musgo dark:text-gold-500 flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-neutral-700 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div 
            ref={imageRef}
            className={`relative h-[400px] lg:h-[500px] transition-all duration-1000 ease-out ${
              isImageVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <img
              src="/thiagopontes3.jpg"
              alt="Escritório"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <PlayerMusic/>
        </div>
      </div>
    </section>
  );
}