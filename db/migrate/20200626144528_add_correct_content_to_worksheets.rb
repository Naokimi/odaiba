class AddCorrectContentToWorksheets < ActiveRecord::Migration[6.0]
  def change
    add_column :worksheets, :correct_content, :json
  end
end
