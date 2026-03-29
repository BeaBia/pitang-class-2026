import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { Mail, MapPin, UserCircle2, Ship } from 'lucide-react'


export const Route = createFileRoute('/dashboard/users/')({
  component: UsersPage,
})

const fetchUsers = () => 
  fetch('https://dummyjson.com/users').then((res) => res.json())

function UsersPage() {
  const { data, isLoading } = useQuery({ 
    queryKey: ['users'], 
    queryFn: fetchUsers 
  })

  if (isLoading) return (
    <div className="p-8 flex items-center justify-center min-h-[50vh]">
      <div className="animate-bounce p-4 bg-[#F9FBDB] rounded-2xl shadow-lg border border-[#075F5F]/10">
        <Ship className="size-8 text-[#B94E27]" />
      </div>
    </div>
  )

  return (
    <div className="p-8 flex flex-col gap-8 bg-[#F9FBDB]/10 min-h-screen">
      <div>
        <h1 className="text-4xl font-black text-[#075F5F] tracking-tighter uppercase italic">
          Tripulação <span className="text-[#B94E27]">Cais</span>
        </h1>
        <p className="text-[#075F5F]/60 font-semibold uppercase tracking-widest text-[10px] mt-1">
          Operadores logísticos e pessoal de pátio
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.users?.map((user: any) => (
          <div key={user.id} className="bg-white rounded-[2rem] border border-[#075F5F]/10 p-6 shadow-sm hover:shadow-xl transition-all group overflow-hidden">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="relative">
                <img 
                  src={user.image} 
                  className="size-20 rounded-2xl bg-[#F9FBDB] border-2 border-[#075F5F]/10 group-hover:border-[#B94E27] transition-colors"
                  alt={user.firstName}
                />
                <div className="absolute -bottom-1 -right-1 bg-[#B94E27] text-white p-1 rounded-lg">
                  <UserCircle2 size={12} />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-black text-[#075F5F] tracking-tight">
                  {user.firstName} {user.lastName}
                </h3>
                <span className="text-[10px] font-bold text-[#B94E27] uppercase tracking-widest">{user.company.title}</span>
              </div>
              
              <div className="w-full space-y-2 mt-2 pt-4 border-t border-[#075F5F]/5">
                <div className="flex items-center gap-3 text-[#075F5F]/70 text-xs">
                  <Mail size={14} className="text-[#075F5F]/40 shrink-0" />
                  <span className="truncate">{user.email}</span>
                </div>
                <div className="flex items-center gap-3 text-[#075F5F]/70 text-xs">
                  <MapPin size={14} className="text-[#075F5F]/40 shrink-0" />
                  <span>{user.address.city}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}