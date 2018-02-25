class AddMonsterToCreatures < ActiveRecord::Migration[5.1]
  def change
    add_column :creatures, :monster, :jsonb
  end
end
