class CreateApplications < ActiveRecord::Migration[5.1]
  def change
    create_table :applications do |t|
      t.string :cover_letter

      t.timestamps
    end
  end
end
