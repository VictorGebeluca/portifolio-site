import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-zinc-950 to-zinc-900 min-h-screen flex items-center px-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col justify-center">
        {/* Badge */}
        <span className="mb-6 w-fit rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
          Estudante de ADS • Em busca de novos desafios e estágio
        </span>

        {/* Imagem de perfil */}
        <img
          src="projects/profile.png"
          alt="Victor"
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-zinc-800"
        />

        {/* Nome */}
        <h1 className="text-5xl font-extrabold tracking-tight text-zinc-100 text-center">
          Victor Gebeluca
        </h1>

        {/* Cargo */}
        <h2 className="mt-4 text-xl font-medium text-zinc-300 text-center">
          Desenvolvedor em formação focado em soluções de Backend
        </h2>

        {/* Linha de destaque */}
        <div className="mt-6 h-px w-20 bg-blue-500 mx-auto" />

        {/* Stack principal */}
        <p className="mt-4 text-sm font-medium text-blue-400 text-center">
          Node.js • TypeScript • PostgreSQL • APIs REST
        </p>

        {/* Descrição */}
        <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-400 text-center mx-auto">
          Desenvolvendo aplicações robustas com foco em lógica estruturada e 
          escalabilidade. Apaixonado por transformar requisitos de negócio em 
          sistemas eficientes e APIs de alta performance.
        </p>

        {/* Ações */}
        <div className="mt-10 flex gap-4 justify-center">
          <a
            href="#projects"
            className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 hover:scale-105"
          >
            Conhecer Projetos
          </a>

          <a
            href="#contact"
            className="rounded-md border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-800"
          >
            Falar com Victor
          </a>
        </div>

        {/* Redes sociais */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="GitHub"
          >
            <SiGithub className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="LinkedIn"
          >
            <SiLinkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:email@example.com"
            className="text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="Email"
          >
            <MdEmail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;