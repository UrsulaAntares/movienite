class SessionsController < ApplicationController

    def create 
        user = User.find_by(username: params["_json"])
        if user
            # cookies[:user_id] = user.id
            render json: {simple_user_data: user, movies: user.movies, movie_nights: user.nights}
        end 
    end 

    def destroy

    end 






end
