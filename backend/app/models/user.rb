class User < ApplicationRecord
    has_many :interests
    has_many :movies, through: :interests 

    has_many :joins
    has_many :nights, through: :joins 




end
