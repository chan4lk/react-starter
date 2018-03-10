import React from 'react';

export const ToDoItem = ({todo,index, onCompleted}) => {
    return (
        <div style={{textDecoration:todo.completed?'line-through':'none'}}>
            <input 
            checked={todo.completed} 
            onChange={() => onCompleted(index)} 
            type="checkbox"/>
          {todo.text}
          </div>
    )
}