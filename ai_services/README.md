# AI Services - NeuroBridge+

Serviços de Inteligência Artificial do NeuroBridge+, construídos com Python e FastAPI.

## Stack

-   **Python 3.11+**
-   **FastAPI** para API REST
-   **PyTorch** e **Transformers** para modelos de IA
-   **OpenAI API** para LLMs
-   **FAISS** para busca vetorial
-   **Whisper** para speech-to-text

## Instalação

```bash
pip install -r requirements.txt
```

## Configuração

Copie o arquivo `.env.example` para `.env` e preencha as variáveis de ambiente:

```bash
cp .env.example .env
```

## Desenvolvimento

```bash
python main.py
```

Ou usando uvicorn diretamente:

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

O servidor estará disponível em [http://localhost:8000](http://localhost:8000).

## Documentação da API

A documentação interativa da API (Swagger) estará disponível em:

-   [http://localhost:8000/docs](http://localhost:8000/docs)

## Testes

```bash
pytest
```

## Módulos de IA

-   **profile_engine/**: Geração de perfis de acessibilidade
-   **recommender/**: Sistema de recomendação de cursos e vagas
-   **chatbot/**: Assistente conversacional inclusivo
-   **accessibility_audit/**: Auditoria de acessibilidade de sites
-   **nlp_processor/**: Processamento de linguagem natural

