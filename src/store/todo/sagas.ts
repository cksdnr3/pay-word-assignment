import { addTodoAPI, AddTodoRequest, AddTodoResponse, CahngeTodoContentRequest, changeTodoAPI, ChangeTodoContentResponse, checkTodoAPI, CheckTodoRequest, CheckTodoResponse, deleteTodoAPI, DeleteTodoRequest, DeleteTodoResponse, getTodosAPI, GetTodosResponse } from "api/todo";
import { all, fork, takeLatest } from "redux-saga/effects";
import * as types from 'store/todo/actions';
import createAsyncSaga from "utils/createAsyncSaga";

const addTodoSaga = createAsyncSaga<AddTodoRequest, AddTodoResponse>(types.addTodo, addTodoAPI);
const getTodosSaga = createAsyncSaga<null, GetTodosResponse>(types.getTodos, getTodosAPI);
const checkTodoSaga = createAsyncSaga<CheckTodoRequest, CheckTodoResponse>(types.checkTodo, checkTodoAPI);
const changeTodoContentSaga = createAsyncSaga<CahngeTodoContentRequest, ChangeTodoContentResponse>(types.chnageTodoContent, changeTodoAPI)
const deleteTodoSaga = createAsyncSaga<DeleteTodoRequest, DeleteTodoResponse>(types.deleteTodo, deleteTodoAPI);

// ADD_TODO_PENDING pattern을 감시 함수이다.
// 등록한 pattern과 일치하는 action type이 dispatch되는 경우 등록한 saga를 호출한다.
// takeLatest 이펙트를 통해 중복 요청이 발생할 경우 마지막 요청 이외의 요청은 cancel 한다.
function* watchAddTodo() {
    yield takeLatest(types.ADD_TODO_PENDING, addTodoSaga)
} 

// GET_TODOS_PENDING pattern을 감시 함수이다.
// 등록한 pattern과 일치하는 action type이 dispatch되는 경우 등록한 saga를 호출한다.
// takeLatest 이펙트를 통해 중복 요청이 발생할 경우 마지막 요청 이외의 요청은 cancel 한다.
function* watchGetTodos() {
    yield takeLatest(types.GET_TODOS_PENDING, getTodosSaga);
}

// CHECK_TODO_PENDING pattern을 감시 함수이다.
// 등록한 pattern과 일치하는 action type이 dispatch되는 경우 등록한 saga를 호출한다.
// takeLatest 이펙트를 통해 중복 요청이 발생할 경우 마지막 요청 이외의 요청은 cancel 한다.
function* watchCheckTodo() {
    yield takeLatest(types.CHECK_TODO_PENDING, checkTodoSaga)
}

// CHANGE_TODO_CONTENT_PENDING pattern을 감시 함수이다.
// 등록한 pattern과 일치하는 action type이 dispatch되는 경우 등록한 saga를 호출한다.
// takeLatest 이펙트를 통해 중복 요청이 발생할 경우 마지막 요청 이외의 요청은 cancel 한다.
function* watchChagneContentTodo() {
    yield takeLatest(types.CHANGE_TODO_CONTENT_PENDING, changeTodoContentSaga)
}

// DELETE_TODO_PENDING pattern을 감시 함수이다.
// 등록한 pattern과 일치하는 action type이 dispatch되는 경우 등록한 saga를 호출한다.
// takeLatest 이펙트를 통해 중복 요청이 발생할 경우 마지막 요청 이외의 요청은 cancel 한다.
function* watchDeleteTodo() {
    yield takeLatest(types.DELETE_TODO_PENDING, deleteTodoSaga);
}

// Todo 감시자를 등록하는 함수이다.
// 리액트 앱이 시작할 때 등록된다.
// all effect는 Promise.all 과 유사하게 동작한다.
// fork는 non-block 함수 호출 effect이며 all은 배열로 입력 받은 non-block 함수들이 모두 처리될 때 까지 대기하고 
// 모두 처리되었을 때 모든 이펙트를 동시에 yield 시킨다.
export default function* todoSaga() {
    yield all([fork(watchAddTodo), fork(watchGetTodos), fork(watchCheckTodo), fork(watchChagneContentTodo), fork(watchDeleteTodo)]);
}