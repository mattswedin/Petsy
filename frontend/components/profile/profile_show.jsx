import React from "react";
import { recieveUser } from "../../actions/session_actions";

export default class ProfileShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.recieveUser(this.props.match.params.userId)
    }

    render(){
        return (
            <div>
                <h1>{this.props.user.username}</h1>
                <h1>Create new Pet!</h1>
            </div>
        )
    }

}