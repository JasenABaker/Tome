class Chapter < ApplicationRecord
  belongs_to :adventure
  has_many  :instructions, dependent: :destroy
  has_many :encounters, dependent: :destroy
end
