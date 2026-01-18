import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "Jogo Multiplayer em Tempo Real",
    description:
      "Projeto desenvolvido para aplicar conceitos de backend em tempo real utilizando WebSockets. O servidor é responsável por gerenciar salas, jogadores conectados, estado das partidas e sincronização entre clientes.",
    images: [
      "/projects/jokenpo.png",
      "/projects/jokenpo2.png",
    ],
    stack: ["Node.js", "Socket.IO", "TypeScript", "React"],
    github: "https://github.com/VictorGebeluca/Jokenpo-Online.git",
    demo: "https://jokenpo-frontend-wj14.onrender.com",
    deployHost: "Render"
  },
];

export default function Projects() {
  return (
    <section className="bg-zinc-950 min-h-screen flex flex-col justify-center">
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

        {/* Projects */}
        <div className="mt-16 space-y-24">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className={`grid gap-10 md:grid-cols-2 md:items-center ${
                idx !== projects.length - 1 ? "border-b border-zinc-800 pb-16" : ""
              }`}
            >
              {/* Images Container */}
              <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 grid grid-cols-2 gap-2 p-2 order-2 md:order-1">
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
                {/* Badge de Status/Deploy */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                    Deploy no {project.deployHost} • Live
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-zinc-100">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-blue-500/10 px-2 py-1 text-[10px] font-semibold text-blue-400 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links de Ação */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-500 hover:scale-105"
                    >
                      Acessar Projeto <FiExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-md border border-zinc-700 px-5 py-2.5 text-sm font-bold text-zinc-300 transition hover:bg-zinc-800 hover:border-zinc-500"
                  >
                    <SiGithub className="w-4 h-4" /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}