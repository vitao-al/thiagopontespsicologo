import React, { useState } from 'react';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import { lawyers } from '../../data/lawyers';
import LawyerCard from './LawyerCard';

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) =>
      current === lawyers.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setCurrentIndex((current) =>
      current === 0 ? lawyers.length - 1 : current - 1
    );
  };

  return (
    <section id="equipe" className="py-20 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="relative max-w-5xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center min-h-[300px] w-full overflow-hidden">
            {/* Carrossel */}
            <div
              className="flex transition-transform duration-300 ease-in-out w-full"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {lawyers.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="w-full flex-shrink-0 px-2 md:px-4 flex justify-center"
                >
                  <LawyerCard lawyer={lawyer} />
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação 
          <div className="hidden md:block">
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

           Botões de navegação mobile 
          <div className="flex md:hidden justify-between w-full px-4 mt-4">
            <button
              onClick={prev}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={next}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          */}

          {/* Indicadores de navegação */}
          <div className="flex justify-center mt-6 space-x-2">
            {lawyers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? ' bg-verde-musgo ' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-laranja font-bold font-poppins text-lg hover:text-berge dark:hover:text-white transition-colors group inline-flex items-center">A psicoterapia pode ser um espaço para olhar com mais cuidado para o que você está vivendo.</p>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B558299993802&text&type=phone_number&app_absent=0&wame_ctl=1"
              className="inline-block bg-laranja dark:bg-gold-500 text-white px-6 md:px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gold-500 dark:hover:bg-white hover:dark:text-gold-500 transition-colors text-sm md:text-base"
            >
              Agende uma Consulta
            </a>
        </div>
        </div>
      </div>
    </section>
  );
}
