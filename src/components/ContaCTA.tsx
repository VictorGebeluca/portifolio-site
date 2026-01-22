import { FiSend, FiArrowRight } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

const ContactCTA = () => {
  return (
    <section className="bg-zinc-950 py-20 px-4">
      <div className="max-w-4xl mx-auto relative">
        {/* Efeito de brilho no fundo */}
        <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full" />

        <div className="relative border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Buscando novas conexões
          </h2>
          
          <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
            Atualmente procuro minha primeira oportunidade como <span className="text-blue-500">Estagiário de Desenvolvimento</span>. 
            Se você busca alguém dedicado e com boa base em Node.js, vamos conversar!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Botão de E-mail / Currículo */}
            <a
              href="mailto:victormiguel01@gmail.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
            >
              <FiSend className="w-5 h-5" />
              E-mail
            </a>

            {/* Botão Secundário WhatsApp */}
            <a
              href="https://wa.me/5541997690891"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-8 py-4 rounded-lg font-bold transition-all w-full sm:w-auto justify-center border border-zinc-700"
            >
              <SiWhatsapp className="w-5 h-5 text-green-500" />
              WhatsApp
              <FiArrowRight className="w-4 h-4 text-zinc-500 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <p className="mt-8 text-zinc-500 text-sm italic">
            Disponível para Curitiba e oportunidades remotas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;