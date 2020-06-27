class AddEndTimeToClassrooms < ActiveRecord::Migration[6.0]
  def change
    add_column :classrooms, :end_time, :datetime
  end
end
