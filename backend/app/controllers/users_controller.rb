class UsersController < ApplicationController

    def index 
        byebug
        users = User.all 
        render json: users 
    end 

    def create 

    end 

    def show 
        user = User.find(params[:id])
        render json: user
    end 

    def update 

    end 

    def destroy 

    end 



end
