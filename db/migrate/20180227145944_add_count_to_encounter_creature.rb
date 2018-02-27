class AddCountToEncounterCreature < ActiveRecord::Migration[5.1]
  def change
    add_column :encounter_creatures, :count, :integer
  end
end
