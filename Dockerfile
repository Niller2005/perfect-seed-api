FROM node:10.13-alpine
ENV NODE_ENV production
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install --silent
EXPOSE 3001
CMD npm start