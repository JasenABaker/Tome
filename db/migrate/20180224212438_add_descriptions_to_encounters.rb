class AddDescriptionsToEncounters < ActiveRecord::Migration[5.1]
  def change
    add_column :encounters, :descriptions, :string, array: true, default: []
  end
end
