import React from 'react';
import styled from 'styled-components';
import TodoInput from 'components/todo/TodoInput';
import TodoList from 'components/todo/TodoList';
import { useSelector } from 'react-redux';
import { todoSelector } from 'store/todo/reducer';

const TodoContainer: React.FC = () => {
    const {count, todoList} = useSelector(todoSelector);



    return (
        <Wrap>
            <Container>
                <TodoInput />
                <TodoList todoList={todoList} />
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