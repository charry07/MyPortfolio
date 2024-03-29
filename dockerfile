# Etapa de construcción
FROM node:14 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


#                          LEER PRIMERO
############ comando para crear la imagen en docker ###########
#docker build -t my-portfolio:1.3.1 .

######## comando para correr la imagen en docker ###########
#docker run --name my-portfolio-container -dp 3000:80 my-portfolio:1.3.1
