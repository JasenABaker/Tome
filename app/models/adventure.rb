class Adventure < ApplicationRecord
    has_many :hooks, dependent: :destroy
    has_many :adv_addtional_infos, dependent: :destroy
    has_many :chapters, dependent: :destroy
end
