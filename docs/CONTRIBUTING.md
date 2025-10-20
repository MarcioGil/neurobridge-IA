> Este é um projeto de código aberto e inclusivo. Toda contribuição é bem-vinda!

# Como Contribuir para o NeuroBridge+

Primeiramente, muito obrigado pelo seu interesse em contribuir com o NeuroBridge+! Sua ajuda é fundamental para construirmos uma plataforma que realmente faça a diferença na vida de muitas pessoas.

Este documento é um guia para ajudar você a contribuir com o projeto de forma organizada e eficiente.

## Código de Conduta

Antes de mais nada, esperamos que todos os contribuidores sigam nosso **[Código de Conduta](CODE_OF_CONDUCT.md)**. Este projeto se dedica a criar um ambiente seguro, respeitoso e acolhedor para todos, independentemente de identidade de gênero, orientação sexual, deficiência, etnia, religião ou qualquer outra característica.

## Como Posso Ajudar?

Existem muitas formas de contribuir, e nem todas envolvem escrever código. Aqui estão algumas ideias:

*   **Reportando Bugs:** Se encontrar um problema, por favor, abra uma [issue](https://github.com/MarcioGil/neurobridge-IA/issues) detalhando o erro.
*   **Sugerindo Melhorias:** Tem uma ideia para uma nova funcionalidade ou para melhorar algo que já existe? Abra uma [issue](https://github.com/MarcioGil/neurobridge-IA/issues) com a tag `enhancement`.
*   **Escrevendo Documentação:** A documentação é crucial. Você pode ajudar a melhorar o `README.md`, os guias, os comentários no código ou a traduzir a documentação para outros idiomas.
*   **Testando a Aplicação:** Ajudar a testar a plataforma em diferentes dispositivos, navegadores e com diferentes tecnologias assistivas é uma contribuição valiosa.
*   **Desenvolvendo Código:** Se você é desenvolvedor, pode ajudar a corrigir bugs, implementar novas funcionalidades ou refatorar o código.

## Contribuindo com Código

Se você quer escrever código, siga os passos abaixo.

### 1. Configure o Ambiente

Siga as instruções do nosso [README.md](README.md#como-começar) para configurar o ambiente de desenvolvimento, de preferência usando Docker.

### 2. Encontre uma Tarefa

Você pode procurar por issues abertas com as tags `good first issue` (boas para iniciantes) ou `help wanted`.

-   **Escolha uma issue** e comente nela que você está trabalhando no assunto. Isso evita que múltiplas pessoas trabalhem na mesma coisa.
-   Se você quer trabalhar em algo que não tem uma issue, por favor, **crie uma issue primeiro** para discutir a mudança com a equipe.

### 3. Crie um Fork e um Branch

1.  **Faça um fork** do repositório para a sua conta do GitHub.
2.  **Clone o seu fork** localmente:
    ```bash
    git clone https://github.com/SEU-USUARIO/neurobridge-IA.git
    ```
3.  **Crie um novo branch** para a sua contribuição. Use um nome descritivo:
    ```bash
    git checkout -b feature/nome-da-sua-feature
    # ou
    git checkout -b fix/correcao-de-bug
    ```

### 4. Escreva o Código

-   **Siga o estilo de código** do projeto. Usamos linters (ESLint para TypeScript, Black/Flake8 para Python) para manter a consistência.
-   **Escreva testes** para as suas mudanças. Testes unitários e de integração são fundamentais.
-   **Mantenha a acessibilidade em mente.** Todas as novas funcionalidades de frontend devem ser testadas com leitores de tela e navegação por teclado.
-   **Comente seu código** quando necessário, explicando a lógica por trás de partes complexas.

### 5. Faça o Commit das Suas Mudanças

-   Use mensagens de commit claras e descritivas, seguindo o padrão [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

    **Exemplos:**

    *   `feat: adiciona login com Google`
    *   `fix: corrige bug no contraste do botão primário`
    *   `docs: atualiza guia de instalação`
    *   `refactor: melhora performance do sistema de recomendação`
    *   `test: adiciona testes para o controller de usuários`

### 6. Envie um Pull Request (PR)

1.  **Faça o push** do seu branch para o seu fork:
    ```bash
    git push origin feature/nome-da-sua-feature
    ```
2.  **Abra um Pull Request** no repositório original do NeuroBridge+.
3.  **Preencha o template do PR** com uma descrição clara do que você fez, por que fez e como isso pode ser testado.
4.  **Aguarde a revisão.** Um dos mantenedores do projeto irá revisar seu código e pode solicitar algumas alterações. Não se preocupe, isso é parte do processo!

## Testes de Acessibilidade

Como um projeto focado em inclusão, a acessibilidade é uma prioridade máxima.

-   **Teste com leitores de tela:** NVDA (Windows), VoiceOver (macOS), TalkBack (Android).
-   **Navegue usando apenas o teclado:** Garanta que todos os elementos interativos são focáveis e operáveis.
-   **Verifique o contraste de cores:** Use ferramentas como o "Color Contrast Analyzer" para garantir que o contraste é suficiente (mínimo de 4.5:1 para texto normal).
-   **Use ferramentas automatizadas:** `axe-core` já está integrado ao nosso processo de teste. Verifique se não há violações.

## Questões e Dúvidas

Se tiver qualquer dúvida, não hesite em abrir uma issue ou entrar em contato com a equipe.

**Obrigado por fazer parte desta missão!**

