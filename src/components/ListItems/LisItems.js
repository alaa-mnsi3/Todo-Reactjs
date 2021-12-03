import './ListItems.css';
import EditIcon from './icons8-edit.svg';
import DeleteIcon from './icons8-delete.svg';
import CheckIcon from './check-mark-svgrepo-com (1).svg';

function ListItems(props) 
{
    return(
        <li>
            <p className={props.todoCompleted? "Item-text completed" : "Item-text"} disabled={props.todoEditing}>
                {props.todoText} 
            </p> 
            <div className="icons">
                <button className="iconbtn" onClick={props.Edit}>
                    <img className="iconbtn-img" src={EditIcon} />
                </button>
                <button className="iconbtn" onClick={props.Delete}>
                    <img className="iconbtn-img" src={DeleteIcon} />
                </button>
                <button className="iconbtn" onClick={props.CompletedItem}>
                    <img className="iconbtn-img" src={CheckIcon}/>
                </button>
            </div>
        </li>
    )
}

export default ListItems;