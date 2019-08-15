class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :genre
      t.integer :length
      t.string :title
      t.string :image_url

      t.timestamps
    end
  end
end
