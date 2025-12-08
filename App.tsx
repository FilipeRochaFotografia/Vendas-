import React, { useState, useEffect, Suspense, lazy } from 'react';
import Hero from './sections/Hero';
import Features from './sections/Features'; 

// OTIMIZAÇÃO: Lazy Loading
// O navegador só baixa esses arquivos depois que o site principal carregou
const Charts = lazy(() => import('./sections/Charts'));
const Team = lazy(() => import('./sections/Team'));
const SocialProof = lazy(() => import('./sections/SocialProof'));
const FAQ = lazy(() => import('./sections/FAQ'));
const Footer = lazy(() => import('./sections/Footer'));

// Placeholder leve enquanto carrega as seções
const SectionLoader = () => <div className="w-full h-32 bg-[#0F2942]/5" />;

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    // OTIMIZAÇÃO: Scroll passivo e throttle via requestAnimationFrame
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
    // FIX: Adicionado 'overflow-x-hidden' para evitar scroll lateral indesejado no mobile
    <main className="w-full min-h-screen bg-white text-slate-900 font-sans selection:bg-[#AED3F2] selection:text-[#2E78A6] overflow-x-hidden">
      
      <nav 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent
          ${isScrolled 
            ? 'bg-[#0F2942]/80 backdrop-blur-md shadow-lg h-20 border-white/10' 
            : 'bg-transparent h-24'
          }
        `}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-12 h-full flex items-center justify-between">
          
          <div 
            className="flex items-center gap-1.5 md:gap-2.5 cursor-pointer group"
            onClick={(e) => handleScrollTo(e, 'home')}
          >
            {/* OTIMIZAÇÃO: Adicionado width/height explícito para evitar layout shift */}
            <img 
              src="https://i.ibb.co/sdKGmZR3/Odonto-Page-Logo.png" 
              alt="Logo Agência" 
              width="32"
              height="32"
              className={`
                h-6 md:h-8 w-auto object-contain transition-all duration-300 group-hover:scale-105
                brightness-0 invert opacity-100
              `}
            />
            <div className="text-lg md:text-2xl font-extrabold tracking-tight transition-colors duration-300 text-white">
              Clinic<span className="text-[#6CC5D9]">Pages</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm lg:text-base transition-colors duration-300 text-white/90">
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

          <a 
            href="#pricing" 
            onClick={(e) => handleScrollTo(e, 'pricing')}
            className={`
              px-4 py-2 text-sm md:px-6 md:py-2.5 md:text-base rounded-lg font-bold transition-all shadow-lg transform hover:-translate-y-0.5 border cursor-pointer
              ${isScrolled 
                ? 'bg-[#6CC5D9] text-[#0F2942] hover:bg-white shadow-[#6CC5D9]/20 border-transparent' 
                : 'bg-white text-[#2E78A6] hover:bg-blue-50 shadow-black/10 border-transparent' 
              }
            `}
          >
            Começar Agora
          </a>
        </div>
      </nav>

      {/* Conteúdo Inicial (Renderização Imediata) */}
      <div className="relative w-full bg-[#0F2942]">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay pointer-events-none z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(108,197,217,0.15)_0%,_transparent_70%)] pointer-events-none z-0" />
        <Hero />
        <Features />
      </div>

      {/* Conteúdo Secundário (Carregamento Lento/Suspense) */}
      <Suspense fallback={<SectionLoader />}>
        <Charts />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Team />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <SocialProof />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>

    </main>
  );
}

export default App;