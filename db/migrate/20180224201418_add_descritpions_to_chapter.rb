class AddDescritpionsToChapter < ActiveRecord::Migration[5.1]
  def change
    add_column :chapters, :descriptions, :string, array: true, default: []
  end
end
