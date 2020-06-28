# == Schema Information
#
# Table name: work_groups
#
#  id              :bigint           not null, primary key
#  name            :string
#  rotation_time   :integer
#  time_limit      :integer
#  video_call_code :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  classroom_id    :bigint           not null
#
# Indexes
#
#  index_work_groups_on_classroom_id  (classroom_id)
#
# Foreign Keys
#
#  fk_rails_...  (classroom_id => classrooms.id)
#
class WorkGroup < ApplicationRecord
  belongs_to :classroom
  has_many :worksheets, through: :group_work_sheets
  has_many :students, through: :student_work_groups
end
