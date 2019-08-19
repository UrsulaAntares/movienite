# require 'rest-client'
# require 'json'
# require 'pry'

API_BASE_URL="https://api.themoviedb.org/3/trending/all/day?api_key=d58a8cfa0b1932711fc5fc8dda7ee621"

# def get_movies
#     response = RestClient.get(API_BASE_URL)
#     json = JSON.parse(response.body)
#     json.map do |movie|
#         {
#             byebug
#         } 
# end

Movie.destroy_all
Interest.destroy_all
Night.destroy_all
100.times do 
    Movie.create(genre: Faker::Book.genre, length: Faker::Number.between(from: 1, to: 200), title: Faker::Movie.quote, image_url: "https://images-na.ssl-images-amazon.com/images/I/71MQQvOk73L._SY879_.jpg")
end 
# genre, length , title, imageurl

# movies = Movie.create([ {title: "Mars Attacks!"}, {title: "Hudsucker Proxy"}]  )
# users = User.create([{name: "Ursula", username: "Urs"}, {name: "Kolton", username: "KStarr"},{name: "Frank", username: "frank"},{name: "Angela", username: "Angie"}])
# nights = Night.create([{name:"We have a projector"}, {name: "We have a couch"}, {name: "Matt's movie night"}])

40.times  {Interest.create(heart: rand(0..100), star: rand(0..100), user_id: User.all.sample.id, movie_id: Movie.all.sample.id ) }

# 10.times  {Join.create([user: User.all.sample, night: Night.all.sample])}

# 10.times  {Join.create([user: User.all.sample, night: Night.all.sample])}

# moremovies = Movie.create([ {title: "Birdman"}, {title: "It's a Wonderful Life"}, {title: "Best in Show"}]  )
