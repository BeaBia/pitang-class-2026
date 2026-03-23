import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  beforeLoad: ({ location }) => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("@pitang/accessToken="))
      ?.split("=")[1];

    if (!token) {
      throw redirect({ to: "/login" });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/dashboard/"!</div>;
}
