import React from "react"

export default class CategoryIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchCategories()
    }

    render(){
        if (this.props.currentUser){
        return(
            <div>
                <h2 className="color" >Welcome Back, {this.props.currentUser.username}! </h2>
                <div className="top-cats">
                    <h1 className="cat">{this.props.categories.title}</h1>
                    <h1 className="cat">{this.props.categories.title}</h1>
                    <h1 className="cat">{this.props.categories.title}</h1>
                    <h1 className="cat">{this.props.categories.title }</h1>
                    <h1 className="cat">{this.props.categories.title }</h1>
                    <h1 className="cat">{this.props.categories.title }</h1>
                </div>
                
                <div className="bottom-cats">
                    <h1 className="cat">{this.props.categories.title}</h1>
                    <h1 className="cat">{this.props.categories.title}</h1>
                    <h1 className="cat">{this.props.categories.title}</h1>
                    <h1 className="cat">{this.props.categories.title}</h1>
                    <h1 className="cat">{this.props.categories.title}</h1>
                    <h1 className="cat">{this.props.categories.title}</h1>
                </div>
                
                
            </div>
        )} else {

        return( 

        <div>
            <h2 className="color" >Lets Get Petting with Petsy!</h2>
            <div className = "top-cats" >
                <h1 className="cat">{this.props.categories.title}</h1>
                <h1 className="cat">{this.props.categories.title}</h1>
                <h1 className="cat">{this.props.categories.title}</h1>
                <h1 className="cat">{this.props.categories.title }</h1>
                <h1 className="cat">{this.props.categories.title }</h1>
                <h1 className="cat">{this.props.categories.title }</h1>
            </div >
        </div>

            )

        }
    }
}