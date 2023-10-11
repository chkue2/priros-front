ARG NODE_VERSION=20.8.0
ARG NODE_ENV=production

FROM node:${NODE_VERSION}-alpine as base

ARG PORT=3000

ENV NODE_ENV=$NODE_ENV

WORKDIR /app


FROM base as build

COPY package.json .
COPY package-lock.json .

RUN npm install --production=false

COPY . .
RUN npm run build && npm prune


# Run
FROM base
ENV PORT=$PORT
COPY --from=build /app/.output /app/.output

CMD [ "node", ".output/server/index.mjs" ]