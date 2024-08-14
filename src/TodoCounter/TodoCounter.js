import { TodoContext } from '../Context';
import './TodoCounter.css';
import React from 'react';

function TodoCounter(props) {
    const {
        completedTodos, totalTodos
    } = React.useContext(TodoContext);
    
    return (
  
        <h1 className='TodoCounter'>
            Tienes {completedTodos} de {totalTodos} tareas pendientes
        </h1>
        
    );
}

export {TodoCounter};

/* Estilo en linea bonito
style={{
    color: 'white',
    backgroundColor: 'black',
    padding: '10px',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    borderRadius: '10px',
    margin: '10px',
    width: '300px',
    height: '50px',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.75)'
}}  
    */