# class UserSerializer

#     def initialize(user_object)
#         @user =  user_object
#     end


#     def to_serialized_json
#         @user.to_json(:include => {
#         :interests => {:only => [:user_id, :heart, :star, :movie_id]},
#         :movies, :nights}, :except => [:created_at, :updated_at]
#         )  
#     end

# end