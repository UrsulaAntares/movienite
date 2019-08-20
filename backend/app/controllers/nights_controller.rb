class NightsController < ApplicationController

    def show
        night = Night.find(params[:id].to_i)
        render json: night.to_json(
            :include => {:users => {:only => [:username, :id]}},
            :except => [:created_at, :updated_at]
            )
    end

    def create 
        creator_id = params[:user][:simple_user_data][:id]
        new_night = Night.create(name: params[:night])
        new_join = Join.create(user_id: creator_id, night_id: new_night.id) 

        render json: {night: new_night, join: new_join}
    end 

    def add
        new_user = User.find_by(username: params[:newFriend])
        existing_night = Night.find(params[:data][:night][:id].to_i)
        new_join = Join.create(user_id: new_user.id, night_id: existing_night.id)
        
        render json: {added_user: new_join.user}
    end 


end
