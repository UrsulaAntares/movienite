class UsersController < ApplicationController

    def index 
        users = User.all 
        render json: users.to_json(:include => {:movies => {:only => [:genre, :id, :image_url, :interests, :length, :title]}
            }, :except => [:updated_at, :created_at])
    end 

    def create 
        
    end 

    def show 
        user = User.find(params[:id].to_i)
        render json: user.to_json(:include => 
        
        

        {:nights => {:only => [:name, :id],
            :include => {:users => {:only => [:id, :username],
            :include => {:interests => {:except => [:updated_at, :created_at]}}}}
            },
         :movies => {:only => [:genre, :id, :image_url, :length, :title],
         :include => {
            :interests => {:only => [:user_id, :heart, :star, :movie_id]},
            }, 
    }},
    :except => [:updated_at, :created_at] )
    end 

    def update 

    end 

    def destroy 

    end 



end
