class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :location
      t.string :linkedin
      t.string :introduction
      t.string :avatar
      t.references :roleable, polymorphic: true

      t.timestamps
    end
  end
end
