import { addTodoAPI, AddTodoResponse, changeTodoAPI, ChangeTodoContentResponse, checkTodoAPI, CheckTodoResponse, deleteTodoAPI, DeleteTodoResponse, getTodosAPI, GetTodosResponse } from "api/todo";
import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import * as types from 'store/todo/actions';
import { dummyGenerator } from "test/dummyGenerator";

function* addTodoSaga(action: ReturnType<typeof types.addTodoPending>) {
    try {
        yield delay(1000);
        const data: AddTodoResponse = yield call(addTodoAPI, action.payload);

        // const data = { 
        //     ...dummyGenerator(1)[0],
        //     content: action.payload,
        // };
        
        yield put({
            type: types.ADD_TODO_SUCCESS,
            payload: data,
        })
    } catch (error) {
        yield put({
            type: types.ADD_TODO_FAILURE,
            payload: error,
        })
    } 
}

function* getTodosSaga(action: ReturnType<typeof types.getTodosPending>) {
    try {
        // const data: GetTodosResponse = yield call(getTodosAPI);

        yield delay(1000);

        const data = {
            count: 10,
            todoList: dummyGenerator(10),
        }

        yield put({
            type: types.GET_TODOS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        yield put({
            type: types.GET_TODOS_FAILURE,
            payload: error,
        })
    }
}

function* checkTodoSaga(action: ReturnType<typeof types.checkTodoPending>) {
    try {
        const data: CheckTodoResponse = yield call(checkTodoAPI, action.payload);

        yield put({
            type: types.CHECK_TODO_SUCCESS,
            payload: data,
        })
    } catch (error) {
        yield put({
            type: types.CHECK_TODO_FAILURE,
            payload: error,
        })
    }
}

function* changeTodoContentSaga(action: ReturnType<typeof types.changeTodoContentPending>) {
    try {
        const data: ChangeTodoContentResponse = yield call(changeTodoAPI, action.payload);

        yield put({
            type: types.CHANGE_TODO_CONTENT_SUCCESS,
            payload: data,
        })
    } catch (error) {
        yield put({
            type: types.CHANGE_TODO_CONTENT_FAILURE,
            payload: error,
        })
    }
}

function* deleteTodoSaga(action: ReturnType<typeof types.deleteTodoPending>) {
    try {
        const data: DeleteTodoResponse = yield call(deleteTodoAPI, action.payload);

        yield put({
            type: types.DELETE_TODO_SUCCESS,
            payload: data,
        })
    } catch (error) {
        yield put({
            type: types.DELETE_TODO_FAILURE,
            payload: error,
        })
    }
}
 
function* watchAddTodo() {
    yield takeLatest(types.ADD_TODO_PENDING, addTodoSaga)
} 

function* watchGetTodos() {
    yield takeLatest(types.GET_TODOS_PENDING, getTodosSaga);
}

function* watchCheckTodo() {
    yield takeLatest(types.CHECK_TODO_PENDING, checkTodoSaga)
}

function* watchChagneContentTodo() {
    yield takeLatest(types.CHANGE_TODO_CONTENT_PENDING, changeTodoContentSaga)
}

function* watchDeleteTodo() {
    yield takeLatest(types.DELETE_TODO_PENDING, deleteTodoSaga);
}

export default function* todoSaga() {
    yield all([fork(watchAddTodo), fork(watchGetTodos), fork(watchCheckTodo), fork(watchChagneContentTodo), fork(watchDeleteTodo)]);
}