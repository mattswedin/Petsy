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
Review.delete_all




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

subin = User.create!(
  username: 'Subin',
  email: 'subin@aol.com',
  password: 'password'
)

alberto = User.create!(
  username: 'Alberto',
  email: 'alberto@aol.com',
  password: 'password'
)

maddie = User.create!(
  username: 'Maddie',
  email: 'maddie@aol.com',
  password: 'password'
)

rebecca = User.create!(
  username: 'Rebecca',
  email: 'rebecca@aol.com',
  password: 'password'
)

taylor = User.create!(
  username: 'Taylor',
  email: 'taylor@aol.com',
  password: 'password'
)

mansoo = User.create!(
  username: 'Mansoo',
  email: 'mansoo@aol.com',
  password: 'password'
)

maria = User.create!(
  username: 'Maria',
  email: 'maria@aol.com',
  password: 'password'
)




# Pets

kim = Pet.create!(
  name: "Kim",
  color: "White & Gold",
  category: "Cats",
  size: "Small",
  owner_id: kitty.id
)

leoo = Pet.create!(
  name: "Leo",
  color: "Brown",
  category: "Dogs",
  size: "Large",
  owner_id: taylor.id
)

skywalker = Pet.create!(
  name: "Skywalker",
  color: "Brown",
  category: "Cats",
  size: "Small",
  owner_id: maria.id
)

minnie = Pet.create!(
  name: "Minnie",
  color: "Brown",
  category: "Cats",
  size: "Small",
  owner_id: mansoo.id
)


billy = Pet.create!(
  name: "Billy",
  color: "Black",
  category: "Goats",
  size: "Medium",
  owner_id: julian.id

)

cassie = Pet.create!(
  name: "Cassie",
  color: "Brown",
  category: "Cows",
  size: "Large",
  owner_id: julian.id

)

mickey = Pet.create!(
  name: "Mickey",
  color: "White",
  category: "Dogs",
  size: "Small",
  owner_id: subin.id

) 

leo = Pet.create!(
  name: "Leo",
  color: "Brown",
  category: "Dogs",
  size: "Large",
  owner_id: alberto.id

) 

grandma = Pet.create!(
  name: "Grandma",
  color: "White",
  category: "Sheep",
  size: "Medium",
  owner_id: charlie.id
)

igor = Pet.create!(
  name: "Igor",
  color: "Brown",
  category: "Cats",
  size: "Small",
  owner_id: maddie.id
)


jacques = Pet.create!(
  name: "Jacques",
  color: "Pink",
  category: "Cats",
  size: "Medium",
  owner_id: kitty.id
)

eloise = Pet.create!(
  name: "Eloise",
  color: "Black",
  category: "Cats",
  size: "Small",
  owner_id: kitty.id
)

noelle = Pet.create!(
  name: "Noella",
  color: "Orange",
  category: "Dogs",
  size: "Medium",
  owner_id: rebecca.id
)

orylie = Pet.create!(
  name: "O’Rylie",
  color: "Black",
  category: "Dogs",
  size: "Medium",
  owner_id: rebecca.id
)

kiwi = Pet.create!(
  name: "Kiwi",
  color: "Brown",
  category: "Dogs",
  size: "Small",
  owner_id: rebecca.id
)

limburger = Pet.create!(
  name: "Limburger",
  color: "Black",
  category: "Turtles",
  size: "Small",
  owner_id: kirsten.id
)



juno = Pet.create!(
  name: "Juno",
  color: "Brown",
  category: "Dogs",
  size: "Medium",
  owner_id: maddie.id
)

queen = Pet.create!(
  name: "Queen",
  color: "Green",
  category: "Snakes",
  size: "small",
  owner_id: kirsten.id
)
dabi = Pet.create!(
  name: "Dabi",
  color: "White",
  category: "Dogs",
  size: "large",
  owner_id: stella.id
)

phillip = Pet.create!(
  name: "Phillip",
  color: "Grey",
  category: "Rats",
  size: "small",
  owner_id: jackie.id
)

big_blue = Pet.create!(
  name: "Big Blue",
  color: "Blue",
  category: "Snakes",
  size: "Medium",
  owner_id: jackie.id
)

carl = Pet.create!(
  name: "Carl",
  color: "Brown",
  category: "Turtles",
  size: "Small",
  owner_id: jackie.id
)

lucy = Pet.create!(
  name: "Lucy",
  color: "White",
  category: "Dogs",
  size: "Small",
  owner_id: maddie.id
)

diamond = Pet.create!(
  name: "Diamond",
  color: "White",
  category: "Dogs",
  size: "Small",
  owner_id: maddie.id
)

