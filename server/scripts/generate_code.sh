#!/usr/bin/env bash

# Server Codegen
grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:./codegen \
    --grpc_out=grpc_js:./codegen \
    --ts_out=grpc_js:./codegen \
    -I ./proto \
    ./proto/*.proto

# Typescript Web Codegen
grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:../web/src/codegen \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:../web/src/codegen \
  -I ./proto \
  ./proto/*.proto
