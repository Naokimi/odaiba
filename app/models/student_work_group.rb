# == Schema Information
#
# Table name: student_work_groups
#
#  id            :bigint           not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  student_id    :bigint           not null
#  work_group_id :bigint           not null
#
# Indexes
#
#  index_student_work_groups_on_student_id     (student_id)
#  index_student_work_groups_on_work_group_id  (work_group_id)
#
# Foreign Keys
#
#  fk_rails_...  (student_id => students.id)
#  fk_rails_...  (work_group_id => work_groups.id)
#
class StudentWorkGroup < ApplicationRecord
  belongs_to :student
  belongs_to :work_group
end
