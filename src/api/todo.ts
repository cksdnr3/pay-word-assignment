import axios from "axios";

export async function addTodoAPI(content: string) {
    return (await axios.post<AddTodoResponse>(`todo`, content)).data
}

export interface AddTodoResponse {
    msg: string;
    content: string;
}

export type AddTodoRequest = {
    content: string;
}

export type AddTodoApi = (payload: string) => Promise<AddTodoResponse>;