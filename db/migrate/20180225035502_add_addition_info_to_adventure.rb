class AddAdditionInfoToAdventure < ActiveRecord::Migration[5.1]
  def change
    add_column :adventures, :additional_info, :jsonb, array: true, default: []
  end
end