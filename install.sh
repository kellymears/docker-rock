#!/usr/bin/env bash

git clone git@github.com:roots/bedrock bedrock
cp ./.env bedrock/.env

docker compose up -d --build --remove-orphans --renew-anon-volumes --force-recreate
docker compose exec app /bin/wp-install.sh
