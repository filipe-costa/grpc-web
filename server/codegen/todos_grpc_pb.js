// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var todos_pb = require('./todos_pb.js');

function serialize_todos_CreateTodoRequest(arg) {
  if (!(arg instanceof todos_pb.CreateTodoRequest)) {
    throw new Error('Expected argument of type todos.CreateTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todos_CreateTodoRequest(buffer_arg) {
  return todos_pb.CreateTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todos_DeleteTodoRequest(arg) {
  if (!(arg instanceof todos_pb.DeleteTodoRequest)) {
    throw new Error('Expected argument of type todos.DeleteTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todos_DeleteTodoRequest(buffer_arg) {
  return todos_pb.DeleteTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todos_EditTodoRequest(arg) {
  if (!(arg instanceof todos_pb.EditTodoRequest)) {
    throw new Error('Expected argument of type todos.EditTodoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todos_EditTodoRequest(buffer_arg) {
  return todos_pb.EditTodoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todos_GetTodosRequest(arg) {
  if (!(arg instanceof todos_pb.GetTodosRequest)) {
    throw new Error('Expected argument of type todos.GetTodosRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todos_GetTodosRequest(buffer_arg) {
  return todos_pb.GetTodosRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todos_GetTodosResponse(arg) {
  if (!(arg instanceof todos_pb.GetTodosResponse)) {
    throw new Error('Expected argument of type todos.GetTodosResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todos_GetTodosResponse(buffer_arg) {
  return todos_pb.GetTodosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todos_Todo(arg) {
  if (!(arg instanceof todos_pb.Todo)) {
    throw new Error('Expected argument of type todos.Todo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todos_Todo(buffer_arg) {
  return todos_pb.Todo.deserializeBinary(new Uint8Array(buffer_arg));
}


var TodosService = exports.TodosService = {
  // Get Todos
getTodos: {
    path: '/todos.Todos/GetTodos',
    requestStream: false,
    responseStream: false,
    requestType: todos_pb.GetTodosRequest,
    responseType: todos_pb.GetTodosResponse,
    requestSerialize: serialize_todos_GetTodosRequest,
    requestDeserialize: deserialize_todos_GetTodosRequest,
    responseSerialize: serialize_todos_GetTodosResponse,
    responseDeserialize: deserialize_todos_GetTodosResponse,
  },
  // Creates a todo
createTodo: {
    path: '/todos.Todos/CreateTodo',
    requestStream: false,
    responseStream: false,
    requestType: todos_pb.CreateTodoRequest,
    responseType: todos_pb.Todo,
    requestSerialize: serialize_todos_CreateTodoRequest,
    requestDeserialize: deserialize_todos_CreateTodoRequest,
    responseSerialize: serialize_todos_Todo,
    responseDeserialize: deserialize_todos_Todo,
  },
  // Edit a todo
editTodo: {
    path: '/todos.Todos/EditTodo',
    requestStream: false,
    responseStream: false,
    requestType: todos_pb.EditTodoRequest,
    responseType: todos_pb.Todo,
    requestSerialize: serialize_todos_EditTodoRequest,
    requestDeserialize: deserialize_todos_EditTodoRequest,
    responseSerialize: serialize_todos_Todo,
    responseDeserialize: deserialize_todos_Todo,
  },
  // Deletes a todo
deleteTodo: {
    path: '/todos.Todos/DeleteTodo',
    requestStream: false,
    responseStream: false,
    requestType: todos_pb.DeleteTodoRequest,
    responseType: todos_pb.Todo,
    requestSerialize: serialize_todos_DeleteTodoRequest,
    requestDeserialize: deserialize_todos_DeleteTodoRequest,
    responseSerialize: serialize_todos_Todo,
    responseDeserialize: deserialize_todos_Todo,
  },
};

exports.TodosClient = grpc.makeGenericClientConstructor(TodosService);
