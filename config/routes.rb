Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resources :carts, only: [:create, :show]
    resources :pets, except: [:new]
    resources :reviews, only: [:create, :index, :show]
    resources :categories, only: [:create, :index]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
