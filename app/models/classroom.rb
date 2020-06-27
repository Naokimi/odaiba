# == Schema Information
#
# Table name: classrooms
#
#  id         :bigint           not null, primary key
#  end_time   :datetime
#  name       :string
#  start_time :datetime
#  subject    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  teacher_id :bigint           not null
#
# Indexes
#
#  index_classrooms_on_teacher_id  (teacher_id)
#
# Foreign Keys
#
#  fk_rails_...  (teacher_id => teachers.id)
#
class Classroom < ApplicationRecord
  belongs_to :teacher

  has_many :work_groups, dependent: :destroy
  has_many :students, through: :work_groups
end
