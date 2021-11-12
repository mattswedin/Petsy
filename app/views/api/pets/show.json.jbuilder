json.extract! @pet, :name, :color, :category, :size, :id, :owner_id
json.partial! "api/pets/pet", pet: @pet