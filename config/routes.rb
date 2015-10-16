Rails.application.routes.draw do

  resources :messages, only: :create
  resources :users
  resources :chatrooms

  get    '/login',    to: 'sessions#new',       as: 'new_login'
  post   '/login',    to: 'sessions#create',    as: 'login'
  delete '/logout',   to: 'sessions#destroy',   as: 'logout'

  get    '/about',    to: 'chatrooms#about',    as: 'about'
  get    '/welcome',  to: 'chatrooms#welcome',  as: 'welcome'

  root "chatrooms#welcome"
end
