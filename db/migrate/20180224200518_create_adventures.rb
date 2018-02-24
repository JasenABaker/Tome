class CreateAdventures < ActiveRecord::Migration[5.1]
  def change
    create_table :adventures do |t|
      t.string :title
      t.string :intro
      t.string :synopsis
      t.string :running_the_adventure

      t.timestamps
    end
  end
end
