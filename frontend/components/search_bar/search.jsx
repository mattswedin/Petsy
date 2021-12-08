import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Search = ({fetchPets, fetchUsers, match, pets, users, history}) => {
    
    const state = {query: match.url.slice(8)}
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        fetchPets()
        fetchUsers()
    }, [])


    useEffect(() => {
    const results = pets.filter(pet =>
      pet.name.toLowerCase().includes(state.query.toLowerCase()) || pet.size.toLowerCase().includes(state.query.toLowerCase()) || pet.color.toLowerCase().includes(state.query.toLowerCase()) || pet.category.toLowerCase().includes(state.query.toLowerCase())
    );
        setSearchResults(results)
    }, [state.query]);


    if (searchResults.length === 1 ){
        history.replace(`/pets/${searchResults[0].id}`)
    }

    
    return searchResults[0] && users ? (

        <div className="userPetindex-Pos" >
            {
                searchResults.map((pet, i) => 
                    <div className="userPet" key={i}>
                        <Link to={`/pets/${pet.id}`}><img className="pet-profile-pic" src={pet.photo} /></Link>
                        <ul className="pet-ele-list" >Name: {pet.name}</ul>
                        <ul className="pet-ele-list" >Type: {pet.category}</ul>
                        <ul className="pet-ele-list" >Color: {pet.color}</ul>
                        <ul className="pet-ele-list" >Size: {pet.size}</ul>
                        <div className="owner-row">
                            <ul className="pet-ele-list" >Owner: </ul>
                            <Link className="pet-ele-list" to={`/users/${pet.owner_id}`}>{users[pet.owner_id].username}</Link>
                        </div>
                    </div>
                )
            }
        </div>
    ) : (


        <h1 className="no-results">{`No results found for "${state.query}". Try searching for a Pet's name, color, or size!`}</h1>

    )

}

export default withRouter(Search);