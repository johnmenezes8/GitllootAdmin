# ============================
# 1) BUILDER - instala e compila tudo
# ============================
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar package.json primeiro (melhora cache)
COPY package.json package-lock.json* ./

# Instalar dependências
RUN npm install

# Copiar todo o projeto
COPY . .

# Rodar o build (Gera dist/public + dist/index.cjs)
RUN npm run build



# ============================
# 2) RUNNER - imagem final leve
# ============================
FROM node:20-alpine AS runner

WORKDIR /app

# Copiar apenas o necessário para produção
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/node_modules ./node_modules

# Variáveis padrão da aplicação
ENV NODE_ENV=production
ENV PORT=5000

# Porta exposta
EXPOSE 5000

# Comando final
CMD ["npm", "start"]
