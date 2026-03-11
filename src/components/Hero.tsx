import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" className="pt-20 lg:pt-24">
      <div className="relative min-h-[500px]">
        <div className="absolute inset-0 bg-gray-50 dark:bg-black"></div>
        <div className="relative container mx-auto px-1 py-12 h-full">

          {/* Container principal: coluna no mobile, linha no desktop */}
          <div className="flex flex-col lg:flex-row items-center gap-10">

            {/* Coluna de texto */}
            <div className="w-full lg:w-1/2 text-white">
              <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-laranja text-sm font-medium tracking-wide mb-6">
                Psicologia Clínica | TCC e terapias contextuais
              </span>
              <h1 className="text-2xl md:text-2xl lg:text-4xl font-poppins font-bold text-stone-800 dark:text-white leading-[1.1] mb-6 text-balance">
                Cuidar da <span className='text-musgo'>saúde</span> mental é olhar para a experiência <span className='text-musgo'>humana</span>.
              </h1>
              <p className="text-lg text-stone-600 dark:text-white mb-8 leading-relaxed max-w-lg font-poppins font-normal">
                A psicoterapia é um espaço de encontro, escuta e construção de novas formas de lidar com emoções, relações e desafios da vida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B558299993802&text&type=phone_number&app_absent=0&wame_ctl=1"
                  className="inline-block bg-laranja text-white px-6 md:px-8 py-3 rounded-md font-semibold hover:bg-orange-700 dark:hover:bg-orange-700 transition-colors text-sm md:text-base text-center
                  transition-all group shadow-xl hover:shadow-2xl transform hover:-translate-y-1
                  "
                >
                  Agendamentos
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=%2B558299993802&text&type=phone_number&app_absent=0&wame_ctl=1"
                  className="inline-block bg-musgo text-white px-6 md:px-8 py-3 rounded-md font-semibold hover:bg-musgo-escuro dark:hover:bg-musgo-escuro transition-colors text-sm md:text-base text-center
                  transition-all group shadow-xl hover:shadow-2xl transform hover:-translate-y-1
                  "
                >
                  Palestras e Projetos
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}