class CreateChapterInstructions < ActiveRecord::Migration[5.1]
  def change
    create_table :chapter_instructions do |t|
      t.string :title
      t.string :description
      t.references :chapter, foreign_key: true

      t.timestamps
    end
  end
end
