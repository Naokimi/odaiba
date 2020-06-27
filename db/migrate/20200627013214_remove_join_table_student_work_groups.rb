class RemoveJoinTableStudentWorkGroups < ActiveRecord::Migration[6.0]
  def change
    drop_join_table :students, :work_groups do |t|
      # t.index [:student_id, :work_group_id]
      # t.index [:work_group_id, :student_id]
    end
  end
end
