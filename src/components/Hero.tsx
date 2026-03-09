import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-20 lg:pt-24">
      <div className="relative h-[600px]">
        <div className="absolute inset-0 bg-gray-50">
          <div className="absolute inset-0 bg-gray-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-full lg:max-w-2xl text-white">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-laranja text-sm font-medium tracking-wide mb-6">
              Psicologia Clínica | TCC e terapias contextuais
            </span>
            <h1 className="text-2xl md:text-2xl lg:text-4xl font-poppins font-bold text-stone-800 leading-[1.1] mb-6 text-balance">
              Cuidar da <span className='text-musgo'>saúde</span> mental é olhar para a experiência <span className='text-musgo'>humana</span>.
            </h1>
            <h1 className="text-lg text-stone-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 font-poppins font-normal">
              A psicoterapia é um espaço de encontro, escuta e construção de novas formas de lidar com emoções, relações e desafios da vida.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
              href="https://api.whatsapp.com/send/?phone=%2B558299993802&text&type=phone_number&app_absent=0&wame_ctl=1"
              className="inline-block bg-laranja dark:laranja text-white px-6 md:px-8 py-3 rounded-md font-semibold hover:bg-orange-700 dark:hover:bg-white hover:dark:text-gold-500 transition-colors text-sm md:text-base text-center"
            >
              Agende uma Consulta
            </a>
            <a
              href="#palestras-e-projetos"
              className="inline-block bg-musgo dark:bg-white text-white px-6 md:px-8 py-3 rounded-md font-semibold hover:bg-musgo-escuro dark:hover:bg-white transition-colors text-sm md:text-base text-center"
            >
              Palestras e Projetos
            </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}