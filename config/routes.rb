Rails.application.routes.draw do
    # Job routes
  get '/api/jobs' => 'jobs#index'
  post '/api/jobs' => 'jobs#create'
  get '/api/jobs/:id' => 'jobs#show'
  put '/api/jobs/:id' => 'jobs#update'
  delete '/api/jobs/:id' => 'jobs#destroy'

  # User Routes
  post 'user_token' => 'user_token#create'
  post 'users/register' => 'users#register'
  put 'users/update' => 'users#update'

#   React Routes
    root to: 'pages#home'
    get '/register' => 'pages#home'
    get '/login' => 'pages#home'
    get '/jobs' => 'pages#home'
    get '/job/show/:id' => 'pages#home'
    
    
end

