Rails.application.routes.draw do
  root to: 'page#index'
  resources :page, only: :index do
    collection do
      get 'todo'
      get 'basic'
      get 'bitcoin'
      get 'template'
      get 'calc'
      get 'monitor'
      get 'apipractice'
    end
  end
  resources :books, only: [:index, :new, :create]
end
