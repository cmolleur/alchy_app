class CreateDrinks < ActiveRecord::Migration
  def change
    create_table :drinks do |t|
      t.string :name, null: false
      t.text :ingredients, null: false
      t.text :image
      t.text :location
      t.timestamps null: false
    end
  end
end
