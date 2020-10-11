/**
 * @fileoverview gRPC-Web generated client stub for todos
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as todos_pb from './todos_pb';


export class TodosClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetTodos = new grpcWeb.AbstractClientBase.MethodInfo(
    todos_pb.GetTodosResponse,
    (request: todos_pb.GetTodosRequest) => {
      return request.serializeBinary();
    },
    todos_pb.GetTodosResponse.deserializeBinary
  );

  getTodos(
    request: todos_pb.GetTodosRequest,
    metadata: grpcWeb.Metadata | null): Promise<todos_pb.GetTodosResponse>;

  getTodos(
    request: todos_pb.GetTodosRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: todos_pb.GetTodosResponse) => void): grpcWeb.ClientReadableStream<todos_pb.GetTodosResponse>;

  getTodos(
    request: todos_pb.GetTodosRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: todos_pb.GetTodosResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/todos.Todos/GetTodos',
        request,
        metadata || {},
        this.methodInfoGetTodos,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/todos.Todos/GetTodos',
    request,
    metadata || {},
    this.methodInfoGetTodos);
  }

  methodInfoCreateTodo = new grpcWeb.AbstractClientBase.MethodInfo(
    todos_pb.Todo,
    (request: todos_pb.CreateTodoRequest) => {
      return request.serializeBinary();
    },
    todos_pb.Todo.deserializeBinary
  );

  createTodo(
    request: todos_pb.CreateTodoRequest,
    metadata: grpcWeb.Metadata | null): Promise<todos_pb.Todo>;

  createTodo(
    request: todos_pb.CreateTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: todos_pb.Todo) => void): grpcWeb.ClientReadableStream<todos_pb.Todo>;

  createTodo(
    request: todos_pb.CreateTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: todos_pb.Todo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/todos.Todos/CreateTodo',
        request,
        metadata || {},
        this.methodInfoCreateTodo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/todos.Todos/CreateTodo',
    request,
    metadata || {},
    this.methodInfoCreateTodo);
  }

  methodInfoEditTodo = new grpcWeb.AbstractClientBase.MethodInfo(
    todos_pb.Todo,
    (request: todos_pb.EditTodoRequest) => {
      return request.serializeBinary();
    },
    todos_pb.Todo.deserializeBinary
  );

  editTodo(
    request: todos_pb.EditTodoRequest,
    metadata: grpcWeb.Metadata | null): Promise<todos_pb.Todo>;

  editTodo(
    request: todos_pb.EditTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: todos_pb.Todo) => void): grpcWeb.ClientReadableStream<todos_pb.Todo>;

  editTodo(
    request: todos_pb.EditTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: todos_pb.Todo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/todos.Todos/EditTodo',
        request,
        metadata || {},
        this.methodInfoEditTodo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/todos.Todos/EditTodo',
    request,
    metadata || {},
    this.methodInfoEditTodo);
  }

  methodInfoDeleteTodo = new grpcWeb.AbstractClientBase.MethodInfo(
    todos_pb.Todo,
    (request: todos_pb.DeleteTodoRequest) => {
      return request.serializeBinary();
    },
    todos_pb.Todo.deserializeBinary
  );

  deleteTodo(
    request: todos_pb.DeleteTodoRequest,
    metadata: grpcWeb.Metadata | null): Promise<todos_pb.Todo>;

  deleteTodo(
    request: todos_pb.DeleteTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: todos_pb.Todo) => void): grpcWeb.ClientReadableStream<todos_pb.Todo>;

  deleteTodo(
    request: todos_pb.DeleteTodoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: todos_pb.Todo) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/todos.Todos/DeleteTodo',
        request,
        metadata || {},
        this.methodInfoDeleteTodo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/todos.Todos/DeleteTodo',
    request,
    metadata || {},
    this.methodInfoDeleteTodo);
  }

}

