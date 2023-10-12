NODE_VERSION ?= 20.8.0
PORT ?= 3000
BUILD_VERSION ?= latest
DOCKER_IMAGE_NAME ?= priros-front
RUN_NODE_IMAGE = prirosnode:latest

check:
	@echo Node Version: $(NODE_VERSION)
	@echo Port: $(PORT)
	@echo Build Version: $(BUILD_VERSION)
	@echo Docker Image Name: $(DOCKER_IMAGE_NAME)
    @echo PWD: $(PWD)

node-image:
	docker build --target base -t $(RUN_NODE_IMAGE) .

install:
	docker build --target base -t $(RUN_NODE_IMAGE) .
	docker run -w /app -it --rm -v $(CURDIR):/app -p $(PORT):3000 -u node $(RUN_NODE_IMAGE) npm ci

local:
	docker run -w /app -it --rm -v $(CURDIR):/app -p $(PORT):3000 -u node $(RUN_NODE_IMAGE) npm run dev

build:
	docker build --build-arg NODE_VERSION=$(NODE_VERSION) -t $(DOCKER_IMAGE_NAME):$(BUILD_VERSION) .

start:
	docker run -d --rm -p $(PORT):3000 --name priros-front $(DOCKER_IMAGE_NAME):$(BUILD_VERSION)

stop:
	docker stop priros-front