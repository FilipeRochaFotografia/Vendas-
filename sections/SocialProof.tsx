import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Star, Shield, Zap, Smartphone, Sparkles, Award, Server } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const SocialProof = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'lifetime'>('monthly');

  const isLifetime = billingCycle === 'lifetime';
  
  // Configuração de Temas (Cores)
  const theme = {
    // Card Principal: Azul (Mensal) vs Dourado (Vitalício)
    cardBg: isLifetime 
      ? 'bg-gradient-to-br from-[#D9A404] to-[#A66D03] shadow-[#A66D03]/40 border-white/20' 
      : 'bg-gradient-to-br from-[#2E78A6] to-[#205A80] shadow-[#2E78A6]/30 border-white/20',
    
    // Badge "Oferta Especial"
    badgeBg: isLifetime ? 'bg-white text-[#A66D03]' : 'bg-[#6CC5D9] text-white',
    
    // Texto do Botão de Ação
    buttonText: isLifetime ? 'text-[#A66D03]' : 'text-[#2E78A6]',
    
    // Ícones internos do card
    iconColor: isLifetime ? 'text-white' : 'text-[#6CC5D9]',
    
    // Subtítulo
    subText: isLifetime ? 'text-amber-100' : 'text-[#AED3F2]',
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-[#E4EAF2] relative overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute top-[10%] left-[-10%] w-[60vw] h-[60vw] bg-[#AED3F2]/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#2E78A6]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header da Seção */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-extrabold text-[#2E78A6] mb-6 leading-tight">
            Quanto custa <br className="block md:hidden" />
            <span className="text-[#6CC5D9] line-through decoration-[#6CC5D9]/50 decoration-4">perder pacientes</span>?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-600 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Tenha a estrutura de uma grande rede de clínicas por um valor menor que uma única restauração por mês.
          </motion.p>
        </motion.div>

        {/* --- TOGGLE DE PLANOS --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/60 backdrop-blur-xl border border-[#AED3F2] p-1.5 rounded-full flex items-center shadow-lg relative">
            
            {/* Botão Mensal */}
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`
                relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 z-10
                ${billingCycle === 'monthly' ? 'text-white' : 'text-[#2E78A6] hover:text-[#205A80]'}
              `}
            >
              {billingCycle === 'monthly' && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-[#2E78A6] rounded-full -z-10 shadow-md"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              Plano Mensal
            </button>

            {/* Botão Vitalício */}
            <button 
              onClick={() => setBillingCycle('lifetime')}
              className={`
                relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 z-10 flex items-center gap-2
                ${billingCycle === 'lifetime' ? 'text-white' : 'text-[#2E78A6] hover:text-[#205A80]'}
              `}
            >
              {billingCycle === 'lifetime' && (
                <motion.div
                  layoutId="activePill"
                  // ALTERAÇÃO: Usando #D9A404 (Dourado Claro) para o botão
                  className="absolute inset-0 bg-[#D9A404] rounded-full -z-10 shadow-md"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              Plano Vitalício
              {/* Tag de Desconto - Texto dourado escuro para contraste no branco */}
              <span className={`text-[10px] px-2 py-0.5 rounded-full shadow-sm ${billingCycle === 'lifetime' ? 'bg-white text-[#A66D03]' : 'bg-[#D9A404]/10 text-[#A66D03]'}`}>
                -50% OFF
              </span>
            </button>
          </div>
        </motion.div>

        {/* Grid de Preços/Valor */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto" 
        >
          {/* Card 1: Infraestrutura (Vidro Claro) */}
          <motion.div 
            variants={fadeInUp}
            className="
              bg-white/40 backdrop-blur-xl border border-white/60 
              p-8 rounded-[2rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] 
              relative flex flex-col items-center text-center 
              hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] transition-all duration-300
            "
          >
            <div className="bg-white/50 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-[#2E78A6] shadow-inner border border-white/50">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-[#2E78A6] font-bold text-xl mb-6">Infraestrutura</h3>
            
            <div className="w-full max-w-[240px]"> 
              <ul className="space-y-3 text-left">
                {/* Manutenção aqui */}
                <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <Check className="w-5 h-5 text-[#6CC5D9] shrink-0 drop-shadow-sm" /> Manutenção Inclusa
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <Check className="w-5 h-5 text-[#6CC5D9] shrink-0 drop-shadow-sm" /> Certificado SSL
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <Check className="w-5 h-5 text-[#6CC5D9] shrink-0 drop-shadow-sm" /> Carregamento Rápido
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <Check className="w-5 h-5 text-[#6CC5D9] shrink-0 drop-shadow-sm" /> Domínio Configurado
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2: A Oferta Principal (Dinâmica: Azul ou Dourado) */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`
              ${theme.cardBg}
              text-white rounded-[2.5rem] shadow-2xl
              relative z-20 flex flex-col items-center text-center p-0 overflow-visible my-4 md:my-0
              border-4 transition-all duration-500
            `}
          >
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className={`absolute -top-5 px-6 py-2 rounded-full text-sm font-extrabold shadow-lg uppercase tracking-wide z-30 border border-white/20 ${theme.badgeBg}`}
            >
              Oferta Especial
            </motion.div>

            <div className="p-10 w-full flex flex-col items-center">
              
              <div className="mb-8 mt-2 h-36 flex flex-col justify-center">
                <p className={`${theme.subText} font-semibold text-xs uppercase tracking-[0.2em] mb-3`}>
                  {isLifetime ? 'ACESSO VITALÍCIO' : 'ASSINATURA FLEX'}
                </p>
                
                <AnimatePresence mode="wait">
                  {billingCycle === 'monthly' ? (
                    <motion.div
                      key="monthly"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-2xl font-medium opacity-80">R$</span>
                        <span className="text-7xl font-extrabold tracking-tighter drop-shadow-md">97</span>
                        <span className="text-xl font-medium opacity-80">/mês</span>
                      </div>
                      <p className="text-sm text-blue-100 mt-2 font-medium">+ Taxa única de setup: R$ 600</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="lifetime"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex flex-col items-center gap-0">
                        {/* Texto "De" maior */}
                        <span className="text-xl text-white/70 line-through decoration-white/50 mb-1 font-medium">De R$ 3.200</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-medium opacity-80">R$</span>
                          <span className="text-6xl font-extrabold tracking-tighter drop-shadow-md">1.690</span>
                        </div>
                      </div>
                      <p className="text-sm text-amber-100 mt-2 font-bold bg-white/20 px-3 py-1 rounded-full inline-block border border-white/20">
                        Em até 12x no cartão
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-3 w-full mb-8">
                {/* Item 1 */}
                <div className="bg-black/10 border border-white/10 p-4 rounded-xl flex items-center gap-3 w-full text-left backdrop-blur-sm">
                  <Smartphone className={`w-5 h-5 shrink-0 ${theme.iconColor}`} />
                  <span className="text-sm font-bold">Site Mobile First Profissional</span>
                </div>
                {/* Item 2 - 20 Fotos */}
                <div className="bg-black/10 border border-white/10 p-4 rounded-xl flex items-center gap-3 w-full text-left backdrop-blur-sm">
                  <Sparkles className={`w-5 h-5 shrink-0 ${theme.iconColor}`} />
                  <span className="text-sm font-bold">Bônus: 20 Fotos com IA</span>
                </div>
                
                {/* Item 3 - Dinâmico (Hospedagem) */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={billingCycle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-black/10 border border-white/10 p-4 rounded-xl flex items-center gap-3 w-full text-left backdrop-blur-sm"
                  >
                    {billingCycle === 'monthly' ? (
                      <>
                        <Zap className={`w-5 h-5 shrink-0 ${theme.iconColor}`} />
                        <span className="text-sm font-bold">Hospedagem Premium</span>
                      </>
                    ) : (
                      <>
                        <Server className={`w-5 h-5 shrink-0 ${theme.iconColor}`} />
                        <span className="text-sm font-bold">1 Ano de Hospedagem Grátis</span>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.button 
                onClick={() => window.open('https://wa.me/seunumerodewhatsapp', '_blank')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full bg-white ${theme.buttonText} py-4 rounded-xl font-extrabold text-lg shadow-xl flex items-center justify-center gap-3 group relative overflow-hidden`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {billingCycle === 'monthly' ? 'Assinar Agora' : 'Comprar Vitalício'}
                  <motion.div
                    animate={{ rotate: 0 }}
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Sparkles className={`w-5 h-5 ${isLifetime ? 'text-amber-500' : 'text-[#6CC5D9]'}`} />
                  </motion.div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E4EAF2] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity" style={{ transform: 'skewX(-20deg)' }} />
              </motion.button>
              
              <p className="text-center text-[10px] uppercase tracking-wide text-white/80 mt-5">
                {billingCycle === 'monthly' ? 'Sem fidelidade. Cancele quando quiser.' : 'Pagamento único. Site seu para sempre.'}
              </p>
            </div>
          </motion.div>

          {/* Card 3: Suporte (Vidro Claro) */}
          <motion.div 
            variants={fadeInUp}
            className="
              bg-white/40 backdrop-blur-xl border border-white/60 
              p-8 rounded-[2rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]
              relative flex flex-col items-center text-center 
              hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.1)] transition-all duration-300
            "
          >
            <div className="bg-white/50 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-[#2E78A6] shadow-inner border border-white/50">
              <Shield className="w-7 h-7" />
            </div>
            <h3 className="text-[#2E78A6] font-bold text-xl mb-6">Suporte & Gestão</h3>
            
            <div className="w-full max-w-[240px]">
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <Check className="w-5 h-5 text-[#6CC5D9] shrink-0 drop-shadow-sm" /> Atualização de Conteúdo
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <Check className="w-5 h-5 text-[#6CC5D9] shrink-0 drop-shadow-sm" /> Suporte via WhatsApp
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <Check className="w-5 h-5 text-[#6CC5D9] shrink-0 drop-shadow-sm" /> Otimização para Google
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <Check className="w-5 h-5 text-[#6CC5D9] shrink-0 drop-shadow-sm" /> Monitoramento 24h
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* --- GARANTIA PREMIUM (Simplificado) --- */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} 
          className="flex justify-center items-center mt-20 pt-4"
        >
            <div className="relative group">
                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#AED3F2] via-white to-[#AED3F2] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                
                {/* Box Vidro */}
                <div className="
                  relative flex flex-col items-center justify-center gap-3 px-12 py-6 
                  bg-white/60 backdrop-blur-xl border border-white/80 
                  rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]
                ">
                    
                    {/* Estrelas */}
                    <div className="flex gap-2">
                      {[1,2,3,4,5].map(i => (
                        <Star 
                          key={i} 
                          className="w-8 h-8 text-amber-400 fill-current drop-shadow-md" 
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>

                    {/* Texto Único */}
                    <p className="text-[#2E78A6] font-bold text-xl tracking-tight">
                      Satisfação Garantida
                    </p>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;