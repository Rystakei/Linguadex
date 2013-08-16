class Deck < ActiveRecord::Base
  has_many :cards
  belongs_to :user
  accepts_nested_attributes_for :cards, allow_destroy: true
  validates_associated :cards
  attr_accessible :id, :times_reviewed,  :name, :subject, :cards_attributes, :correct_answers, :incorrect_answers, :correct_card_indices, :language
  before_save :set_default

  def set_default
    self.times_reviewed = 0 unless self.times_reviewed
  end



end
