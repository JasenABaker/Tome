class AddHooksIntroToAdventures < ActiveRecord::Migration[5.1]
  def change
    add_column :adventures, :hooks_intro, :string
  end
end
