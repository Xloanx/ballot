import React, { Component } from 'react';

const TextArea = (props) => {
    const { name, label,  type, value, error, onChange } = props;
    return ( 
        <div className="form-group mb-3">
            <label htmlFor={name} 
                    className="form-label">{label}</label>

            <textarea
                    type={type}
                    name= {name}
                    id={name} 
                    className="form-control" 
                    placeholder={label} 
                    value = {value}
                    onChange={onChange}
                    rows="6"></textarea>
        </div>
     );
}
 
export default TextArea;