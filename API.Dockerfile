FROM --platform=linux/amd64 node:16-slim as builder 
RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run compile


FROM --platform=linux/amd64 node:16-slim
RUN mkdir -p /home/node/app/node_modules
WORKDIR /home/node/app
COPY package*.json ./
COPY --from=builder /home/node/app/dist ./dist
EXPOSE 3036:3036
CMD ["node", "dist/index.js"]