import { getTodosPending } from "."
import { addTodoFailure, addTodoPending, addTodoSuccess, checkTodoFailure, checkTodoPending, checkTodoSuccess, getTodosFailure, getTodosSuccess } from "./actions"

export type Todo = {
    id: string;
    content: string;
    isCheck: boolean;
    createdAt: string;
}

export type TodosState = {
    count: number;
    todoList: Todo[];
    msg: string;
    addTodoLoading: boolean;
    addTodoError: Error | null;
    getTodosLoading: boolean;
    getTodosError: Error | null;
    checkTodoLoading: boolean;
    checkTodoError: Error | null;
}

export type TodoAction = 
    | ReturnType<typeof addTodoPending>
    | ReturnType<typeof addTodoSuccess>
    | ReturnType<typeof addTodoFailure>
    | ReturnType<typeof getTodosPending>
    | ReturnType<typeof getTodosSuccess>
    | ReturnType<typeof getTodosFailure>
    | ReturnType<typeof checkTodoPending>
    | ReturnType<typeof checkTodoSuccess>
    | ReturnType<typeof checkTodoFailure>;