FROM node:20-alpine

WORKDIR /home/node/app

RUN npm install -g @nestjs/cli

USER node:node