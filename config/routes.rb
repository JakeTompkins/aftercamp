Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'user_token' => 'user_token#create'
  post 'users/regist' => 'users#register'
  put 'users/update' => 'users#update'
end
