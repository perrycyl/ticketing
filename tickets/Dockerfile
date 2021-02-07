FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm config set registry http://registry.npmjs.org/
RUN npm install --only=prod
COPY . .

CMD ["npm", "start"]