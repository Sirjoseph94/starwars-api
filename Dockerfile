FROM node:18-alpine

# Create server directory
WORKDIR /usr/src/server

COPY . /usr/src/server

RUN npm install

EXPOSE 5000

ENV NODE_ENV production

CMD ["npm", "run", "start"]
