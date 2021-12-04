import React, { useState, useEffect } from "react";
import { fetchUsers } from "../../actions/session_actions";
import { Link } from "react-router-dom";

const Search = ({fetchPets, match, pets, users}) => {
    
    const state = {query: match.url.slice(8)}
    
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
    fetchPets()
    fetchUsers()
    const allPets = Object.values(pets)
    const results = allPets.filter(pet =>
      pet.name.toLowerCase().includes(state.query) || pet.size.toLowerCase().includes(state.query) || pet.color.toLowerCase().includes(state.query) || pet.category.toLowerCase().includes(state.query)
    );
        setSearchResults(results)
    }, [state.query]);

    
    return searchResults[0] ? (

        <div className="userPetindex-Pos" >
            {
                searchResults.map((pet, i) => 
                    <div className="userPet" key={i}>
                        <Link to={`/pets/${pet.id}`}><img className="pet-profile-pic" src={pet.photo} /></Link>
                        <ul className="pet-ele-list" >Name: {pet.name}</ul>
                        <ul className="pet-ele-list" >Type: {pet.category}</ul>
                        <ul className="pet-ele-list" >Color: {pet.color}</ul>
                        <ul className="pet-ele-list" >Size: {pet.size}</ul>
                            <ul className="pet-ele-list" >Owner: </ul>
                            <Link className="pet-ele-list" to={`/users/${pet.owner_id}`}>{users[pet.owner_id].username}</Link>
                    </div>
                )
            }
        </div>
    ) : (


        <h1>No results found!</h1>

    )

}

export default Search;