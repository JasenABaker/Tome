class CreateTreasures < ActiveRecord::Migration[5.1]
  def change
    create_table :treasures do |t|
      t.string :description
      t.string :items
      t.references :encounter, foreign_key: true

      t.timestamps
    end
  end
end
