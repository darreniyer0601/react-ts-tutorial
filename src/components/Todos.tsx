import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';
import './Todos.module.css';

// FC stands for functional component
const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul className="todos">
            {props.items.map(item => (
                <TodoItem key={item.id} text={item.text}/>
            ))}
        </ul>
    );
}

export default Todos;