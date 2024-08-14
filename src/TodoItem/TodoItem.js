import './TodoItem.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem(props) {
    return (
      <li className='TodoItem'>
        <CheckCircleIcon className={`Icon-container Icon-container-check ${props.completed 
          && "Icon-container-check--active"}`}
          completed={props.completed}  
          onClick={props.onComplete}
        />
        {/* <span 
          className={`Icon Icon-check ${props.completed 
          && "Icon-check--active"}`}
          onClick={props.onComplete}
        >
          V
        </span> */}
        <p className={`TodoItem-p ${props.completed && "TodoItem-p-complete"}`}>
          {props.text}
        </p>
        <DeleteIcon className='Icon-conatiner Icon-container-delete'
          onClick={props.onDelete}
        />
        {/* <span className='Icon Icon-delete'
              onClick={props.onDelete}
        > 
          X
        </span> */}
      </li>
    );
  }

  export {TodoItem};