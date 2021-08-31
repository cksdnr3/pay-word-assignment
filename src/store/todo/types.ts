import { addTodoFailure, addTodoPending, addTodoSuccess } from "./actions"

export type Todo = {
    id: string;
    content: string;
    isCheck: boolean;
    createdAt: string;
}

export type TodosState = {
    count: number;
    todoList: Todo[];
    addTodoPending: boolean;
    addTodoSuccess: boolean;
    addTodoFailure: Error | null;
}

export type TodoAction = 
    | ReturnType<typeof addTodoPending>
    | ReturnType<typeof addTodoSuccess>
    | ReturnType<typeof addTodoFailure>;

