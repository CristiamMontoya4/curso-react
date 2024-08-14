import { TodoContext } from '../Context';
import './TodoSearch.css';
import React from 'react';

function TodoSearch() {

    const {
        searchValue, setSearchValue,
    } = React.useContext(TodoContext)

    console.log('Los usuarios buscan To Dos de ' + searchValue);
    return (
  
        <input 
            placeholder="Cortar cebolla" 
            className='TodoSearch'
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
              }}
        ></input>
        
    );
}

export {TodoSearch};