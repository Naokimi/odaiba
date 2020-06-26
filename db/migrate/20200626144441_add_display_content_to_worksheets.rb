class AddDisplayContentToWorksheets < ActiveRecord::Migration[6.0]
  def change
    add_column :worksheets, :display_content, :json
  end
end
