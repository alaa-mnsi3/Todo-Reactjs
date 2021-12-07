import React from 'react';
import './form.css';
// add btn and input
const Form=React.forwardRef(({value,onChange,onClick,onSubmit},ref) =>
{
    return(
    <div>
    
        <form onSubmit={onSubmit}>
            <div className="input">
                <input type="text" value={value} ref={ref} onChange={onChange} />
                <button className="add-item" onClick={onClick} >
                    +
                </button>
            </div>
        </form>
    </div>
    )
})

export default Form;