Rails.application.routes.draw do
  namespace :api do
    resources :adventures do
      resources :chapters 
    end
    resources :encounter 
    resources :encounter_creatures 
    
  end
end
