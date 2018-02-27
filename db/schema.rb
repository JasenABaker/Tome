# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180227145944) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "adventures", force: :cascade do |t|
    t.string "title"
    t.string "intro"
    t.string "synopsis"
    t.string "running_the_adventure"
    t.string "hooks_intro"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "map_file_name"
    t.string "map_content_type"
    t.integer "map_file_size"
    t.datetime "map_updated_at"
    t.jsonb "hooks", default: [], array: true
    t.jsonb "additional_info", default: [], array: true
  end

  create_table "chapters", force: :cascade do |t|
    t.string "title"
    t.string "intro"
    t.jsonb "instructions", default: [], array: true
    t.string "descriptions", default: [], array: true
    t.bigint "adventure_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "map_file_name"
    t.string "map_content_type"
    t.integer "map_file_size"
    t.datetime "map_updated_at"
    t.index ["adventure_id"], name: "index_chapters_on_adventure_id"
  end

  create_table "encounter_creatures", force: :cascade do |t|
    t.jsonb "creatures"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "encounter_id"
    t.integer "count"
    t.index ["encounter_id"], name: "index_encounter_creatures_on_encounter_id"
  end

  create_table "encounters", force: :cascade do |t|
    t.string "location"
    t.integer "map_location_number"
    t.string "developments"
    t.string "intro"
    t.string "descriptions", default: [], array: true
    t.jsonb "dangers", default: [], array: true
    t.jsonb "additional_info", default: [], array: true
    t.jsonb "sub_locations", default: [], array: true
    t.jsonb "treasures", default: [], array: true
    t.bigint "chapter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["chapter_id"], name: "index_encounters_on_chapter_id"
  end

  add_foreign_key "chapters", "adventures"
  add_foreign_key "encounter_creatures", "encounters"
  add_foreign_key "encounters", "chapters"
end
