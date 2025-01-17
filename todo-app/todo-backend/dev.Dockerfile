FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install

# npm run dev is the command to start the application in development mode
CMD ["npm", "run", "dev"]