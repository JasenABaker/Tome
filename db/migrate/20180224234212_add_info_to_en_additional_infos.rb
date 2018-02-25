class AddInfoToEnAdditionalInfos < ActiveRecord::Migration[5.1]
  def change
    add_column :en_additional_infos, :info, :string
  end
end
