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

kirsten = User.create!(
  username: 'Kirsten',
  email: 'kirsten@aol.com',
  password: 'password'
)

jackie = User.create!(
  username: 'Jackie',
  email: 'jackie@aol.com',
  password: 'password'
)

camel = User.create!(
  username: 'Camel',
  email: 'camel@aol.com',
  password: 'password'
)

maxwell = User.create!(
  username: 'Maxwell',
  email: 'maxwell@aol.com',
  password: 'password'
)

stella = User.create!(
  username: 'Stella',
  email: 'stella@aol.com',
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

limburger = Pet.create!(
  name: "Limburger",
  color: "Black",
  kind: "Turtle",
  size: "Small",
  owner_id: kirsten.id
)

queen = Pet.create!(
  name: "Queen",
  color: "Green",
  kind: "Snake",
  size: "small",
  owner_id: kirsten.id
)

phillip = Pet.create!(
  name: "Phillip",
  color: "Grey",
  kind: "Rat",
  size: "small",
  owner_id: jackie.id
)

dabi = Pet.create!(
  name: "Dabi",
  color: "White",
  kind: "Dog",
  size: "large",
  owner_id: stella.id
)

big_blue = Pet.create!(
  name: "Big Blue",
  color: "Blue",
  kind: "Snake",
  size: "Medium",
  owner_id: jackie.id
)

carl = Pet.create!(
  name: "Carl",
  color: "Brown",
  kind: "Turtle",
  size: "Small",
  owner_id: jackie.id
)

child = Pet.create!(
  name: "Thumper",
  color: "Brown",
  kind: "Rabbit",
  size: "Small",
  owner_id: jackie.id
)

goldy = Pet.create!(
  name: "Goldie",
  color: "Orange",
  kind: "Fish",
  size: "Tiny",
  owner_id: camel.id
)

 grace = Pet.create!(
  name: "Grace",
  color: "Blue",
  kind: "Fish",
  size: "Tiny",
  owner_id: charlie.id
)

 gregory = Pet.create!(
  name: "Mr. Fantastic",
  color: "Green",
  kind: "Lizard",
  size: "Medium",
  owner_id: maxwell.id
)

 gretchen = Pet.create!(
  name: "Gretchen",
  color: "White",
  kind: "Cow",
  size: "Medium",
  owner_id: camel.id
)

jeffery = Pet.create!(
  name: "Jeff",
  color: "Orange",
  kind: "Lizard",
  size: "Small",
  owner_id: maxwell.id
)

kent = Pet.create!(
  name: "Kent",
  color: "Brown",
  kind: "Rabbit",
  size: "Medium",
  owner_id: maxwell.id
)

lester = Pet.create!(
  name: "Lester",
  color: "Black",
  kind: "Turtle",
  size: "Small",
  owner_id: camel.id
)

nephew = Pet.create!(
  name: "Nephew",
  color: "Speckly",
  kind: "Lizard",
  size: "Small",
  owner_id: charlie.id
)

sheepster = Pet.create!(
  name: "Sheepster",
  color: "Black",
  kind: "Sheep",
  size: "Large",
  owner_id: julian.id
)

marco = Pet.create!(
  name: "Marco",
  color: "Brown",
  kind: "Lizard",
  size: "Large",
  owner_id: julian.id
)

snake = Pet.create!(
  name: "Snake",
  color: "Yellow",
  kind: "Snake",
  size: "Small",
  owner_id: jackie.id
)

squire = Pet.create!(
  name: "Squire",
  color: "Brown",
  kind: "Rabbit",
  size: "Small",
  owner_id: kirsten.id
)

woolie = Pet.create!(
  name: "Woolie",
  color: "White",
  kind: "Sheep",
  size: "Large",
  owner_id: kirsten.id
)

maxine = Pet.create!(
  name: "Maxine",
  color: "Black",
  kind: "Sheep",
  size: "Large",
  owner_id: camel.id
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

big_blue_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/Big+Blue.jpg')
big_blue.photo.attach(io: big_blue_photo, filename:'Big+Blue.jpg')

carl_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/Carl.jpg')
carl.photo.attach(io: carl_photo, filename:'Carl.jpg')

child_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/Child.jpeg')
child.photo.attach(io: child_photo, filename:'Child.jpeg')

dabi_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/dabi.jpg')
dabi.photo.attach(io: dabi_photo, filename:'dabi.jpg')

goldy_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/Goldy.jpeg')
goldy.photo.attach(io: goldy_photo, filename:'Goldy.jpeg')

grace_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/Grace.jpeg')
grace.photo.attach(io: grace_photo, filename:'Grace.jpeg')

gregory_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/Gregory.jpeg')
gregory.photo.attach(io: gregory_photo, filename:'Gregory.jpeg')

gretchen_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/gretchen.jpeg')
gretchen.photo.attach(io: gretchen_photo, filename:'gretchen.jpeg')

jeffery_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/Jeffery.jpeg')
jeffery.photo.attach(io: jeffery_photo, filename:'Jeffery.jpeg')

kent_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/Kent.jpeg')
kent.photo.attach(io: kent_photo, filename:'Kent.jpeg')

lester_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/lester.jpeg')
lester.photo.attach(io: lester_photo, filename:'lester.jpeg')

limburger_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/limburger.jpeg')
limburger.photo.attach(io: limburger_photo, filename:'limburger.jpeg')

maxine_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/maxine.jpeg')
maxine.photo.attach(io: maxine_photo, filename:'maxine.jpeg')

nephew_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/Nephew.jpeg')
nephew.photo.attach(io: nephew_photo, filename:'Nephew.jpeg')

phillip_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/phillip.jpeg')
phillip.photo.attach(io: phillip_photo, filename:'phillip.jpeg')

queen_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/queen.jpeg')
queen.photo.attach(io: queen_photo, filename:'queen.jpeg')

sheepster_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/Sheepster.jpeg')
sheepster.photo.attach(io: sheepster_photo, filename:'Sheepster.jpeg')

marco_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/Shnouser.jpeg')
marco.photo.attach(io: marco_photo, filename:'Shnouser.jpeg')

snake_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/Snake.jpeg')
snake.photo.attach(io: snake_photo, filename:'Snake.jpeg')

squire_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/Squire.jpeg')
squire.photo.attach(io: squire_photo, filename:'Squire.jpeg')

woolie_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/Woolie.jpeg')
woolie.photo.attach(io: woolie_photo, filename:'Woolie.jpeg')


puts "I HAVE SEEDED"