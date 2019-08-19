class MovieSerializer

    def initialize(movie_object)
        @movie =  movie_object
    end


    def to_serialized_json
        @movie.to_json(:include => {
        :interests => {:only => [:user_id, :heart, :star, :movie_id]},
        }, :except => [:created_at, :updated_at]
        )  
    end

end