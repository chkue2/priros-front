NODE_VERSION ?= 20.8.0
PORT ?= 3000
BUILD_VERSION ?= latest
DOCKER_IMAGE_NAME ?= priros-front

check:
	@echo Node Version: $(NODE_VERSION)
	@echo Port: $(PORT)
	@echo Build Version: $(BUILD_VERSION)
	@echo Docker Image Name: $(DOCKER_IMAGE_NAME)
    @echo PWD: $(PWD)

install:
	docker run -w /app -it --rm -v $(CURDIR):/app -p $(PORT):3000 -u node node:$(NODE_VERSION)-alpine npm ci --production=false

dev:
	docker run -w /app -it --rm -v $(CURDIR):/app -p $(PORT):3000 -u node node:$(NODE_VERSION)-alpine npm run dev

build:
	docker build --build-arg NODE_VERSION=$(NODE_VERSION) -t $(DOCKER_IMAGE_NAME):$(BUILD_VERSION) .