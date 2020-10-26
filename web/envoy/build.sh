#!/usr/bin/env bash

docker build -t envoy:v1 .

docker run -d --name envoy -p 9901:9901 -p 8080:8080 envoy:v1

curl -v http://localhost:9901