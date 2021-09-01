const createAction = (type: string) => {
    return (payload: any) => ({
        type, payload
    });
};

export default createAction;