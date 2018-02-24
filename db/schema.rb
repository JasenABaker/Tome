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

ActiveRecord::Schema.define(version: 20180224212818) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "adv_addtional_infos", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.bigint "adventure_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["adventure_id"], name: "index_adv_addtional_infos_on_adventure_id"
  end

  create_table "adventures", force: :cascade do |t|
    t.string "title"
    t.string "intro"
    t.string "synopsis"
    t.string "running_the_adventure"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "map_file_name"
    t.string "map_content_type"
    t.integer "map_file_size"
    t.datetime "map_updated_at"
  end

  create_table "chapter_instructions", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.bigint "chapter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["chapter_id"], name: "index_chapter_instructions_on_chapter_id"
  end

  create_table "chapters", force: :cascade do |t|
    t.string "title"
    t.string "intro"
    t.bigint "adventure_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "descriptions", default: [], array: true
    t.string "map_file_name"
    t.string "map_content_type"
    t.integer "map_file_size"
    t.datetime "map_updated_at"
    t.index ["adventure_id"], name: "index_chapters_on_adventure_id"
  end

  create_table "creatures", force: :cascade do |t|
    t.bigint "encounter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["encounter_id"], name: "index_creatures_on_encounter_id"
  end

  create_table "dangers", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.bigint "encounter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["encounter_id"], name: "index_dangers_on_encounter_id"
  end

  create_table "en_additional_infos", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.bigint "encounter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["encounter_id"], name: "index_en_additional_infos_on_encounter_id"
  end

  create_table "encounters", force: :cascade do |t|
    t.string "location"
    t.string "developments"
    t.bigint "chapter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "descriptions", default: [], array: true
    t.index ["chapter_id"], name: "index_encounters_on_chapter_id"
  end

  create_table "hooks", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.bigint "adventure_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["adventure_id"], name: "index_hooks_on_adventure_id"
  end

  create_table "treasures", force: :cascade do |t|
    t.string "description"
    t.string "items"
    t.bigint "encounter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["encounter_id"], name: "index_treasures_on_encounter_id"
  end

  add_foreign_key "adv_addtional_infos", "adventures"
  add_foreign_key "chapter_instructions", "chapters"
  add_foreign_key "chapters", "adventures"
  add_foreign_key "creatures", "encounters"
  add_foreign_key "dangers", "encounters"
  add_foreign_key "en_additional_infos", "encounters"
  add_foreign_key "encounters", "chapters"
  add_foreign_key "hooks", "adventures"
  add_foreign_key "treasures", "encounters"
end
