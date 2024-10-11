#!/bin/bash

echo "FRONT 이미지 빌드"

if [ "$BUILD_TYPE" = "mo" ]; then
    DOCKERFILE="docker/mo/Dockerfile"
elif [ "$BUILD_TYPE" = "pc" ]; then
    DOCKERFILE="docker/pc/Dockerfile"
else
    echo "지원하지 않는 TYPE 값: $BUILD_TYPE"
    exit 1
fi

echo "DOCKERFILE: $DOCKERFILE"
echo "API_URL: $API_URL"
echo "DOCKER_IMAGE: $DOCKER_IMAGE"
echo "DOCKER_IMAGE_TAG: $DOCKER_IMAGE_TAG"

docker build --build-arg "API_URL=${API_URL}" --build-arg "AES_SECRET_KEY=${AES_SECRET_KEY}" -f $DOCKERFILE -t $DOCKER_IMAGE:$DOCKER_IMAGE_TAG .

if [ $? -ne 0 ]; then
    echo "Docker build 실패"
    exit 1
fi