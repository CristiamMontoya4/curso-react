import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvieder } from '../Context/index'

function App() {
  return(
    <TodoProvieder>
      <AppUI />
    </TodoProvieder>
  );
}


export default App;
