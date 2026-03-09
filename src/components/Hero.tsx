import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-20 lg:pt-24">
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="/hero.png"
            alt="Escritório de advocacia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-full lg:max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-normal font-poppins mb-6">
              Relacione-se com suas <span className="text-verde-musgo" >emoções</span>.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
               Te ajudo a construir uma vida mais significativa através de práticas baseadas em evidências, acolhimento e ética.
            </p>
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