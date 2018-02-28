class ChangeTreasuresInEncounter < ActiveRecord::Migration[5.1]
  def change
    change_column :encounters, :treasures, :string
  end
end
