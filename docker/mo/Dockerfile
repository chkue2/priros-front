ARG NODE_VERSION=20.8.1
ARG NODE_ENV=production

# 베이스 이미지 설정
FROM node:${NODE_VERSION}-alpine as base

RUN npm i -g pnpm && npm i -g npm@latest

ARG API_URL
ARG AES_SECRET_KEY


# 환경변수 설정
ENV NODE_ENV=${NODE_ENV}
ENV API_URL=${API_URL}
ENV AES_SECRET_KEY=${AES_SECRET_KEY}

FROM base as build

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .
COPY pnpm-workspace.yaml .

COPY packages/common/package.json ./packages/common/package.json
COPY packages/mo/package.json ./packages/mo/package.json

RUN pnpm install -r --frozen-lockfile

COPY packages/common ./packages/common
COPY packages/mo ./packages/mo

RUN pnpm mo:build

FROM node:${NODE_VERSION}-alpine as runner

ARG PORT=3000
ENV NODE_ENV=production
ENV PORT=${PORT}


WORKDIR /app

COPY --from=build /app/packages/mo/.output /app/.output
CMD [ "node", "/app/.output/server/index.mjs" ]