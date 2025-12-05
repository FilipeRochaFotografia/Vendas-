import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Smartphone, Search, ArrowUpRight, MousePointerClick, Users, BarChart3 } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

// --- Componente para Animar Números (CountUp) ---
const Counter = ({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = from;
      const end = to;
      const totalFrames = Math.round(duration * 60);
      const easeOutQuad = (t: number) => t * (2 - t);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        const currentCount = Math.round(start + (end - start) * progress);

        if (frame === totalFrames) {
          clearInterval(counter);
          setCount(end);
        } else {
          setCount(currentCount);
        }
      }, 1000 / 60);

      return () => clearInterval(counter);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Charts = () => {
  return (
    // ALTERAÇÃO: Background com gradiente mais puxado para o azul escuro na base
    <section className="py-20 bg-gradient-to-b from-[#F2F7FC] via-[#E0EBF5] to-[#CEDDEB] relative overflow-hidden">
      
      {/* Background Decorativo Suave */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-80 pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#AED3F2]/30 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/4" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header da Seção */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#2E78A6]/10 text-[#2E78A6] font-bold text-xs uppercase tracking-wider border border-[#2E78A6]/20">
            <BarChart3 size={14} />
            Dados de Mercado
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-[#2E78A6] mb-4 leading-tight">
            O impacto real de um <br/>
            site de <span className="text-[#6CC5D9]">alta performance</span>.
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-600 text-lg">
            Não é mágica, é estatística. Veja o que acontece com sua clínica quando unimos tecnologia de ponta e estratégia digital.
          </motion.p>
        </motion.div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">

          {/* WIDGET 1: Crescimento de Pacientes */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            // ALTERAÇÃO: min-h reduzido (320 -> 260), padding reduzido (p-8 -> p-6)
            // CENTRALIZAÇÃO: items-center e text-center no mobile
            className="md:col-span-2 lg:col-span-2 bg-white rounded-[2rem] p-6 shadow-xl shadow-[#2E78A6]/5 border border-[#E4EAF2] relative overflow-hidden group hover:shadow-2xl transition-all duration-300 min-h-[260px] flex flex-col justify-between"
          >
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-2 relative z-10 w-full">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-slate-500 font-medium mb-1 flex items-center justify-center md:justify-start gap-2 text-sm">
                  <Users size={16} className="text-[#6CC5D9]" />
                  Pacientes Identificados / Mês
                </p>
                <h3 className="text-5xl font-extrabold text-[#2E78A6] tracking-tight">
                  <Counter from={0} to={1428} />
                </h3>
              </div>
              <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-sm">
                <ArrowUpRight size={14} />
                +24%
              </div>
            </div>
            
            <p className="text-xs text-slate-400 mb-4 md:mb-6 text-center md:text-left relative z-10">Crescimento projetado em 6 meses</p>

            {/* Gráfico de Área */}
            <div className="relative flex-grow w-[110%] -ml-[5%] mt-auto h-24 md:h-auto">
               <svg viewBox="0 0 500 150" className="w-full h-full overflow-visible preserve-3d">
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
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="drop-shadow-md"
                 />
                 <motion.path
                    d="M0,130 C80,120 120,90 200,100 C280,110 320,40 400,60 C450,70 480,20 500,10 V150 H0 Z"
                    fill="url(#gradientArea)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                 />
               </svg>
            </div>
          </motion.div>

          {/* WIDGET 2: Mobile First */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            // ALTERAÇÃO: min-h reduzido, padding reduzido, items-center para centralizar gráfico
            className="md:col-span-1 bg-[#2E78A6] text-white rounded-[2rem] p-6 shadow-xl shadow-[#2E78A6]/20 relative overflow-hidden flex flex-col justify-between min-h-[260px] items-center md:items-start text-center md:text-left"
          >
            {/* Background Texture */}
            <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-[#6CC5D9] rounded-full blur-[80px] opacity-20 pointer-events-none" />

            <div className="relative z-10 w-full">
               <div className="flex items-center justify-center md:justify-start gap-2 mb-4 opacity-90">
                  <Smartphone size={20} className="text-[#6CC5D9]" />
                  <span className="font-bold text-sm">Mobile First</span>
               </div>
               
               <h4 className="text-5xl font-extrabold mb-2 tracking-tight">
                 <Counter from={0} to={82} suffix="%" />
               </h4>
               <p className="text-sm opacity-80 text-blue-100 leading-tight font-medium">
                 Dos pacientes acessam o site pelo celular.
               </p>
            </div>

            {/* Gráfico de Barras - PROPORÇÃO AJUSTADA */}
            <div className="flex gap-3 items-end h-32 pb-2 relative z-10 mt-4 w-full justify-center md:justify-start">
               {/* Barra 1: Pequena (15%) */}
               <motion.div 
                 className="w-12 bg-white/20 rounded-t-lg backdrop-blur-sm" 
                 initial={{ height: 0 }} 
                 whileInView={{ height: '15%' }} 
                 transition={{ duration: 0.8, delay: 0.2 }} 
               />
               {/* Barra 2: Média (30%) */}
               <motion.div 
                 className="w-12 bg-white/40 rounded-t-lg backdrop-blur-sm" 
                 initial={{ height: 0 }} 
                 whileInView={{ height: '30%' }} 
                 transition={{ duration: 0.8, delay: 0.4 }} 
               />
               {/* Barra 3: Grande (82%) - A maior de todas */}
               <motion.div 
                 className="w-12 bg-[#6CC5D9] rounded-t-lg shadow-lg" 
                 initial={{ height: 0 }} 
                 whileInView={{ height: '82%' }} 
                 transition={{ duration: 0.8, delay: 0.6 }} 
               />
            </div>
          </motion.div>

          {/* WIDGET 3: SEO Ranking */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            // ALTERAÇÃO: Centralização mobile aplicada
            className="md:col-span-2 lg:col-span-2 bg-white rounded-[2rem] p-6 shadow-xl shadow-[#2E78A6]/5 border border-[#E4EAF2] hover:shadow-2xl transition-all duration-300 flex flex-col justify-center"
          >
             <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 md:gap-0">
                <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
                  <div className="p-2.5 bg-[#E4EAF2] rounded-xl text-[#2E78A6]">
                    <Search size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg leading-none">Top 1 Google</h3>
                    <p className="text-xs text-slate-500 mt-1">Palavras-chave dominadas</p>
                  </div>
                </div>
                <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-200">
                  Ao vivo
                </span>
             </div>

             <div className="space-y-3 w-full">
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
                   className="flex items-center justify-between p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-100 hover:border-[#AED3F2] hover:bg-[#F0F7FF] transition-colors group"
                 >
                    <div className="flex items-center gap-4">
                       <span className="w-8 h-8 flex items-center justify-center bg-white border border-[#E4EAF2] text-[#2E78A6] font-extrabold text-sm rounded-lg shadow-sm group-hover:bg-[#2E78A6] group-hover:text-white transition-colors">
                         {item.pos}º
                       </span>
                       <div className="text-left">
                          <p className="font-bold text-slate-700 text-sm">{item.keyword}</p>
                          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">{item.volume}</p>
                       </div>
                    </div>
                    
                    <div className="flex items-center text-emerald-500 bg-white p-1.5 rounded-lg shadow-sm">
                       <ArrowUpRight size={16} />
                    </div>
                 </motion.div>
               ))}
             </div>
          </motion.div>

          {/* WIDGET 4: Call to Action */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5, delay: 0.3 }}
             viewport={{ once: true }}
             // ALTERAÇÃO: Centralização mobile completa
             className="md:col-span-1 bg-[#0F2942] rounded-[2rem] p-6 flex flex-col justify-center items-center md:items-start text-center md:text-left text-white relative overflow-hidden group cursor-pointer border border-[#2E78A6]/30 min-h-[260px]"
             onClick={() => window.open('https://wa.me/seunumerodewhatsapp', '_blank')}
          >
             {/* Glow Effect */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#2E78A6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="absolute right-[-20px] bottom-[-30px] opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                <MousePointerClick size={150} />
             </div>

             <div className="relative z-10 w-full">
                <div className="inline-block px-3 py-1 rounded-full bg-[#6CC5D9]/20 text-[#6CC5D9] text-xs font-bold mb-4 border border-[#6CC5D9]/20">
                  OPORTUNIDADE
                </div>
                <h3 className="text-2xl font-bold mb-3 leading-tight">
                  Quer ver esses números?
                </h3>
                <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                  Invista em uma estrutura digital validada que traz retorno financeiro real.
                </p>
                <button className="w-full bg-[#6CC5D9] text-[#0F2942] px-4 py-3 rounded-xl font-bold text-sm hover:bg-white transition-all shadow-lg shadow-[#6CC5D9]/20 flex items-center justify-center gap-2">
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