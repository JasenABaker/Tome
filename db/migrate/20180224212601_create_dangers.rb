class CreateDangers < ActiveRecord::Migration[5.1]
  def change
    create_table :dangers do |t|
      t.string :title
      t.string :description
      t.references :encounter, foreign_key: true

      t.timestamps
    end
  end
end
