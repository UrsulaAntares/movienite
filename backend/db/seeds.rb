# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



movies = Movie.create([ {title: "Mars Attacks!"}, {title: "Hudsucker Proxy"}]  )
users = User.create([{name: "Ursula", username: "Urs"}, {name: "Kolton", username: "KStarr"},{name: "Frank", username: "frank"},{name: "Angela", username: "Angie"}])
nights = Night.create([{name:"We have a projector"}, {name: "We have a couch"}, {name: "Matt's movie night"}])

10.times  {Interest.create(heart: rand(0..5), star: rand(0..5), user_id: User.all.sample.id, movie: Movie.all.sample ) }

10.times  {Join.create([user: User.all.sample, night: Night.all.sample])}


