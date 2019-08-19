class InterestsController < ApplicationController

    def index
        interests = Interest.all 
        render json: interests
    end


    def create
        # byebug
        # interest = Interest.create(interest_params)
        interest = Interest.find_or_create_by(user_id: interest_params[:user_id], movie_id: interest_params[:movie_id])
        interest.heart = interest_params[:heart]
        interest.star = interest_params[:star]
        interest.save
        render json: interest 
    end

    # def edit
    #     # byebug
    #     # interest = Interest.create(interest_params)
    #     interest = Interest.find_or_create_by(user_id: interest_params[:user_id], movie_id: interest_params[:movie_id])
    #     interest.heart = params[:heart]
    #     interest.star = params[:star]
    #     # interest.save
    #     render json: interest 
    # end

    private

    def interest_params
        params.require(:interest).permit(:movie_id, :user_id, :heart, :star) 
    end


end
