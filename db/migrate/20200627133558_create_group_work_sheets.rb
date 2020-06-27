class CreateGroupWorkSheets < ActiveRecord::Migration[6.0]
  def change
    create_table :group_work_sheets do |t|
      t.references :work_group, null: false, foreign_key: true
      t.references :worksheet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
