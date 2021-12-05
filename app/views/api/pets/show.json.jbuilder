json.extract! @pet, :name, :color, :category, :size, :id, :owner_id, :petpoints
json.partial! "api/pets/pet", pet: @pet