import { AxiosError, AxiosPromise } from "axios";
import { call, put } from "redux-saga/effects";
import createAsyncAction from "./createAsyncAction";

type PromiseCreator<Req, Rep> = ((payload: Req) => AxiosPromise<Rep>) | (() => AxiosPromise<Rep>);
declare function isAxiosError(error: unknown): error is AxiosError;
function isPayloadAction(action: any) {
    return action.payload !== undefined;
}

const createAsyncSaga = <Req, Rep>(
    asyncActionCreator: ReturnType<typeof createAsyncAction>, 
    promiseCreator: PromiseCreator<Req, Rep>) => {
    return function* saga(action: ReturnType<typeof asyncActionCreator.pending>) {
        try {
            const response: Rep = isPayloadAction(action) 
                ? yield call(promiseCreator, action.payload)
                : yield call(promiseCreator);
            yield put(asyncActionCreator.success(response));
        } catch (error) {
            if (isAxiosError(error)) {
                yield put(asyncActionCreator.failure(error));
            }
        }
    } 
}

export default createAsyncSaga;