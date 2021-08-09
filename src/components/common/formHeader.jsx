import React from 'react';

const FormHeader = (props) => {
    const {label } = props;
    return ( 
        <div className="justify-content-center">
            <h1 className="h3 mb-3 fw-normal text-center ">{ label }</h1>
        </div>
     );
}
 
export default FormHeader;