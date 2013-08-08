object @deck
attributes :id, :name, :subject, :language
child(:card) { attributes :term, :definition }
extends('decks/show')