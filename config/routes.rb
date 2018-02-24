Rails.application.routes.draw do
  namespace :api do
    resources :adventures do
      resources :chapters do
        resources :encouters do
          resources :creatures do
            resources :treasures 
          end
        end
      end
    end
  end
end
