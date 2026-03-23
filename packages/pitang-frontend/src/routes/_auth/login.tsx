import { createFileRoute, redirect } from "@tanstack/react-router";
import { LoginForm } from "@/components/login-form";
import { useAuth } from "@/hooks/use-auth";

export const Route = createFileRoute("/_auth/login")({
  beforeLoad: () => {
    if (localStorage.getItem("token")) {
      throw redirect({ to: "/dashboard" });
    }
  },

  component: RouteComponent,
});

function RouteComponent() {
  const { handleLogin } = useAuth();

  return (
  <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-row-md max-w-sm md:max-w-3xl">
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
}
