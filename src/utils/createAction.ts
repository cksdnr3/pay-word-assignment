
// 각 Action Type에 payload를 입력받을 수 있는 액션 생성함수를 만든다. 
const createAction = (type: string) => {
    return (payload?: any) => ({
        type, payload
    });
};

export default createAction;