import { AddTodoResponse, CahngeTodoRequest, ChangeTodoResponse, CheckTodoRequest, CheckTodoResponse, GetTodosResponse } from 'api/todo';
import createAction from 'utils/createAction';

export const ADD_TODO_PENDING = 'ADD_TODO_PENDING' as const;
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS' as const;
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE' as const;

export const GET_TODOS_PENDING = 'GET_TODOS_PENDING' as const;
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS' as const;
export const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE' as const;

export const CHANGE_TODO_CONTENT_PENDING = 'CHANGE_TODO_CONTENT_PENDING' as const;
export const CHANGE_TODO_CONTENT_SUCCESS = 'CHANGE_TODO_CONTENT_SUCCESS' as const;
export const CHANGE_TODO_CONTENT_FAILURE = 'CHANGE_TODO_CONTENT_FAILURE' as const;

export const CHECK_TODO_PENDING = 'CHECK_TODO_PENDING' as const;
export const CHECK_TODO_SUCCESS = 'CHECK_TODO_SUCCESS' as const;
export const CHECK_TODO_FAILURE = 'CHECK_TODO_FAILURE' as const;

export const DELETE_TODO_PENDING = 'DELETE_TODO_PENDING' as const;
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS' as const;
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE' as const;

export const addTodoPending = (content: string) => ({
    type: ADD_TODO_PENDING,
    payload: content,
});
export const addTodoSuccess = (data: AddTodoResponse) => ({
    type: ADD_TODO_SUCCESS,
    payload: data,
});
export const addTodoFailure = (error: Error) => ({
    type: ADD_TODO_FAILURE,
    payload: error,
});
export const getTodosPending = () => ({
    type: GET_TODOS_PENDING
});
export const getTodosSuccess = (data: GetTodosResponse) => ({
    type: GET_TODOS_SUCCESS,
    payload: data,
});
export const getTodosFailure = (error: Error) => ({
    type: GET_TODOS_FAILURE,
    payload: error,
});
export const checkTodoPending = ({ id, isCheck }: CheckTodoRequest) => ({
    type: CHECK_TODO_PENDING,
    payload: { id, isCheck },
});
export const checkTodoSuccess = (data: CheckTodoResponse) => ({
    type: CHECK_TODO_SUCCESS,
    payload: data,
});
export const checkTodoFailure = (error: Error) => ({
    type: CHECK_TODO_FAILURE,
    payload: error,
});
export const changeTodoContentPending = ({id, content}: CahngeTodoRequest) => ({
    type: CHANGE_TODO_CONTENT_PENDING,
    payload: { id, content },
});
export const changeTodoContentSuccess = (data: ChangeTodoResponse) => ({
    type: CHANGE_TODO_CONTENT_SUCCESS,
    payload: data,
});
export const changeTodoContentFailure = (error: Error) => ({
    type: CHANGE_TODO_CONTENT_FAILURE,
    payload: error,
});

export const changeTodoContent = createAction(CHANGE_TODO_CONTENT_PENDING);
export const checkTodo = createAction(CHECK_TODO_PENDING);
export const deleteTodo = createAction(DELETE_TODO_PENDING);