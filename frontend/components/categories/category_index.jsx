import React from "react"
import PetIndexContainer from "../pets/pets_index_container"
import OurPicksContainer from '../our_picks/our_picks_container'
import { Link } from "react-router-dom"

export default class CategoryIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = { category: 'All'}
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
                                    ((category, i) => i > 5 ? null :
                                    <div key={category.id}>
                                            <div>
                                                <Link to={`/categories/${category.id}`}><img className="cat-photo" src={category.photo} /></Link>
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
                                    ((category, i) => i > 5 ? null :
                                        <div key={category.id}>
                                            <div>
                                                <Link to={`/categories/${category.id}`}><img className="cat-photo" src={category.photo} /></Link>
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