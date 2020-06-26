class RemoveWorkGroupIdFromStudents < ActiveRecord::Migration[6.0]
  def change
    remove_column :students, :work_group_id, :string
  end
end
