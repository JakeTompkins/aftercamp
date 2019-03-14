class CreateOffers < ActiveRecord::Migration[5.1]
  def change
    create_table :offers do |t|
      t.integer :salary
      t.string :message

      t.timestamps
    end
  end
end
