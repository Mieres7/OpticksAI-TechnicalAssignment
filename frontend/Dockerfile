# Usa una imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código de la aplicación al contenedor
COPY . .

# Expone el puerto en el que Next.js corre
EXPOSE 3000

# Comando para iniciar el servidor en modo producción
CMD ["npm", "run", "start"]
