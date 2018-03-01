class Adventure < ApplicationRecord
    has_many :chapters, dependent: :destroy
    
end
