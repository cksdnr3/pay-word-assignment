import React from 'react';
import styled from 'styled-components';
import TodoInput from 'components/todo/TodoInput';
import TodoList from 'components/todo/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { todoSelector } from 'store/todo/reducer';
import { addTodoPending, changeTodoContentPending, checkTodoPending, getTodosPending } from 'store/todo';
import { useEffect } from 'react';
import Spinner from 'components/common/Spinner';

const TodoContainer: React.FC = () => {
    const { todoList, getTodosLoading, addTodoLoading, msg } = useSelector(todoSelector);
    const dispatch = useDispatch();

    const dispatchAdd = (content: string) => {
        dispatch(addTodoPending(content));
    }
    const dispatchCheck = (id: string, isCheck: boolean) => {
        dispatch(checkTodoPending({ id, isCheck }))
    }
    const dispatchChange = (id: string, content: string) => {
        dispatch(changeTodoContentPending({ id, content }))
    }

    useEffect(() => {
        dispatch(getTodosPending());
    }, [msg]);

    return (
        <Wrap>
            <Container>
                <TodoInput 
                addTodoLoading={addTodoLoading}
                dispatchAdd={dispatchAdd} />
                {getTodosLoading 
                ? <Spinner /> 
                : <TodoList
                dispatchChange={dispatchChange}
                dispatchCheck={dispatchCheck}
                todoList={todoList} />}
            </Container>
        </Wrap>
    )
}

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 50px;
`;

const Container = styled.div`
    min-width: 450px;
`

export default TodoContainer;