class Chapter < ApplicationRecord
  belongs_to :adventure
  has_many :encounters, dependent: :destroy

end
