json.extract! pet, :name, :color, :category, :size, :id, :owner_id

if pet.photo.attached? 
    json.photo url_for(pet.photo)
end