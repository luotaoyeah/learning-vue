# stage-build
FROM node:12 AS stage-build

WORKDIR /app
COPY . .

WORKDIR /app
RUN npm install --no-save

WORKDIR /app
RUN npm run build

# stage-nginx
FROM nginx:1.17.2 AS stage-nginx

WORKDIR /app
COPY --from=stage-build /app/dist .

WORKDIR /app
COPY /config/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
