# == Schema Information
#
# Table name: work_groups
#
#  id              :bigint           not null, primary key
#  name            :string
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
  has_many :worksheets, dependent: :destroy
  has_many :students, through: :student_work_groups
end
