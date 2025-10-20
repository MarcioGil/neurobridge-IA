# Dockerfile para Frontend React + Vite
FROM node:20-alpine

WORKDIR /app

# Copiar arquivos de dependências
COPY package.json pnpm-lock.yaml* package-lock.json* yarn.lock* ./

# Instalar dependências
RUN if [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install; \
    elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    else npm ci; fi

# Copiar código fonte
COPY . .

# Expor porta
EXPOSE 3000

# Comando de desenvolvimento
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

