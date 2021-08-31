import { AddTodoApi, addTodoAPI, AddTodoResponse } from "api/todo";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import * as types from 'store/todo/actions';

function* addTodoSaga(action: ReturnType<typeof types.addTodoPending>) {
    try {
        const data: AddTodoResponse = yield call<AddTodoApi>(addTodoAPI, action.payload);
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

function* watchAddTodo() {
    yield takeLatest(types.ADD_TODO_PENDING, addTodoSaga)
} 

export default function* todoSaga() {
    yield all([fork(watchAddTodo)]);
}