import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Trophy, Clock, Zap, ShieldCheck, Rocket, ChevronDown, MousePointer2 } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../utils/animations';

// As 6 Estratégias Definidas
const features = [
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
    // Fundo mantendo o degradê vindo do branco (Hero) para conectar as seções
    <section id="features" className="py-24 bg-gradient-to-b from-white to-[#F2F7FC] relative overflow-hidden">
      
      {/* Background Decorativo Sutil */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[10%] -left-[5%] w-[500px] h-[500px] bg-[#E4EAF2] rounded-full blur-[100px]" />
        <div className="absolute top-[30%] -right-[5%] w-[400px] h-[400px] bg-[#AED3F2]/30 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header da Seção */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-4 bg-[#E4EAF2] px-3 py-1 rounded-full">
            <MousePointer2 size={14} className="text-[#2E78A6]" />
            <span className="text-[#2E78A6] font-bold uppercase tracking-wider text-xs">
              Estratégia Digital
            </span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold text-[#2E78A6] mb-6 leading-tight">
            Por que sua clínica precisa da <span className="text-[#6CC5D9]">ClinicPage</span>?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-600 text-lg leading-relaxed">
            Não vendemos apenas "sites". <br className="block md:hidden" />
            Vendemos uma estrutura validada <br className="block md:hidden" />
            para atrair pacientes reais <br className="block md:hidden" />
            e posicionar sua marca.
          </motion.p>
        </motion.div>

        {/* Grid de Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-start"
        >
          {features.map((item) => {
            const isActive = activeId === item.id;

            return (
              <motion.div
                layout
                variants={fadeInUp}
                key={item.id}
                onClick={() => setActiveId(isActive ? null : item.id)}
                className={`
                  relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 border w-full group
                  ${isActive 
                    ? 'bg-gradient-to-br from-[#2E78A6] to-[#205A80] border-[#2E78A6] shadow-xl shadow-[#2E78A6]/30 -translate-y-1' // ATIVO: AZUL
                    : 'bg-white border-[#AED3F2] hover:border-[#6CC5D9] hover:shadow-lg hover:shadow-[#AED3F2]/40' // INATIVO: BRANCO
                  }
                `}
              >
                <motion.div layout="position" className="px-6 py-8">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Ícone */}
                      <div className={`
                        p-3 rounded-xl transition-colors duration-300
                        ${isActive 
                          ? 'bg-white/20 text-white' // Branco translucido no fundo Azul
                          : 'bg-[#E4EAF2] text-[#2E78A6] group-hover:bg-[#E0F2FE]' // Azul no fundo Branco
                        }
                      `}>
                        {item.icon}
                      </div>
                      {/* Título */}
                      <h3 className={`font-bold text-sm tracking-wide uppercase ${isActive ? 'text-white' : 'text-slate-800'}`}>
                        {item.title}
                      </h3>
                    </div>
                    
                    {/* Seta de Expandir */}
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className={`w-5 h-5 ${isActive ? 'text-[#6CC5D9]' : 'text-[#AED3F2] group-hover:text-[#6CC5D9]'}`} />
                    </motion.div>
                  </div>

                  {/* Conteúdo Expandido (Descrição) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="text-blue-50 text-sm leading-relaxed border-t border-white/20 pt-4 font-medium">
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