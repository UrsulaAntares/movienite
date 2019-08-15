class Movie < ApplicationRecord
    has_many :interests
    has_many :users, through: :interests



end
