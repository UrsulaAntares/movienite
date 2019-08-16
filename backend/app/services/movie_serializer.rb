class MovieSerializer

    def initialize(movie_object)
        @movie =  movie_object
    end


    def to_serialized_json
        @movie.to_json(:include => {
        :interests => {:only => [:user_id, :heart, :star]},
        }, :except => [:created_at, :updated_at]
        )  
    end

end