Rails.application.routes.draw do
  root to: 'pages#home'

  resources :classrooms, only: [:show] do
    resources :work_groups, only: [:index, :show, :new, :create] do
      resources :worksheets, only: [:show, :edit, :update]
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
