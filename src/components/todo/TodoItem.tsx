import React from 'react';
import styled, { css } from 'styled-components';
import { Todo } from 'store/todo/types';
import CheckIcon from 'components/common/CheckIcon';

interface TodoItemProps {
    todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {

    return (
        <Container
        checked={todo.isCheck}
        >
            <Check>
                <CheckBlock>
                    {todo.isCheck && <CheckIcon color="#55b8cf" />} 
                </CheckBlock>
            </Check>
            {todo.content}
        </Container> 
    )
}

const Container = styled.div<{checked: boolean}>`
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    ${props => 
        props.checked && css`
        opacity: 0.44;
    `}
`

const Check = styled.div`
    border: 2px solid #55b8cf;
    border-radius: 4px;
    margin-right: 15px;
    cursor: pointer;
`

const CheckBlock = styled.div`
    width: 19px;
    height: 19px;
`

export default TodoItem;