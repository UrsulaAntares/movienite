require 'rest-client'
require 'json'
require 'pry'

API_BASE_URL="https://api.themoviedb.org/3/trending/all/day?api_key=d58a8cfa0b1932711fc5fc8dda7ee621"

def get_movies()
    response = RestClient.get(API_BASE_URL)
    json = JSON.parse(response.body)
    json.map do |movie|
        {
            
        } 
end




movies = Movie.create([ {title: "Mars Attacks!"}, {title: "Hudsucker Proxy"}]  )
users = User.create([{name: "Ursula", username: "Urs"}, {name: "Kolton", username: "KStarr"},{name: "Frank", username: "frank"},{name: "Angela", username: "Angie"}])
nights = Night.create([{name:"We have a projector"}, {name: "We have a couch"}, {name: "Matt's movie night"}])

10.times  {Interest.create(heart: rand(0..5), star: rand(0..5), user_id: User.all.sample.id, movie: Movie.all.sample ) }

10.times  {Join.create([user: User.all.sample, night: Night.all.sample])}


