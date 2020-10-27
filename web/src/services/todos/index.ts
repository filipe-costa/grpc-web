import {TodosClient} from '../../codegen/TodosServiceClientPb'
import {
    GetTodosRequest,
    CreateTodoRequest,
    EditTodoRequest,
    GetTodosResponse,
    Todo,
    DeleteTodoRequest,
    DeleteTodoResponse
} from "../../codegen/todos_pb"

class TodosService {

    private client = new TodosClient("http://localhost:8080")

    getTodos = async(): Promise<GetTodosResponse> => {
        const req = new GetTodosRequest()
        return await this.client.getTodos(req, null)
    }

    createTodo = async({uuid, description, done}: Todo.AsObject): Promise<Todo> => {
        const req = new CreateTodoRequest()
        req.setUuid(uuid)
        req.setDescription(description)
        req.setDone(done)
        return await this.client.createTodo(req, null)
    }

    editTodo = async({uuid, description, done}: Todo.AsObject): Promise<Todo> => {
        console.log('EditTodo', {uuid, description, done})
        const req = new EditTodoRequest()
        req.setUuid(uuid)
        req.setDescription(description)
        req.setDone(done)
        return await this.client.editTodo(req, null)
    }

    deleteTodo = async({uuid}: {uuid: string}): Promise<DeleteTodoResponse> => {
        const req = new DeleteTodoRequest()
        req.setUuid(uuid)
        return await this.client.deleteTodo(req, null)
    }

}

const service = new TodosService()

export default service