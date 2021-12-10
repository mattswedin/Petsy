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
Cart.delete_all
Cart.destroy_all
CartItem.delete_all



# Demo User

julian = User.create!(
  username: 'Julian',
  email: 'demo@aol.com',
  password: 'password'
)

#Demo Cart

best_cart = Cart.create!(
  user_id: julian.id
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

suz = User.create!(
  username: "Suz",
  email: "suz@aol.com",
  password: 'password'
)

jon = User.create!(
  username: "Jon",
  email: "jon@aol.com",
  password: "password"
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
  owner_id: kirsten.id,
  adoptable: true
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

lewis = Pet.create!(
  name: "Lewis",
  color: "Orange",
  category: "Birds",
  size: "Small",
  owner_id: kirsten.id
)

jenkins = Pet.create!(
  name: "Jenkins",
  color: "Green",
  category: "Birds",
  size: "Small",
  owner_id: charlie.id
)

pablo = Pet.create!(
  name: "Pablo",
  color: "White",
  category: "Birds",
  size: "Medium-Small",
  owner_id: julian.id,
  adoptable: true
)

inspecter = Pet.create!(
  name: "Inspector",
  color: "Grey",
  category: "Birds",
  size: "Medium-Small",
  owner_id: julian.id
)

janie = Pet.create!(
  name: "Janie",
  color: "Green",
  category: "Birds",
  size: "Small",
  owner_id: charlie.id
)

big_fellow = Pet.create!(
  name: "Big Fellow",
  color: "Yellow",
  category: "Birds",
  size: "Medium-Small",
  owner_id: charlie.id
)

cloudly = Pet.create!(
  name: "Cloudly",
  color: "White",
  category: "Birds",
  size: "Medium-Small",
  owner_id: maxwell.id
)

peterson = Pet.create!(
  name: "Peterson",
  color: "Green",
  category: "Birds",
  size: "Medium-Small",
  owner_id: julian.id
)

quackster = Pet.create!(
  name: "Quackster",
  color: "Green",
  category: "Birds",
  size: "Medium-Small",
  owner_id: jackie.id
)

danielle = Pet.create!(
  name: "Danielle",
  color: "Black",
  category: "Llamas",
  size: "Extra Large",
  owner_id: jackie.id
)

dean = Pet.create!(
  name: "Dean",
  color: "Black",
  category: "Llamas",
  size: "Extra Large",
  owner_id: jackie.id
)

falcor = Pet.create!(
  name: "Falcor",
  color: "White",
  category: "Llamas",
  size: "Extra Large",
  owner_id: julian.id,
  adoptable: true
)

beth = Pet.create!(
  name: "Beth",
  color: "Brown",
  category: "Llamas",
  size: "Extra Large",
  owner_id: kirsten.id
)

sid = Pet.create!(
  name: "Sid",
  color: "White",
  category: "Llamas",
  size: "Extra Large",
  owner_id: maxwell.id
)

morgan = Pet.create!(
  name: "Morgan",
  color: "White",
  category: "Monkeys",
  size: "Medium-Small",
  owner_id: kirsten.id
)

christina = Pet.create!(
  name: "Christina",
  color: "Black",
  category: "Monkeys",
  size: "Medium-Small",
  owner_id: charlie.id
)

spike = Pet.create!(
  name: "Spike",
  color: "Yellow",
  category: "Monkeys",
  size: "Medium-Small",
  owner_id: camel.id
)

indigo = Pet.create!(
  name: "Indigo",
  color: "Brown",
  category: "Monkeys",
  size: "Medium-Small",
  owner_id: jackie.id
)

ginger = Pet.create!(
  name: "Ginger",
  color: "Orange",
  category: "Monkeys",
  size: "Medium-Small",
  owner_id: julian.id
)

darunia = Pet.create!(
  name: "Darunia",
  color: "Brown",
  category: "Guinea Pigs",
  size: "Small",
  owner_id: julian.id
)

trevor = Pet.create!(
  name: "Trevor",
  color: "Orange",
  category: "Guinea Pigs",
  size: "Small",
  owner_id: maxwell.id,
  adoptable: true
)

gwen = Pet.create!(
  name: "Gwen",
  color: "White",
  category: "Guinea Pigs",
  size: "Small",
  owner_id: julian.id
)

angie = Pet.create!(
  name: "Angie",
  color: "Black",
  category: "Guinea Pigs",
  size: "Small",
  owner_id: julian.id
)

spanky = Pet.create!(
  name: "Spanky",
  color: "Brown",
  category: "Guinea Pigs",
  size: "Small",
  owner_id: maxwell.id
)

whisp = Pet.create!(
  name: "Whisp",
  color: "Grey",
  category: "Guinea Pigs",
  size: "Small",
  owner_id: charlie.id
)

felix = Pet.create!(
  name: "Felix",
  color: "Orange",
  category: "Guinea Pigs",
  size: "Small",
  owner_id: jackie.id
)

chunky = Pet.create!(
  name: "Chunky",
  color: "Black",
  category: "Guinea Pigs",
  size: "Small",
  owner_id: kirsten.id
)

gray = Pet.create!(
  name: "Gray",
  color: "Grey",
  category: "Guinea Pigs",
  size: "Small",
  owner_id: charlie.id
)

boomer = Pet.create!(
  name: "Boomer",
  color: "Yellow",
  category: "Dogs",
  size: "Large",
  owner_id: suz.id
)

agatha = Pet.create!(
  name: "Agatha",
  color: "Brown",
  category: "Horses",
  size: "Large",
  owner_id: charlie.id,
  adoptable: true
)

william = Pet.create!(
  name: "William",
  color: "Black",
  category: "Horses",
  size: "Large",
  owner_id: kirsten.id
)

shadowfax = Pet.create!(
  name: "Shadowfax",
  color: "White",
  category: "Horses",
  size: "Large",
  owner_id: jackie.id
)

piggins = Pet.create!(
  name: "Piggins",
  color: "Pink",
  category: "Pigs",
  size: "Small",
  owner_id: maxwell.id
)

ferris = Pet.create!(
  name: "Ferris",
  color: "Black",
  category: "Pigs",
  size: "Large",
  owner_id: maxwell.id
)

bulldozer = Pet.create!(
  name: "Bulldozer",
  color: "Grey",
  category: "Pigs",
  size: "Large",
  owner_id: julian.id
)

banana = Pet.create!(
  name: "Banana",
  color: "Yellow",
  category: "Lizards",
  size: "Small",
  owner_id: alberto.id
)

herald = Pet.create!(
  name: "Herald",
  color: "Orange",
  category: "Cats",
  size: "Medium",
  owner_id: jon.id
  
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
snakes = Category.create!(title: 'Snakes')
rats = Category.create!(title: 'Rats')
rabbits = Category.create!(title: 'Rabbits')
fish = Category.create!(title: 'Fish')
birds = Category.create!(title: 'Birds')
monkeys = Category.create!(title: 'Monkeys')
llamas = Category.create!(title: 'Llamas')
pigs = Category.create!(title: 'Pigs')
guinea_pigs = Category.create!(title: 'Guinea Pigs')
horses = Category.create!(title: 'Horses')



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

lewis_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/lewis.jpeg')
lewis.photo.attach(io: lewis_photo, filename:'lewis.jpeg')

quackster_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/quackster.jpeg')
quackster.photo.attach(io: quackster_photo, filename:'quackster.jpeg')

peterson_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/peterson.jpeg')
peterson.photo.attach(io: peterson_photo, filename:'peterson.jpeg')

cloudly_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/cloudly.jpeg')
cloudly.photo.attach(io: cloudly_photo, filename:'cloudly.jpeg')

big_fellow_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/big_fellow.jpeg')
big_fellow.photo.attach(io: big_fellow_photo, filename:'big_fellow.jpeg')

janie_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/janie.jpeg')
janie.photo.attach(io: janie_photo, filename:'janie.jpeg')

inspecter_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/inspecter.jpeg')
inspecter.photo.attach(io: inspecter_photo, filename:'inspecter.jpeg')

pablo_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/pablo.jpeg')
pablo.photo.attach(io: pablo_photo, filename:'pablo.jpeg')

jenkins_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/jenkins.jpeg')
jenkins.photo.attach(io: jenkins_photo, filename:'jenkins.jpeg')

danielle_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/danielle.jpeg')
danielle.photo.attach(io: danielle_photo, filename:'danielle.jpeg')

dean_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/dean.jpeg')
dean.photo.attach(io: dean_photo, filename:'dean.jpeg')

falcor_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/falcor.jpeg')
falcor.photo.attach(io: falcor_photo, filename:'falcor.jpeg')

beth_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/beth.jpeg')
beth.photo.attach(io: beth_photo, filename:'beth.jpeg')

sid_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/sid.jpeg')
sid.photo.attach(io: sid_photo, filename:'sid.jpeg')

morgan_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/morgan.jpeg')
morgan.photo.attach(io: morgan_photo, filename:'morgan.jpeg')

christina_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/christina.jpeg')
christina.photo.attach(io: christina_photo, filename:'christina.jpeg')

spike_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/spike.jpeg')
spike.photo.attach(io: spike_photo, filename:'spike.jpeg')

indigo_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/indigo.jpeg')
indigo.photo.attach(io: indigo_photo, filename:'indigo.jpeg')

ginger_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/ginger.jpeg')
ginger.photo.attach(io: ginger_photo, filename:'ginger.jpeg')

darunia_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/darunia.jpeg')
darunia.photo.attach(io: darunia_photo, filename:'darunia.jpeg')

trevor_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/trevor.jpeg')
trevor.photo.attach(io: trevor_photo, filename:'trevor.jpeg')

gwen_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/gwen.jpeg')
gwen.photo.attach(io: gwen_photo, filename:'gwen.jpeg')

angie_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/angie.jpeg')
angie.photo.attach(io: angie_photo, filename:'angie.jpeg')

spanky_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/spanky.jpeg')
spanky.photo.attach(io: spanky_photo, filename:'spanky.jpeg')

whisp_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/whisp.jpeg')
whisp.photo.attach(io: whisp_photo, filename:'whisp.jpeg')

felix_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/felix.jpeg')
felix.photo.attach(io: felix_photo, filename:'felix.jpeg')

chunky_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/chunky.jpeg')
chunky.photo.attach(io: chunky_photo, filename:'chunky.jpeg')

gray_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/gray.jpeg')
gray.photo.attach(io: gray_photo, filename:'gray.jpeg')

banana_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/banana.jpeg')
banana.photo.attach(io: banana_photo, filename:'banana.jpeg')

herald_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/herald.jpeg')
herald.photo.attach(io: herald_photo, filename:'herald.jpeg')

agatha_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/agatha.jpeg')
agatha.photo.attach(io: agatha_photo, filename:'agatha.jpeg')

shadowfax_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/shadowfax.jpeg')
shadowfax.photo.attach(io: shadowfax_photo, filename:'shadowfax.jpeg')

william_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/william.jpeg')
william.photo.attach(io: william_photo, filename:'william.jpeg')

piggins_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/piggins.jpeg')
piggins.photo.attach(io: piggins_photo, filename:'piggins.jpeg')

bulldozer_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/bulldozer.jpeg')
bulldozer.photo.attach(io: bulldozer_photo, filename:'bulldozer.jpeg')

ferris_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/ferris.jpg')
ferris.photo.attach(io: ferris_photo, filename:'ferris.jpg')

boomer_photo = open('https://petsy-seeds.s3.amazonaws.com/petsy-pets/boomer.jpeg')
boomer.photo.attach(io: boomer_photo, filename:'boomer.jpeg')


puts "I HAVE SEEDED"