class Chapter < ApplicationRecord
  belongs_to :adventure
  has_many :encounters, dependent: :destroy
  before_validation :parse_image
  attr_accessor :image_base
  has_attached_file :map, :styles => { :medium => "300x300>",:thumb  => "100x100>" }
  validates_attachment_content_type :map, content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] }
  
  private def parse_image 
      image = Paperclip.io_adapters.for(image_base) 
      image.original_filename = "file.jpg" 
      self.map = image 
  end
end
