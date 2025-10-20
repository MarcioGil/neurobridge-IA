> Este roadmap descreve as fases de desenvolvimento do NeuroBridge+ e as funcionalidades planejadas.

# Roadmap do NeuroBridge+

Este documento apresenta o plano de desenvolvimento do projeto NeuroBridge+, dividido em fases incrementais. Cada fase adiciona funcionalidades importantes e traz valor mensurável para os usuários.

## Fase 1: MVP (Produto Mínimo Viável) — 3 meses

**Objetivo:** Criar uma versão funcional básica da plataforma que permita cadastro, avaliação de acessibilidade e visualização de cursos.

### Funcionalidades

-   [ ] Sistema de autenticação (registro, login, logout)
-   [ ] Cadastro de usuários (candidatos e empresas)
-   [ ] Questionário de avaliação de acessibilidade
-   [ ] Geração de perfil de acessibilidade básico
-   [ ] Listagem de cursos com filtros
-   [ ] Visualização de detalhes de cursos
-   [ ] Interface responsiva e acessível (WCAG 2.1 AA)
-   [ ] Integração com VLibras para Libras
-   [ ] Documentação básica (README, API)

### Tecnologias

-   Frontend: React, TypeScript, Tailwind CSS
-   Backend: Node.js, Express, MongoDB
-   AI Services: FastAPI (estrutura básica)

---

## Fase 2: Sistema de Recomendações — 2 meses

**Objetivo:** Implementar o sistema de recomendação de cursos personalizado baseado no perfil do usuário.

### Funcionalidades

-   [ ] Algoritmo de recomendação de cursos (filtragem colaborativa + baseada em conteúdo)
-   [ ] Banco vetorial para similaridade semântica (FAISS)
-   [ ] Dashboard do usuário com cursos recomendados
-   [ ] Sistema de inscrição em cursos
-   [ ] Acompanhamento de progresso em cursos
-   [ ] Integração com APIs de conteúdo educacional externo
-   [ ] Testes automatizados (unitários e de integração)

### Tecnologias

-   Machine Learning: Scikit-learn, Sentence Transformers
-   Banco Vetorial: FAISS

---

## Fase 3: Matching de Vagas — 2 meses

**Objetivo:** Criar o sistema de matching entre candidatos e vagas, considerando acessibilidade.

### Funcionalidades

-   [ ] Cadastro de empresas e vagas
-   [ ] Sistema de matching candidato-vaga
-   [ ] Algoritmo de compatibilidade de acessibilidade
-   [ ] Painel de empresas para gerenciar vagas
-   [ ] Sistema de candidatura para vagas
-   [ ] Relatórios de diversidade para empresas
-   [ ] Notificações por email

### Tecnologias

-   NLP: Transformers (BERT) para análise de descrições de vagas
-   Email: Nodemailer

---

## Fase 4: Comunicação Inclusiva — 2 meses

**Objetivo:** Implementar o chatbot inclusivo e ferramentas de comunicação multimodal.

### Funcionalidades

-   [ ] Chatbot com LLM (GPT-4 ou similar)
-   [ ] Integração com Whisper para speech-to-text
-   [ ] Integração com TTS (text-to-speech)
-   [ ] Tradução de mensagens para Libras (VLibras API)
-   [ ] Simplificação de texto com NLP
-   [ ] Chat em tempo real (Socket.io)
-   [ ] Histórico de conversas

### Tecnologias

-   LLM: OpenAI API (GPT-4)
-   Speech: Whisper, gTTS
-   Real-time: Socket.io

---

## Fase 5: Auditoria de Acessibilidade — 1 mês

**Objetivo:** Criar a ferramenta de auditoria de acessibilidade para sites de empresas.

### Funcionalidades

-   [ ] Análise de HTML/CSS para conformidade WCAG
-   [ ] Verificação de contraste de cores
-   [ ] Análise de estrutura semântica
-   [ ] Testes de navegação por teclado
-   [ ] Geração de relatórios detalhados
-   [ ] Recomendações de melhorias

### Tecnologias

-   Auditoria: axe-core, Puppeteer
-   Análise de contraste: Color Contrast Analyzer

---

## Fase 6: Comunidade e Mentoria — 1 mês

**Objetivo:** Criar um espaço de comunidade e sistema de mentoria.

### Funcionalidades

-   [ ] Fórum/comunidade para PCDs
-   [ ] Sistema de mentoria (match mentor-mentorado)
-   [ ] Chat entre mentores e mentorados
-   [ ] Sistema de gamificação (selos, conquistas)
-   [ ] Metas de aprendizado
-   [ ] Moderação de conteúdo

### Tecnologias

-   Real-time: Socket.io
-   Moderação: OpenAI Moderation API

---

## Fase 7: Otimização e Escala — Contínuo

**Objetivo:** Otimizar a plataforma para escala e melhorar a experiência do usuário.

### Funcionalidades

-   [ ] Otimização de performance (cache, CDN)
-   [ ] Monitoramento e observabilidade (Sentry, Prometheus)
-   [ ] Testes de carga
-   [ ] Melhorias de UX baseadas em feedback
-   [ ] Internacionalização (i18n)
-   [ ] Aplicativo mobile (React Native)

### Tecnologias

-   Monitoramento: Sentry, Prometheus, Grafana
-   Mobile: React Native

---

## Métricas de Sucesso

Para cada fase, mediremos o sucesso através das seguintes métricas:

-   **Taxa de conversão:** Cadastro → Emprego
-   **Tempo médio de capacitação**
-   **Satisfação do usuário (NPS)**
-   **Diversidade de perfis atendidos**
-   **Número de empresas parceiras**
-   **Taxa de retenção de usuários**

---

**Este roadmap é um documento vivo e será atualizado conforme o projeto evolui e recebemos feedback da comunidade.**

