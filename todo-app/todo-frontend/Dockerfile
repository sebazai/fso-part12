FROM node:20 AS base-node

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run test

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=base-node /usr/src/app/dist /usr/share/nginx/html


