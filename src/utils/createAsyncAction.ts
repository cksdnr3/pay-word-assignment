import createAction from "./createAction";

const createAsyncAction = <Req, Rep, Err>(P: string, S: string, F: string) => ({
    pending: (payload?: Req) => createAction(P)(payload),
    success: (data?: Rep) => createAction(S)(data),
    failure: (error: Err) => createAction(F)(error),
})
export default createAsyncAction;