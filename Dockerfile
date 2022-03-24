# Setup and build the client
FROM node:16
WORKDIR /usr/app/frontend/
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build
# Setup the server
FROM node:16
WORKDIR /usr/app/
# COPY --from=frontend /usr/app/frontend/build/ ./frontend/build/
WORKDIR /usr/app/backend/
COPY backend/package*.json ./
RUN npm install
COPY backend/ ./
ENV PORT 80
EXPOSE 80
CMD ["npm", "start"]