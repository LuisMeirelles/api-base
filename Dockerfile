FROM node:18.16.1-alpine

RUN npm install -g @nestjs/cli

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .
