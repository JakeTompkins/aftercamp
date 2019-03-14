class CreateGrads < ActiveRecord::Migration[5.1]
  def change
    create_table :grads do |t|
      t.string :camp
      t.string :github
      t.integer :target_salary
      t.string :stack
      t.date :graduation_date
      t.string :cv

      t.timestamps
    end
  end
end
