class CreateResponses < ActiveRecord::Migration[5.1]
  def change
    create_table :responses do |t|
      t.references :user, foreign_key: true
      t.references :job, foreign_key: true
      t.references :responseable, polymorphic: true

      t.timestamps
    end
  end
end
