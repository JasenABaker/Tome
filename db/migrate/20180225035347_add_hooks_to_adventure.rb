class AddHooksToAdventure < ActiveRecord::Migration[5.1]
  def change
    add_column :adventures, :hooks, :jsonb, array: true, default: []
  end
end
