import React from "react";
import { Link } from "react-router-dom";
import FooterContainer from '../footer/footer_container';


export default class ProfileShow extends React.Component{
    constructor(props){
        super(props)
        this.handleAdopt = this.handleAdopt.bind(this)
    }

    componentDidMount() {
        this.props.fetchPets()
        this.props.fetchUsers()
        this.props.fetchUser(this.props.match.params.userId)
    }

    handleAdopt(pet) {
        this.props.openModal({type: 'areYouSure', pet: pet})
    }


    render(){
        if (!this.props.user) return null;
        

        const userPets = Object.values(this.props.pets).filter(pet => !pet.adoptable && 
            pet.owner_id === parseInt(this.props.match.params.userId))

        const userAdoptablePets = Object.values(this.props.pets).filter(pet => pet.adoptable && 
            pet.owner_id === parseInt(this.props.match.params.userId))

        
        return this.props.currentUserId === parseInt(this.props.match.params.userId) ?
            (
            <div className="profile-show">
                <div className="profile-box">
                <i id="account-icon" className="fas fa-user-circle"></i>
                <h1 className="profile-name">{this.props.user.username}</h1>
                </div>
                <input className="profile-form-button" type="submit" onClick={() => this.props.openModal({type: 'createPet'})} value="Create New Pet" />
                
                
                    
                    <div className="userPetindex-Pos">
                        {
                            
                        userPets.map(pet =>
                            <div className="userPet" key={pet.id}>
                                <Link to={`/pets/${pet.id}`}><img className="pet-profile-pic" src={pet.photo} /></Link>
                                <ul className="pet-ele-list" >Name: {pet.name}</ul>
                                <ul className="pet-ele-list" >Type: {pet.category}</ul>
                                <ul className="pet-ele-list" >Color: {pet.color}</ul>
                                <ul className="pet-ele-list" >Size: {pet.size}</ul>
                                <h1 className="profile-form-button-two" type="submit" onClick={() => this.props.openModal({type: 'updatePet', pet: pet })}>Edit Pet</h1>
                                <h1 className="profile-form-button-two" onClick={() => this.handleAdopt(pet)} >Put Up for Adoption</h1>
                                
                                </div>

                                )
                        
                        }

                        
                      
                    </div>
                    
                    <h1 className="profile-name-adoptable" >{this.props.user.username}'s Adoptable Pets</h1>

                    <div className="userPetindex-Pos">

                      {
                          
                         userAdoptablePets.length > 0 ? userAdoptablePets.map(pet =>
                                
                                    <div className="userPet" key={pet.id}>
                                    <Link to={`/pets/${pet.id}`}><img className="pet-profile-pic" src={pet.photo} /></Link>
                                    <ul className="pet-ele-list" >Name: {pet.name}</ul>
                                    <ul className="pet-ele-list" >Type: {pet.category}</ul>
                                    <ul className="pet-ele-list" >Color: {pet.color}</ul>
                                    <ul className="pet-ele-list" >Size: {pet.size}</ul>
                                    
                                    </div>
                                

                            ) : <h1>No Pets up for Adoption!</h1>
                        }

                        <FooterContainer />

                    </div>
                
                </div>
                ) : (
                <div className="profile-show">
                    <div className="profile-box">
                        <i id="account-icon" className="fas fa-user-circle"></i>
                        <h1 className="profile-name">{this.props.user.username}</h1>
                    </div>
                
                    <div className="userPetindex-Pos">
                        {
                            userPets.map(pet =>
                                <div className="userPet" key={pet.id}>
                                    <Link to={`/pets/${pet.id}`}><img className="pet-profile-pic" src={pet.photo} /></Link>
                                    <ul className="pet-ele-list" >Name: {pet.name}</ul>
                                    <ul className="pet-ele-list" >Type: {pet.category}</ul>
                                    <ul className="pet-ele-list" >Color: {pet.color}</ul>
                                    <ul className="pet-ele-list" >Size: {pet.size}</ul>
                                </div>
                            )
                        }
                    </div>

                    <FooterContainer />

                </div>
                    
                )
                
         
                
    }

}