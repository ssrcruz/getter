Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :categories do
        resources :topics
      end
    end
  end

  root to: 'site#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
