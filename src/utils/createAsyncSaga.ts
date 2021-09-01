import { AxiosError, AxiosPromise } from "axios";
import { call, put } from "redux-saga/effects";
import createAsyncAction from "./createAsyncAction";

type PromiseCreator<Req, Rep> = ((payload: Req) => AxiosPromise<Rep>) | (() => AxiosPromise<Rep>);

// unknown 타입 에러의 타입 가드 함수이다.
function isAxiosError(error: unknown): error is AxiosError {
    return error !== undefined;
};

// payload가 없는 요청의 타입 가드 함수이다.
// payload 유무에 따라 다른 call effect 오버로드를 호출한다.
function isPayloadAction(action: any) {
    return action.payload !== undefined;
}

// 비동기 함수 호출 후 데이터를 받고 channel에 데이터를 넣고 reducer로 dispatch하는 전형적인 saga template 생성 함수이다.
// 비동기 액션과 비동기 처리가 필요한 함수를 입력 받아 처리한다.
// call 이펙트를 통해 비동기 함수를 block할 수 있다.
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