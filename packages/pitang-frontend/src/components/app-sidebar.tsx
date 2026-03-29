import * as React from "react";
import { Link } from "@tanstack/react-router"; 

import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Anchor,
  LayoutDashboard,
  Package,
  Users,
  type LucideIcon
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

const data = {
  projects: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard as LucideIcon,
    },
    {
      name: "Produtos",
      url: "/dashboard/products",
      icon: Package as LucideIcon,
    },
    {
      name: "Usuários",
      url: "/dashboard/users",
      icon: Users as LucideIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { loggedUser, handleLogout } = useAuth();
  const { state } = useSidebar();

  return (
   
    <Sidebar variant="floating" collapsible="icon" {...props}>
      <SidebarHeader className="pt-8 px-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <Link to="/dashboard" className="flex items-center gap-3 group">
              <div className="flex aspect-square size-10 items-center justify-center rounded-xl bg-[#F9FBDB] text-[#075F5F] shadow-lg shrink-0 transition-transform group-hover:scale-105">
                <Anchor className="size-6" />
              </div>

              {state === "expanded" && (
                <div className="grid flex-1 text-left text-sm leading-tight animate-in fade-in duration-300">
                  <span className="truncate font-black uppercase tracking-tighter text-[#F9FBDB] text-2xl leading-none">
                    Cais
                  </span>
                  <span className="truncate text-[10px] font-bold uppercase tracking-widest text-[#F9FBDB]/60 mt-1">
                    {loggedUser?.company?.title || "Terminal Principal"}
                  </span>
                </div>
              )}
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="mt-6 px-2">
        <NavProjects projects={data.projects} />
      </SidebarContent>

      <SidebarFooter className="pb-4 px-2">
        <NavUser
          handleLogout={handleLogout}
          user={{
            avatar: loggedUser?.image || "",
            email: loggedUser?.email || "emily@cais.com",
            name: loggedUser?.firstName 
              ? `${loggedUser.firstName} ${loggedUser.lastName}` 
              : "Emily Johnson",
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}