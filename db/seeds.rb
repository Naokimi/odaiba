# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

p 'emptying database'

Worksheet.destroy_all
StudentWorkGroup.destroy_all
WorkGroup.destroy_all
Classroom.destroy_all
Student.destroy_all
Teacher.destroy_all

p 'creating teacher'

Teacher.create!(name: Faker::Name.name)

p "Finished creating #{Teacher.count} Teachers"

p 'creating students'

20.times do
  Student.create!(name: Faker::Name.name)
end

p "Finished creating #{Student.count} students"

p 'creating classroom'

Classroom.create!(
  teacher: Teacher.first,
  name: '4B',
  subject: 'English',
  start_time: DateTime.new(2020,6,28,10,30),
  end_time: DateTime.new(2020,6,28,11,20)
  )

p "Finished creating #{Classroom.count} classroom"

p 'creating work groups'

(1..5).to_a.each do |number|
  WorkGroup.create!(
    name: "Group #{number}",
    video_call_code: 'abc',
    classroom: Classroom.first,
    time_limit: 12,
    rotation_time: 3
    )
end

p "Finished creating #{WorkGroup.count} work groups"

p 'assigning students to workgroups'

students = Student.all
work_groups = WorkGroup.all
students.each_with_index do |student, index|
  StudentWorkGroup.create!(student: student, work_group: work_groups[index / 4])
end

p 'Finished assigning students to work groups'

p 'creating worksheets'

(0..4).to_a.each do |number|
  Worksheet.create!(
    display_content: {
      headers: ['japanese', 'english', 'past', 'past participle'],
      example: ['hajimeru', 'begin', 'began', 'begun'],
      1 => ['hashiru', 'run', false, false],
      2 => ['iu', 'say', false, false]
    }.to_json,
    correct_content: {
      headers: ['japanese', 'english', 'past', 'past participle'],
      example: ['hajimeru', 'begin', 'began', 'begun'],
      1 => ['hashiru', 'run', 'ran', 'run'],
      2 => ['iu', 'say', 'said', 'said']
    }.to_json,
    work_group: work_groups[number],
    name: "Past Tense #{{number + 1}}"
  )
end

p "Finished creating #{Worksheet.count} worksheets"

p 'finished'
