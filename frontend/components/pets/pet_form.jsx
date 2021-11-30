import React from "react"

class PetForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.pet
        this.handleSubmit = this.handleSubmit.bind(this)
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
        return (

            <div className="modal-form-container">
                {/* <ul className="errors-reg">
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul> */}

                {/* className="pet-form"
                className="create-header-register"
                className="pet-label"
                className="pet-input" */}

                <form  onSubmit={this.handleSubmit}>

                    <div className="pet-form">

                        <h1 className="create-update-header">Create Pet!</h1>

                        <h1 className="pet-label" >Name</h1>
                            <input className="pet-input" type="text"
                            value={this.state.name}
                            onChange={this.update('name')}/>
                    


                        <h1 className="pet-label">Category</h1>
                        <select className="pet-input" type="text" value={this.state.category} onChange={this.update('category')}>
                            <option value="Dogs">Dogs</option>
                            <option value="Sheep">Sheep</option>
                            <option value="Cows">Cows</option>
                            <option value="Cats">Cats</option>
                            <option value="Lizards">Lizards</option>
                            <option value="Turtles">Turtles</option>
                            <option value="Snakes">Snakes</option>
                            <option value="Rabbits">Rabbits</option>
                            <option value="Fish">Fish</option>
                            <option value="Birds">Birds</option>
                            <option value="Gerbils">Gerbils</option>
                            <option value="Hamsters">Hamsters</option>
                            <option value="Monkeys">Monkeys</option>
                            <option value="Ferrets">Ferrets</option>
                            <option value="Rocks">Rocks</option>
                            <option value="Pigs">Pigs</option>
                            <option value="Guinea Pigs">Guinea Pigs</option>
                            <option value="Horses">Horses</option>
                            <option value="Plants">Plants</option>
                            <option value="Deer">Deer</option>
                        </select>
                    

                          <h1 className="pet-label" >Color</h1>
                <select className="pet-input" type="text"
                        value={this.state.color}
                        onChange={this.update('color')} >
                    <option value="Brown">Brown</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                    <option value="Pink">Pink</option>
                    <option value="Purple">Purple</option>
                    <option value="Red">Red</option>
                    <option value="Grey">Grey</option>
                </select>
                    

                        <h1 className="pet-label" >Size</h1>
                        <select className="pet-input" type="text"
                            value={this.state.size}
                            onChange={this.update('size')}>
                            <option value="Tiny">Tiny</option> 
                            <option value="Small">Small</option>
                            <option value="Medium-Small">Medium-Small</option>
                            <option value="Medium">Medium</option> 
                            <option value="Large">Large</option> 
                            <option value="Extra Large">Extra Large</option> 
                        </select>
                    

                        <button className="create-update-button" >Create!</button>

                    </div>

                
                </form>
            </div>

        )
    }
}

export default PetForm;