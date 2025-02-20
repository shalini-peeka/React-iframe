FROM node:20.15.0-slim as base

# Building the frontend
WORKDIR /usr/src/app

COPY . .
RUN yarn

RUN npm run build

#use non-root nginx
FROM bitnami/nginx:latest

WORKDIR /usr/share/nginx/html
USER 0
RUN rm -rf /usr/share/nginx/html/*
COPY --from=base /usr/src/app/build .
COPY nginx.conf /opt/bitnami/nginx/conf/nginx.conf
RUN chmod -R g+rwX /usr/share/nginx/html
EXPOSE 3000
USER 1000
