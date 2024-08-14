import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) { 
    return (
      <center>
        <button 
          className="CreateTodoButton-btn"
          onClick={() => {
            setOpenModal((state) => !state);
          }}
          
        >
          Crear Tarea
        </button>
      </center>
    );
  }

  export {CreateTodoButton};