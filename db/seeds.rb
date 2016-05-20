# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
drinks = Drink.create([
{
    name:         "Purple Nurple",
    ingredients:  "Grape Soda, Coconut Rum, Grenadine",
    image:        "http://media.namx.org/images/editorial/2010/12/1213/a_jordan_drank/a_jordan_drank_500x279.jpg",
    location:     "Krusty Krab in LBI"

},
{
    name:         "Sparkly Diamond",
    ingredients:  "Champagne, Orange Bitters, strawberry",
    image:        "http://media.namx.org/images/editorial/2010/12/1213/a_jordan_drank/a_jordan_drank_500x279.jpg",
    location:     "The Brownstone in Upper East Side"

}
])
