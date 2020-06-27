# == Schema Information
#
# Table name: worksheets
#
#  id              :bigint           not null, primary key
#  correct_content :json
#  display_content :json
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  work_group_id   :bigint           not null
#
# Indexes
#
#  index_worksheets_on_work_group_id  (work_group_id)
#
# Foreign Keys
#
#  fk_rails_...  (work_group_id => work_groups.id)
#
class Worksheet < ApplicationRecord
  has_many :work_groups, through: :group_work_sheets
end
