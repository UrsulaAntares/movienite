class MoviesController < ApplicationController

    def index
        movies = Movie.all 
        render json: MovieSerializer.new(movies).to_serialized_json
    end

    def show
        movie = Movie.find_by(id: params[:id])
        render json: MovieSerializer.new(movie).to_serialized_json 
    end

    def filter
        user = User.find(params[:user][:simple_user_data][:id].to_i)
        filtered_movies = Movie.filter_movies(user)
        render json: filtered_movies
    end


end
