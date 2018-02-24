class CreateAdvAddtionalInfos < ActiveRecord::Migration[5.1]
  def change
    create_table :adv_addtional_infos do |t|
      t.string :title
      t.string :description
      t.references :adventure, foreign_key: true

      t.timestamps
    end
  end
end
