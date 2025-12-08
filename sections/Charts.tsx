import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Smartphone, Search, ArrowUpRight, MousePointerClick, Users, BarChart3 } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

// OTIMIZAÇÃO: Contador de alta performance (sem re-renders)
const Counter = ({ from, to, duration = 2, suffix = "", decimals = 0 }: { from: number; to: number; duration?: number; suffix?: string; decimals?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, to, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = latest.toFixed(decimals) + suffix;
      }
    });
    return () => unsubscribe();
  }, [springValue, decimals, suffix]);

  return <span ref={nodeRef}>{from.toFixed(decimals)}{suffix}</span>;
};

const Charts = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#F2F7FC] via-[#E0EBF5] to-[#CEDDEB] relative overflow-hidden">
      
      {/* Background Otimizado (GPU) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-80 pointer-events-none translate-x-1/3 -translate-y-1/4 transform-gpu will-change-transform" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#AED3F2]/30 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/4 transform-gpu will-change-transform" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#2E78A6]/10 text-[#2E78A6] font-bold text-xs uppercase tracking-wider border border-[#2E78A6]/20">
            <BarChart3 size={14} />
            Dados de Mercado
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl font-extrabold text-[#2E78A6] mb-4 leading-tight">
            O impacto real de um <br/>
            site de <span className="text-[#6CC5D9]">alta performance</span>.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-600 text-lg">
            Não é mágica, é estatística. Veja o que acontece com sua clínica quando unimos tecnologia de ponta e estratégia digital.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">

          {/* WIDGET 1: Crescimento */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-b from-white/60 to-white/30 backdrop-blur-xl rounded-[2rem] p-5 shadow-xl shadow-[#2E78A6]/5 border border-white/40 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 min-h-[220px] flex flex-col justify-between transform-gpu"
          >
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-2 relative z-10 w-full">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-slate-500 font-medium mb-1 flex items-center justify-center md:justify-start gap-2 text-sm">
                  <Users size={16} className="text-[#6CC5D9]" />
                  Pacientes Identificados / Mês
                </p>
                <h3 className="text-4xl lg:text-5xl font-extrabold text-[#2E78A6] tracking-tight">
                  <Counter from={0} to={1428} />
                </h3>
              </div>
              <div className="bg-emerald-100/80 backdrop-blur-sm text-emerald-700 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-sm border border-emerald-200/50">
                <ArrowUpRight size={14} />
                +64%
              </div>
            </div>
            
            <p className="text-xs text-slate-400 mb-4 text-center md:text-left relative z-10">Crescimento projetado em 6 meses</p>

            <div className="relative flex-grow w-[110%] -ml-[5%] mt-auto h-24 md:h-auto">
               <svg viewBox="0 0 500 150" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                 <defs>
                   <linearGradient id="gradientArea" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="0%" stopColor="#2E78A6" stopOpacity="0.15" />
                     <stop offset="100%" stopColor="#2E78A6" stopOpacity="0" />
                   </linearGradient>
                 </defs>
                 <motion.path
                    d="M0,130 C80,120 120,90 200,100 C280,110 320,40 400,60 C450,70 480,20 500,10"
                    fill="none"
                    stroke="#2E78A6"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="drop-shadow-md"
                 />
                 <motion.path
                    d="M0,130 C80,120 120,90 200,100 C280,110 320,40 400,60 C450,70 480,20 500,10 V150 H0 Z"
                    fill="url(#gradientArea)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                 />
               </svg>
            </div>
          </motion.div>

          {/* WIDGET 2: Mobile First (CORRIGIDO) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-gradient-to-br from-[#2E78A6] to-[#205A80] text-white rounded-[2rem] p-5 shadow-xl shadow-[#2E78A6]/20 border border-white/20 relative overflow-hidden flex flex-col min-h-[220px] group hover:shadow-2xl transition-all duration-300 transform-gpu"
          >
            <div className="relative z-10 w-full mb-4">
               <div className="flex items-center gap-2">
                  <Smartphone size={20} className="text-[#6CC5D9]" />
                  <h3 className="font-bold text-xl tracking-wide text-white">Mobile First</h3>
               </div>
            </div>

            <div className="relative flex-grow flex items-center justify-center z-10 py-1 bg-transparent">
               <div className="relative w-40 h-40 bg-transparent">
                 <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90 overflow-visible">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
                    
                    <motion.circle 
                      cx="50" cy="50" r="40" 
                      fill="transparent" 
                      stroke="rgba(255,255,255,0.3)" 
                      strokeWidth="10"
                      strokeDasharray="251.2"
                      strokeDashoffset="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      whileInView={{ strokeDashoffset: 251.2 * (1 - 0.17) }} 
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      transform="rotate(295 50 50)" 
                    />

                    <motion.circle 
                      cx="50" cy="50" r="40" 
                      fill="transparent" 
                      stroke="#6CC5D9" 
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray="251.2" 
                      strokeDashoffset="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      whileInView={{ strokeDashoffset: 251.2 * (1 - 0.82) }} 
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                 </svg>

                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Smartphone className="w-10 h-10 text-white" strokeWidth={1.5} />
                 </div>
               </div>
            </div>

            {/* FIXED: Alinhamento das estatísticas */}
            <div className="flex justify-between items-end relative z-10 mt-auto border-t border-white/10 pt-3">
               
               {/* Mobile */}
               <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 mb-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#6CC5D9]" />
                    <span className="text-[10px] uppercase font-bold text-blue-100">Mobile</span>
                  </div>
                  <span className="text-xl font-extrabold leading-none text-white"><Counter from={0} to={82.1} decimals={1} suffix="%" /></span>
               </div>

               {/* Desktop */}
               <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1 mb-0.5">
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <span className="text-[10px] uppercase font-bold text-blue-200">Desktop</span>
                  </div>
                  <span className="text-lg font-bold leading-none text-blue-100"><Counter from={0} to={17.6} decimals={1} suffix="%" /></span>
               </div>

               {/* Tablet */}
               <div className="flex flex-col items-center opacity-60">
                  <div className="flex items-center gap-1 mb-0.5">
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    <span className="text-[10px] uppercase font-bold text-blue-200">Tablet</span>
                  </div>
                  <span className="text-lg font-bold leading-none text-blue-100">0.3%</span>
               </div>

            </div>
          </motion.div>

          {/* WIDGET 3: SEO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-b from-white/60 to-white/30 backdrop-blur-xl rounded-[2rem] p-5 shadow-xl shadow-[#2E78A6]/5 border border-white/40 hover:shadow-2xl transition-all duration-300 flex flex-col justify-center transform-gpu"
          >
             <div className="flex flex-col md:flex-row justify-between items-center mb-5 gap-4 md:gap-0">
                <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
                  <div className="p-2 bg-[#E4EAF2]/50 rounded-xl text-[#2E78A6]">
                    <Search size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg leading-none">Top 1 Google</h3>
                    <p className="text-xs text-slate-500 mt-1">Palavras-chave dominadas</p>
                  </div>
                </div>
                <span className="text-xs font-bold bg-emerald-100/80 backdrop-blur-sm text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-200/50">
                  Ao vivo
                </span>
             </div>

             <div className="space-y-2 w-full">
               {[
                 { keyword: "Dentista especialista em [Cidade]", pos: 1, volume: "Alta procura" },
                 { keyword: "Implante Dentário valor", pos: 2, volume: "Alta conversão" },
                 { keyword: "Invisalign ou Aparelho", pos: 1, volume: "Informativo" },
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   initial={{ x: -20, opacity: 0 }}
                   whileInView={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.3 + (i * 0.1) }}
                   viewport={{ once: true }}
                   className="flex items-center justify-between p-2.5 rounded-xl bg-white/50 border border-white/50 hover:border-[#AED3F2] hover:bg-white/80 transition-colors group backdrop-blur-sm"
                 >
                    <div className="flex items-center gap-4">
                       <span className="w-7 h-7 flex items-center justify-center bg-white border border-[#E4EAF2] text-[#2E78A6] font-extrabold text-sm rounded-lg shadow-sm group-hover:bg-[#2E78A6] group-hover:text-white transition-colors">
                         {item.pos}º
                       </span>
                       <div className="text-left">
                          <p className="font-bold text-slate-700 text-sm leading-tight">{item.keyword}</p>
                          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">{item.volume}</p>
                       </div>
                    </div>
                    
                    <div className="flex items-center text-emerald-500 bg-white p-1 rounded-lg shadow-sm">
                       <ArrowUpRight size={14} />
                    </div>
                 </motion.div>
               ))}
             </div>
          </motion.div>

          {/* WIDGET 4: CTA */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             viewport={{ once: true }}
             className="md:col-span-1 bg-gradient-to-br from-[#0F2942]/95 to-[#0F2942]/85 backdrop-blur-xl rounded-[2rem] p-5 flex flex-col justify-center items-center md:items-start text-center md:text-left text-white relative overflow-hidden group cursor-pointer border border-[#2E78A6]/30 min-h-[220px] transform-gpu"
             onClick={scrollToPricing}
          >
             <div className="absolute inset-0 bg-gradient-to-r from-[#2E78A6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="absolute right-[-20px] bottom-[-30px] opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                <MousePointerClick size={150} />
             </div>

             <div className="relative z-10 w-full">
                <div className="inline-block px-3 py-1 rounded-full bg-[#6CC5D9]/20 text-[#6CC5D9] text-[10px] font-bold mb-3 border border-[#6CC5D9]/20">
                  OPORTUNIDADE
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                  Quer ver esses números?
                </h3>
                <p className="text-slate-300 mb-5 text-sm leading-relaxed">
                  Invista em uma estrutura digital validada que traz retorno financeiro real.
                </p>
                <button 
                  onClick={(e) => { e.stopPropagation(); scrollToPricing(); }}
                  className="w-full bg-[#6CC5D9] text-[#0F2942] px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-white transition-all shadow-lg shadow-[#6CC5D9]/20 flex items-center justify-center gap-2"
                >
                  Ver Plano <ArrowUpRight size={16} />
                </button>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Charts;