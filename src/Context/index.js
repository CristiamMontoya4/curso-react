import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvieder({ children }) {
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      console.log('Log 1');
    
      // React.useEffect(() => {
      //   console.log('Loooog 2');
      // });
    
      // React.useEffect(() => {
      //   console.log('Loooog 2');
      // }, []);
    
      React.useEffect(() => {
        console.log('Loooog 2');
      }, [totalTodos]);
    
      console.log('Log 3');
    
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLocaleLowerCase();
          const searchText = searchValue.toLocaleLowerCase();
          return todoText.includes(searchText)
        }
      ); 
    
      const completeTodos = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      }

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed : false,
        });
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvieder };