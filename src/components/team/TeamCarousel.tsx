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
          <a
            href="https://www.instagram.com/psithiagopontes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-laranja px-6 py-3 rounded-lg transition-colors font-semibold hover:text-white transition-colors group inline-flex items-center"
          >
            <p className="text-laranja font-bold font-poppins text-lg hover:text-berge dark:hover:text-white transition-colors group inline-flex items-center">Vamos caminhar juntos nesse processo?</p><p className="ml-2 group-hover:translate-x-2 transition-transform">→</p>
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
