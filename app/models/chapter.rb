class Chapter < ApplicationRecord
  belongs_to :adventure
  has_many :encounters, dependent: :destroy
  has_attached_file :map
    validates_attachment_content_type :map, content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] }
  
end
