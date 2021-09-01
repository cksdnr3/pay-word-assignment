import React, { ChangeEvent } from 'react';
import styled, { css } from 'styled-components';
import { Todo } from 'store/todo/types';
import CheckIcon from 'components/common/CheckIcon';
import { useState } from 'react';
import { useRef } from 'react';
import { TodoDispatch } from './TodoList';

interface TodoItemProps extends TodoDispatch {
    todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, dispatchCheck, dispatchChange, dispatchDelete }) => {
    const [modify, setModify] = useState(true);
    const [content, setContent] = useState(todo.content);
    const contentInput = useRef<HTMLInputElement>(null);

    const handleCheck = () => {
        dispatchCheck(todo.id, !todo.isCheck);
    }
    const handleDelete = () => {
        dispatchDelete(todo.id);
    }
    const handleChange = () => {
        dispatchChange(todo.id, content);
    }
    const toggleModify = () => {
        setModify(prev => !prev);
        contentInput.current?.focus();
    }
    const handleChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    }

    return (
        <Container 
        checked={todo.isCheck}>
            <SpaceLeft>
                <Check
                onClick={handleCheck}>
                    <CheckBlock>
                        {todo.isCheck && 
                        <CheckIcon 
                        color="#55b8cf" />} 
                    </CheckBlock>
                </Check>
                <ContentInput
                onChange={handleChangeContent}
                modify={modify}
                readOnly={modify}
                ref={contentInput}
                value={content} />
            </SpaceLeft>
            <SpaceRight>
                <Edit 
                onClick={toggleModify}>
                    {modify 
                    ? <ToggleEdit>수정</ToggleEdit> 
                    : <Submit 
                    onClick={handleChange}>
                        확인
                    </Submit>}
                </Edit>
                <Delete
                onClick={handleDelete}>
                    삭제
                </Delete>
            </SpaceRight>
        </Container> 
    )
}

const Container = styled.div<{checked: boolean}>`
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    ${props => 
        props.checked && css`
        opacity: 0.44;
    `}
`

const SpaceLeft = styled.div`
    flex-basis: 80%;
    display: flex;
    align-items: center;
`
const SpaceRight = styled.div`
    display: flex;

    button {
        cursor: pointer;
        &:hover {
            color: #55b8cf;
        }
    }
`
const Check = styled.div`
    border: 2px solid #55b8cf;
    border-radius: 4px;
    margin-right: 15px;
    cursor: pointer;

    &:hover {
        opacity: 0.44;
    }
`

const CheckBlock = styled.div`
    width: 19px;
    height: 19px;
`

const ContentInput = styled.input<{modify: boolean}>`
    width: 100%;
    padding: 3px;

    ${props => 
        !props.modify && css`
        border: 1px solid #55b8cf;
        border-radius: 5px;
    `}
`

const ToggleEdit = styled.button`

`
const Submit = styled.button``
const Delete = styled.button`
    margin-left: 5px;
`
const Edit = styled.div``

export default TodoItem;