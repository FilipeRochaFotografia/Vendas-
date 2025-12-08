import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle, MessageCircle, Calendar, Star } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

// Notificações Dinâmicas
const notifications = [
  {
    id: 1,
    icon: <MessageCircle size={20} className="text-white" />,
    color: "bg-green-500",
    title: "Nova Mensagem",
    text: "Olá, gostaria de agendar uma avaliação..."
  },
  {
    id: 2,
    icon: <Calendar size={20} className="text-white" />,
    color: "bg-[#2E78A6]",
    title: "Agendamento Confirmado",
    text: "Paciente Roberto confirmou para às 14h."
  },
  {
    id: 3,
    icon: <Star size={20} className="text-white" />,
    color: "bg-yellow-400",
    title: "Nova Avaliação",
    text: "5 Estrelas recebidas no Google Meu Negócio!"
  }
];

const Hero = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('pricing');
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
    <section id="home" className="relative min-h-screen w-full flex items-center pt-28 lg:pt-20 overflow-visible bg-transparent">
      
      {/* Blobs de Luz Locais */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-[#6CC5D9]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-[#2E78A6]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0 z-20"
          >
            {/* Badge */}
            <motion.div 
              variants={fadeInUp} 
              className="relative z-30 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold text-sm mb-0 lg:mb-8 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              Pare de perder pacientes hoje
            </motion.div>

            {/* --- IMAGEM MOBILE --- */}
            <motion.div 
              variants={fadeInUp}
              className="relative w-full max-w-[400px] mx-auto -mt-16 lg:hidden flex flex-col items-center justify-end z-10"
            >
               {/* 1. Glow de Fundo */}
               <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[120%] h-[100%] bg-gradient-to-t from-[#2E78A6]/30 via-[#2E78A6]/10 to-transparent blur-[50px] rounded-full pointer-events-none" />

               {/* 2. Imagem com MÁSCARA (Sem ícones flutuantes) */}
               <img 
                 src="https://i.ibb.co/8LR0XvNC/Medica-sem-fundo-2.png" 
                 alt="Médica Especialista" 
                 className="
                    relative z-10 w-auto h-auto max-h-[450px] object-contain 
                    scale-[1.3] translate-y-8
                    [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]
                    [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]
                 "
               />
               {/* Ícone Pill removido daqui */}
            </motion.div>

            {/* Headline Formatada (Quebra de linha forçada em todas as telas) */}
            <motion.h1 
              variants={fadeInUp} 
              className="relative z-20 -mt-4 text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
            >
              Seu site transmite <br />
              a mesma <span className="text-[#6CC5D9]">qualidade</span> <br />
              da sua clínica?
            </motion.h1>

            {/* Subheadline Simplificada */}
            <motion.p variants={fadeInUp} className="relative z-20 text-lg lg:text-xl text-blue-100/80 mb-8 leading-relaxed max-w-lg">
              Tenha sua estrutura digital completa <br className="block" />
              com a <strong>ClinicPages</strong> em apenas <strong className="text-[#6CC5D9]">72 horas</strong>.
            </motion.p>

            <motion.div variants={fadeInUp} className="relative z-20 flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto justify-center lg:justify-start">
              <a 
                href="#pricing"
                onClick={scrollToPricing}
                className="
                  group relative overflow-hidden px-8 py-4 rounded-2xl font-bold text-lg text-white
                  bg-gradient-to-b from-[#2E78A6] to-[#205A80]
                  border-t border-white/20 border-b border-black/20
                  shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.3),_0_10px_20px_-5px_rgba(46,120,166,0.4)]
                  hover:scale-105 transition-all duration-300
                  flex items-center justify-center gap-2 cursor-pointer
                "
              >
                Quero ser referência 
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="https://www.dentevida.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-8 py-4 rounded-2xl font-bold text-lg text-white
                  bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md
                  border border-t-white/20 border-white/10
                  shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.2)]
                  hover:bg-white/10 hover:scale-105
                  transition-all duration-300 flex items-center justify-center cursor-pointer
                "
              >
                Ver site modelo
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative z-20 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-8 lg:border-t border-white/10 w-full">
              <div className="flex items-center -space-x-3">
                {[
                  "https://ui-avatars.com/api/?name=CR&background=2E78A6&color=fff&size=64&font-size=0.4&bold=true&length=2",
                  "https://ui-avatars.com/api/?name=DV&background=6CC5D9&color=fff&size=64&font-size=0.4&bold=true&length=2",
                  "https://ui-avatars.com/api/?name=CL&background=2E78A6&color=fff&size=64&font-size=0.4&bold=true&length=2",
                  "https://ui-avatars.com/api/?name=MS&background=6CC5D9&color=fff&size=64&font-size=0.4&bold=true&length=2"
                ].map((src, i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full border-[2px] border-[#0F2942] overflow-hidden shadow-lg z-0 hover:z-10 hover:scale-110 transition-all duration-300">
                     <img src={src} alt="Logo Clínica Cliente" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center sm:items-start justify-center h-full">
                 <div className="flex items-center gap-1.5">
                    <Star className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm" />
                    <span className="font-extrabold text-white text-lg">4.9</span>
                    <span className="text-blue-100/70 text-base font-medium whitespace-nowrap">confiam na ClinicPages</span>
                 </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Mockup (DESKTOP ONLY) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block max-w-[100%] mx-auto transform scale-115 lg:-ml 10 origin-center"
          >
            <div className="relative z-20 w-full h-full flex items-center justify-center group">
              <img 
                src="https://i.ibb.co/V0Gc4GVL/Mockup-22.png" 
                alt="Site ClinicPages em execução" 
                loading="eager"
                onLoad={() => setImgLoaded(true)}
                className={`
                  object-contain w-full h-auto max-h-[700px] transform group-hover:scale-105 
                  transition-all duration-1000 ease-out drop-shadow-2xl
                  ${imgLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}
                `}
              />
            </div>

            {/* Badge Flutuante Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -right-4 top-16 z-30 bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-md border-t border-white/80 border-white/40 border-b-black/5 shadow-[inset_0_1px_1px_0_rgba(255,255,255,1),_0_10px_30px_-5px_rgba(0,0,0,0.3)] p-3 pr-5 rounded-2xl flex items-center gap-3"
            >
              <div className="bg-[#E4EAF2] p-2 rounded-full shadow-inner">
                <CheckCircle className="w-5 h-5 text-[#2E78A6]" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">1ª Página</p>
                <p className="text-xs text-[10px] text-slate-500 font-medium">Google Search</p>
              </div>
            </motion.div>

            {/* Notificações Desktop */}
            <div className="absolute -left-4 bottom-10 z-30 w-72">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentNotification}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-md border-t border-white/80 border-white/40 border-b-black/5 shadow-[inset_0_1px_1px_0_rgba(255,255,255,1),_0_10px_30px_-5px_rgba(0,0,0,0.3)] p-4 pr-6 rounded-2xl flex items-center gap-4"
                >
                   <div className={`${notifications[currentNotification].color} p-3 rounded-full text-white shadow-lg shrink-0`}>
                      {notifications[currentNotification].icon}
                   </div>
                   <div>
                      <p className="font-bold text-slate-900 text-sm">{notifications[currentNotification].title}</p>
                      <p className="text-xs text-slate-600 mt-0.5 leading-tight">{notifications[currentNotification].text}</p>
                   </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;