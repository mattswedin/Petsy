import React from 'react';
import withRouter from 'react-router-dom'

class EditPetForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.pet
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchPet(this.props.pet.id)
    }


    update(field) {
        return event => {
            this.setState({ [field]: event.currentTarget.value })
        }
    }

    handleSubmit() {
        this.props.action(this.state).then(this.props.closeModal);
    }

    render() {

        return this.state ? (

            
            <div className="modal-form-container">
            <form className="pet-form" onSubmit={this.handleSubmit}>
                
                <h1 className="create-update-header" >Update Pet</h1>

                <h1 className="pet-label" >Name</h1>
                <input className="pet-input" type="text"
                        value={this.state.name}
                        onChange={this.update('name')} />


                <h1 className="pet-label" >Category</h1>
                <input className="pet-input" type="text"
                        value={this.state.category}
                        onChange={this.update('category')} />

                <h1 className="pet-label" >Color</h1>
                <input className="pet-input" type="text"
                        value={this.state.color}
                        onChange={this.update('color')} />
               

                <h1 className="pet-label" >Size</h1>
                <input className="pet-input" type="text"
                        value={this.state.size}
                        onChange={this.update('size')} />


                <button className="create-update-button" >Update!</button>

                
            </form>
            </div>
            
        ) : null
    }
}

export default (EditPetForm);