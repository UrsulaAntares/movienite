Rails.application.routes.draw do
  resources :joins
  resources :nights
  resources :interests
  resources :movies
  resources :users

  post '/login', to: 'sessions#create'
  post '/filter', to: 'movies#filter'
  post '/add', to: 'nights#add'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
