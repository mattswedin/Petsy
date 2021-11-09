# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Category.delete_all
Pet.delete_all

# Demo User

julian = User.create!(
  username: 'Julian',
  email: 'demo@aol.com',
  password: 'password'
)

# Users

charlie = User.create!(
  username: 'Charlie',
  email: 'charlie@aol.com',
  password: 'password'
)

kitty = User.create!(
  username: 'Kitty',
  email: 'kitty@aol.com',
  password: 'password'
)

# Pets

billy = Pet.create!(
  name: "Billy",
  color: "Black",
  kind: "Goat",
  size: "Medium",
  owner_id: julian.id

)

cassie = Pet.create!(
  name: "Cassie",
  color: "Brown",
  kind: "Cow",
  size: "Large",
  owner_id: julian.id

)

grandma = Pet.create!(
  name: "Grandma",
  color: "White",
  kind: "Sheep",
  size: "Medium",
  owner_id: charlie.id
)

kim = Pet.create!(
  name: "Kim",
  color: "White & Gold",
  kind: "Cat",
  size: "Small",
  owner_id: kitty.id
)

jacques = Pet.create!(
  name: "Jacques",
  color: "Pink",
  kind: "Cat",
  size: "Medium",
  owner_id: kitty.id
)

eloise = Pet.create!(
  name: "Eloise",
  color: "Black",
  kind: "Cat",
  size: "Small",
  owner_id: kitty.id
)


# Categories

goats = Category.create!(title: 'Goats')
sheep = Category.create!(title: 'Sheep')
cows = Category.create!(title: 'Cows')
cats = Category.create!(title: 'Cats')
lizards = Category.create!(title: 'Lizards')
turtles = Category.create!(title: 'Turtles')
# snakes = Category.create!(title: 'Snakes')
# dogs = Category.create!(title: 'Dogs')
# fish = Category.create!(title: 'Fish')
# birds = Category.create!(title: 'Birds')
# rabbits = Category.create!(title: 'Rabbits')
# rats = Category.create!(title: 'Rats')

# Categories - Aws

goats_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-categories/goat.jpeg')
goats.photo.attach(io: goats_photo, filename:'goat.jpeg')

sheep_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-categories/Bitsy-sheep.jpeg')
sheep.photo.attach(io: sheep_photo, filename: 'Bitsy-sheep.jpeg')

cows_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-categories/cow.jpeg')
cows.photo.attach(io: cows_photo, filename: 'cow.jpeg')

cats_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-categories/kim.jpg')
cats.photo.attach(io: cats_photo, filename: 'kim.jpg')

lizards_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-categories/lizards.jpeg')
lizards.photo.attach(io: lizards_photo, filename: 'lizards.jpeg')

turtles_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-categories/turtle.jpeg')
turtles.photo.attach(io: turtles_photo, filename: 'turtle.jpeg')

# Pets - Aws

billy_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/julian-goat.jpeg')
billy.photo.attach(io: billy_photo, filename:'julian-goat.jpeg')

cassie_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/julian-cow.jpeg')
cassie.photo.attach(io: cassie_photo, filename:'julian-cow.jpeg')

grandma_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/charlie-sheep.jpeg')
grandma.photo.attach(io: grandma_photo, filename:'charlie-sheep.jpeg')

kim_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/kim-pet.jpg')
kim.photo.attach(io: kim_photo, filename:'charlie-sheep.jpeg')

jacques_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/jacques.jpeg')
jacques.photo.attach(io: jacques_photo, filename:'jacques.jpeg')

eloise_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/eloise.jpeg')
eloise.photo.attach(io: eloise_photo, filename:'eloise.jpeg')




puts "I HAVE SEEDED"