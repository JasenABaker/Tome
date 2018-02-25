class RemoveIntroFromHooks < ActiveRecord::Migration[5.1]
  def change
    remove_column :hooks, :intro, :string
  end
end
