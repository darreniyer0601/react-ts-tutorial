import React from 'react';
import Todo from '../models/todo';

// FC stands for functional component
const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items.map(item => <li key={item.id}>{item.text}</li>)}
        </ul>
    );
}

export default Todos;