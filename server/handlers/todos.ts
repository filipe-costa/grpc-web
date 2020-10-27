import * as grpc from "@grpc/grpc-js";

import {
  GetTodosRequest,
  GetTodosResponse,
  EditTodoRequest,
  CreateTodoRequest,
  DeleteTodoRequest,
  DeleteTodoResponse,
  Todo,
} from "../codegen/todos_pb";

import { ITodosServer, TodosService } from "../codegen/todos_grpc_pb";

import { TodoModel } from "../";

class TodosServer implements ITodosServer {
  getTodos(
    _: grpc.ServerUnaryCall<GetTodosRequest, GetTodosResponse>,
    callback: grpc.sendUnaryData<GetTodosResponse>
  ) {
    const req = new GetTodosResponse();
    TodoModel.findAll()
      .then((res) => {
        const todos = res.map((todo: any) => {
          const newTodo = new Todo();
          newTodo.setUuid(todo.uuid);
          newTodo.setDone(todo.done);
          newTodo.setDescription(todo.description);
          return newTodo;
        });
        req.setTodosList(todos);
        callback(null, req);
      })
      .catch((error) => {
        callback(error, null);
      });
  }

  createTodo(
    call: grpc.ServerUnaryCall<CreateTodoRequest, Todo>,
    callback: grpc.sendUnaryData<Todo>
  ) {
    const { description, done } = call.request.toObject();
    const req = new Todo();
    TodoModel.create({ description, done })
      .then((res: any) => {
        req.setUuid(res.uuid);
        req.setDone(res.done);
        req.setDescription(res.description);
        callback(null, req);
      })
      .catch((error) => {
        callback(error, null);
      });
  }

  editTodo(
    call: grpc.ServerUnaryCall<EditTodoRequest, Todo>,
    callback: grpc.sendUnaryData<Todo>
  ) {
    const { description, done, uuid } = call.request.toObject();
    const req = new Todo();
    TodoModel.update(
      { description, done },
      {
        where: {
          uuid,
        },
      }
    )
      .then(() => {
        TodoModel.findOne({ where: { uuid } })
          .then((todo: any) => {
            req.setUuid(todo.uuid);
            req.setDone(todo.done);
            req.setDescription(todo.description);
            callback(null, req);
          })
          .catch((error) => {
            callback(error, null);
          });
      })
      .catch((error) => {
        callback(error, null);
      });
  }

  deleteTodo(
    call: grpc.ServerUnaryCall<DeleteTodoRequest, DeleteTodoResponse>,
    callback: grpc.sendUnaryData<DeleteTodoResponse>
  ) {
    const { uuid } = call.request.toObject();
    const req = new DeleteTodoResponse();
    TodoModel.destroy({
      where: {
        uuid,
      },
    })
      .then(() => {
        callback(null, req);
      })
      .catch((error) => {
        callback(error, null);
      });
  }
}

const TodosHandlers = new TodosServer();
export const getTodos = TodosHandlers.getTodos;
export const createTodo = TodosHandlers.createTodo;
export const editTodo = TodosHandlers.editTodo;
export const deleteTodo = TodosHandlers.deleteTodo;

export const model = {
  handlers: {
    getTodos,
    createTodo,
    editTodo,
    deleteTodo,
  },
  service: TodosService,
};
