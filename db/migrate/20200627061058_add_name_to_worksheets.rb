class AddNameToWorksheets < ActiveRecord::Migration[6.0]
  def change
    add_column :worksheets, :name, :string
  end
end
