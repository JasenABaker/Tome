class AddAttachmentMapToAdventures < ActiveRecord::Migration[5.1]
  def self.up
    change_table :adventures do |t|
      t.attachment :map
    end
  end

  def self.down
    remove_attachment :adventures, :map
  end
end
