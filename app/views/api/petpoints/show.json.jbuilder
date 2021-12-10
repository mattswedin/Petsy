json.extract! @petpoint, :id, :pet_id, :petter_id
json.partial! "api/petpoints/petpoint", petpoint: @petpoint