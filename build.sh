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

docker build -f $DOCKERFILE -t $DOCKER_IMAGE:$DOCKER_IMAGE_TAG .
