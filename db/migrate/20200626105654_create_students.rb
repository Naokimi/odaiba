class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string :name
      t.references :work_group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
