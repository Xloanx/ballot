import React, { Component } from 'react';
import Input from '../common/input';


const DataList = (props) => {
    const { name, label, options, value, error, onChange } = props;
    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <input class="form-control" 
                    list={name} 
                    id="exampleDataList" 
                    placeholder="Type to search..." />
        
        <datalist id={name} >
            {options.map((option) => (
            <option key={option._id} value={option._id}>
                {option.name}
            </option>
            ))}
        </datalist>

        </div>
     );
}
 
export default DataList;