# Petsy

- [Petsy Live](https://petsy2.herokuapp.com/#/)


# About Site

Petsy is a social media/shop site for pets and their owners. You can "pet" other peoples pets virtually, put your pet up for adoption, review your own pets, and adopt other peoples pets to then have on your profile!

<img width="1306" alt="Screen Shot 2021-12-13 at 11 30 23 AM" src="https://user-images.githubusercontent.com/88504868/145850812-c7f94498-fa28-41ab-b76f-57883ee5a9f4.png">



# Core Technologies

- React-Redux for frontend
- Ruby on Rails for backend
- PostgreSQL 13 server
- AWS for images

# Features

# Create, read, update, delete your own pets!
<img width="1308" alt="Screen Shot 2021-12-13 at 11 43 02 AM" src="https://user-images.githubusercontent.com/88504868/145852966-4ecdb218-751b-47e5-b2db-2a3190c678e1.png">

# Create reviews for your own pets, PET all the pets!
- Review all your pets! Rate them from 1-5 stars!
- "Pet" other peoples pets. Keeps track of how many times you have pet the certain pet and how many pets overall!
<img width="1310" alt="Screen Shot 2021-12-13 at 11 46 53 AM" src="https://user-images.githubusercontent.com/88504868/145853618-3c01398c-6e60-4d07-b5da-cd1e9e4510a8.png">

# Add other peoples pets to your cart and adopt in bulk!
- Add & delete pets from your cart!
- Can not adopt pets that are not "adoptable"
<img width="1308" alt="Screen Shot 2021-12-13 at 11 52 54 AM" src="https://user-images.githubusercontent.com/88504868/145854478-315d00e1-6e9a-4178-a2eb-a3c61be8c5f2.png">


# Code Snippet

- The below code is for the cart.

```{  
                            usersCartItems.map((item , i) => {

                                pet = item.pet_id;

                                return (
                                    <div key={i} className='cart-item'>
                                        <div className="pet-profile-pic-cart" >
                                            <Link to={`/pets/${pets[item.pet_id].id}`} ><img src={pets[item.pet_id].photo} /></Link>
                                        </div>
                                        <div className="cart-both-sides">
                                            <div >
                                                <h1 className="pet-name-cart" >{pets[item.pet_id].name}, the { pets[item.pet_id].category === "Sheep" || pets[item.pet_id].category === "Fish" ? pets[item.pet_id].category : pets[item.pet_id].category.slice(0, -1)}</h1>
                                                <h1 className="pet-info-cart" >Pet Size: {pets[item.pet_id].size}</h1>
                                                <h1 className="pet-info-cart" >Pet Color: {pets[item.pet_id].color}</h1>
                                                <h1 className="pet-info-cart" >{pets[item.pet_id].adoptable === "true" || pets[item.pet_id].adoptable === true ? "Adoptable" : "Has owner, cannot Adopt now"}</h1>
                                                <h1 className="pet-remove-cart" onClick={() => deleteCartItem(item.id)}>Remove Pet from Basket</h1>
                                            </div>
                                            <div className="cart-right" >
                                                <div className="owner" >
                                                    <h1>{pets[item.pet_id].adoptable ? "Previous Owner: " : "Owner: "}</h1><Link  className="cart-link" to=                     {`/users/${pets[item.pet_id].owner_id}`}> {users[pets[item.pet_id].owner_id].username}</Link>
                                                </div>
                                                <select  className="quanity" >
                                                    <option  value="1">Only 1</option>
                                                </select>
                                                <div className="only">
                                                <h1>Only 1 in this world and they're in {Object.values(cart_items).filter((item, i) => { 
                                                    return (item.pet_id === pet)}).length} people's baskets</h1>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            )
                       }
```
# Future Features
- Users can upload their own pet photos
