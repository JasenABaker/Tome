class AddEncounterToEncounterCreature < ActiveRecord::Migration[5.1]
  def change
    add_reference :encounter_creature, :encounter, foreign_key: true
  end
end
