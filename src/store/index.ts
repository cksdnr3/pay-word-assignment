import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import axios from "axios";
import { all, fork } from "redux-saga/effects";
import todoReducer from 'store/todo/reducer';
import todoSaga from "store/todo/sagas";

axios.defaults.baseURL = 'http://dummy-server.io/';

function* rootSaga() {
    yield all([fork(todoSaga)]);
}

const rootReducer = combineReducers({
    todoReducer
})

export type RootState = ReturnType<typeof rootReducer>;

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