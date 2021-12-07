import './form.css';
// add btn and input
const Form=function({inputRef,value,onChange,onClick,onSubmit})
{
    return(
    <div>
        <form onSubmit={onSubmit}>
            <div className="input">
                <input type="text" value={value} ref={inputRef}  onChange={onChange} />
                <button className="add-item" onClick={onClick} >
                    +
                </button>
            </div>
        </form>
    </div>
    )
}

export default Form;