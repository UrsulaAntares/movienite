class Movie < ApplicationRecord
    has_many :interests
    has_many :users, through: :interests



    def self.show_movies(user_obj)
        Movie.all.select do |movie_obj|
            !user_obj.movies.include? movie_obj
        end 

    end 





end
