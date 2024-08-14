import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const iconTypes = {
    "check": (color) => <CheckCircleIcon fill={color}/>,
    "delete" : (color) => <DeleteIcon fill={color}/>,
}

function TodoIcon({ type }) {
    return (
        <span
            className={`Icon-container Icon-container
            Icon-container-${type}`}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };