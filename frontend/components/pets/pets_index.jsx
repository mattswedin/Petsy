import React from 'react';
import { Link } from 'react-router-dom';

class PetIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPets();
    }

    render() {
        return (
            <div className="userPetindex-Pos">
                    {
                    Object.values(this.props.pets).map(pet =>
                    <div className="userPet" key={pet.id}>
                        <img className="pet-profile-pic" src={pet.photo} />
                        <ul>Name: {pet.name}</ul>
                        <ul>Type: {pet.kind}</ul>
                        <ul>Color: {pet.color}</ul>
                        <ul>Size: {pet.size}</ul>
                        {/* <Link to={`/api/users/${pet.owner_id}`}>Owner</Link> */}
                    </div>
                    )}
                </div>
                
        );
    }
}

export default PetIndex;
