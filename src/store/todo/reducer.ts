import * as types from 'store/todo/actions';
import { RootState } from 'store';
import { TodoAction, TodosState } from './types';

const initialState: TodosState = {
    count: 0,
    todoList: [],
    msg: "",
    addTodoLoading: false,
    addTodoError: null,
    getTodosLoading: false,
    getTodosError: null,
    checkTodoLoading: false,
    checkTodoError: null,
    changeTodoContentLoading: false,
    changeTodoContentError: null,
    deleteTodoLoading: false,
    deleteTodoError: null,
};

const reducer = (state = initialState, action: TodoAction) => {
    switch (action.type) {
        case types.ADD_TODO_PENDING:
            console.log(action.type);
            return {
                ...state,
                addTodoLoading: true,
            }
        case types.ADD_TODO_SUCCESS:
            console.log(action.type);
            return {
                ...state,
                addTodoLoading: false,
                todoList: [ action.payload, ...state.todoList ],
            }
        case types.ADD_TODO_FAILURE:
            console.log(action.type);
            return {
                ...state,
                addTodoLoading: false,
                addTodoFailure: action.payload
            }
        case types.GET_TODOS_PENDING:
            console.log(action.type);
            return {
                ...state,
                getTodosLoading: true,
            }
        case types.GET_TODOS_SUCCESS:
            console.log(action.type);
            return {
                ...state,
                getTodosLoading: false,
                todoList: action.payload.todoList,
                count: action.payload.count,
            }
        case types.GET_TODOS_FAILURE:
            console.log(action.type);
            return {
                ...state,
                getTodosLoading: false,
                getTodosError: action.payload,
            }
        case types.CHANGE_TODO_CONTENT_PENDING:
            console.log(action.type);
            return {
                ...state,
                changeTodoContentLoading: true,
            }
        case types.CHANGE_TODO_CONTENT_SUCCESS:
            console.log(action.type);
            return {
                ...state,
                changeTodoContentLoading: false,
                todoList: state.todoList.map(v => v.id === action.payload.id ? { ...v, content: action.payload.content } : v)
            }
        case types.CHANGE_TODO_CONTENT_FAILURE:
            console.log(action.type);
            return {
                ...state,
                changeTodoContentError: action.payload,
            }
        case types.CHECK_TODO_PENDING:
            console.log(action.type);
            return {
                ...state,
                checkTodoLoading: true,
            }
        case types.CHECK_TODO_SUCCESS:
            console.log(action.type);
            return {
                ...state,
                checkTodoLoading: false,
                todoList: state.todoList.map(v => v.id === action.payload ? { ...v, isCheck: !v.isCheck } : v)
            }
        case types.CHECK_TODO_FAILURE:
            console.log(action.type);
            return {
                ...state,
                checkTodoLoading: false,
                checkTodoError: action.payload,
            }
        case types.DELETE_TODO_PENDING:
            console.log(action.type);
            return {
                ...state,
                deleteTodoLoading: true,
            }
        case types.DELETE_TODO_SUCCESS:
            console.log(action.type);
            return {
                ...state,
                deleteTodoLoading: false,
                todoList: state.todoList.filter(v => v.id !== action.payload),
            }
        case types.DELETE_TODO_FAILURE:
            console.log(action.type);
            return {
                ...state,
                deleteTodoLoading: false,
                deleteTodoError: action.payload,
            }
        default:
            return state;
        
    }
}

export const todoSelector = (state: RootState) => state.todoReducer;

export default reducer;