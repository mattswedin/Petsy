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

            <div >
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

                        <h1 className="signin-header" >Create Pet!</h1>

                        <h1 className="pet-label" >Name</h1>
                            <input className="pet-input" type="text"
                            value={this.state.name}
                            onChange={this.update('name')}/>
                    


                        <h1 className="pet-label">Kind</h1>
                        <input className="pet-input" type="text"
                            value={this.state.kind}
                            onChange={this.update('kind')}/>
                    

                        <h1 className="pet-label" >Color</h1>
                        <input className="pet-input" type="text"
                            value={this.state.color}
                            onChange={this.update('color')}/>
                    

                        <h1 className="pet-label" >Size</h1>
                        <input className="pet-input" type="text"
                            value={this.state.size}
                            onChange={this.update('size')}/>
                    

                    <button>Create!</button>

                    </div>

                
                </form>
            </div>

        )
    }
}

export default PetForm;