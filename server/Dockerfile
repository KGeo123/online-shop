FROM node:alpine AS development
WORKDIR /app
COPY package*.json .
RUN npm install
ENV NODE_ENV development
EXPOSE 4000
COPY . .
CMD [ "npm", "run", "start:dev" ]
