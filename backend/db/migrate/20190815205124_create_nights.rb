class CreateNights < ActiveRecord::Migration[5.2]
  def change
    create_table :nights do |t|
      t.string :name

      t.timestamps
    end
  end
end
