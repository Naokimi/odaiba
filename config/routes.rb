Rails.application.routes.draw do
  root to: 'pages#home'

  resources :classrooms do
    resources :work_groups do
      resources :worksheets, only: [:show, :edit]
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
