import React from 'react';
import { Todo } from 'store/todo/types';
import styled from 'styled-components';
import TodoItem from './TodoItem';

interface TodoListProps {
    todoList: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todoList }) => {
    return (
        <Container>
            {todoList.map(todo => (
                <TodoItem 
                key={todo.id}
                todo={todo} />
            ))}
        </Container>
    )
}

const Container = styled.div`
    padding: 10px 30px;
`

export default TodoList;