FROM node:20.04

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3000 

CMD ["npm", "run dev"]