NODE_VERSION ?= 20.8.0
PORT ?= 3000
BUILD_VERSION ?= latest
DOCKER_IMAGE_NAME ?= priros-front
RUN_NODE_IMAGE = prirosnode:latest
APP_NAME = priros_front_app

check:
	@echo Node Version: $(NODE_VERSION)
	@echo Port: $(PORT)
	@echo Build Version: $(BUILD_VERSION)
	@echo Docker Image Name: $(DOCKER_IMAGE_NAME)
    @echo PWD: $(PWD)

node-image:
	-docker rmi $(RUN_NODE_IMAGE)
	docker build --target base -t $(RUN_NODE_IMAGE) .

install:
	docker run -w /app --rm -v $(CURDIR):/app -p $(PORT):3000 -u node $(RUN_NODE_IMAGE) npm ci

local:
	-docker stop $(APP_NAME)
	docker run -it -w /app --name $(APP_NAME) --rm -v $(CURDIR):/app -p $(PORT):3000 -u node $(RUN_NODE_IMAGE) npm run dev

local_stop:
	docker stop $(APP_NAME)

run:
	docker run -it -w /app --rm -v $(CURDIR):/app -u node $(RUN_NODE_IMAGE) $(ARG)

build:
	docker build --build-arg NODE_VERSION=$(NODE_VERSION) -t $(DOCKER_IMAGE_NAME):$(BUILD_VERSION) .

start:
	docker run -d --rm -p $(PORT):3000 --name priros-front $(DOCKER_IMAGE_NAME):$(BUILD_VERSION)

stop:
	docker stop priros-front