class AddMapUrlToADventure < ActiveRecord::Migration[5.1]
  def change
    add_column :adventures, :mapUrl, :string
  end
end
