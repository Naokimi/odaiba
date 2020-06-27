class AddNameToClassrooms < ActiveRecord::Migration[6.0]
  def change
    add_column :classrooms, :name, :string
  end
end
