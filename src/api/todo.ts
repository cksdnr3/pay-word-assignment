import axios from "axios";
import { Todo } from "store/todo";

export async function addTodoAPI(content: string) {
    return (await axios.post<AddTodoResponse>(`todo`, { content })).data;
}

export interface AddTodoResponse {
    msg: string;
}

export async function getTodosAPI() {
    return (await axios.get<GetTodosResponse>('todo'))
}

export interface GetTodosResponse {
    count: number;
    todoList: Todo[];
}

export async function checkTodoAPI({ id, isCheck }: CheckTodoRequest) {
    return (await axios.post<CheckTodoResponse>(`todo:${id}`, { isCheck })).data;
}

export interface CheckTodoRequest {
    id: string;
    isCheck: boolean;
}

export interface CheckTodoResponse {
    msg: string;
}

export async function changeTodoAPI({ id, content }: CahngeTodoRequest) {
    return (await axios.post<ChangeTodoResponse>(`todo:${id}`, { content })).data;
}

export interface CahngeTodoRequest {
    id: string;
    content: string;
}
export interface ChangeTodoResponse {
    msg: string;
    content: string;
}