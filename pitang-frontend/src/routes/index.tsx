import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Anchor, Ship, ShoppingBag, PackageCheck, Star, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div id="inicio" className="min-h-screen bg-[#F9FBDB] text-[#645040] font-sans selection:bg-[#B94E27] selection:text-white scroll-smooth">
      
      {/* 1. HEADER - EFEITO VIDRO SOBRE O FUNDO ESCURO */}
      <header className="flex items-center justify-between px-8 py-6 sticky top-0 z-50 bg-[#075F5F]/80 backdrop-blur-xl border-b border-[#F9FBDB]/10 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="text-[#F9FBDB]">
            <Anchor size={24} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-black tracking-tighter text-[#F9FBDB] uppercase">Cais</span>
        </div>

        <nav className="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-[0.25em] text-[#F9FBDB]/60">
          <a href="#inicio" className="hover:text-[#B94E27] transition-all text-[#F9FBDB]">Início</a>
          <a href="#sobre" className="hover:text-[#B94E27] transition-all text-[#F9FBDB]">Sobre</a>
          <a href="#como-funciona" className="hover:text-[#B94E27] transition-all text-[#F9FBDB]">Como Funciona</a>
        </nav>

        <Link to="/login">
          <Button className="bg-[#B94E27] hover:bg-[#8d3a1d] text-white rounded-full px-8 font-bold shadow-2xl transition-all border-none text-xs">
            Entrar
          </Button>
        </Link>
      </header>

      {/* 2. HERO SECTION - ESCURECIMENTO CHIQUE E FONTES REFINADAS */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#075F5F]">
        
        {/* IMAGEM DE FUNDO - A "MÁGICA" DO CONTRASTE */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/cais_landing_page.png" // <== SUA IMAGEM ILUSTRATIVA (image_a70183.jpg)
            alt="Cais Background Illustration" 
            className="w-full h-full object-cover object-center opacity-65 mix-blend-multiply scale-105" 
            /* mix-blend-multiply faz a imagem "fundir" com o azul escuro do fundo */
          />
          
          {/* Névoa Teal e Gradientes de Profundidade - MUITO MAIS PRESENTES AGORA */}
          <div className="absolute inset-0 bg-[#075F5F]/60" /> {/* <== Aumentei o overlay escuro (Teal) */}
          
          {/* Gradiente Superior para o Header e Título */}
          <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-[#075F5F] via-[#075F5F]/30 to-transparent" />
          
          {/* Gradiente Inferior (para transição) */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#075F5F] to-transparent" />
        </div>

        {/* CONTEÚDO CENTRALIZADO (Novos Textos e Tipografia com Vollkorn) */}
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          
          {/* TÍTULO - TAMANHO REDUZIDO E CORES SELETIVAS (DROP-SHADOW ATUALIZADO) */}
          {/* Use Vollkorn aqui se você configurou o Google Fonts no seu CSS/Config */}
          <h1 className="text-4xl md:text-7xl font-black text-[#F9FBDB] leading-[1.1] tracking-tighter drop-shadow-2xl mb-8 max-w-4xl font-serif">
            O <span className="text-[#B94E27]">porto seguro</span> para tudo <br />
            o que sua <span className="text-[#B94E27]">rotina</span> pede
          </h1>

          {/* SLOGAN - ELEGANTE E DISCRETO (DROP-SHADOW ATUALIZADO) */}
          <p className="text-lg md:text-2xl font-extrabold text-[#F4F7BE]/80 tracking-[0.15em] uppercase mb-12 drop-shadow-lg font-sans">
            Atracou • Comprou • Chegou
          </p>
          
          <Link to="/login">
            <Button 
              size="lg" 
              className="bg-[#B94E27] hover:bg-[#8d3a1d] text-white text-lg px-14 py-8 rounded-full shadow-[0_20px_50px_rgba(185,78,39,0.3)] transition-all hover:scale-105 active:scale-95 group font-sans font-bold uppercase tracking-wider"
            >
              Acessar Cais Marketplace
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>

          {/* Selo de Agilidade Chique no Rodapé do Hero */}
          <div className="mt-20 flex flex-col items-center gap-2 opacity-30">
            <div className="h-[1px] w-20 bg-[#B94E27]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#F9FBDB]">
              Logística & Curadoria
            </span>
          </div>
        </div>
      </section>
   

      {/* 3. SEÇÃO SOBRE - TRANSIÇÃO PARA O CREME */}
      <section id="sobre" className="py-24 bg-[#F9FBDB] relative z-20 rounded-t-[3rem] -mt-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#B94E27] mb-8">Nossa Origem</h2>
          <p className="text-3xl md:text-5xl font-black text-[#075F5F] leading-tight tracking-tighter mb-10">
            Unificando os polos do seu dia a dia.
          </p>
          <p className="text-lg text-[#73835D] leading-relaxed font-medium">
            A Cais nasceu para ser a ponte entre o necessário e o extraordinário. 
            Do perfume importado à cesta de mercado, somos o hub onde a logística encontra a curadoria. 
            Um porto seguro onde a confiança desembarca primeiro.
          </p>
        </div>
      </section>

      {/* 4. COMO FUNCIONA - DARK MODE SOFISTICADO */}
      <section id="como-funciona" className="bg-[#075F5F] py-32 text-[#F9FBDB] rounded-[3rem] mx-4 md:mx-8 mb-8 shadow-2xl">
        <div className="container mx-auto px-6 text-center">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center group">
              <div className="mb-6 p-6 rounded-full border border-[#F9FBDB]/10 group-hover:bg-[#B94E27] transition-all duration-500">
                <Ship size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-widest text-[#F9FBDB]">Atracou</h3>
              <p className="text-[#F9FBDB]/40 font-light leading-relaxed text-sm px-4">
                Navegue por categorias curadas. O equilíbrio perfeito entre o que você precisa e o que você ama.
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="mb-6 p-6 rounded-full border border-[#F9FBDB]/10 group-hover:bg-[#B94E27] transition-all duration-500">
                <ShoppingBag size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-widest text-[#F9FBDB]">Comprou</h3>
              <p className="text-[#F9FBDB]/40 font-light leading-relaxed text-sm px-4">
                Experiência de check-out fluida e segura. Sua compra tratada como carga preciosa em nosso terminal.
              </p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="mb-6 p-6 rounded-full border border-[#F9FBDB]/10 group-hover:bg-[#B94E27] transition-all duration-500">
                <PackageCheck size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-widest text-[#F9FBDB]">Chegou</h3>
              <p className="text-[#F9FBDB]/40 font-light leading-relaxed text-sm px-4">
                Agilidade recorde do nosso cais à sua porta. O destino final da sua busca, entregue com excelência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEEDBACKS - CLEAN & CHIC */}
      <section className="py-24 bg-[#F9FBDB] flex flex-col items-center text-center">
        <div className="flex gap-1 mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={16} fill="#B94E27" className="text-[#B94E27]" />
          ))}
        </div>
        <blockquote className="text-2xl md:text-4xl font-black text-[#075F5F] tracking-tighter max-w-2xl leading-tight mb-8">
          "A Cais entende que minha rotina exige praticidade sem abrir mão do luxo."
        </blockquote>
        <cite className="not-italic font-bold uppercase tracking-[0.3em] text-[#73835D] text-[10px]">
          — Ana Salté • Membro Exclusive
        </cite>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#053a3a] py-12 text-center border-t border-[#F9FBDB]/5">
        <div className="container mx-auto px-6">
          <p className="text-[#F9FBDB]/30 text-[9px] font-bold uppercase tracking-[0.5em]">
            © 2026 Cais Marketplace • Um projeto Pitang • Por Beatriz Bandeira
          </p>
        </div>
      </footer>
    </div>
  );
}
