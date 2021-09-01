import { addTodoAPI, AddTodoRequest, AddTodoResponse, CahngeTodoContentRequest, changeTodoAPI, ChangeTodoContentResponse, checkTodoAPI, CheckTodoRequest, CheckTodoResponse, deleteTodoAPI, DeleteTodoRequest, DeleteTodoResponse, getTodosAPI, GetTodosResponse } from "api/todo";
import { all, fork, takeLatest } from "redux-saga/effects";
import * as types from 'store/todo/actions';
import createAsyncSaga from "utils/createAsyncSaga";

const addTodoSaga = createAsyncSaga<AddTodoRequest, AddTodoResponse>(types.addTodo, addTodoAPI);
const getTodosSaga = createAsyncSaga<null, GetTodosResponse>(types.getTodos, getTodosAPI);
const checkTodoSaga = createAsyncSaga<CheckTodoRequest, CheckTodoResponse>(types.checkTodo, checkTodoAPI);
const changeTodoContentSaga = createAsyncSaga<CahngeTodoContentRequest, ChangeTodoContentResponse>(types.chnageTodoContent, changeTodoAPI)
const deleteTodoSaga = createAsyncSaga<DeleteTodoRequest, DeleteTodoResponse>(types.deleteTodo, deleteTodoAPI);
 
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