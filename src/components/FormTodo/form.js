import './form.css';
// add btn and input
const Form=function(props)
{
    return(
    <div>
        <form onSubmit={props.onSubmit}>
            <div className="input">
                <input type="text" value={props.value}  onChange={props.onChange} />
                <button className="add-item" onClick={props.onClick} >
                    +
                </button>
            </div>
        </form>
    </div>
    )
}

export default Form;