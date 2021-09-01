import React from 'react';
import { Todo } from 'store/todo/types';
import styled from 'styled-components';
import TodoItem from './TodoItem';

interface TodoListProps {
    todoList: Todo[];
    dispatchCheck: (id: string, isCheck: boolean) => void;
    dispatchChange: (id: string, content: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todoList, dispatchCheck, dispatchChange }) => {
    return (
        <Container>
            {todoList.map(todo => (
                <TodoItem 
                key={todo.id}
                todo={todo} 
                dispatchChange={dispatchChange}
                dispatchCheck={dispatchCheck}
                />
                ))}
        </Container>
    )
}

const Container = styled.div`
    padding: 10px 30px;
    height: 450px;
    overflow-y: auto;
`


export default TodoList;