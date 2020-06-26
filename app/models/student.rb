# == Schema Information
#
# Table name: students
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Student < ApplicationRecord
  belongs_to :work_group
end
