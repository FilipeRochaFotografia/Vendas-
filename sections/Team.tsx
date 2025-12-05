import React, { useState, useEffect } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

// Configuração dos 4 Estilos de Fotografia IA
const teamMembers = [
  {
    id: 1,
    name: "Dr. Modelo",
    role: "Autoridade Premium",
    description: "Postura confiante",
    realImage: "https://i.ibb.co/zWg2d56Z/Alexandre-site-2.png" 
  },
  {
    id: 2,
    name: "Dr. Modelo",
    role: "Clínico Moderno",
    description: "Jaleco e ambiente clean",
    realImage: "https://i.ibb.co/S46Vq86x/Gleisson-site.png"
  },
  {
    id: 3,
    name: "Dra. Modelo",
    role: "Studio Minimalista",
    description: "Estúdio profissional",
    realImage: "https://i.ibb.co/GQk8bQ6Z/Jamile-Site.png"
  },
  {
    id: 4,
    name: "Dra. Modelo",
    role: "Editorial Saúde",
    description: "Estilo capa de revista",
    realImage: "https://i.ibb.co/TBSyBrR2/Maisa-3.png"
  }
];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      nextSlide();
    } else if (info.offset.x > threshold) {
      prevSlide();
    }
  };

  // Lógica ajustada para 4 itens (Circular)
  const getCardVariant = (index: number) => {
    const total = teamMembers.length;
    const relativeIndex = (index - activeIndex + total) % total;

    if (relativeIndex === 0) return 'center';
    if (relativeIndex === 1) return 'right';
    if (relativeIndex === total - 1) return 'left';
    return 'back'; // O item que sobra fica atrás
  };

  const variants = {
    center: { x: '0%', scale: 1, zIndex: 50, opacity: 1, filter: 'blur(0px)', rotateY: 0 },
    left: { x: '-60%', scale: 0.8, zIndex: 30, opacity: 0.6, filter: 'blur(2px)', rotateY: 15 },
    right: { x: '60%', scale: 0.8, zIndex: 30, opacity: 0.6, filter: 'blur(2px)', rotateY: -15 },
    back: { x: '0%', scale: 0.6, zIndex: 10, opacity: 0, filter: 'blur(4px)', rotateY: 0 }, // Esconde atrás
  };

  const mobileVariants = {
    center: { x: 0, opacity: 1, scale: 1, zIndex: 50, display: 'block' },
    left: { x: 0, opacity: 0, scale: 0.9, zIndex: 0, display: 'none' },
    right: { x: 0, opacity: 0, scale: 0.9, zIndex: 0, display: 'none' },
    back: { display: 'none' }
  };

  return (
    <section id="bonus" className="py-20 relative overflow-hidden bg-[#0F2942]">
      
      {/* Background Base e Gradiente Superior */}
      <div className="absolute inset-0 bg-[#0F2942]" />
      <div className="absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_0%,_rgba(108,197,217,0.15)_0%,_rgba(46,120,166,0.1)_50%,_transparent_100%)] pointer-events-none" />

      {/* Decorative Blobs */}
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[#2E78A6]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-[#6CC5D9]/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header da Seção */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6CC5D9]/10 border border-[#6CC5D9]/30 text-[#6CC5D9] text-sm font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Bônus Exclusivo
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
            Não tem fotos profissionais? <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6CC5D9] to-white">Nós criamos para você.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-blue-100/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Um site premium exige imagens premium. <br className="hidden md:block" />
            Como bônus, utilizaremos <strong>Inteligência Artificial</strong> de última geração <br className="hidden md:block" />
            para criar retratos corporativos profissionais da sua equipe.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative h-[420px] md:h-[500px] flex items-center justify-center perspective-1000"
        >
          {/* Botões de Navegação */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 md:left-10 z-50 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-[#2E78A6] transition-all border border-white/20"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 md:right-10 z-50 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-[#2E78A6] transition-all border border-white/20"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards */}
          <div className="relative w-[280px] xs:w-[300px] md:w-[340px] flex items-center justify-center">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={isMobile ? mobileVariants : variants}
                animate={getCardVariant(index)}
                initial="hidden"
                transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 20 }}
                className="absolute w-full aspect-[3/4] cursor-grab active:cursor-grabbing"
                drag={isMobile ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={onDragEnd}
              >
                {/* Image Card Container */}
                <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50 border-[3px] border-white/10 bg-[#0F2942]">
                  {/* Badge 'Gerado por IA' */}
                  <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10">
                    <Sparkles className="w-3 h-3 text-[#6CC5D9]" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-wide">IA Premium</span>
                  </div>

                  <img 
                    src={member.realImage} 
                    alt={member.role} 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    draggable="false" 
                  />
                  
                  {/* Overlay Gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2942] via-transparent to-transparent opacity-60" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Legenda Dinâmica */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-6 relative z-20"
        >
           <motion.div
             key={activeIndex}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.4 }}
             className="flex flex-col items-center"
           >
              <div className="flex items-center gap-2 mb-2">
                 <Camera className="w-5 h-5 text-[#6CC5D9]" />
                 <h3 className="text-xl md:text-2xl font-bold text-white">
                   {teamMembers[activeIndex].role}
                 </h3>
              </div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#2E78A6]/30 border border-[#6CC5D9]/30 text-[#AED3F2] text-sm font-medium">
                Retrato Corporativo IA - {teamMembers[activeIndex].description}
              </div>
           </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Team;