const createAction = (type: string) => {
    return <P>(payload: P) => ({
        type, payload
    });
};

export default createAction;