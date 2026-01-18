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
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section className="bg-zinc-950 min-h-screen flex flex-col justify-center">
      <div className="mx-auto max-w-5xl px-6 py-24">
        {/* Header */}
        <header className="max-w-xl border-b border-zinc-800 pb-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-100">
            Projetos
          </h2>
        </header>

        {/* Projects */}
        <div className="mt-16 space-y-24">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className={`grid gap-10 md:grid-cols-2 md:items-start ${
                idx !== projects.length - 1 ? "border-b border-zinc-800 pb-16" : ""
              }`}
            >
              {/* Images */}
              <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 grid grid-cols-2 gap-2 p-2 order-2 md:order-1">
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center max-h-80 md:max-h-96"
                  >
                    <img
                      src={img}
                      alt={`${project.title} ${i + 1}`}
                      className="max-h-full max-w-full object-contain rounded-md"
                    />
                  </div>
                ))}
              </div>

              {/* Content (título, descrição, stack, links) */}
              <div className="max-w-xl order-1 md:order-2 flex flex-col justify-center">
                {/* Título */}
                <h3 className="text-xl font-semibold text-zinc-100">
                  {project.title}
                </h3>

                {/* Descrição */}
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-8 flex gap-6 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    className="font-medium text-blue-400 transition hover:text-blue-300"
                  >
                    GitHub →
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="font-medium text-zinc-400 transition hover:text-zinc-300"
                    >
                      Demo →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
