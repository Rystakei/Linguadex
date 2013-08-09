class ApplicationController < ActionController::Base
  protect_from_forgery

  #Redirects the user to the decks' index after logging in 
   def after_sign_in_path_for(resource_or_scope)
    decks_path
  end

end
