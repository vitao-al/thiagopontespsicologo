import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

export default function Contact() {
  const instagramUrl = import.meta.env.LINK_INSTAGRAM;
  const mapsUrl = import.meta.env.LINK_MAPS;

  return (
    <section id="contato" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-poppins font-normal text-gray-900 dark:text-white mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mx-auto font-poppins font-normal">
            Estou à disposição para atender suas necessidades.
          </p>
        </div>
        <div className="text-center mt-6 mb-16 rounded-lg">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-laranja via-musgo to-berge text-white px-6 py-3 rounded-lg transition-colors font-semibold transition-all group shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <Instagram className="h-5 w-5" />
            <span>Seguir @psithiagopontes</span>
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white dark:bg-neutral-800 p-4 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-poppins font-normal text-laranja dark:text-laranja mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-musgo dark:text-musgo-escuro mt-1" />
                  <div>
                    <h4 className="font-poppins font-normal text-gray-900 dark:text-white">Endereço</h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Passando por mudanças - Novidades em breve</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-musgo dark:text-musgo-escuro mt-1" />
                  <div>
                    <h4 className="font-poppins font-normal text-gray-900 dark:text-white">Telefone</h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">+55 (82) xxx-xxxx (Em manutenção)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-musgo dark:text-musgo-escuro mt-1" />
                  <div>
                    <h4 className="font-poppins font-normal text-gray-900 dark:text-white">E-mail</h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">psithiagopontes@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-musgo dark:text-musgo-escuro mt-1" />
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
              src={mapsUrl}
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