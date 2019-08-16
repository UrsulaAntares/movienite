class InterestsController < ApplicationController

    def index
        interests = Interest.all 
        render json: interests
    end


    def create
        interest = Interest.create(interest_params)
        render json: interest 
    end

    private

    def interest_params
        params.require(:interest).permit(:movie_id, :user_id, :heart, :star) 
    end


end
