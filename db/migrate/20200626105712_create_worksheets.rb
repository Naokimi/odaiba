class CreateWorksheets < ActiveRecord::Migration[6.0]
  def change
    create_table :worksheets do |t|
      t.references :work_group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
