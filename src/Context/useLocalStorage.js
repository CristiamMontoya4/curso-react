import React from 'react';

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try{
                const localStorageTodos = localStorage.getItem(itemName); 
                let parsedItem;
                if (!localStorageTodos) {
                    localStorage.setItem(itemName , JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageTodos); 
                    setItem(parsedItem);
                }

                setLoading(false);
            } catch (error) {
                setError(true);

            }
        }, 2000);
    }, []);
  
  
    const saveItem = (newItem) => {
      setItem(newItem);
      localStorage.setItem(itemName, JSON.stringify(newItem))
    };
  
    return {item, saveItem, loading, error};
  }

  export { useLocalStorage }

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: 'Pasear al gato 😺', completed: true},
//   { text: 'Terminar curso de React', completed: false},
//   { text: 'Cortar cebolla 🧅', completed: false},
//   { text: 'Dormir', completed: false},
//   { text: 'Comprar Pan 🍞', completed: true}
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
