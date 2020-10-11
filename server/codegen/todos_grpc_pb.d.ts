// package: todos
// file: todos.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as todos_pb from "./todos_pb";

interface ITodosService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getTodos: ITodosService_IGetTodos;
    createTodo: ITodosService_ICreateTodo;
    editTodo: ITodosService_IEditTodo;
    deleteTodo: ITodosService_IDeleteTodo;
}

interface ITodosService_IGetTodos extends grpc.MethodDefinition<todos_pb.GetTodosRequest, todos_pb.GetTodosResponse> {
    path: "/todos.Todos/GetTodos";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todos_pb.GetTodosRequest>;
    requestDeserialize: grpc.deserialize<todos_pb.GetTodosRequest>;
    responseSerialize: grpc.serialize<todos_pb.GetTodosResponse>;
    responseDeserialize: grpc.deserialize<todos_pb.GetTodosResponse>;
}
interface ITodosService_ICreateTodo extends grpc.MethodDefinition<todos_pb.CreateTodoRequest, todos_pb.Todo> {
    path: "/todos.Todos/CreateTodo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todos_pb.CreateTodoRequest>;
    requestDeserialize: grpc.deserialize<todos_pb.CreateTodoRequest>;
    responseSerialize: grpc.serialize<todos_pb.Todo>;
    responseDeserialize: grpc.deserialize<todos_pb.Todo>;
}
interface ITodosService_IEditTodo extends grpc.MethodDefinition<todos_pb.EditTodoRequest, todos_pb.Todo> {
    path: "/todos.Todos/EditTodo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todos_pb.EditTodoRequest>;
    requestDeserialize: grpc.deserialize<todos_pb.EditTodoRequest>;
    responseSerialize: grpc.serialize<todos_pb.Todo>;
    responseDeserialize: grpc.deserialize<todos_pb.Todo>;
}
interface ITodosService_IDeleteTodo extends grpc.MethodDefinition<todos_pb.DeleteTodoRequest, todos_pb.Todo> {
    path: "/todos.Todos/DeleteTodo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todos_pb.DeleteTodoRequest>;
    requestDeserialize: grpc.deserialize<todos_pb.DeleteTodoRequest>;
    responseSerialize: grpc.serialize<todos_pb.Todo>;
    responseDeserialize: grpc.deserialize<todos_pb.Todo>;
}

export const TodosService: ITodosService;

export interface ITodosServer {
    getTodos: grpc.handleUnaryCall<todos_pb.GetTodosRequest, todos_pb.GetTodosResponse>;
    createTodo: grpc.handleUnaryCall<todos_pb.CreateTodoRequest, todos_pb.Todo>;
    editTodo: grpc.handleUnaryCall<todos_pb.EditTodoRequest, todos_pb.Todo>;
    deleteTodo: grpc.handleUnaryCall<todos_pb.DeleteTodoRequest, todos_pb.Todo>;
}

export interface ITodosClient {
    getTodos(request: todos_pb.GetTodosRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.GetTodosResponse) => void): grpc.ClientUnaryCall;
    getTodos(request: todos_pb.GetTodosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.GetTodosResponse) => void): grpc.ClientUnaryCall;
    getTodos(request: todos_pb.GetTodosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.GetTodosResponse) => void): grpc.ClientUnaryCall;
    createTodo(request: todos_pb.CreateTodoRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    createTodo(request: todos_pb.CreateTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    createTodo(request: todos_pb.CreateTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    editTodo(request: todos_pb.EditTodoRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    editTodo(request: todos_pb.EditTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    editTodo(request: todos_pb.EditTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    deleteTodo(request: todos_pb.DeleteTodoRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    deleteTodo(request: todos_pb.DeleteTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    deleteTodo(request: todos_pb.DeleteTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
}

export class TodosClient extends grpc.Client implements ITodosClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getTodos(request: todos_pb.GetTodosRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.GetTodosResponse) => void): grpc.ClientUnaryCall;
    public getTodos(request: todos_pb.GetTodosRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.GetTodosResponse) => void): grpc.ClientUnaryCall;
    public getTodos(request: todos_pb.GetTodosRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.GetTodosResponse) => void): grpc.ClientUnaryCall;
    public createTodo(request: todos_pb.CreateTodoRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    public createTodo(request: todos_pb.CreateTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    public createTodo(request: todos_pb.CreateTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    public editTodo(request: todos_pb.EditTodoRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    public editTodo(request: todos_pb.EditTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    public editTodo(request: todos_pb.EditTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    public deleteTodo(request: todos_pb.DeleteTodoRequest, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    public deleteTodo(request: todos_pb.DeleteTodoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
    public deleteTodo(request: todos_pb.DeleteTodoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todos_pb.Todo) => void): grpc.ClientUnaryCall;
}
