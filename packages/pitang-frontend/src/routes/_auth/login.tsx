import { createFileRoute, redirect } from "@tanstack/react-router";
import { LoginForm } from "@/components/login-form";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/_auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const { handleLogin } = useAuth();

  return (
    
    <div className="w-full flex justify-center pt-0"> 
      <div className="w-full max-w-sm">
        <LoginForm onSubmit={handleLogin as any} />
      </div>
    </div>
  );
}
