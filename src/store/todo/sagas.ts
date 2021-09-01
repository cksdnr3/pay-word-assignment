import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import * as types from 'store/todo/actions';
import { dummyGenerator } from "test/dummyGenerator";

function* addTodoSaga(action: ReturnType<typeof types.addTodo.pending>) {
    try {
        yield delay(1000);

        const data = { 
            ...dummyGenerator(1)[0],
            content: action.payload,
        };
        yield put(types.addTodo.success(data));
    } catch (err) {
        yield put(types.addTodo.failure(err));
    }
}

function* getTodosSaga(action: ReturnType<typeof types.getTodos.pending>) {
    try {
        yield delay(1000);
        const data = {
            count: 10,
            todoList: dummyGenerator(10),
        }
        yield put(types.getTodos.success(data));
    } catch(err) {
        yield put(types.getTodos.failure(err));
    }
}

function* checkTodoSaga(action: ReturnType<typeof types.checkTodo.pending>) {
    try {
        yield delay(300);
        const data = action.payload.id;
        yield put(types.checkTodo.success(data))
    } catch (err) {
        yield put(types.checkTodo.failure(err));
    }
}

function* changeTodoContentSaga(action: ReturnType<typeof types.chnageTodoContent.pending>) {
    try {
        yield delay(300);
        const data = action.payload;
        yield put(types.checkTodo.success(data));
    } catch (err) {
        yield put(types.chnageTodoContent.failure(err));
    }
}

function* deleteTodoSaga(action: ReturnType<typeof types.deleteTodo.pending>) {
    try {
        yield delay(300);
        const data = action.payload;
        yield put(types.deleteTodo.success(data));
    } catch (err) {
        yield put(types.deleteTodo.failure(err));
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