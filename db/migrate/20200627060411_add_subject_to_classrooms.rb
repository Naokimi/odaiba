class AddSubjectToClassrooms < ActiveRecord::Migration[6.0]
  def change
    add_column :classrooms, :subject, :string
  end
end
