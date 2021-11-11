import React from "react"
import PetIndexContainer from "../pets/pets_index_container"

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

                        <div className="color" >
                        <h2  className="color-title" >Welcome Back, <u className="underline-user">{this.props.currentUser.username}</u>!</h2>

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

                        <PetIndexContainer />
                    
                        
                        
                    </div>
                )} else {

                return( 

                    <div className="color">
                    <h2 className="color-title" >Lets Get Petting with Petsy!</h2>
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
                        <PetIndexContainer />
                </div>

            )

        }
    }
}