import {
  SiNodedotjs,
  SiPostgresql,
  SiFirebase,
  SiTypescript,
  SiGit,
  SiLinux,
} from "react-icons/si";

const skills = [
  {
    name: "Node.js",
    desc: "Criação de APIs REST, autenticação e lógica de negócio",
    icon: SiNodedotjs,
    color: "text-green-500",
  },
  {
    name: "PostgreSQL",
    desc: "Modelagem relacional, consultas SQL e integrações",
    icon: SiPostgresql,
    color: "text-sky-500",
  },
  {
    name: "Firebase",
    desc: "Auth, Firestore e integrações backend",
    icon: SiFirebase,
    color: "text-amber-400",
  },
  {
    name: "TypeScript",
    desc: "Tipagem estática e código mais seguro",
    icon: SiTypescript,
    color: "text-blue-500",
  },
  {
    name: "Git",
    desc: "Versionamento e organização de projetos",
    icon: SiGit,
    color: "text-orange-500",
  },
  {
    name: "Linux",
    desc: "Ambiente de desenvolvimento e linha de comando",
    icon: SiLinux,
    color: "text-zinc-300",
  },
];

export default function Skills() {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        {/* Header - Centralizado no mobile para seguir o padrão do Hero */}
        <header className="max-w-xl text-center md:text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
            Skills
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Tecnologias que utilizo no desenvolvimento de aplicações com foco em
            backend, APIs e integrações.
          </p>
        </header>

        {/* Grid - 1 coluna no mobile, 2 colunas no tablet/desktop */}
        <ul className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 lg:gap-x-20">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="group flex items-start gap-4"
            >
              {/* Icon - Unidade flex-shrink-0 para o ícone não amassar */}
              <div className="flex-shrink-0">
                <skill.icon
                  className={`mt-1 text-2xl md:text-xl transition-transform duration-200 group-hover:scale-110 ${skill.color}`}
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base md:text-sm font-medium text-zinc-100">
                  {skill.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                  {skill.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}