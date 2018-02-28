class ChangeColumnInEncounter < ActiveRecord::Migration[5.1]
  def change
    change_column :encounters, :treasures, :string, default: :string
  end
end
