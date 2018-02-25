class CreateEncounters < ActiveRecord::Migration[5.1]
  def change
    create_table :encounters do |t|
      t.string :location
      t.integer :map_location_number
      t.string :developments
      t.string :intro
      t.string :descriptions, default: [], array: true
      t.jsonb :dangers, default: [], array: true
      t.jsonb :additional_info, default: [], array: true
      t.jsonb :sub_locations, default: [], array: true
      t.jsonb :treasures, default: [], array: true
      t.references :chapter, foreign_key: true

      t.timestamps
    end
  end
end
