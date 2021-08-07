import React, { Component } from 'react';
import { getPositions } from '../services/fakePositionService';

class ContestantsForm extends Component {
    state = { 
        positions : []
     }

     componentDidMount() {
        const position = getPositions();
        const positions = [ ...position];
        this.setState({ positions });
     }


    render() { 
        const {match} = this.props;
        const { positions } = this.state;
        return (
            
            <React.Fragment>
                <h5>Contestant Form - {match.params.contestantId}</h5>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name of Contestant</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="inputGroupFile02" />
                        <label class="input-group-text" for="inputGroupFile02">Upload</label>
                    </div>
                    <select class="form-select mb-3" aria-label="Default select example">
                        <option selected>Select the Position this Contetstant is vying for</option>
                        {positions.map(position => 
                            <option key ={position._id} value={position._id}>{ position.name }</option>
                            )}
                    </select>
                    <button type="submit" class="btn btn-primary mb-3">Submit</button>
                    </form>
            </React.Fragment>
         );
    }
}
 
export default ContestantsForm;