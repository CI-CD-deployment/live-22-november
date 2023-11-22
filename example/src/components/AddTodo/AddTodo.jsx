import './AddTodo.css';
import { useState } from 'react';

function AddTodo(props) {
    const { setTodos } = props;
    const [todo, setTodo] = useState('');
    console.log('Laddas om!');

    async function updateTodos() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', { 
            method: 'POST',
            body: JSON.stringify({ todo: todo })
        });
        const data = await response.json();

        setTodos(data);
    }

    return (
        <section className='add-todo'>
            <input type="text" placeholder="Ange todo"
            className='add-todo__input'
            onChange={ (event) => { setTodo(event.target.value); }} />
            <p role='todo-text'>{ todo }</p>
            <button className='add-todo__button'
            onClick={ updateTodos }>Lägg till</button>
        </section>
    )
}

export default AddTodo;