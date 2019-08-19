class UsersController < ApplicationController

    def index 
        users = User.all 
        render json: users 
    end 

    def create 

    end 

    def show 
        user = User.find(params[:id].to_i)
        render json: user.to_json(:include => {:movies => {:only => [:genre, :id, :image_url, :interests, :length, :title]}
        } :except => [:updated_at, :created_at])
        # byebug
    end 

    def update 

    end 

    def destroy 

    end 



end
