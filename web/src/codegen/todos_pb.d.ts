import * as jspb from 'google-protobuf'



export class Todo extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): Todo;

  getDescription(): string;
  setDescription(value: string): Todo;

  getDone(): boolean;
  setDone(value: boolean): Todo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Todo.AsObject;
  static toObject(includeInstance: boolean, msg: Todo): Todo.AsObject;
  static serializeBinaryToWriter(message: Todo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Todo;
  static deserializeBinaryFromReader(message: Todo, reader: jspb.BinaryReader): Todo;
}

export namespace Todo {
  export type AsObject = {
    uuid: string,
    description: string,
    done: boolean,
  }
}

export class CreateTodoRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): CreateTodoRequest;

  getDescription(): string;
  setDescription(value: string): CreateTodoRequest;

  getDone(): boolean;
  setDone(value: boolean): CreateTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTodoRequest): CreateTodoRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTodoRequest;
  static deserializeBinaryFromReader(message: CreateTodoRequest, reader: jspb.BinaryReader): CreateTodoRequest;
}

export namespace CreateTodoRequest {
  export type AsObject = {
    uuid: string,
    description: string,
    done: boolean,
  }
}

export class EditTodoRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): EditTodoRequest;

  getDescription(): string;
  setDescription(value: string): EditTodoRequest;

  getDone(): boolean;
  setDone(value: boolean): EditTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditTodoRequest): EditTodoRequest.AsObject;
  static serializeBinaryToWriter(message: EditTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditTodoRequest;
  static deserializeBinaryFromReader(message: EditTodoRequest, reader: jspb.BinaryReader): EditTodoRequest;
}

export namespace EditTodoRequest {
  export type AsObject = {
    uuid: string,
    description: string,
    done: boolean,
  }
}

export class DeleteTodoRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): DeleteTodoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTodoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTodoRequest): DeleteTodoRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTodoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTodoRequest;
  static deserializeBinaryFromReader(message: DeleteTodoRequest, reader: jspb.BinaryReader): DeleteTodoRequest;
}

export namespace DeleteTodoRequest {
  export type AsObject = {
    uuid: string,
  }
}

export class DeleteTodoResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTodoResponse): DeleteTodoResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteTodoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTodoResponse;
  static deserializeBinaryFromReader(message: DeleteTodoResponse, reader: jspb.BinaryReader): DeleteTodoResponse;
}

export namespace DeleteTodoResponse {
  export type AsObject = {
  }
}

export class GetTodosRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodosRequest): GetTodosRequest.AsObject;
  static serializeBinaryToWriter(message: GetTodosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodosRequest;
  static deserializeBinaryFromReader(message: GetTodosRequest, reader: jspb.BinaryReader): GetTodosRequest;
}

export namespace GetTodosRequest {
  export type AsObject = {
  }
}

export class GetTodosResponse extends jspb.Message {
  getTodosList(): Array<Todo>;
  setTodosList(value: Array<Todo>): GetTodosResponse;
  clearTodosList(): GetTodosResponse;
  addTodos(value?: Todo, index?: number): Todo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTodosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTodosResponse): GetTodosResponse.AsObject;
  static serializeBinaryToWriter(message: GetTodosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTodosResponse;
  static deserializeBinaryFromReader(message: GetTodosResponse, reader: jspb.BinaryReader): GetTodosResponse;
}

export namespace GetTodosResponse {
  export type AsObject = {
    todosList: Array<Todo.AsObject>,
  }
}

