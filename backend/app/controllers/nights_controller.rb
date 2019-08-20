class NightsController < ApplicationController


    def create 
        friend = User.find_by(username: params[:friend])
        creator_id = params[:user][:simple_user_data][:id]
        new_night = Night.create(name: params[:night])

        Join.create(user_id: friend.id, movie_id: new_night.id)
        Join.create(user_id: creator_id, movie_id: new_night.id) 

        
    end 




end
