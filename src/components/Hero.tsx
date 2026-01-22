import { SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-zinc-950 to-zinc-900 min-h-screen flex flex-col justify-center px-4 py-8 md:px-6 relative">
      <div className="flex-grow flex items-center">
        <div className="mx-auto flex w-full max-w-5xl flex-col justify-center items-center">
          
          {/* Badge */}
          <span className="mb-4 w-fit mx-auto rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-[10px] md:text-xs text-zinc-400 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Estudante de ADS • Em busca de novos desafios
          </span>

          {/* Imagem de perfil */}
          <img
            src="projects/profile.png"
            alt="Victor"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 object-cover border-4 border-zinc-800"
          />

          {/* Nome */}
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-zinc-100 text-center">
            Victor Gebeluca
          </h1>

          {/* Cargo */}
          <h2 className="mt-2 text-base md:text-lg font-medium text-zinc-300 text-center px-2">
            Desenvolvedor em formação focado em soluções assertivas
          </h2>

          {/* Linha de destaque */}
          <div className="mt-4 h-px w-20 bg-blue-500" />

          {/* Stack principal */}
          <p className="mt-2 text-xs md:text-sm font-medium text-blue-400 text-center uppercase tracking-wider">
            Node.js • TypeScript • PostgreSQL • APIs REST
          </p>

          {/* Descrição */}
          <p className="mt-4 max-w-sm md:max-w-lg text-sm leading-relaxed text-zinc-400 text-center">
            Desenvolvendo aplicações robustas com foco em lógica estruturada e 
            escalabilidade. Apaixonado por transformar requisitos de negócio em 
            sistemas eficientes e APIs de alta performance.
          </p>

          {/* Ações */}
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center items-center w-full">
            <a
              href="#projects"
              className="w-full md:w-auto text-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 hover:scale-105"
            >
              Conhecer Projetos
            </a>

            <a
              href="https://wa.me/5541997690891"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full md:w-auto text-center rounded-md border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition hover:border-green-500/50 hover:bg-zinc-800"
            >
              <SiWhatsapp className="w-4 h-4 inline mr-2 text-green-500 transition-transform group-hover:scale-110" /> Falar com Victor
            </a>
          </div>

          {/* Redes sociais */}
          <div className="mt-6 flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors" aria-label="GitHub">
              <SiGithub className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-100 transition-colors" aria-label="LinkedIn">
              <SiLinkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:victormiguel01@gmail.com" 
              className="text-zinc-400 hover:text-zinc-100 transition-colors" 
              aria-label="Email"
            >
              <MdEmail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="pt-4 pb-8 flex flex-col items-center gap-2">
        <a 
          href="#about" 
          className="flex flex-col items-center gap-2 transition-opacity hover:opacity-70"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">
            Deslize para baixo
          </span>
          <div className="w-[22px] h-[36px] rounded-full border-2 border-zinc-800 flex justify-center p-1.5">
            <div className="w-1 h-2 bg-blue-500 rounded-full animate-scroll-move"></div>
          </div>
        </a>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-move {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-scroll-move {
          animation: scroll-move 1.8s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default Hero;