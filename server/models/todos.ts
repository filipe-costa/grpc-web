import * as grpc from '@grpc/grpc-js'

import {
    GetTodosRequest,
    GetTodosResponse,
    EditTodoRequest,
    CreateTodoRequest,
    DeleteTodoRequest,
    Todo
} from '../codegen/todos_pb'

import {
    ITodosServer,
    TodosService
} from "../codegen/todos_grpc_pb"

class TodosModel implements ITodosServer {
    getTodos(call: grpc.ServerUnaryCall<GetTodosRequest, GetTodosResponse>, callback: grpc.sendUnaryData<GetTodosResponse>): void {
        console.log(call, callback)
    }

    createTodo(call: grpc.ServerUnaryCall<CreateTodoRequest, Todo>, callback: grpc.sendUnaryData<Todo>): void {
        console.log(call, callback)
    }

    editTodo(call: grpc.ServerUnaryCall<EditTodoRequest, Todo>, callback: grpc.sendUnaryData<Todo>): void {
        console.log(call, callback)
    }

    deleteTodo(call: grpc.ServerUnaryCall<DeleteTodoRequest, Todo>, callback: grpc.sendUnaryData<Todo>): void {
        console.log(call, callback)
    }
}


export const model = {
    handler: new TodosModel(),
    service: TodosService
}