class AddIntroToEncounters < ActiveRecord::Migration[5.1]
  def change
    add_column :encounters, :intro, :string
  end
end
