class Deck < ActiveRecord::Base
  has_many :cards
  accepts_nested_attributes_for :cards, allow_destroy: true
  validates_associated :cards
  attr_accessible :id, :name, :subject, :cards_attributes, :correct_answers, :incorrect_answers, :correct_card_indices, :language
end
