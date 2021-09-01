import { addTodo, checkTodo, chnageTodoContent, deleteTodo, getTodos } from "./actions"

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
    changeTodoContentLoading: boolean;
    changeTodoContentError: Error | null;
    deleteTodoLoading: boolean;
    deleteTodoError: Error | null;
}

export type TodoAction = 
    | ReturnType<typeof addTodo.pending>
    | ReturnType<typeof addTodo.success>
    | ReturnType<typeof addTodo.failure>
    | ReturnType<typeof getTodos.pending>
    | ReturnType<typeof getTodos.success>
    | ReturnType<typeof getTodos.failure>
    | ReturnType<typeof checkTodo.pending>
    | ReturnType<typeof checkTodo.success>
    | ReturnType<typeof checkTodo.failure>
    | ReturnType<typeof chnageTodoContent.pending>
    | ReturnType<typeof chnageTodoContent.success>
    | ReturnType<typeof chnageTodoContent.failure>
    | ReturnType<typeof deleteTodo.pending>
    | ReturnType<typeof deleteTodo.success>
    | ReturnType<typeof deleteTodo.failure>;