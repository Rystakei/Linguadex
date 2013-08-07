class ActuallyAddLanguagetoDeck < ActiveRecord::Migration
  def change
    change_table :decks do |t|
      t.string :language
    end
  end
end
