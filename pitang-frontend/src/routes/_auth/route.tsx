import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import {Anchor, Link, Star, GalleryVerticalEnd } from "lucide-react";

export const Route = createFileRoute("/_auth")({
  beforeLoad: () => {
  
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("@pitang/accessToken="))
      ?.split("=")[1];

    
    if (token) {
      throw redirect({ to: "/dashboard" });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grid h-screen lg:grid-cols-2 overflow-hidden fixed inset-0 font-sans">
      {/* 1. COLUNA DA ESQUERDA (CADASTRO/LOGIN) */}
    <div className="flex flex-col p-8 md:p-12 md:pt-16 bg-[#B94E27] relative z-10 text-[#F9FBDB] overflow-y-auto">
  
    {/* LOGO (Sempre fixa no topo) */}
    <div className="flex justify-center gap-2 md:justify-start mb-12">
      <Link to="/" className="flex items-center gap-2 font-black text-2xl tracking-tighter uppercase text-[#F9FBDB]">
        <div className="flex size-10 items-center justify-center rounded-xl bg-[#075F5F] shadow-2xl">
          <Anchor className="size-6 text-[#F9FBDB]" />
        </div>
        Cais
      </Link>
    </div>
  
  {/* CONTAINER DO FORMULÁRIO */}
  <div className="flex flex-1 items-start justify-center pt-4 md:pt-8 pb-20">
    <div className="w-full max-w-sm auth-container">
            
            <style dangerouslySetInnerHTML={{ __html: `
              .auth-container div, .auth-container form { 
                background: transparent !important; 
                padding: 0 !important; 
                border: none !important;
                box-shadow: none !important;
              }

              /* INPUTS COMO LINHAS */
              .auth-container input {
                background: transparent !important;
                border: none !important;
                border-bottom: 2px solid rgba(249, 251, 219, 0.4) !important;
                border-radius: 0 !important;
                color: #F9FBDB !important;
                padding: 12px 0 !important;
                margin-bottom: 15px !important;
                width: 100% !important;
              }
              .auth-container input:focus {
                border-bottom-color: #F9FBDB !important;
                outline: none !important;
              }

              /* PADRONIZAÇÃO DOS BOTÕES: CREME COM TEXTO LARANJA */
              .auth-container button {
                background-color: #F9FBDB !important;
                color: #B94E27 !important;
                font-weight: 900 !important;
                text-transform: uppercase !important;
                letter-spacing: 0.1em !important;
                border-radius: 9999px !important;
                height: 3.5rem !important;
                width: 100% !important;
                border: none !important;
                margin-top: 15px !important;
                transition: all 0.2s ease !important;
                display: flex !important;
                align-items: center !important;
                justify-center !important;
              }
              
              .auth-container button:hover {
                background-color: #ffffff !important;
                transform: scale(1.02);
              }

              /* AJUSTE ESPECÍFICO PARA O ÍCONE DO GOOGLE DENTRO DO BOTÃO */
              .auth-container button svg {
                margin-right: 10px !important;
                color: #B94E27 !important;
              }

              .auth-container label, .auth-container p, .auth-container span, .auth-container a {
                color: #F9FBDB !important;
              }
              
              /* ESCONDE O DIVISOR "OR CONTINUE WITH" PARA LIMPAR O VISUAL */
              .auth-container .relative.my-4 {
                display: none !important;
              }
            ` }} />

            <div className="auth-container">
              <Outlet />
            </div>
            
          </div>
        </div>
      </div>

      {/* 2. COLUNA DA DIREITA (IMAGEM + FRASE) */}
      <div className="relative hidden bg-[#075F5F] lg:block overflow-hidden">
        <img
          src="/src/assets/cais_landing_page.png"
          alt="Cais Illustration"
          className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-overlay scale-110"
        />
        
        <div className="absolute inset-0 bg-[#075F5F]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#075F5F] via-transparent to-transparent opacity-80" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#B94E27]/40 to-transparent" />

        <div className="absolute bottom-16 left-16 right-16 z-10">
          <div className="flex gap-1 mb-3">
             {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} fill="#F9FBDB" className="text-[#F9FBDB]" />
              ))}
          </div>
          <h2 className="text-5xl font-black text-[#F9FBDB] leading-tight tracking-tighter font-serif">
            Sua rotina pede <br />
            um <span className="text-[#F9FBDB]/70 italic">porto seguro.</span>
          </h2>
          <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.5em] text-[#F9FBDB]/40">
            Atracou • Comprou • Chegou
          </p>
        </div>
      </div>
    </div>
  );
}

