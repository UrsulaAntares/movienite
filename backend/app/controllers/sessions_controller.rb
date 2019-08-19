class SessionsController < ApplicationController

    def create 
        user = User.find_by(username: params["_json"])
        if user
            render json: {simple_user_data: user, movies: user.movies, movie_nights: user.nights}
            # render json: user.to_json(:include => {
            #     :movies => {:only => [:id, :genre. :length, :image_url, :interests, :title]}
            # })




            # render json: sighting.to_json(:include => {
            #     :bird => {:only => [:name, :species]}, :location => {:only => [:latitude, :longitude]} }, :except => [:updated_at])
            
        end 
    end 

    def destroy

    end 






end
