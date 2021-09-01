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

export const addTodoPending = createAction(ADD_TODO_PENDING);
export const addTodoSuccess = createAction(ADD_TODO_SUCCESS);
export const addTodoFailure = createAction(ADD_TODO_FAILURE);

export const getTodosPending = createAction(GET_TODOS_PENDING);
export const getTodosSuccess = createAction(GET_TODOS_SUCCESS);
export const getTodosFailure = createAction(GET_TODOS_FAILURE);

export const checkTodoPending = createAction(CHECK_TODO_PENDING);
export const checkTodoSuccess = createAction(CHECK_TODO_SUCCESS);
export const checkTodoFailure = createAction(CHECK_TODO_FAILURE);

export const changeTodoContentPending = createAction(CHANGE_TODO_CONTENT_PENDING);
export const changeTodoContentSuccess = createAction(CHANGE_TODO_CONTENT_SUCCESS);
export const changeTodoContentFailure = createAction(CHANGE_TODO_CONTENT_FAILURE);

export const deleteTodoPending = createAction(DELETE_TODO_PENDING);
export const deleteTodoSuccess = createAction(DELETE_TODO_SUCCESS);
export const deleteTodoFailure = createAction(DELETE_TODO_FAILURE);