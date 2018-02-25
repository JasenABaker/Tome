class Encounter < ApplicationRecord
  belongs_to :chapter
  has_many :encounter_creatures
end
