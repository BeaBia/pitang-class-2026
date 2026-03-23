# 🚀 Pitang Marketplace - Atividade 2

Projeto desenvolvido para a trilha de capacitação da Pitang, focado em conceitos avançados de React, roteamento dinâmico e autenticação.

## 🎓 Autora
- **Bia** (Aluna de Engenharia da Computação - UPE)

## 🛠️ Tecnologias Utilizadas
- **React 18** com TypeScript
- **TanStack Router**: Gerenciamento de rotas e proteção de acesso via `beforeLoad`.
- **Tailwind CSS & Shadcn/UI**: Estilização responsiva e componentes de interface.
- **Sonner**: Feedback visual via Toasts.
- **DummyJSON API**: Consumo de endpoints de autenticação e produtos.

## 🔐 Funcionalidades Implementadas
- **Autenticação Segura**: Login utilizando Cookies (`@pitang/accessToken`) para persistência de sessão.
- **Proteção de Rotas**: Implementação de barreira de segurança no Layout Pai (`/dashboard`), garantindo que sub-rotas como `/products` sejam protegidas automaticamente.
- **Redirecionamento Inteligente**: Usuários logados são impedidos de acessar a página de Login, sendo enviados diretamente ao Dashboard.
- **Layout Responsivo**: Página de login adaptável para dispositivos móveis e desktop.

## 🚀 Como Executar o Projeto

1. Instale as dependências:
   ```bash
   npm install