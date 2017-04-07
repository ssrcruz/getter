Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :categories, only: [:index, :create, :update, :destroy] do
        resources :topics, only: [:create, :update, :destroy]
      end
    end
  end

  root to: 'site#index'

  # get '/blogs', to: 'site#'
  get '/categories/:id', to: 'site#show', as: 'categories'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
