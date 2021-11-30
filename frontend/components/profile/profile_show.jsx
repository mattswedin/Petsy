import React from "react";


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
        console.log(pet)
        this.props.openModal({type: 'areYouSure', pet: pet})
    }


    render(){
        if (!this.props.user) return null;
        

        const userPets = Object.values(this.props.pets).filter(pet => !pet.adoptable && 
            pet.owner_id === parseInt(this.props.match.params.userId))

            console.log(userPets)
        
        return this.props.currentUserId === parseInt(this.props.match.params.userId) ?
            (
            <div className="profile-show">
                <div className="profile-box">
                <i id="account-icon" className="fas fa-user-circle"></i>
                <h1 className="profile-name">{this.props.user.username}</h1>
                </div>
                <input className="profile-form-button" type="submit" onClick={() => this.props.openModal({type: 'createPet'})} value="Create New Pet" />
                
                
                    
                    <div className="userPet-Pos">
                        {
                            
                        userPets.map(pet =>
                            <div className="userPet" key={pet.id}>
                                <img className="pet-profile-pic" src={pet.photo}/>
                                <ul className="pet-ele-list" >Name: {pet.name}</ul>
                                <ul className="pet-ele-list" >Type: {pet.category}</ul>
                                <ul className="pet-ele-list" >Color: {pet.color}</ul>
                                <ul className="pet-ele-list" >Size: {pet.size}</ul>
                                <input className="profile-form-button-two" type="submit" onClick={() => this.props.openModal({type: 'updatePet', pet: pet })} value="Edit Pet" />
                                <input className="profile-form-button-two" type="submit" onClick={() => this.handleAdopt(pet)} value="Put Up for Adoption" />
                                
                                </div>

                                )
                        }
                    </div>
                
                </div>
                ) : (
                <div className="profile-show">
                    <div className="profile-box">
                        <i id="account-icon" className="fas fa-user-circle"></i>
                        <h1 className="profile-name">{this.props.user.username}</h1>
                    </div>
                
                    <div className="userPet-Pos">
                        {

                            userPets.map(pet =>
                                <div className="userPet" key={pet.id}>
                                    <img className="pet-profile-pic" src={pet.photo} />
                                    <ul className="pet-ele-list" >Name: {pet.name}</ul>
                                    <ul className="pet-ele-list" >Type: {pet.category}</ul>
                                    <ul className="pet-ele-list" >Color: {pet.color}</ul>
                                    <ul className="pet-ele-list" >Size: {pet.size}</ul>
                                </div>
                            )
                        }
                    </div>

                </div>
                    
                )
                
         
                
    }

}