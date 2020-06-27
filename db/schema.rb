# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_27_133558) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "classrooms", force: :cascade do |t|
    t.bigint "teacher_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "name"
    t.string "subject"
    t.datetime "start_time"
    t.datetime "end_time"
    t.index ["teacher_id"], name: "index_classrooms_on_teacher_id"
  end

  create_table "group_work_sheets", force: :cascade do |t|
    t.bigint "work_group_id", null: false
    t.bigint "worksheet_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["work_group_id"], name: "index_group_work_sheets_on_work_group_id"
    t.index ["worksheet_id"], name: "index_group_work_sheets_on_worksheet_id"
  end

  create_table "student_work_groups", force: :cascade do |t|
    t.bigint "student_id", null: false
    t.bigint "work_group_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["student_id"], name: "index_student_work_groups_on_student_id"
    t.index ["work_group_id"], name: "index_student_work_groups_on_work_group_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "teachers", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "work_groups", force: :cascade do |t|
    t.string "name"
    t.string "video_call_code"
    t.bigint "classroom_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "time_limit"
    t.integer "rotation_time"
    t.index ["classroom_id"], name: "index_work_groups_on_classroom_id"
  end

  create_table "worksheets", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.json "display_content"
    t.json "correct_content"
    t.string "name"
  end

  add_foreign_key "classrooms", "teachers"
  add_foreign_key "group_work_sheets", "work_groups"
  add_foreign_key "group_work_sheets", "worksheets"
  add_foreign_key "student_work_groups", "students"
  add_foreign_key "student_work_groups", "work_groups"
  add_foreign_key "work_groups", "classrooms"
end
