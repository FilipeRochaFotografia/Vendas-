import React, { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import Features from './sections/Features'; 
import Charts from './sections/Charts';
import Team from './sections/Team'; 
import SocialProof from './sections/SocialProof'; 
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';

function App() {
  // Estado para detectar o scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito para monitorar o scroll
  useEffect(() => {
    const handleScroll = () => {
      // Se rolar mais de 50px, ativa o modo "scrolled"
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="w-full min-h-screen bg-white text-slate-900 font-sans selection:bg-[#AED3F2] selection:text-[#2E78A6]">
      
      {/* Navigation Header com Comportamento Dinâmico */}
      <nav 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent
          ${isScrolled 
            /* 
               ALTERAÇÃO: Dark Glass Effect (Menos Branco, Mais Translucido)
               - bg-[#0F2942]/60: Fundo azul escuro bem transparente
               - backdrop-blur-xl: Desfoque forte para legibilidade
            */
            ? 'bg-[#0F2942]/60 backdrop-blur-xl shadow-lg h-20 border-white/10' 
            : 'bg-transparent h-24' // Mais alto e totalmente transparente no topo
          }
        `}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-12 h-full flex items-center justify-between">
          
          {/* Logo Area */}
          <div 
            className="flex items-center gap-1.5 md:gap-2.5 cursor-pointer group"
            onClick={(e) => handleScrollTo(e, 'home')}
          >
            <img 
              src="https://i.ibb.co/sdKGmZR3/Odonto-Page-Logo.png" 
              alt="Logo Agência" 
              className={`
                h-6 md:h-8 w-auto object-contain transition-all duration-300 group-hover:scale-105
                brightness-0 invert opacity-100
              `}
            />
            <div className={`
              text-lg md:text-2xl font-extrabold tracking-tight transition-colors duration-300 text-white
            `}>
              Clinic<span className="text-[#6CC5D9]">Pages</span>
            </div>
          </div>
          
          {/* Links de Navegação */}
          <div className={`
            hidden md:flex items-center gap-8 font-medium text-sm lg:text-base transition-colors duration-300 text-white/90
          `}>
            {['Início', 'Estratégia', 'Bônus IA', 'Investimento', 'Dúvidas'].map((item, index) => {
               const idMap = ['home', 'features', 'bonus', 'pricing', 'faq'];
               return (
                 <a 
                   key={index}
                   href={`#${idMap[index]}`} 
                   onClick={(e) => handleScrollTo(e, idMap[index])} 
                   className="transition-all cursor-pointer hover:font-bold hover:text-[#6CC5D9]"
                 >
                   {item}
                 </a>
               )
            })}
          </div>

          {/* Botão CTA */}
          <a 
            href="https://wa.me/seunumerodewhatsapp" 
            target="_blank"
            rel="noopener noreferrer"
            className={`
              px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base rounded-lg font-bold transition-all shadow-lg transform hover:-translate-y-0.5 border
              ${isScrolled 
                ? 'bg-[#6CC5D9] text-[#0F2942] hover:bg-white shadow-[#6CC5D9]/20 border-transparent' // Scrolled: Ciano para destaque no escuro
                : 'bg-white text-[#2E78A6] hover:bg-blue-50 shadow-black/10 border-transparent' // Top: Branco padrão
              }
            `}
          >
            Começar Agora
          </a>
        </div>
      </nav>

      {/* WRAPPER INFINITO: Hero + Features */}
      <div className="relative w-full bg-[#0F2942]">
        
        {/* Textura Global contínua */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay pointer-events-none z-0"></div>
        
        {/* Gradiente Global */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(108,197,217,0.15)_0%,_transparent_70%)] pointer-events-none z-0" />

        <Hero />
        <Features />
      
      </div>

      <Charts />
      <Team />
      <SocialProof />
      <FAQ />
      <Footer />

    </main>
  );
}

export default App;