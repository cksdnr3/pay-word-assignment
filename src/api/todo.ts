import axios from "axios";
import { Todo } from "store/todo";

export async function addTodoAPI(content: AddTodoRequest) {
    return (await axios.post<AddTodoResponse>(`todo`, { content }));
}
export interface AddTodoRequest {
    content: string;
}
export interface AddTodoResponse {
    msg: string;
}
 
export async function getTodosAPI() {
    return (await axios.get<GetTodosResponse>('todo'));
}

export interface GetTodosResponse {
    count: number;
    todoList: Todo[];
}

export async function checkTodoAPI({ id, isCheck }: CheckTodoRequest) {
    return (await axios.post<CheckTodoResponse>(`todo:${id}`, { isCheck }));
}

export interface CheckTodoRequest {
    id: string;
    isCheck: boolean;
}

export interface CheckTodoResponse {
    msg: string;
}

export async function changeTodoAPI({ id, content }: CahngeTodoContentRequest) {
    return (await axios.post<ChangeTodoContentResponse>(`todo:${id}`, { content }));
}

export interface CahngeTodoContentRequest {
    id: string;
    content: string;
}

export interface ChangeTodoContentResponse {
    msg: string;
    content: string;
}

export async function deleteTodoAPI(id: DeleteTodoRequest) {
    return (await axios.post<DeleteTodoResponse>(`todo:${id}`));
}

export interface DeleteTodoRequest {
    id: string;
}

export interface DeleteTodoResponse {
    msg: string;
}