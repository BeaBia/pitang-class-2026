import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
    <h1 className="text-2xl font-bold">Bem-vinda ao Marketplace</h1>

    <Link to="/login">
       <Button variant="destructive">Entrar</Button> 
    </Link>
    </div>
  );
}
