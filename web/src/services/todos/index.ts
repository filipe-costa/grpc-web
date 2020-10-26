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

    createTodo = async(): Promise<Todo> => {
        const req = new CreateTodoRequest()
        return await this.client.createTodo(req, null)
    }

    editTodo = async(): Promise<Todo> => {
        const req = new EditTodoRequest()
        return await this.client.editTodo(req, null)
    }

    deleteTodo = async(): Promise<DeleteTodoResponse> => {
        const req = new DeleteTodoRequest()
        return await this.client.deleteTodo(req, null)
    }

}

const service = new TodosService()

export default service