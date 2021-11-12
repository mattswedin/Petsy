# README

# About Site

Petsy is a social media/shop site for pets and their owners. You can "pet" other peoples pets virtually, put your pet up for adoption, and adopt other peoples pets to then have on your profile!

- Live Site(https://petsy2.herokuapp.com/#/)

# Technologies Used

- React-Redux for frontend
- Ruby on Rails for backend

# Features

- Can create, read, update, delete your own pets
- Can filter through an index of all pets. Can click on pet to see the owner's show page including all the pets they own.

# Code Snippet

```render() {

        

        let filteredCat;

        if (this.props.category === 'All') {
            filteredCat = Object.values(this.props.pets)
        } else {
            filteredCat = Object.values(this.props.pets).filter(pet =>
                this.props.category === pet.category
            )
        }

        return (
            <div className="userPetindex-Pos">
                    {
                    
                    filteredCat.map(pet =>
                    <div className="userPet" key={pet.id}>
                        <img className="pet-profile-pic" src={pet.photo} />
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
