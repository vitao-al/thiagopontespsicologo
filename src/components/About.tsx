import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Building, Car } from 'lucide-react';
import PlayerMusic from './player';
import CardHero from './team/CardHero';


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
    <section id="sobre" className="bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <CardHero/>
          <div>
            <h2 className="text-3xl font-normal font-poppins text-laranja dark:text-laranja mb-6">
              Sobre mim
            </h2>
            <p className="font-poppins font-normal text-neutral-900 dark:text-white mb-6">

              Sou psicólogo clínico e trabalho com a <strong>Terapia Cognitivo-Comportamental e terapias contextuais</strong> no cuidado em saúde mental.
              <p/>
              <p className="font-poppins font-normal text-neutral-900 dark:text-white mb-8">
              
              </p>
              Ao longo da minha trajetória, fui percebendo que o <strong>sofrimento humano</strong> raramente se apresenta de forma simples ou isolada.
              Muitas vezes ele <strong>aparece nas formas como pensamos, sentimos, nos relacionamos e lidamos com as diferentes experiências da vida.</strong>

              <p className="font-poppins font-normal text-neutral-900 dark:text-white mb-8">
              
              </p>
            <p className="text-neutral-900 dark:text-white mb-8">
              Na prática clínica, busco oferecer um <strong>espaço de escuta e reflexão sobre essas experiências,</strong> 
              favorecendo a <strong>compreensão de padrões emocionais, cognitivos e relacionais</strong> que atravessam a história de cada pessoa.
              <p>
                <p className="font-poppins font-normal text-neutral-900 dark:text-white mb-8">
              
              </p>

              </p>
              Meu trabalho é orientado por conhecimento científico e por uma escuta atenta às singularidades de cada trajetória, 
              compreendendo o <strong>cuidado em saúde mental como um processo de construção</strong> que pode se desenvolver em diferentes contextos da vida.
            </p>
            </p>
            
          </div>  
        </div>
      </div>
    </section>
  );
}