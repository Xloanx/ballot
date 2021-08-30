import React, { Component } from 'react';

const TextArea = (props) => {
    const { name, label,  row, column, value, error, onChange } = props;
    return ( 
        <div className="form-group mb-3">
            <label htmlFor={name} 
                    className="form-label">{label}</label>

            <textarea
                    rows={row}
                    columns = {column}
                    name= {name}
                    id={name} 
                    className="form-control" 
                    placeholder={label} 
                    value = {value}
                    onChange={onChange}></textarea>
        </div>
     );
}
 
export default TextArea;