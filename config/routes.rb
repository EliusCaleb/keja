Rails.application.routes.draw do
  resources :rooms
  resources :users, only:[:show, :create]
  resources :hotels
  # post "/login", to: "users#create"
  # get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "auth/login", to: "authentication#login"
end
