import createAction from "./createAction";

// Promise 생성 주기에 따른 비동기 처리 Action을 생성한다.
// 각 Action Type에 payload를 입력 받을 수 있는 createAction 함수를 통해 각 생성 주기마다 Action을 만들어 반환한다.
const createAsyncAction = <Req, Rep, Err>(P: string, S: string, F: string) => ({
    pending: (payload?: Req) => createAction(P)(payload),
    success: (data?: Rep) => createAction(S)(data),
    failure: (error: Err) => createAction(F)(error),
})
export default createAsyncAction;