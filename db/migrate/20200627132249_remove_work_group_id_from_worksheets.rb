class RemoveWorkGroupIdFromWorksheets < ActiveRecord::Migration[6.0]
  def change
    remove_column :worksheets, :work_group_id, :integer
  end
end
