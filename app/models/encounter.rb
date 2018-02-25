class Encounter < ApplicationRecord
  belongs_to :chapter
  has_many :en_additional_infos, dependent: :destroy
  has_many :dangers, dependent: :destroy
  has_many :creatures,  dependent: :destroy
  has_many :treasures, dependent: :destroy
  has_many :sub_locations, dependent: :destroy
end
