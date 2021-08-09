import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { getPositions } from '../services/fakePositionService';
import { getContestant, saveContestant } from '../services/fakeContenstantService';

class ContestantsForm extends Form {
    state = {
        data: { nameOfContestant: "", imageUpload: "", positionId: "" },
        errors: {},
        positions : []
     }


     schema = {
        _id: Joi.string(),
        nameOfContestant: Joi.string().required().label('Name of Contestant'),
        positionId: Joi.string().required().label('Position'),
        imageUpload: Joi.required().label('Image Upload'),
      };

      populatePositions(){
        const position = getPositions();
        const positions = [ ...position];
        this.setState({ positions });
      }


      populateContestantForm(){
        const {match, history} = this.props ;
        try{
          const contestantId = match.params.contestantId;
          if (contestantId === 'new') return;
          const contestant  = getContestant(contestantId);
          this.setState({data : this.mapToViewModel(contestant)})
        }
        catch(ex){
          if (ex.response && ex.response.status === 404)
            return history.replace('/notFound');
        }
      }

      componentDidMount() {
        this.populatePositions();
        this.populateContestantForm();
      }

      mapToViewModel(contestant){
        return{
            _id: contestant._id,
            nameOfContestant:contestant.name,
            positionId:contestant.position._id,
            //imageUpload:contestant.picture.thumbnail
        }
      }

      doSubmit = () => {
        saveContestant(this.state.data);
        this.props.history.push('/booth');
      };

    render() { 
        const {match} = this.props;
        const { positions } = this.state;
        return (
            
            <React.Fragment>
                <h5>Contestant Form - {match.params.contestantId}</h5>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput( 'nameOfContestant', "Name of Contestant")}
                    {this.renderFileInput( 'imageUpload', "Image Upload", "file" )}
                    {this.renderSelect('positionId', "Select the Position this Contetstant is vying for", positions )}
                    {this.renderButton("Submit")}
                </form>
            </React.Fragment>
         );
    }
}
 
export default ContestantsForm;