import * as types from 'store/todo/actions';
import { RootState } from 'store';
import { TodoAction, TodosState } from './types';

const initialState: TodosState = {
    count: 3,
    todoList: [
        {
            id: "0",
            content: '자바스크립트 공부',
            isCheck: true,
            createdAt: new Date().toJSON(),
        },
        {
            id: "1",
            content: 'Node.js 공부',
            isCheck: false,
            createdAt: new Date().toJSON(),
        },
        {
            id: "2",
            content: '자바 공부',
            isCheck: true,
            createdAt: new Date().toJSON(),
        }
    ],
    addTodoPending: false,
    addTodoSuccess: false,
    addTodoFailure: null,
};

const reducer = (state = initialState, action: TodoAction) => {
    switch (action.type) {
        case types.ADD_TODO_PENDING:
            return {
                ...state,
                addTodoPending: true,
            }
        case types.ADD_TODO_SUCCESS:
            return {
                ...state,
                addTodoPending: false,
                addTodoSuccess: true,
                todoList: [
                    action.payload, ...state.todoList
                ]
            }
        case types.ADD_TODO_FAILURE:
            return {
                ...state,
                addTodoPending: false,
                addTodoFailure: action.payload
            }
        // case types.GET_TODOS_PENDING:
        //     return {
        //         ...state,
                
        //     }
        // case types.GET_TODOS_SUCCESS:
        //     return;
        // case types.GET_TODOS_FAILURE:
        //     return;
        // case types.CHANGE_TODO_CONTENT_PENDING:
        //     return;
        // case types.CHANGE_TODO_CONTENT_SUCCESS:
        //     return;
        // case types.CHANGE_TODO_CONTENT_FAILURE:
        //     return;
        // case types.CHECK_TODO_PENDING:
        //     return;
        // case types.CHECK_TODO_SUCCESS:
        //     return;
        // case types.CHECK_TODO_FAILURE:
        //     return;
        // case types.DELETE_TODO_PENDING:
        //     return;
        // case types.DELETE_TODO_SUCCESS:
        //     return;
        // case types.DELETE_TODO_FAILURE:
        //     return;
        default:
            return state;
        
    }
}

export const todoSelector = (state: RootState) => state.todoReducer;

export default reducer;