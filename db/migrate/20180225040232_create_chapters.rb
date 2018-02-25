class CreateChapters < ActiveRecord::Migration[5.1]
  def change
    create_table :chapters do |t|
      t.string :title
      t.string :intro
      t.jsonb :instructions, default: [], array: true
      t.string :descriptions, default: [], array: true
      t.references :adventure, foreign_key: true

      t.timestamps
    end
  end
end
