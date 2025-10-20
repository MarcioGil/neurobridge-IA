> A documentação completa da API será gerada dinamicamente via Swagger/OpenAPI no futuro.

# Documentação da API do NeuroBridge+

Esta documentação descreve os principais endpoints das APIs do NeuroBridge+. A arquitetura é dividida em duas APIs principais:

1.  **Backend API (Node.js):** Gerencia dados de usuários, empresas, vagas, cursos, etc.
2.  **AI Services API (Python):** Fornece os serviços de IA, como geração de perfis, recomendações e processamento de linguagem.

## Backend API

**URL Base:** `/api`

### Autenticação

A API utiliza **JWT (JSON Web Tokens)** para autenticação. Todas as rotas protegidas exigem um token no cabeçalho `Authorization`.

```
Authorization: Bearer <seu-token-jwt>
```

### Endpoints Principais

#### Autenticação (`/auth`)

*   `POST /auth/register`: Registra um novo usuário (candidato ou empresa).
*   `POST /auth/login`: Autentica um usuário e retorna um token JWT.
*   `POST /auth/refresh`: Atualiza um token JWT expirado.
*   `GET /auth/me`: Retorna os dados do usuário autenticado.

#### Usuários (`/users`)

*   `GET /users/:id`: Retorna os dados de um usuário específico.
*   `PUT /users/:id`: Atualiza os dados de um usuário.
*   `DELETE /users/:id`: Desativa a conta de um usuário.

#### Perfis de Acessibilidade (`/accessibility`)

*   `POST /accessibility`: Cria ou atualiza o perfil de acessibilidade de um usuário.
*   `GET /accessibility/:userId`: Retorna o perfil de acessibilidade de um usuário.

#### Vagas (`/jobs`)

*   `GET /jobs`: Lista todas as vagas disponíveis, com filtros.
*   `GET /jobs/:id`: Retorna os detalhes de uma vaga específica.
*   `POST /jobs`: (Empresas) Cria uma nova vaga.
*   `PUT /jobs/:id`: (Empresas) Atualiza uma vaga.
*   `POST /jobs/:id/apply`: (Candidatos) Aplica para uma vaga.

--- 

## AI Services API

**URL Base:** `/api`

### Endpoints Principais

#### Geração de Perfil (`/profile`)

*   `POST /profile/generate`: Recebe as respostas de um questionário e gera um perfil de acessibilidade detalhado, utilizando modelos de NLP para interpretar as respostas.

#### Recomendações (`/recommendations`)

*   `POST /recommendations/courses`: Retorna uma lista de cursos recomendados com base no perfil do usuário, seus interesses e estilo de aprendizado.
*   `POST /recommendations/jobs`: Retorna uma lista de vagas recomendadas, fazendo um *match* entre as habilidades do usuário, seu perfil de acessibilidade e os requisitos da vaga.

#### Chatbot (`/chat`)

*   `POST /chat/message`: Processa uma mensagem de um usuário, a interpreta usando um LLM e retorna uma resposta adaptada e empática.
*   `POST /chat/translate`: Converte um texto para diferentes modalidades (texto simplificado, áudio, vídeo em Libras).

#### Auditoria de Acessibilidade (`/accessibility`)

*   `POST /accessibility/audit`: Recebe uma URL e retorna um relatório de acessibilidade, analisando o HTML/CSS em busca de violações das diretrizes WCAG.

## Formato das Respostas

Todas as respostas da API seguem um formato padrão para consistência:

**Sucesso:**

```json
{
  "success": true,
  "data": { ... },
  "meta": { ... } // Para paginação
}
```

**Erro:**

```json
{
  "success": false,
  "error": {
    "code": "CODIGO_DO_ERRO",
    "message": "Descrição do erro."
  }
}
```

