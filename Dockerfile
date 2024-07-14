FROM node:current-alpine AS builder
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
COPY . .
COPY .env .env
RUN npm install && npm run build

FROM node:current-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
COPY .env .env
EXPOSE 39989
ENV NODE_ENV=production
CMD [ "node", "--env-file=.env", "build" ]