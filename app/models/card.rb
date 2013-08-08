class Card < ActiveRecord::Base
 attr_accessible :term, :definition

  def as_json(options={})
    super only: [:id, :term, :definition]
  end
  
end
