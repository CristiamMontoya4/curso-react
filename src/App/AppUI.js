import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodosLoading } from './TodosLoading/';
import { TodosError } from './TodosError/';
import { EmptyTodos } from './EmptyTodos/';
import { TodoContext } from '../Context/index'
import React, { useEffect } from 'react';
import { Modal } from './Modal/';
import { TodoForm } from './TodoForm/'
// import ReactDOM from "react-dom";

function AppUI () {

  const {
    loading,
    error,
    searchedTodos,
    completeTodos,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
  } = React.useContext(TodoContext);

    return (
        <>
          <TodoCounter/>
          <TodoSearch/>
          <TodoList>
            {loading && 
              <>
                <TodosLoading/>
                <TodosLoading/>
                <TodosLoading/>
              </>
            }
            {error && <TodosError/>}
            {(!loading && totalTodos === 0) && <EmptyTodos/>}
              
            {searchedTodos.map(todo => (
                <TodoItem 
                  key={todo.text} 
                  text={todo.text} 
                  completed={todo.completed}
                  onComplete={() => completeTodos(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))
            } {/*El map crea un array aparte*/}
          </TodoList>
          <CreateTodoButton
            setOpenModal={setOpenModal}
          />

          {openModal && 
            <Modal>
              <TodoForm/>
            </Modal>
          }
          
          {/* {openModal &&
            <Modal2>
              <div style={{zIndex:10}}>
                <TodoForm/>

              </div>
            </Modal2>
          }         */}
        </>
      );
}

// function Modal2({children}) {
//   const portalNode = document.createElement('div');

//   useEffect(() => {
//     document.body.appendChild(portalNode);

//     return () => {
//       portalNode.remove();
//     };
//   }, [portalNode]);

//   return ReactDOM.createPortal(children, portalNode);
// }

export { AppUI }; 