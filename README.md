# NeuroBridge+ &mdash; IA pela Inclusão de Todos

<p align="center">
  <img src="https://raw.githubusercontent.com/MarcioGil/neurobridge-IA/main/assets/logo.png" alt="NeuroBridge+ Logo" width="200"/>
</p>

<p align="center">
  <strong>Uma plataforma de inclusão profissional e educacional para pessoas com deficiência, usando Inteligência Artificial para remover barreiras, personalizar experiências e conectar talentos a empresas inclusivas.</strong>
</p>

<p align="center">
  <a href="#status-do-projeto">Status</a> •
  <a href="#missão">Missão</a> •
  <a href="#problemas-que-resolvemos">Problemas</a> •
  <a href="#solução">Solução</a> •
  <a href="#como-funciona">Como Funciona</a> •
  <a href="#stack-tecnológico">Tecnologias</a> •
  <a href="#arquitetura">Arquitetura</a> •
  <a href="#como-começar">Como Começar</a> •
  <a href="#contribuindo">Contribuindo</a> •
  <a href="#licença">Licença</a>
</p>

---

##  STATUS DO PROJETO

**Em desenvolvimento ativo.**

O projeto NeuroBridge+ está atualmente na fase de desenvolvimento inicial (MVP). As funcionalidades principais estão sendo construídas e a plataforma ainda não está em produção.

## MISSÃO

> **"Provar que a deficiência não é incapacidade, mas sim uma diferença que pode ser respeitada, acolhida e valorizada."**

Nossa missão é **promover inclusão profissional e educacional real** de pessoas com deficiência — física, sensorial ou neurodivergente. Usamos IA e tecnologia fullstack para remover barreiras, personalizar experiências e conectar talentos a empresas verdadeiramente inclusivas.

O NeuroBridge+ não é apenas um site ou app. **É uma ponte real entre potencial e oportunidade.**

## PROBLEMAS QUE RESOLVEMOS

| Problema | Descrição |
| :--- | :--- |
| **🚫 Barreiras de Comunicação** | Dificuldades de comunicação auditiva, visual, cognitiva ou social que excluem candidatos de processos seletivos. |
| **🧱 Falta de Ferramentas Adaptativas** | Processos seletivos e plataformas de aprendizado que não se adaptam aos diferentes perfis e necessidades de PCDs. |
| **🏢 Empresas Despreparadas** | Empresas que desejam contratar com inclusão, mas não sabem como preparar o ambiente ou adaptar seus processos. |
| **🎯 Ausência de Personalização** | Falta de plataformas que personalizem oportunidades, capacitação e comunicação de forma acessível e individualizada. |

## SOLUÇÃO

O NeuroBridge+ é um **ecossistema inclusivo e adaptativo**. Nossa IA atua como uma mediadora inteligente entre pessoas diversas e sistemas pouco preparados para compreendê-las.

**A IA do NeuroBridge+ adapta conteúdo, comunicação e recomendações para cada tipo de deficiência.**

O sistema funciona com módulos integrados que apoiam o usuário em toda a sua jornada:

1.  **Avaliação de Acessibilidade Individual**
2.  **Trilhas de Capacitação Adaptadas**
3.  **Matching Inclusivo de Vagas**
4.  **Assistente de Comunicação Inclusivo**
5.  **Painel de Empresas Inclusivas**
6.  **Comunidade e Mentoria**

## COMO FUNCIONA

| Etapa | O que faz | Resultado |
| :--- | :--- | :--- |
| **🧩 Avaliar** | A IA compreende o perfil, as limitações e os pontos fortes do usuário através de um questionário adaptativo. | Cria um **perfil cognitivo e de acessibilidade** personalizado. |
| **🎓 Capacitar** | Recomenda cursos e atividades compatíveis com o modo de aprendizado de cada pessoa. | **Aprendizado sem exclusão**, no ritmo individual. |
| **💼 Conectar** | Faz o match entre candidatos e empresas inclusivas, com base nas adaptações necessárias. | **Contratações reais e sustentáveis.** |
| **🗣️ Apoiar** | Usa IA para facilitar a comunicação entre candidatos e recrutadores (voz, texto, Libras, linguagem simples). | **Reduz ruídos e preconceitos** na comunicação. |
| **🏢 Educar Empresas** | Fornece relatórios e recomendações de acessibilidade e boas práticas. | **Ambientes corporativos mais acolhedores.** |

## STACK TECNOLÓGICO

| Categoria | Tecnologias |
| :--- | :--- |
| **Frontend** | React, TypeScript, Vite, Tailwind CSS, React ARIA, React Query |
| **Backend** | Node.js, Express, TypeScript, Mongoose, JWT, Zod |
| **Serviços de IA** | Python, FastAPI, PyTorch, Transformers, OpenAI API, Whisper, FAISS |
| **Banco de Dados** | MongoDB, Redis |
| **DevOps & Infra** | Docker, Docker Compose, GitHub Actions, Nginx |

## ARQUITETURA

O NeuroBridge+ utiliza uma arquitetura de microserviços para garantir escalabilidade, modularidade e resiliência.

```
neurobridge-plus/
├── frontend/         # Interface React acessível
├── backend/          # API principal (Node.js)
├── ai_services/      # Módulos de IA (Python/FastAPI)
├── database/         # Configurações de banco de dados
└── docs/             # Documentação
```

Para mais detalhes, consulte o documento de arquitetura: **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)**.

## COMO COMEÇAR

### Pré-requisitos

-   [Docker](https://www.docker.com/get-started)
-   [Docker Compose](https://docs.docker.com/compose/install/)
-   [Node.js](https://nodejs.org/) (para desenvolvimento local sem Docker)
-   [Python](https://www.python.org/) (para desenvolvimento local sem Docker)

### Instalação com Docker (Recomendado)

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/MarcioGil/neurobridge-IA.git
    cd neurobridge-IA
    ```

2.  **Crie um arquivo `.env`** na raiz do projeto e preencha com as variáveis de ambiente necessárias (use `.env.example` como referência).

3.  **Suba os containers:**
    ```bash
    docker-compose up --build
    ```

4.  **Acesse os serviços:**
    -   **Frontend:** [http://localhost:3000](http://localhost:3000)
    -   **Backend API:** [http://localhost:5000](http://localhost:5000)
    -   **AI Services API:** [http://localhost:8000](http://localhost:8000)
    -   **Mongo Express:** [http://localhost:8081](http://localhost:8081)

### Desenvolvimento Local (Sem Docker)

Consulte os `README.md` específicos em cada pasta (`frontend`, `backend`, `ai_services`) para instruções de instalação e execução local.

## CONTRIBUINDO

Nós encorajamos e agradecemos contribuições da comunidade! Se você quer ajudar a tornar o NeuroBridge+ ainda melhor, por favor, leia nosso **[Guia de Contribuição](docs/CONTRIBUTING.md)** para saber como.

## LICENÇA

Este projeto está licenciado sob a **Licença MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
  Feito com 💙 e foco em acessibilidade.
</p>

