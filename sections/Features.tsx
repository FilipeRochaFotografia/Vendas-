import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Trophy, Clock, Zap, ShieldCheck, Rocket, ChevronDown, MousePointer2 } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

const featuresList = [
  {
    id: 1,
    icon: <MapPin className="w-6 h-6" />,
    title: "DOMINE O GOOGLE LOCAL",
    description: "Otimização estratégica para que sua clínica apareça em destaque quando pacientes buscam por especialistas na sua região."
  },
  {
    id: 2,
    icon: <Clock className="w-6 h-6" />,
    title: "CLÍNICA ABERTA 24H",
    description: "Sua recepção fecha às 18h, mas seu site continua trabalhando. Capture contatos e agendamentos enquanto você dorme."
  },
  {
    id: 3,
    icon: <Trophy className="w-6 h-6" />,
    title: "SUPERE A CONCORRÊNCIA",
    description: "Pare de perder pacientes para clínicas vizinhas. Tenha uma presença digital superior e torne-se a escolha óbvia."
  },
  {
    id: 4,
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "PRESENÇA PROFISSIONAL",
    description: "Fuja do amadorismo. Um site exclusivo transmite a credibilidade e a segurança que pacientes particulares exigem."
  },
  {
    id: 5,
    icon: <Zap className="w-6 h-6" />,
    title: "TECNOLOGIA DE ELITE",
    description: "Desenvolvido em React/Next.js, a mesma tecnologia usada por gigantes como Netflix. Zero travamentos, velocidade total."
  },
  {
    id: 6,
    icon: <Rocket className="w-6 h-6" />,
    title: "NO AR EM 72 HORAS",
    description: "Sem reuniões intermináveis ou prazos longos. Nosso processo é ágil para colocar sua máquina de vendas no ar em tempo recorde."
  }
];

const Features = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    // Mantendo o -mt-2 para corrigir a linha do fundo
    <section id="features" className="py-24 -mt-2 bg-transparent relative z-20 overflow-hidden">
      
      {/* Blobs de Luz Locais */}
      <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] bg-[#2E78A6]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] -right-[10%] w-[400px] h-[400px] bg-[#6CC5D9]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header da Seção */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-4 bg-[#6CC5D9]/10 backdrop-blur-md px-3 py-1 rounded-full border border-[#6CC5D9]/30 shadow-sm">
            <MousePointer2 size={14} className="text-[#6CC5D9]" />
            <span className="text-[#6CC5D9] font-bold uppercase tracking-wider text-xs">
              Estratégia Digital
            </span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Por que sua clínica precisa da <span className="text-[#6CC5D9]">ClinicPages</span>?
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-blue-100/80 text-lg leading-relaxed">
            Não vendemos apenas "sites". <br className="block md:hidden" />
            Vendemos uma estrutura validada <br className="block md:hidden" />
            para atrair pacientes reais.
          </motion.p>
        </motion.div>

        {/* Grid de Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-start max-w-6xl mx-auto isolation-isolate"
        >
          {featuresList.map((item) => {
            const isActive = activeId === item.id;

            return (
              <motion.div
                layout
                variants={fadeInUp}
                key={item.id}
                onClick={() => setActiveId(isActive ? null : item.id)}
                className={`
                  relative overflow-hidden cursor-pointer transition-all duration-300 w-full group
                  transform-gpu backface-hidden
                  
                  /* ALTERAÇÃO AQUI: De rounded-[2.5rem] para rounded-2xl */
                  rounded-2xl 
                  
                  border border-t-white/30 border-white/10 border-b-black/10
                  backdrop-blur-xl

                  ${isActive 
                    ? 'bg-[#2E78A6]/80 shadow-[0_20px_50px_-12px_rgba(46,120,166,0.5)] z-40' 
                    : 'bg-gradient-to-b from-white/15 to-white/5 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.4),_0_8px_20px_-5px_rgba(0,0,0,0.3)] hover:brightness-110 z-0 group-hover:z-50' 
                  }
                `}
                style={{ 
                  zIndex: isActive ? 40 : undefined 
                }}
                whileHover={{ 
                  zIndex: 50,
                  transition: { duration: 0 } 
                }}
              >
                <motion.div layout="position" className="p-6 flex flex-col items-center text-center">
                  
                  {/* Ícone e Título */}
                  <div className="flex flex-col items-center gap-4">
                    <div className={`
                       transition-all duration-300 drop-shadow-md
                       ${isActive ? 'text-white scale-110' : 'text-[#6CC5D9] group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'}
                    `}>
                      {item.icon}
                    </div>

                    <div className="flex items-center gap-2">
                      <h3 className={`font-bold text-sm tracking-wider uppercase transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/90'}`}>
                        {item.title}
                      </h3>
                      
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${isActive ? 'text-white/70' : 'text-white/50'}`} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Conteúdo Expandido */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full"
                      >
                        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-4" />
                        
                        <p className="text-[15px] leading-relaxed font-medium text-blue-50/95 antialiased px-2 drop-shadow-sm">
                            {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Features;