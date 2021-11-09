import React from "react";


export default class ProfileShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.recieveUser(this.props.match.params.userId)
        this.props.fetchPets()
    }


    render(){
        const that = this
        const userPets = Object.values(this.props.pets).filter(pet =>
            pet.owner_id === that.props.user.id)

        return (
            <div className="profile-show">
                <h1 className="profile-name">{this.props.user.username}</h1>
                <input className="profile-form-button" type="submit" onClick={() => this.props.openModal({type: 'createPet'})} value="Create New Pet" />
                
                
                    
                    <div className="userPet-Pos">
                        {
                        userPets.map(pet =>
                            <div className="userPet" key={pet.id}>
                                    <img className="pet-profile-pic"src={pet.photo}/>
                                    <ul>Name: {pet.name}</ul>
                                    <ul>Type: {pet.kind}</ul>
                                    <ul>Color: {pet.color}</ul>
                                    <ul>Size: {pet.size}</ul>
                                <input className="profile-form-button" type="submit" onClick={() => this.props.openModal({type: 'updatePet', pet: pet })} value="Edit Pet" />
                                <input className="profile-form-button" type="submit" onClick={() => this.props.deletePet(pet.id)} value="Delete Pet" />
                                </div>
                                )
                        }
                    </div>
                
            </div>
        )
    }

}