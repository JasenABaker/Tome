class CreateCreatures < ActiveRecord::Migration[5.1]
  def change
    create_table :creatures do |t|
      t.references :encounter, foreign_key: true

      t.timestamps
    end
  end
end
