Rails.application.routes.draw do
  root to: 'page#home'
  resources :page, only: :index do
    collection do
      get 'home'
      get 'todo'
      get 'basic'
      get 'bitcoin'
      get 'template'
      get 'calc'
    end
  end
  resources :books, only: :index
end
