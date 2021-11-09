import React from 'react';
import { connect } from 'react-redux';
import { fetchPet, updatePet } from '../../actions/pet_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

class EditPetForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.pet
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchPet(this.props.match.params.petId)
    }


    update(field) {
        return event => {
            this.setState({ [field]: event.currentTarget.value })
        }
    }

    handleSubmit() {
        this.props.action(this.state)
    }

    render() {

        if (!pet) 
        return null;
    

        return (

            <form className="pet-form" onSubmit={this.handleSubmit}>
                <h1>{this.props.formType}</h1>

                <label>Name
                    <input type="text"
                        value={this.state.name}
                        onChange={this.update('name')} />
                </label>


                <label>Kind
                    <input type="text"
                        value={this.state.kind}
                        onChange={this.update('kind')} />
                </label>

                <label>Color
                    <input type="text"
                        value={this.state.color}
                        onChange={this.update('color')} />
                </label>

                <label>Size
                    <input type="text"
                        value={this.state.size}
                        onChange={this.update('size')} />
                </label>

                <button>Create!</button>


            </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    pet: state.entities.pets[ownProps.match.params.petId],
    formType: 'Update Pet'
});

const mapDispatchToProps = dispatch => ({
    action: pet => dispatch(updatePet(pet)),
    fetchPet: petId => dispatch(fetchPet(petId)),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal('updatePet'))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPetForm)