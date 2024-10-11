#!/bin/bash

BLUE_NAME="pro-app-blue"
GREEN_NAME="pro-app-green"

EXIST_BLUE=$(docker ps --filter "name=$BLUE_NAME" --format "{{.Names}}")


# Docker Run 명령어 실행
run_container() {

    docker run -d -p $2:3000 \
        --restart=always \
        -e API_URL=$API_URL \
        -e AES_SECRET_KEY=$AES_SECRET_KEY \
        --network $DOCKER_NETWORK \
        --name $1 $DOCKER_IMAGE:$DOCKER_IMAGE_TAG
}


# 컨테이너 스위칭
if [ -z "$EXIST_BLUE" ]; then
  echo "blue up"
  run_container $BLUE_NAME $BLUE_DEPLOY_PORT
  BEFORE_NAME=$GREEN_NAME
  AFTER_COLOR=$BLUE_NAME
  AFTER_PORT=$BLUE_DEPLOY_PORT
else
  echo "green up"
  run_container $GREEN_NAME $GREEN_DEPLOY_PORT
  BEFORE_NAME=$BLUE_NAME
  AFTER_COLOR=$GREEN_NAME
  AFTER_PORT=$GREEN_DEPLOY_PORT
fi

for cnt in {1..10}
do
    echo "서버 응답 확인중(${cnt}/10)"
    UP=$(curl -s http://localhost:${AFTER_PORT}/ping)
    if [ -z "${UP}" ]; then
        sleep 10
        continue
    else
        break
    fi
done


if [ $cnt -eq 10 ]
then
    echo "서버가 정상적으로 구동되지 않았습니다."
    exit 1
fi

EXIST=$(docker ps --filter "name=$BEFORE_NAME" --format "{{.Names}}")
if [ -n "$EXIST" ]; then
  echo "$BEFORE_NAME server down"
  docker stop --time=35 $BEFORE_NAME
  docker rm $BEFORE_NAME
fi

