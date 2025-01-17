FROM node:20

WORKDIR /usr/src/app

COPY . .

# npm run dev is the command to start the application in development mode
CMD ["sh", "-c", "npm install && npm run dev -- --host"]