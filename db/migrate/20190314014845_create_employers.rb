class CreateEmployers < ActiveRecord::Migration[5.1]
  def change
    create_table :employers do |t|
      t.string :industry
      t.string :company_name

      t.timestamps
    end
  end
end
