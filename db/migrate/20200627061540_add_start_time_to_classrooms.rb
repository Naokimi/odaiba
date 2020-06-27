class AddStartTimeToClassrooms < ActiveRecord::Migration[6.0]
  def change
    add_column :classrooms, :start_time, :datetime
  end
end
