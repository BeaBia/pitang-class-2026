import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";


export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const navigate = useNavigate();

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
    toast.error("Senha muito curta!", {
      description: "A senha deve ter pelo menos 8 caracteres.",
    });
    return;
  }


    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem!", {
        description: "Verifique se digitou a mesma senha nos dois campos.",
      });
    return; 
  }
    
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: name, // A DummyJSON usa firstName
          email: email,
          password: password,
          username: email.split('@')[0] // Inventando um username baseado no email
        }),
      });

      if (response.ok) {
        toast.success("Conta criada com sucesso!", {
          description: "Agora você já pode fazer o login.",
        });
        setTimeout(() => {
          navigate({ to: "/login" });
        }, 1500);
      }
    } catch (error) {
      console.error("Erro no cadastro:", error);
    }
  };



  return (
    <form className={cn("flex flex-col gap-6", className)} onSubmit={handleSubmit} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Crie sua conta</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Preencha o formulário para cadastrar-se
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Nome completo</FieldLabel>
          <Input 
          id="name" 
          type="text" 
          placeholder="John Doe" 
          value={name}           
          onChange={(e) => setName(e.target.value)} 
          required />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input 
          id="email" 
          type="email" 
          placeholder="m@example.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />
          <FieldDescription>
            Nós não usaremos seu email para lhe contactar. E não compartilharemos com ninguém. Se alguém lhe contactar, cuidado! Pode ser um golpe.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Senha</FieldLabel>
          <Input 
          id="password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          required />
          <FieldDescription>
            Sua senha precisa ter no mín. 8 caracteres
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirme sua senha</FieldLabel>
          <Input 
          id="confirm-password" 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)}
          required />
          <FieldDescription>Por favor, confirme sua senha</FieldDescription>
        </Field>
        <Field>
          <Button type="submit">Criar uma conta</Button>
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
            Cadastre-se com o Google
          </Button>
          <FieldDescription className="px-6 text-center">
            Já tem uma conta? <Link to="/login">Login</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
