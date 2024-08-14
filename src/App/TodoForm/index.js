import React from "react";
import { TodoContext } from "../../Context"
import './TodoForm.css';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = (event) => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);    
    };

    return(
        <form onSubmit={onSubmit}>
            <label className="TodoForm-label">Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Hacer el almuerzo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--save"
                >
                    Guardar
                </button>
            </div>
        </form>
    );
}

export { TodoForm };