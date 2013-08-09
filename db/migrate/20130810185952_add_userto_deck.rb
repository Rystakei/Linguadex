class AddUsertoDeck < ActiveRecord::Migration
  def change
    change_table :decks do |t|
      t.belongs_to :user
    end
  end
end
