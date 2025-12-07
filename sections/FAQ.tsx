import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const faqs = [
  {
    question: "O site será meu ou é alugado?",
    answer: "Depende do plano escolhido. No Plano Mensal, funciona como uma assinatura (estilo Netflix): nós cuidamos de tudo e o site fica no ar enquanto você for assinante. Já no Plano Vitalício, você faz um pagamento único e o site é 100% seu, com entrega do código-fonte e sem mensalidades eternas."
  },
  {
    question: "Em quanto tempo minha clínica estará no Google?",
    answer: "Após o envio das informações e pagamento do setup, nossa equipe coloca sua estrutura no ar em até 72 horas úteis. A indexação no Google começa imediatamente após a publicação."
  },
  {
    question: "Preciso pagar hospedagem por fora?",
    answer: "Não! No Plano Mensal (R$ 97/mês), a hospedagem premium e o certificado SSL já estão inclusos. No Plano Vitalício, você ganha 1 ano de hospedagem grátis conosco (após isso, você tem total liberdade para renovar ou migrar)."
  },
  {
    question: "Tem fidelidade ou multa de cancelamento?",
    answer: "Zero fidelidade no plano mensal. Acreditamos que você só deve ficar se estiver tendo resultado. Você pode cancelar sua assinatura a qualquer momento, sem multas surpresas."
  },
  {
    question: "Eu preciso ter um domínio (www.minhaclinica...)?",
    answer: "Sim, o domínio é a sua propriedade digital (aprox. R$ 40/ano no Registro.br). Caso você ainda não tenha, nossa equipe te auxilia na compra e faz toda a configuração técnica (DNS) para você."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#0F2942]">
      
      {/* Background Base - Camadas estáticas */}
      <div className="absolute inset-0 bg-[#0F2942]" />
      <div className="absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_0%,_rgba(108,197,217,0.1)_0%,_rgba(46,120,166,0.1)_50%,_transparent_100%)] pointer-events-none" />

      {/* Decorative Blobs - OTIMIZAÇÃO: transform-gpu para evitar repaint durante a animação do FAQ */}
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[#2E78A6]/20 rounded-full blur-[120px] pointer-events-none transform-gpu will-change-transform" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-[#6CC5D9]/10 rounded-full blur-[100px] pointer-events-none transform-gpu will-change-transform" />
      
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
        
        {/* Header */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-[#6CC5D9]" />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Dúvidas Frequentes
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#AED3F2]/80 text-lg">
            Tudo o que você precisa saber antes de <br className="md:hidden" /> modernizar sua clínica.
          </motion.p>
        </motion.div>

        {/* Lista de FAQs */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div 
                layout // OTIMIZAÇÃO CRÍTICA: Permite que o Framer gerencie o layout sem recálculos pesados
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
                viewport={{ once: true }}
                // OTIMIZAÇÃO: 
                // 1. transform-gpu: Isola o card na GPU
                // 2. transition-colors: Substitui transition-all para não brigar com a animação de altura
                className={`
                  border rounded-2xl overflow-hidden transition-colors duration-300 backdrop-blur-md transform-gpu
                  ${isActive 
                    ? 'bg-white/10 border-[#6CC5D9]/50 shadow-lg shadow-[#2E78A6]/20' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }
                `}
              >
                <motion.button
                  layout="position" // Mantém o botão estável durante a animação
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg pr-4 transition-colors ${isActive ? 'text-white' : 'text-[#AED3F2]'}`}>
                    {item.question}
                  </span>
                  <span className={`
                    p-2 rounded-full transition-colors shrink-0
                    ${isActive ? 'bg-[#6CC5D9] text-[#0F2942]' : 'bg-white/10 text-white'}
                  `}>
                    {isActive ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </motion.button>
                
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: 'hidden' }} // Importante para não "vazar" conteúdo durante a animação
                    >
                      <div className="p-6 pt-0 text-blue-100 leading-relaxed border-t border-white/10 mt-2">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;