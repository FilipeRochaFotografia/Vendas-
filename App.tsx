import React from 'react';
import Hero from './sections/Hero';
import Features from './sections/Features'; 
import Team from './sections/Team'; 
import SocialProof from './sections/SocialProof'; 
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';

function App() {
  const handleScroll = (e: React.MouseEvent<HTMLElement>, id: string) => {
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
      
      {/* Navigation Header */}
      {/* 
          ALTERAÇÃO: 
          - Removido: 'border-b' e 'border-white/50'
          - Mantido: 'shadow-sm' (cria uma sombra muito leve para dar profundidade sem ser uma linha), 
            se quiser totalmente liso, pode remover 'shadow-sm' também.
      */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#E4EAF2]/80 via-[#F2F7FC]/80 to-white/80 backdrop-blur-md transition-all duration-300 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 h-20 flex items-center justify-between">
          
          <div 
            className="flex items-center gap-1.5 md:gap-2.5 cursor-pointer group"
            onClick={(e) => handleScroll(e, 'home')}
          >
            <img 
              src="https://i.ibb.co/sdKGmZR3/Odonto-Page-Logo.png" 
              alt="Logo Agência" 
              className="h-6 md:h-8 w-auto object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="text-lg md:text-2xl font-extrabold text-[#2E78A6] tracking-tight">
              Clinic<span className="text-[#6CC5D9]">Page</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-[#2E78A6]/80 text-sm lg:text-base">
            <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="hover:text-[#2E78A6] hover:font-bold transition-all cursor-pointer">Início</a>
            <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="hover:text-[#2E78A6] hover:font-bold transition-all cursor-pointer">Estratégia</a>
            <a href="#bonus" onClick={(e) => handleScroll(e, 'bonus')} className="hover:text-[#2E78A6] hover:font-bold transition-all cursor-pointer">Bônus IA</a>
            <a href="#pricing" onClick={(e) => handleScroll(e, 'pricing')} className="hover:text-[#2E78A6] hover:font-bold transition-all cursor-pointer">Investimento</a>
            <a href="#faq" onClick={(e) => handleScroll(e, 'faq')} className="hover:text-[#2E78A6] hover:font-bold transition-all cursor-pointer">Dúvidas</a>
          </div>

          <a 
            href="https://wa.me/seunumerodewhatsapp" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2E78A6] text-white px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base rounded-lg font-bold hover:bg-[#205A80] transition-all shadow-lg shadow-[#2E78A6]/20 transform hover:-translate-y-0.5 border border-[#2E78A6]"
          >
            Começar Agora
          </a>
        </div>
      </nav>

      <Hero />
      <Features />
      <Team />
      <SocialProof />
      <FAQ />
      <Footer />

    </main>
  );
}

export default App;