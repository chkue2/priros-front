# 빌드 인자 설정
ARG NODE_VERSION=20.8.0
ARG NODE_ENV=production

# 베이스 이미지 설정
FROM node:${NODE_VERSION}-alpine as base

ARG PORT=3000

# 환경변수 설정
ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}

WORKDIR /app

# 의존성 설치
COPY package.json .
COPY package-lock.json .

# BuildKit의 캐시 마운트 사용하여 node_modules 캐싱
RUN --mount=type=cache,target=/app/node_modules
RUN npm ci


# 소스 코드 복사 및 빌드
FROM base as build
COPY . .
RUN npm run build


# 실행용 이미지 설정
FROM base as release
COPY --from=build /app/.output /app/.output
CMD [ "node", ".output/server/index.mjs" ]
