Rails.application.routes.draw do
  namespace :api do
    resources :adventures do
      resources :chapters do
        resources :encouters do
          resources :encounter_creatures 
        end
      end
    end
  end
end
