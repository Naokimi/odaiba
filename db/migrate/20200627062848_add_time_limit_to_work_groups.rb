class AddTimeLimitToWorkGroups < ActiveRecord::Migration[6.0]
  def change
    add_column :work_groups, :time_limit, :integer
  end
end
