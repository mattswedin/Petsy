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

                <div className="cat-photos-titles">
                        {
                            Object.values(this.props.categories).map
                            (category => 
                               <div key={category.id}>
                                    <div>
                                        <img className="cat-photo" src={category.photo} />
                                    </div>
                                    <div>
                                        <h1 className="cat-title">{category.title}</h1>
                                    </div>
                                </div>    
                            )
                            
                        }
                </div>
               
                
                
            </div>
        )} else {

        return( 

        <div>
            <h2 className="color" >Lets Get Petting with Petsy!</h2>
                <div className="cat-photos-titles">
                    {
                        Object.values(this.props.categories).map
                            (category =>
                                <div key={category.id}>
                                    <div>
                                        <img className="cat-photo" src={category.photo} />
                                    </div>
                                    <div>
                                        <h1 className="cat-title">{category.title}</h1>
                                    </div>
                                </div>
                            )

                    }
                </div>
        </div>

            )

        }
    }
}