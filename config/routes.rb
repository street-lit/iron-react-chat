Rails.application.routes.draw do

  resources :messages, only: :create
  resources :users
  resources :chatrooms

  get    '/login',  to: 'sessions#new',     as: 'new_login'
  post   '/login',  to: 'sessions#create',  as: 'login'
  delete '/logout', to: 'sessions#destroy', as: 'logout'

end
