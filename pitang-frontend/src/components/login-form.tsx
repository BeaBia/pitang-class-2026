import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import { useState, type SubmitEvent } from "react";

export type SignInForm = {
  username: string;
  password: string;
};

export function LoginForm({
  className,
  onSubmit,
  ...props
}: React.ComponentProps<"form"> & {
  onSubmit: (event: SubmitEvent<HTMLFormElement>, data: SignInForm) => void;
}) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      {...props}
      className={cn("flex flex-col gap-8 bg-transparent p-0 border-none shadow-none w-full", className)}
      onSubmit={(event) => onSubmit(event, { username, password })}
    >
      <div className="mb-4 self-start">
        <h2 className="text-4xl font-black uppercase tracking-tighter text-[#F9FBDB] font-serif">
          Login
        </h2>
        <div className="h-1.5 w-14 bg-[#075F5F] mt-1 shadow-lg" />
      </div>
      
      <FieldGroup className="bg-transparent border-none shadow-none p-0">
        <Field>
          <Input
            id="username"
            name="username"
            placeholder="Usuário"
            onChange={(event) => setUserName(event.target.value)}
            required
            type="text"
            value={username}
            className="bg-transparent"
          />
        </Field>
        <Field>
          <Input
            id="password"
            placeholder="Senha"
            onChange={(event) => setPassword(event.target.value)}
            name="password"
            required
            type="password"
            value={password}
            className="bg-transparent"
          />
          <div className="flex justify-end mt-2">
            <a
              href="#"
              className="text-xs text-[#F9FBDB]/60 hover:text-[#F9FBDB] transition-colors underline-offset-4 hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>
        </Field>
        
        <Field className="mt-2">
          <Button type="submit" className="w-full">Entrar no Cais</Button>
        </Field>

        <p className="flex items-center gap-4 text-[#F9FBDB]/40 uppercase tracking-[0.4em] text-[10px] my-2 before:h-px before:flex-1 before:bg-[#F9FBDB]/20 after:h-px after:flex-1 after:bg-[#F9FBDB]/20 text-center w-full">
          Ou continue com
        </p>

        <Field>
          <Button variant="outline" type="button" className="w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="size-4 mr-2">
              <path
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" 
                fill="currentColor"
              />
            </svg>
            Login com o Google
          </Button>
          <p className="text-center text-xs text-[#F9FBDB]/60 mt-6">
            Não tem uma conta?{" "}
            <Link to="/register" className="text-[#F9FBDB] font-bold underline underline-offset-4">
              Cadastre-se
            </Link>
          </p>
        </Field>
      </FieldGroup>
    </form>
  );
}