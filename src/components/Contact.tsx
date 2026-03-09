import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-poppins font-normal text-gray-900 dark:text-white mb-4">Entre em Contato</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-poppins font-normal">
            Estamos à disposição para atender suas necessidades.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white dark:bg-neutral-800 p-4 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-poppins font-normal text-laranja dark:text-laranja mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-verde-musgo dark:text-verde-musgo mt-1" />
                  <div>
                    <h4 className="font-poppins font-normal text-gray-900 dark:text-white">Endereço</h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400"> Rua comendador Palmeira, 493 - Empresarial Comendador Palmeira, sala 114 (Farol) Maceió/AL</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-verde-musgo dark:text-verde-musgo mt-1" />
                  <div>
                    <h4 className="font-poppins font-normal text-gray-900 dark:text-white">Telefone</h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">+55 (82) 9999-3802</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-verde-musgo dark:text-verde-musgo mt-1" />
                  <div>
                    <h4 className="font-poppins font-normal text-gray-900 dark:text-white">E-mail</h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">psithiagopontes@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-verde-musgo dark:text-verde-musgo mt-1" />
                  <div>
                    <h4 className="font-poppins font-normal text-gray-900 dark:text-white">Horário de Atendimento</h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Hora marcada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.2579401122216!2d-35.7349994!3d-9.6589879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x701456639aa171f%3A0xccab7b5c3f755f71!2sPsic%C3%B3logo%20Thiago%20Pontes%20-%20Macei%C3%B3%20e%20On-line!5e0!3m2!1spt-BR!2sbr!4v1773077840982!5m2!1spt-BR!2sbr"
              className="w-full h-full rounded-lg border-2 border-gray-200 dark:border-gray-700"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}