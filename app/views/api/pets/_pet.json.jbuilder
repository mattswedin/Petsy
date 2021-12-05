json.extract! pet, :name, :color, :category, :size, :id, :owner_id, :adoptable, :petpoints


if pet.photo.attached? 
    json.photo url_for(pet.photo)
end