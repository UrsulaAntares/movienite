class SessionsController < ApplicationController

    def create 
        user = User.find_by(username: params["_json"])
        if user
            # cookies[:user_id] = user.id
            render json: user
        end 
    end 

    def destroy

    end 






end
