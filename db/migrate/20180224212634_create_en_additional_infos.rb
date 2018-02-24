class CreateEnAdditionalInfos < ActiveRecord::Migration[5.1]
  def change
    create_table :en_additional_infos do |t|
      t.string :title
      t.string :description
      t.references :encounter, foreign_key: true

      t.timestamps
    end
  end
end
