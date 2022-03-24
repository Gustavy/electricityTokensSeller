FROM node:16

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

WORKDIR /usr/app/backend/

RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store\
    pnpm add @prisma/client
    
COPY ./package*.json ./

RUN pnpm install 

COPY . .

ENV PORT 8000

EXPOSE 8000

CMD ["pnpm", "dev"]