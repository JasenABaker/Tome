class CreateHooks < ActiveRecord::Migration[5.1]
  def change
    create_table :hooks do |t|
      t.string :title
      t.string :description
      t.references :adventure, foreign_key: true

      t.timestamps
    end
  end
end
