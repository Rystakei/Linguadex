# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

d1 = Deck.create(name: "Basic Verbs", subject: "French", language: "French")
c1 = Card.create(deck_id: 1, term: "avoir", definition: "to have")
c2 = Card.create(deck_id: 1, term: "croire", definition: "to believe")
c3 = Card.create(deck_id: 1, term: "manger", definition: "to eat")
c4 = Card.create(deck_id: 1, term:"tenir", definition: "to hold")
c5 = Card.create(deck_id: 1, term: "aller", definition: "to go")
c6 = Card.create(deck_id: 1, term: "voir", definition: "to see")
c7 = Card.create(deck_id: 1, term: "savoir", definition: "to know")
c8 = Card.create(deck_id: 1, term: "pouvoir", definition: "to be able")
c9 = Card.create(deck_id: 1, term: "falloir", definition: "to be necessary")
c10 = Card.create(deck_id: 1, term: "vouloir", definition: "to want")

d2 = Deck.create(name: "Food", subject: "French", language: "French")
c1 = Card.create(deck_id: 2, term: "la nourriture", definition: "food")
c2 = Card.create(deck_id: 2, term: "avoir faim", definition: "to be hungry")
c3 = Card.create(deck_id: 2, term: "le repas", definition: "meal")
c4 = Card.create(deck_id: 2, term: "le petit-déjeuner", definition: "breakfast")
c5 = Card.create(deck_id: 2, term: "le déjeuner", definition: "lunch")
c6 = Card.create(deck_id: 2, term: "le dîner", definition: "dinner")
c7 = Card.create(deck_id: 2, term: "le goûter", definition: "snack")
c8 = Card.create(deck_id: 2, term: "déjeuner", definition: "to have breakfast or lunch")
c9 = Card.create(deck_id: 2, term:  "l'entrée", definition: "appetizer")
c10 = Card.create(deck_id: 2, term: "le potage", definition: "soup")
c11 = Card.create(deck_id: 2, term: "la soupe", definition: "soup")
c12 = Card.create(deck_id: 2, term: "le plat principal", definition: "main course")
c13 = Card.create(deck_id: 2, term: "la salade", definition: "salad")
c14 = Card.create(deck_id: 2, term: "le dessert", definition: "dessert")
c15 = Card.create(deck_id: 2, term: "la cuisine", definition: "kitchen")
c16 = Card.create(deck_id: 2, term: "le restaurant", definition: "restaurant")



