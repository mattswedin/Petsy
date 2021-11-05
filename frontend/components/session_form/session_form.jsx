import React from "react";


export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
        this.closeModal = this.closeModal.bind(this)
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

        this.props.login(julian)

    }

    closeModal(){
        this.props.closeModal()
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
                    <ul className="errors-reg">
                        {this.props.errors.map((error, i) => (
                            <li key={`error-${i}`}>
                                {error}
                            </li>
                        ))}
                    </ul>

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

                        {/* <button onClick={() => this.props.openModal('login')}>Sign In</button> */}

               
            </form>
                </div>
            )
        } else {

            


            

            return (
                <div>
                <form onSubmit={this.handleSubmit}>
                       
                    <ul className="errors">
                        {this.props.errors.map((error, i) => (
                            <li key={`error-${i}`}>
                                {error}
                            </li>
                        ))}
                    </ul>

                            <h2 className="signin-header">Sign in</h2>

                        <button className="register-button-sigin"onClick={() => this.props.openModal('signup')}>Register</button>

                        <div >
                            <label className="email-signin">Email Address
                                <input className="email-input-signin" type="text" value={this.state.email} onChange={this.update('email')}/>
                        </label>

                        <label className="password-signin" >Password
                                <input className="password-input-signin" type="password" value={this.state.password} onChange={this.update('password')}/>
                        </label>
                        </div>

                        
                            <input className="signin-button" type="submit" value={this.props.formType} />
                        

                        <button className="guest-button" onClick={this.handleDemo} >Login as Guest</button>

                        

                </form>
                </div>
            )
        }
    }

    
}