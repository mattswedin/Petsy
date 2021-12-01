import React from 'react';
import { Redirect, Router } from 'react-router';
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


        let filteredCat;

        if (this.props.category === 'All') {
            filteredCat = Object.values(this.props.pets)
        } else {
            filteredCat = Object.values(this.props.pets).filter(pet =>
                this.props.category === pet.category
            )
        }

        const shufflePets = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let pet = array[i];
            array[i] = array[j];
            array[j] = pet;
        }
        return array
        }

        return (
            <div className="userPetindex-Pos">
                    {
                    
                    shufflePets(filteredCat).map((pet, i) =>
                    <div className="userPet" key={i}>
                        <Link to={`/pets/${pet.id}`}><img className="pet-profile-pic" src={pet.photo} /></Link>
                        <ul className="pet-ele-list" >Name: {pet.name}</ul>
                        <ul className="pet-ele-list" >Type: {pet.category}</ul>
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
