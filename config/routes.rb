Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :blogs, only: [:index, :create, :update, :destroy] do
      end
    end
  end

  root to: 'site#index'

  get '/blogs', to: 'site#blogs', as: 'blogs'
  get '/contact', to: 'site#contact', as: 'contact'
  get '/blogs/:id', to: 'site#show', as: 'blog'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
