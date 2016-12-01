Rails.application.routes.draw do
  root 'calc#show'

  get 'jquery_examples', to: 'calc#index'
end
