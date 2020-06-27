Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resources :classrooms, only: [:show] do
    resources :work_groups, only: [:show] do
      resources :worksheets, only: [:show, :edit]
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
