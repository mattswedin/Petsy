import React from "react"
import PetIndexContainer from "../pets/pets_index_container"
import pet_create_form_container from "../pets/pet_create_form_container"
import OurPicksContainer from '../our_picks/our_picks_container'

export default class CategoryIndex extends React.Component{
    constructor(props){
        super(props)
        this.changeCat = this.changeCat.bind(this)
        this.state = { category: 'All'}
    }

    componentDidMount(){
        this.props.fetchCategories()
    }

    changeCat(cat){
        
        this.setState({category: cat})
        
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
                                                <img className="cat-photo" src={category.photo} onClick={() => this.changeCat(category.title)} />
                                            </div>
                                            <div>
                                                <h1 className="cat-title">{category.title}</h1>
                                            </div>
                                        </div>    
                                    )
                                    
                                }
                            
                        </div>

                        <OurPicksContainer />

                        <PetIndexContainer category={this.state.category}/>
                    
                        
                        
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
                                                <img className="cat-photo" src={category.photo} onClick={() => this.changeCat(category.title)} />
                                            </div>
                                            <div>
                                                <h1 className="cat-title">{category.title}</h1>
                                            </div>
                                        </div>
                                    )

                            }

                        </div>

                        <PetIndexContainer category={this.state.category} />

                </div>

            )

        }
    }
}