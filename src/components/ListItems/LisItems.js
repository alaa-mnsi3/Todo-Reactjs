import './ListItems.css';
import EditIcon from './icons8-edit.svg';
import DeleteIcon from './icons8-delete.svg';
import CheckIcon from './check-mark-svgrepo-com (1).svg';

function ListItems({todo,Edit,Delete,CompletedItem}) 
{
    return(
        <li>
            <p className={todo.todoCompleted? "Item-text completed" : "Item-text"} disabled={todo.todoEditing}>
                {todo.todoText} 
            </p> 
            <div className="icons">
                <button className="iconbtn" onClick={Edit}>
                    <img className="iconbtn-img" alt="" src={EditIcon} />
                </button>
                <button className="iconbtn" onClick={Delete}>
                    <img className="iconbtn-img" alt="" src={DeleteIcon} />
                </button>
                <button className="iconbtn" onClick={CompletedItem}>
                    <img className="iconbtn-img" alt="" src={CheckIcon}/>
                </button>
            </div>
        </li>
    )
}

export default ListItems;