# syntax=docker/dockerfile:1

FROM node:20-alpine

WORKDIR /app

COPY package.json ./

RUN apk add --no-cache python3 make g++

RUN npm install

COPY . .

CMD ["node", "server.js"]

EXPOSE 8000
