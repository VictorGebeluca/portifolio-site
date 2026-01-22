import { SiGithub } from 'react-icons/si';
import { FiExternalLink, FiCode } from 'react-icons/fi';

const projects = [
  {
    title: "Smart Log Compressor & Router",
    description:
      "Middleware de infraestrutura desenvolvido para mitigar gargalos de I/O em bancos de dados. O sistema utiliza Redis como buffer de alta velocidade para agrupar logs redundantes através de hashing MD5, persistindo resumos estatísticos no MongoDB Atlas via Cron Jobs. Inclui suíte de testes unitários para validação de integridade de dados.",
    images: ["/projects/test.png"],
    stack: ["Node.js", "Redis", "MongoDB Atlas", "TypeScript", "Jest", "Zod"],
    github: "https://github.com/VictorGebeluca/smart-log-compressor.git",
    deployHost: null // Removido o host de deploy aqui
  },
  {
    title: "Jogo Multiplayer em Tempo Real",
    description:
      "Projeto desenvolvido para aplicar conceitos de backend em tempo real utilizando WebSockets. O servidor é responsável por gerenciar salas, jogadores conectados, estado das partidas e sincronização entre clientes.",
    images: ["/projects/jokenpo.png", "/projects/jokenpo2.png"],
    stack: ["Node.js", "Socket.IO", "TypeScript", "React"],
    github: "https://github.com/VictorGebeluca/Jokenpo-Online.git",
    demo: "https://jokenpo-frontend-wj14.onrender.com",
    deployHost: "Render"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-zinc-950 min-h-screen flex flex-col justify-center relative">
      <div className="mx-auto max-w-5xl px-6 py-24">
        
        {/* Header */}
        <header className="max-w-xl border-b border-zinc-800 pb-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100">
            Projetos Selecionados
          </h2>
          <p className="mt-4 text-zinc-400 text-sm">
            Aplicações focadas em lógica de backend, escalabilidade e performance.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="mt-16 space-y-24">
          {projects.map((project) => (
            <article
              key={project.title}
              className="grid gap-10 md:grid-cols-2 md:items-center border-b border-zinc-800/50 pb-16"
            >
              {/* Images Container */}
              <div className={`group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 grid ${
                project.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
              } gap-2 p-2 order-2 md:order-1`}>
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center max-h-80 md:max-h-96 overflow-hidden rounded-lg bg-zinc-950"
                  >
                    <img
                      src={img}
                      alt={`${project.title} ${i + 1}`}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="max-w-xl order-1 md:order-2">
                {/* Badge de Status - Renderiza apenas se houver deployHost */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                    {project.deployHost ? `Deploy no ${project.deployHost} • Live` : 'Serviço Backend • Ativo'}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-zinc-100">{project.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded bg-blue-500/10 px-2 py-1 text-[10px] font-semibold text-blue-400 border border-blue-500/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-500 hover:scale-105">
                      Acessar Projeto <FiExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-md border border-zinc-700 px-5 py-2.5 text-sm font-bold text-zinc-300 transition hover:bg-zinc-800 hover:border-zinc-500">
                    <SiGithub className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}

          {/* New: "More Projects Coming Soon" Card */}
          <article className="flex flex-col items-center justify-center py-12 px-6 rounded-2xl border-2 border-dashed border-zinc-800 bg-zinc-900/20">
            <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-4 border border-zinc-800">
              <FiCode className="text-zinc-500 w-6 h-6 animate-pulse" />
            </div>
            <h3 className="text-zinc-100 font-bold text-lg text-center tracking-tight">
              Novos projetos em desenvolvimento...
            </h3>
            <p className="text-zinc-500 text-sm text-center mt-2 max-w-sm">
              Estou trabalhando em novas soluções backend e APIs para expandir meu portfólio. Fique de olho no meu GitHub!
            </p>
          </article>
        </div>

        {/* Linha Divisória Estilizada */}
        <div className="mt-24 relative flex justify-center items-center">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          <div className="relative bg-zinc-950 px-4">
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}