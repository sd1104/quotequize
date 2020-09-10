Rails.application.routes.draw do
  root to: 'page#home'
  resources :books, only: :index
end
