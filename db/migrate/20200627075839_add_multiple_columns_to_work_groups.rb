class AddMultipleColumnsToWorkGroups < ActiveRecord::Migration[6.0]
  def change
    #time limit and rotation time in minutes
    add_column :work_groups, :time_limit, :integer
    add_column :work_groups, :rotation_time, :integer
  end
end
