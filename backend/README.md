# Backend - NeuroBridge+

API principal do NeuroBridge+, construída com Node.js, Express e TypeScript.

## Stack

-   **Node.js 20+**
-   **Express** para API REST
-   **TypeScript** para type safety
-   **MongoDB** com Mongoose
-   **JWT** para autenticação
-   **Zod** para validação de dados

## Instalação

```bash
npm install
```

## Configuração

Copie o arquivo `.env.example` para `.env` e preencha as variáveis de ambiente:

```bash
cp .env.example .env
```

## Desenvolvimento

```bash
npm run dev
```

O servidor estará disponível em [http://localhost:5000](http://localhost:5000).

## Build

```bash
npm run build
npm start
```

## Testes

```bash
npm run test
```

## Estrutura

```
src/
├── routes/       # Definições de rotas
├── controllers/  # Lógica de negócio
├── models/       # Modelos do MongoDB
├── middleware/   # Middlewares (auth, validação, etc.)
├── services/     # Serviços externos
├── utils/        # Utilitários
└── server.ts     # Ponto de entrada
```

