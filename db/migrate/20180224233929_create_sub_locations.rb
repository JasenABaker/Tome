class CreateSubLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :sub_locations do |t|
      t.string :title
      t.string :map_location
      t.string :instructions
      t.references :encounter, foreign_key: true

      t.timestamps
    end
  end
end
