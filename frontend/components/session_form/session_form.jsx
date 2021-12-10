import React from "react";
import { Link } from "react-router-dom";


export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemo = this.handleDemo.bind(this)
    }

    componentDidMount(){
        this.props.clearErrors()
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.action(user).then(this.props.closeModal);
    }

    handleDemo(e) {
        e.preventDefault();

        const julian = { email: "demo@aol.com", password: "password" }
        this.props.login(julian).then(this.props.closeModal);

    }
    
    

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render(){

        if (this.props.formType === "Register") {

            return(
                <div>
                   

                    <div className='model-register'>

                <form onSubmit={this.handleSubmit}>
                    
                        <h2 className="create-header-register">Create your account</h2>
                       
                        <h3 className="easy-header-register">Registration is easy.</h3>
                
                        <label className="email-register" >Email Address
                            <input className="email-input-register" type="text" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                           
                        <label className="first-name-register" >First Name
                            <input className="first-name-input-register" type="text" value={this.state.username} onChange={this.update('username')}/>
                    </label>
                           
                        <label className="password-register" >Password:
                            <input className="password-input-register" type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                           

                        <input className="signin-button-register" type="submit" value={this.props.formType}/>

               
            </form>
                    </div>
                    <ul className="errors-reg">
                        {this.props.errors.map((error, i) => (
                            <li key={`error-${i}`}>
                                {error}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        } else {

            


            

            return (
                <div className="modal-form-container-sess">
                    <form className="session-form" onSubmit={this.handleSubmit}>
                       
                    
                        <div className="row">
                        <h2 className="signin-register-head">Sign in</h2>
                        <button className="register-button-sigin" type="button"onClick={() => this.props.openModal({ type: 'signup' })}>Register</button>
                        </div>

                        
                        <label className="pet-label">Email Address</label>
                        <input className="pet-input" type="text" value={this.state.email} onChange={this.update('email')}/>
                        
                        <span className="space-between"></span>
                        <ul className="errors">
                            {this.props.errors.map((error, i) => (
                                <li key={`error-${i}`}>
                                    {error}
                                </li>
                            ))}
                        </ul>

                        <label className="pet-label" >Password</label>
                                <input className="pet-input" type="password" value={this.state.password} onChange={this.update('password')}/>
                        
                        

                        
                            
                        <input className="create-update-button" type="submit" value={this.props.formType} />

                        <button className="guest-button" onClick={this.handleDemo} >Login as Guest</button>
                        

                </form>
                </div>
            )
        }
    }

    
}