import { createFileRoute } from '@tanstack/react-router'
import { 
  Package, 
  Users, 
  CheckCircle, 
  Anchor, 
  ArrowUpRight, 
  TrendingUp, 
  Ship 
} from 'lucide-react'


export const Route = createFileRoute('/dashboard/')({
  component: DashboardHome,
})

function DashboardHome() {
  const stats = [
    { name: 'Produtos no Cais', value: '128', icon: Package, change: '+12%' },
    { name: 'Usuários Ativos', value: '14', icon: Users, change: '+2' },
    { name: 'Tarefas Pendentes', value: '08', icon: CheckCircle, change: '-3%' },
    { name: 'Capacidade', value: '82%', icon: Anchor, change: 'Estável' },
  ]

  const chartData = [40, 70, 45, 90, 65, 80, 50];

  return (
    <div className="p-8 flex flex-col gap-8 bg-[#F9FBDB]/10 min-h-screen">
      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-black text-[#075F5F] tracking-tighter uppercase italic">
          Overview <span className="text-[#B94E27]">Cais</span>
        </h1>
        <p className="text-[#075F5F]/60 font-semibold uppercase tracking-widest text-[10px] mt-1">
          Monitoramento de carga e logística em tempo real
        </p>
      </div>

      {/* CARDS DE RESUMO */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.name} className="p-6 bg-white rounded-[2rem] border border-[#075F5F]/10 shadow-sm hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-2xl bg-[#075F5F] text-[#F9FBDB] group-hover:bg-[#B94E27] transition-colors">
                <item.icon size={20} />
              </div>
              <span className="text-[10px] font-black bg-[#075F5F]/5 text-[#075F5F] px-2 py-1 rounded-full uppercase">
                {item.change}
              </span>
            </div>
            <p className="text-4xl font-black text-[#075F5F] tracking-tighter">{item.value}</p>
            <p className="text-[10px] font-bold text-[#075F5F]/40 uppercase tracking-widest mt-1">{item.name}</p>
          </div>
        ))}
      </div>

      {/* GRÁFICOS FAKE COM TAILWIND */}
      <div className="grid gap-6 lg:grid-cols-3">
        
        {/* GRÁFICO DE BARRAS */}
        <div className="lg:col-span-2 p-8 bg-white rounded-[2.5rem] border border-[#075F5F]/10 shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-black text-[#075F5F] uppercase tracking-tighter text-xl">Fluxo de Atracação</h2>
          </div>
          
          <div className="flex items-end justify-between h-48 gap-2">
            {chartData.map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-[#075F5F] rounded-t-xl transition-all hover:bg-[#B94E27] cursor-pointer" 
                  style={{ height: `${height}%` }}
                />
                <span className="text-[10px] font-bold text-[#075F5F]/40 uppercase">D{i+1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* STATUS DO TERMINAL (CAPACIDADE) */}
        <div className="p-8 bg-[#075F5F] rounded-[2.5rem] shadow-xl text-[#F9FBDB] flex flex-col justify-between">
          <div>
            <Ship size={40} className="mb-4 text-[#B94E27]" />
            <h2 className="font-black text-2xl uppercase tracking-tighter leading-none">Status do <br/>Terminal</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-end">
               <span className="text-5xl font-black tracking-tighter">82%</span>
               <span className="text-xs font-bold uppercase pb-2 opacity-60">Ocupado</span>
            </div>
            <div className="h-4 w-full bg-[#F9FBDB]/10 rounded-full overflow-hidden">
               <div className="h-full bg-[#B94E27] w-[82%] rounded-full" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}