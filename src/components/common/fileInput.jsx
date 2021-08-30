import React, { Component } from 'react';

const FileInput = (props) => {
    const { name, label,  type, value, error, onChange } = props;
    return ( 
        <div className="input-group mb-3">
            <input 
            type={type}
            className="form-control" 
            id="inputGroupFile02" 
            name={name}
            placeholder={label}
            value={value}
            onChange={onChange}
            />
            <label className="input-group-text" 
                    htmlFor="inputGroupFile02">Upload Contestant Picture</label>
            
        </div>
     );
}
 
export default FileInput;