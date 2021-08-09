import React from 'react';


const Input = (props) => {
    const { name, label,  type, value, error, onChange } = props;
    return ( 
        <div className='form-group mb-3'>
            <label htmlFor={name} 
                className="visually-hidden">{label}</label>
                
            <input 
                type={type}
                name= {name}
                id={name} 
                className="form-control" 
                placeholder={label} 
                value = {value}
                onChange={onChange}/>
                {error && <div className="alert alert-danger">{error}</div>}
                
        </div>
     );
}
 
export default Input;