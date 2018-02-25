class AddMapLocationNumberToEncounters < ActiveRecord::Migration[5.1]
  def change
    add_column :encounters, :map, :integer
  end
end
