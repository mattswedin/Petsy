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
        this.props.action(this.state)
    }

    render() {
        return (

            <form className="pet-form" onSubmit={this.handleSubmit}>
                <h1>{this.props.formType}</h1>

                <label>Name
                    <input type="text"
                        value={this.state.name}
                        onChange={this.update('name')}/>
                </label>


                <label>Kind
                    <input type="text"
                        value={this.state.kind}
                        onChange={this.update('kind')}/>
                </label>

                <label>Color
                    <input type="text"
                        value={this.state.color}
                        onChange={this.update('color')}/>
                </label>

                <label>Size
                    <input type="text"
                        value={this.state.size}
                        onChange={this.update('size')}/>
                </label>

                <button>Create!</button>

            
            </form>
        )
    }
}

export default PetForm;