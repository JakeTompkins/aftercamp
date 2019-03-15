Rails.application.routes.draw do
    # Job routes
  get 'jobs' => 'jobs#index'
  get 'job/new' => 'jobs#new'
  post 'job/create' => 'jobs#create'
  get 'job/show/:id' => 'jobs#show'
  post 'job/update/:id' => 'jobs#update'
  delete 'job/destroy/:id' => 'jobs#destroy'

  # User Routes
  post 'user_token' => 'user_token#create'
  post 'users/regist' => 'users#register'
  put 'users/update' => 'users#update'
end
