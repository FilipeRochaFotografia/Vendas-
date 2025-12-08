import React from 'react';
import { Phone, ArrowUp, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-white to-[#E4EAF2] text-slate-600 pt-20 pb-10 border-t border-[#AED3F2] relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-[#AED3F2]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#2E78A6]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Marca & Propósito */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={scrollToTop}>
              {/* Logo ClinicPage */}
              <img 
                src="https://i.ibb.co/sdKGmZR3/Odonto-Page-Logo.png" 
                alt="ClinicPages Logo" 
                className="h-7 w-auto object-contain mix-blend-multiply opacity-90"
              />
              <div className="text-2xl font-extrabold text-[#2E78A6] tracking-tight">
                Clinic<span className="text-[#6CC5D9]">Pages</span>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm">
              Transformamos clínicas comuns em autoridades digitais. Tenha o site que seus pacientes esperam e o resultado que você merece.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="hidden md:block">
            <h4 className="text-[#2E78A6] font-bold mb-6 text-lg">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-[#6CC5D9] transition-colors flex items-center gap-2">Início</a></li>
              <li><a href="#features" className="hover:text-[#6CC5D9] transition-colors flex items-center gap-2">Estratégia</a></li>
              <li><a href="#bonus" className="hover:text-[#6CC5D9] transition-colors flex items-center gap-2">Bônus IA</a></li>
              <li><a href="#pricing" className="hover:text-[#6CC5D9] transition-colors flex items-center gap-2">Investimento</a></li>
              <li><a href="#faq" className="hover:text-[#6CC5D9] transition-colors flex items-center gap-2">Dúvidas</a></li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="text-[#2E78A6] font-bold mb-6 text-lg">Fale Conosco</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="p-2 bg-[#E4EAF2] rounded-lg text-[#2E78A6]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-slate-800">WhatsApp Comercial</span>
                  {/* Link atualizado */}
                  <a href="https://wa.link/kxfsjj" target="_blank" rel="noopener noreferrer" className="hover:text-[#6CC5D9] transition-colors">+351 936351006</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 bg-[#E4EAF2] rounded-lg text-[#2E78A6]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-slate-800">Email</span>
                  <a href="mailto:almavisualartscc@gmail.com" className="hover:text-[#6CC5D9] transition-colors">almavisualartscc@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Coluna 4: CTA Final (Substituindo Horário) */}
          <div className="bg-white border border-[#AED3F2] p-6 rounded-2xl shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#6CC5D9]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
            
            <h4 className="text-[#2E78A6] font-bold mb-3 relative z-10">Pronto para começar?</h4>
            <p className="text-xs text-slate-500 mb-4 relative z-10">
              Garanta sua presença digital e pare de perder pacientes para a concorrência.
            </p>
            
            <a 
              href="https://wa.link/kxfsjj" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#2E78A6] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#205A80] transition-colors shadow-md relative z-10"
            >
              Falar com Especialista
            </a>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-[#AED3F2] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} ClinicPages Tecnologia. Todos os direitos reservados.</p>
          
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-2 hover:text-[#2E78A6] transition-colors font-medium"
          >
            Voltar ao topo <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;