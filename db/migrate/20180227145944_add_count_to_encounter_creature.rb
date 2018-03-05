class AddCountToEncounterCreature < ActiveRecord::Migration[5.1]
  create_table "encounter_creatures", force: :cascade do |t|
    t.jsonb "creatures"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "encounter_id"
    t.integer "count"
    t.index ["encounter_id"], name: "index_encounter_creatures_on_encounter_id"
  end

end
