class AddMapUrlToChapter < ActiveRecord::Migration[5.1]
  def change
    add_column :chapters, :mapUrl, :string
  end
end
