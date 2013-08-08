collection @decks
attributes :id, :name, :subject, :language
child(:card) { attributes :term, :definition }