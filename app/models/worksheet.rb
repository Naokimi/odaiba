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
  belongs_to :work_group
end
