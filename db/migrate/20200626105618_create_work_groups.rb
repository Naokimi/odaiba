class CreateWorkGroups < ActiveRecord::Migration[6.0]
  def change
    create_table :work_groups do |t|
      t.string :name
      t.string :video_call_code
      t.references :classroom, null: false, foreign_key: true

      t.timestamps
    end
  end
end
