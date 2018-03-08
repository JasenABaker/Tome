class ChangeTreausesInEncounters < ActiveRecord::Migration[5.1]
  def change
    change_column_default(:encounters, :treasures, nil)
  end
end