child = Pet.create!(
  name: "Thumper",
  color: "Brown",
  category: "Rabbits",
  size: "Small",
  owner_id: jackie.id
)

goldy = Pet.create!(
  name: "Goldie",
  color: "Orange",
  category: "Fish",
  size: "Tiny",
  owner_id: camel.id
)

 grace = Pet.create!(
  name: "Grace",
  color: "Blue",
  category: "Fish",
  size: "Tiny",
  owner_id: charlie.id
)

 gregory = Pet.create!(
  name: "Mr. Fantastic",
  color: "Green",
  category: "Lizards",
  size: "Medium",
  owner_id: maxwell.id
)

 gretchen = Pet.create!(
  name: "Gretchen",
  color: "White",
  category: "Cows",
  size: "Medium",
  owner_id: camel.id
)

jeffery = Pet.create!(
  name: "Jeff",
  color: "Orange",
  category: "Lizards",
  size: "Small",
  owner_id: maxwell.id
)

kent = Pet.create!(
  name: "Kent",
  color: "Brown",
  category: "Rabbits",
  size: "Medium",
  owner_id: maxwell.id
)

lester = Pet.create!(
  name: "Lester",
  color: "Black",
  category: "Turtles",
  size: "Small",
  owner_id: camel.id
)

nephew = Pet.create!(
  name: "Nephew",
  color: "Speckly",
  category: "Lizards",
  size: "Small",
  owner_id: charlie.id
)

sheepster = Pet.create!(
  name: "Sheepster",
  color: "Black",
  category: "Sheep",
  size: "Large",
  owner_id: julian.id
)

marco = Pet.create!(
  name: "Marco",
  color: "Brown",
  category: "Lizards",
  size: "Large",
  owner_id: julian.id
)

snake = Pet.create!(
  name: "Snake",
  color: "Yellow",
  category: "Snakes",
  size: "Small",
  owner_id: jackie.id
)

squire = Pet.create!(
  name: "Squire",
  color: "Brown",
  category: "Rabbits",
  size: "Small",
  owner_id: kirsten.id
)

woolie = Pet.create!(
  name: "Woolie",
  color: "White",
  category: "Sheep",
  size: "Large",
  owner_id: kirsten.id
)

maxine = Pet.create!(
  name: "Maxine",
  color: "Black",
  category: "Sheep",
  size: "Large",
  owner_id: camel.id
)

# Reviews

review_one = Review.create!(
  body: "Omg i absolutely LOVE Marco he is literally my best friend!",
  ranking: 5,
  author_id: julian.id,
  pet_id: marco.id
)






# Categories

dogs = Category.create!(title: 'Dogs')
sheep = Category.create!(title: 'Sheep')
cows = Category.create!(title: 'Cows')
cats = Category.create!(title: 'Cats')
lizards = Category.create!(title: 'Lizards')
turtles = Category.create!(title: 'Turtles')


# Categories - Aws

dogs_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-categories/dogs.jpeg')
dogs.photo.attach(io: dogs_photo, filename:'dogs.jpeg')

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

igor_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/igor.jpeg')
igor.photo.attach(io: igor_photo, filename:'igor.jpeg')

leo_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/leo.jpeg')
leo.photo.attach(io: leo_photo, filename:'leo.jpeg')

mickey_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/mickey.jpeg')
mickey.photo.attach(io: mickey_photo, filename:'mickey.jpeg')

lucy_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/lucy.jpeg')
lucy.photo.attach(io: lucy_photo, filename:'lucy.jpeg')

juno_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/juno.jpeg')
juno.photo.attach(io: juno_photo, filename:'juno.jpeg')

diamond_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/diamond.jpeg')
diamond.photo.attach(io: diamond_photo, filename:'diamond.jpeg')

minnie_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/minnie.jpeg')
minnie.photo.attach(io: minnie_photo, filename:'minnie.jpeg')

skywalker_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/skywalker.jpeg')
skywalker.photo.attach(io: skywalker_photo, filename:'skywalker.jpeg')

leoo_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/leoo.jpeg')
leoo.photo.attach(io: leoo_photo, filename:'leoo.jpeg')

noelle_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/noelle.jpeg')
noelle.photo.attach(io: noelle_photo, filename:'noelle.jpeg')

orylie_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/orylie.jpeg')
orylie.photo.attach(io: orylie_photo, filename:'orylie.jpeg')

kiwi_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/kiwi.jpeg')
kiwi.photo.attach(io: kiwi_photo, filename:'kiwi.jpeg')

puts "I HAVE SEEDED"