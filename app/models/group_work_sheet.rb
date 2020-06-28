# == Schema Information
#
# Table name: group_work_sheets
#
#  id            :bigint           not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  work_group_id :bigint           not null
#  worksheet_id  :bigint           not null
#
# Indexes
#
#  index_group_work_sheets_on_work_group_id  (work_group_id)
#  index_group_work_sheets_on_worksheet_id   (worksheet_id)
#
# Foreign Keys
#
#  fk_rails_...  (work_group_id => work_groups.id)
#  fk_rails_...  (worksheet_id => worksheets.id)
#
class GroupWorkSheet < ApplicationRecord
  belongs_to :work_group
  belongs_to :worksheet
end
