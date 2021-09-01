import React from 'react';
import styled from 'styled-components';
import TodoInput from 'components/todo/TodoInput';
import TodoList from 'components/todo/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { todoSelector } from 'store/todo/reducer';
import { addTodo,  checkTodo,  chnageTodoContent,  deleteTodo,  getTodos, } from 'store/todo';
import { useEffect } from 'react';
import Spinner from 'components/common/Spinner';

const TodoContainer: React.FC = () => {
    const { todoList, addTodoLoading, getTodosLoading } = useSelector(todoSelector);
    const dispatch = useDispatch();

    const dispatchAdd = (content: string) => {
        dispatch(addTodo.pending(content));
    }
    const dispatchCheck = (id: string, isCheck: boolean) => {
        dispatch(checkTodo.pending({ id, isCheck }));
    }
    const dispatchChange = (id: string, content: string) => {
        dispatch(chnageTodoContent.pending({ id, content }));
    }
    const dispatchDelete = (id: string) => {
        dispatch(deleteTodo.pending(id));
    } 

    useEffect(() => {
        dispatch(getTodos.pending());
    }, []);

    return (
        <Wrap>
            <Container>
                <TodoInput 
                addTodoLoading={addTodoLoading}
                dispatchAdd={dispatchAdd} />
                {getTodosLoading
                ? <Spinner /> 
                : <TodoList
                dispatchDelete={dispatchDelete}
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