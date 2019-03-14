class CreateJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :jobs do |t|
      t.string :role
      t.string :description
      t.string :salary_range
      t.references :employer, foreign_key: true
      t.string :location

      t.timestamps
    end
  end
end
