import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle, MessageCircle, Calendar, Star } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

// Notificações Dinâmicas (Mantidas)
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

  // Ciclo das Notificações
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNotification((prev) => (prev + 1) % notifications.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
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
    <section id="home" className="relative min-h-screen w-full flex items-center pt-28 lg:pt-20 overflow-hidden bg-gradient-to-b from-[#E4EAF2] via-[#F2F7FC] to-white">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-[#6CC5D9]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#2E78A6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-4 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0 z-20"
          >
            {/* Badge Reverted to Clean Design */}
            <motion.div 
              variants={fadeInUp} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#AED3F2] text-slate-600 font-bold text-sm mb-8 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              Pare de perder pacientes hoje
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInUp} className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#2E78A6] leading-[1.1] tracking-tight mb-6">
              Seu site transmite <br className="hidden lg:block"/>
              a mesma <span className="text-[#6CC5D9]">qualidade</span> <br className="hidden lg:block"/>
              do seu consultório?
            </motion.h1>

            {/* Subheadline */}
            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
              94% dos pacientes pesquisam no Google antes de agendar. Se sua clínica não tem um site profissional, você é invisível. Tenha sua estrutura digital completa com a <strong>ClinicPage</strong> em apenas <strong className="text-[#2E78A6]">72 horas</strong>.
            </motion.p>

            {/* Botões */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto justify-center lg:justify-start">
              
              {/* Botão Primário */}
              <button 
                onClick={() => scrollToSection('pricing')}
                className="
                  bg-[#2E78A6]/90 backdrop-blur-md text-white 
                  px-8 py-4 rounded-xl font-bold text-lg 
                  hover:bg-[#2E78A6] hover:scale-105 hover:shadow-xl hover:shadow-[#2E78A6]/30
                  transition-all duration-300 border border-white/20
                  flex items-center justify-center gap-2
                "
              >
                Quero ser encontrado 
                <ChevronRight className="w-5 h-5" />
              </button>
              
              {/* Botão Secundário - Link Externo */}
              <a 
                href="https://dente-vida.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-white text-[#2E78A6] 
                  px-8 py-4 rounded-xl font-bold text-lg 
                  border-2 border-[#2E78A6] 
                  hover:bg-[#F0F7FF] hover:shadow-lg hover:shadow-[#2E78A6]/10 hover:scale-105
                  transition-all duration-300 flex items-center justify-center cursor-pointer
                "
              >
                Ver site modelo
              </a>
            </motion.div>

            {/* Social Proof - Restaurado no Mobile (Sem borda no mobile) */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-8 lg:border-t border-[#AED3F2] w-full">
              
              {/* Avatar Pile - LOGOS VARIADOS (CR, DV, CL, MS) */}
              <div className="flex items-center -space-x-3">
                {[
                  // Logo 1: CR - Navy Blue
                  "https://ui-avatars.com/api/?name=CR&background=0F2942&color=fff&size=64&font-size=0.4&bold=true&length=2",
                  // Logo 2: DV - White with Teal Text
                  "https://ui-avatars.com/api/?name=DV&background=ffffff&color=2E78A6&size=64&font-size=0.4&bold=true&length=2",
                  // Logo 3: CL - Teal Background
                  "https://ui-avatars.com/api/?name=CL&background=6CC5D9&color=fff&size=64&font-size=0.4&bold=true&length=2",
                  // Logo 4: MS - Primary Blue
                  "https://ui-avatars.com/api/?name=MS&background=2E78A6&color=fff&size=64&font-size=0.4&bold=true&length=2"
                ].map((src, i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full border-[2.5px] border-white overflow-hidden shadow-sm bg-white group hover:z-10 transition-all">
                     <img src={src} alt="Logo Clínica Cliente" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>

              {/* Rating Block */}
              <div className="flex flex-col items-center sm:items-start justify-center h-full">
                 <div className="flex items-center gap-1.5">
                    <Star className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm" />
                    <span className="font-extrabold text-slate-800 text-lg">4.9</span>
                    {/* Fonte ajustada para match com Subheadline (text-slate-600) */}
                    <span className="text-slate-600 text-base font-medium whitespace-nowrap">confiam na ClinicPage</span>
                 </div>
              </div>

            </motion.div>
          </motion.div>

          {/* Right Content - Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block max-w-[100%] mx-auto transform scale-115 lg:-ml 10 origin-center"
          >
            {/* Main Mockup Frame */}
            <div className="relative z-20 w-full h-full flex items-center justify-center group">
              <img 
                src="https://i.ibb.co/HfFnTfrC/Mockup-1.png" 
                alt="Site ClinicPage em execução" 
                loading="eager"
                onLoad={() => setImgLoaded(true)}
                className={`
                  object-contain w-full h-auto max-h-[700px] transform group-hover:scale-105 
                  transition-all duration-1000 ease-out drop-shadow-2xl
                  ${imgLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}
                `}
              />
            </div>

            {/* Badge Flutuante 1: Google */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -right-4 top-16 z-30 bg-white p-3 pr-5 rounded-2xl shadow-xl flex items-center gap-3 border border-[#AED3F2]"
            >
              <div className="bg-[#E4EAF2] p-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-[#2E78A6]" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">1ª Página</p>
                <p className="text-xs text-[10px] text-slate-500 font-medium">Google Search</p>
              </div>
            </motion.div>

            {/* CARD DINÂMICO: Notificações Flutuantes (Posição Ajustada) */}
            <div className="absolute -left-4 bottom-10 z-30 w-72">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentNotification}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/95 backdrop-blur-md p-4 pr-6 rounded-2xl shadow-2xl border border-[#AED3F2] flex items-center gap-4"
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