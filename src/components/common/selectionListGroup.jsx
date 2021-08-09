import React from 'react';

const SelectionListGroup = (props) => {
    const {positions, selectedPosition, onPositionSelect} = props;
    return ( <React.Fragment>
        <div className="list-group">
            {positions.map(position =>
                <button 
                    key={position._id} 
                    type="button" 
                    className="list-group-item list-group-item-action"
                    onClick= {()=>onPositionSelect(position)}> {position.name}
                </button>
            )}
        </div>
        </React.Fragment>
        
     );
}
 
export default SelectionListGroup;