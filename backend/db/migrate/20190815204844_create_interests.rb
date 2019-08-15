class CreateInterests < ActiveRecord::Migration[5.2]
  def change
    create_table :interests do |t|
      t.integer :heart
      t.integer :star
      t.integer :user_id
      t.integer :movie_id

      t.timestamps
    end
  end
end
