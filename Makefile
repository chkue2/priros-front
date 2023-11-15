NODE_VERSION ?= 20.8.1
BUILD_VERSION ?= latest
NODE_IMAGE = priros-node-pnpm:latest

APP_NAME = priros_front_app




node-image:
	-docker rmi $(NODE_IMAGE)
	docker build --target base --no-cache -t $(NODE_IMAGE) .

install:
	docker run --rm -v $(CURDIR):/app -u node $(NODE_IMAGE) pnpm install -r

local_stop:
	-docker stop $(APP_NAME)

local: local_stop
	docker run -it --name $(APP_NAME) --rm -v $(CURDIR):/app -p 3000-3001:3000-3001 -u node $(NODE_IMAGE) pnpm dev

run:
	docker run -it --rm -v $(CURDIR):/app -u node $(NODE_IMAGE) $(ARG)
server:
	-docker compose down
	docker compose up

#build:
#	docker build --build-arg NODE_VERSION=$(NODE_VERSION) -t $(DOCKER_IMAGE_NAME):$(BUILD_VERSION) .