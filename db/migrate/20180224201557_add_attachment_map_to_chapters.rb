class AddAttachmentMapToChapters < ActiveRecord::Migration[5.1]
  def self.up
    change_table :chapters do |t|
      t.attachment :map
    end
  end

  def self.down
    remove_attachment :chapters, :map
  end
end
