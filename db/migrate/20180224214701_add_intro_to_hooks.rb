class AddIntroToHooks < ActiveRecord::Migration[5.1]
  def change
    add_column :hooks, :intro, :string
  end
end
