class NightsController < ApplicationController

    def show
        night = Night.find(params[:id].to_i)
        render json: night.to_json(
            :include => {:users => {:only => [:username, :id]}},
            :except => [:created_at, :updated_at]
            )


    end
end
