FROM node:20 AS base-node

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=base-node /usr/src/app/dist /usr/share/nginx/html

FROM base-node AS test

RUN npm run test