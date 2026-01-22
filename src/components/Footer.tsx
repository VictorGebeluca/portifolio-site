import { SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Lado Esquerdo: Nome e Status */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-zinc-100 tracking-tight">
              Victor<span className="text-blue-500">.</span>Gebeluca
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              Desenvolvendo o futuro, um commit por vez.
            </p>
          </div>

          {/* Centro: Links de Navegação Rápida */}
          <nav className="flex gap-6 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-blue-500 transition-colors">Sobre</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projetos</a>
          </nav>

          {/* Lado Direito: Redes Sociais e Voltar ao Topo */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors">
                <SiGithub className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="https://wa.me/5541997690891" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-green-500 transition-colors">
                <SiWhatsapp className="w-5 h-5" />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-blue-500 hover:border-blue-500 transition-all shadow-lg"
              aria-label="Voltar ao topo"
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Linha Inferior: Copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] md:text-xs text-zinc-600 uppercase tracking-widest">
            © {new Date().getFullYear()} - Todos os direitos reservados
          </p>
          <p className="text-[10px] md:text-xs text-zinc-600 uppercase tracking-widest flex items-center gap-1">
            Built with <span className="text-blue-500">React</span> & <span className="text-blue-500">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;