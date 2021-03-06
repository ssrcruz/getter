Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :blogs, only: [:index, :show, :create, :update, :destroy] do
      end
    end
  end

  root to: 'site#index'

  get '/about', to: 'site#about', as: 'about'
  get '/blogs', to: 'site#blogs', as: 'blogs'
  get '/contact', to: 'site#contact', as: 'contact'
  get '/newblog', to: 'site#new_blog', as: 'newblog'
  get '/blogs/:id', to: 'site#blog', as: 'blog'
  get '/signup', to: 'site#signup', as: 'signup'
  get '/login',  to: 'site#login', as: 'login'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
