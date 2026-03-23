import { createFileRoute, redirect } from "@tanstack/react-router";

function getCookie(cookieName: string) {
  return document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${cookieName}=`))
    ?.split("=")[1];
}


export const Route = createFileRoute("/dashboard/")({
  beforeLoad: () => {
    const token = getCookie("@pitang/accessToken");
    if (!token) {
      throw redirect({
        to: "/login",
      });
    }
  },

  component: RouteComponent,
});

function RouteComponent() {
  return (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Bem-vinda ao Dashboard!</h1>
    </div>
  );
}

