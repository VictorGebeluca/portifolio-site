import { FiUser, FiCode, FiDatabase, FiCpu } from 'react-icons/fi';

const About = () => {
  const pillars = [
    {
      icon: <FiCode className="text-blue-500 w-6 h-6" />,
      title: "Backend Moderno",
      description: "Construção de APIs robustas utilizando Node.js e TypeScript, prezando por código limpo e tipagem forte."
    },
    {
      icon: <FiDatabase className="text-blue-500 w-6 h-6" />,
      title: "Arquitetura de Dados",
      description: "Modelagem de bancos de dados Sql e noSQL, focando em integridade e performance de consultas."
    },
    {
      icon: <FiCpu className="text-blue-500 w-6 h-6" />,
      title: "Lógica e Escalabilidade",
      description: "Desenvolvimento focado em resolver problemas complexos com soluções que suportam o crescimento do software."
    }
  ];

  return (
    <section id="about" className="bg-zinc-950 pt-20 pb-10 px-4 md:px-6 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Título da Seção */}
        <div className="flex items-center gap-2 mb-12">
          <FiUser className="text-blue-500 w-6 h-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100">Sobre mim</h2>
          <div className="h-px flex-grow bg-zinc-800 ml-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          
          {/* Texto Principal */}
          <div className="space-y-6">
            <p className="text-zinc-400 leading-relaxed">
              Olá! Sou o Victor, um desenvolvedor em transição de carreira e estudante de 
              <span className="text-zinc-100 font-medium"> Análise e Desenvolvimento de Sistemas</span>. 
              Minha jornada é movida pela curiosidade de entender como as coisas funcionam "por baixo do capô".
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Atualmente, dedico meus estudos ao ecossistema <span className="text-blue-400">Back-end</span>, 
              onde encontro satisfação em estruturar regras de negócio, otimizar fluxos de dados e 
              garantir que a comunicação entre sistemas seja impecável.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Acredito que a tecnologia deve ser assertiva: resolver o problema real com a 
              melhor ferramenta possível, mantendo a manutenibilidade para o futuro.
            </p>
          </div>

          {/* Cards de Pilares */}
          <div className="grid gap-4">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  {pillar.icon}
                  <h3 className="text-zinc-100 font-semibold">{pillar.title}</h3>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Linha Divisória Estilizada para Skills */}
        <div className="relative flex justify-center items-center">
          {/* Linha com gradiente que some nas pontas */}
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          
          {/* Detalhe central (opcional, dá um charme extra) */}
          <div className="relative bg-zinc-950 px-4 py-1">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;