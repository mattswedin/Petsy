json.extract! @pet, :name, :color, :type, :size, :id, :owner_id
json.partial! "api/pets/pet", pet: @pet