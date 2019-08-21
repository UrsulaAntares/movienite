class AddDateToNights < ActiveRecord::Migration[5.2]
  def change
    add_column :nights, :date, :datetime 
  end
end
