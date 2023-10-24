# 빌드 인자 설정
ARG NODE_VERSION=20.8.1
ARG NODE_ENV=production

# 베이스 이미지 설정
FROM node:${NODE_VERSION}-alpine as base

RUN npm i -g pnpm && npm i -g npm@latest

ARG PORT=3000

USER node

# 환경변수 설정
ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}

WORKDIR /app
