# == Schema Information
#
# Table name: worksheets
#
#  id              :bigint           not null, primary key
#  correct_content :json
#  display_content :json
#  name            :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Worksheet < ApplicationRecord
  has_many :work_groups, through: :group_work_sheets
end
