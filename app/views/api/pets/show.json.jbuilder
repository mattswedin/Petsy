json.extract! @pet, :name, :color, :kind, :size, :id, :owner_id
json.partial! "api/pets/pet", pet: @pet