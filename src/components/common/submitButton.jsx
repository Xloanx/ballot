import React from 'react';

const SubmitButton = (props) => {
    const {label, onDisabled} = props;
    return ( 
        <button
        disabled = {onDisabled}
        className="w-100 btn btn-lg btn-primary" 
        type="submit">{ label }</button>
     );
}
 
export default SubmitButton;