import React from 'react';
import { Link } from 'react-router-dom';

class PetIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPets();
        this.props.fetchUsers();
    }

    render() {
        return (
            <div className="userPetindex-Pos">
                    {
                    Object.values(this.props.pets).map(pet =>
                    <div className="userPet" key={pet.id}>
                        <img className="pet-profile-pic" src={pet.photo} />
                        <ul className="pet-ele-list" >Name: {pet.name}</ul>
                        <ul className="pet-ele-list" >Type: {pet.kind}</ul>
                        <ul className="pet-ele-list" >Color: {pet.color}</ul>
                        <ul className="pet-ele-list" >Size: {pet.size}</ul>
                            <ul className="pet-ele-list" >Owner: </ul>
                            <Link className="pet-ele-list" to={`/users/${pet.owner_id}`}>{this.props.users[pet.owner_id].username}</Link>
                    </div>
                    )}
                </div>
                
        );
    }
}

export default PetIndex;
