FROM node:18-alpine AS builder
RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate

FROM node:18-bullseye-slim
RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install --production
COPY --from=builder /home/node/app/dist ./dist
RUN npx prisma generate
COPY prisma ./prisma/
CMD [ "npx", "prisma", "migrate", "deploy"]