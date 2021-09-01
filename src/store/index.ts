import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import axios from "axios";
import { all, fork } from "redux-saga/effects";
import todoReducer from 'store/todo/reducer';
import todoSaga from "store/todo/sagas";

axios.defaults.baseURL = 'http://dummy-server.io/';

// 사가 미들웨어에 각 사가들을 등록하는 함수이다.
function* rootSaga() {
    yield all([fork(todoSaga)]);
}

// 스토어에 상태를 등록하는 함수이다.
// 각 리듀서를 입력받아 결합하고 스토어에 등록한다.
const rootReducer = combineReducers({
    todoReducer
})

export type RootState = ReturnType<typeof rootReducer>;

// 리덕스 스토어 설정 함수이다.
// 미들웨어를 결합하고 실행시킬 수 있다.
const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    const enhancer = process.env.NODE_ENV === 'production' 
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));
    
    const store = createStore(rootReducer, enhancer);
    sagaMiddleware.run(rootSaga);

    return store;
}

export default configureStore();