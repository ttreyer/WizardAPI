const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')
const db = require('./wizard-db')

const ACCIO_URL = 'https://api.github.com/search/repositories?q='
const inchToCentimeter = (inches) => 2.54 * inches

const resolvers = {
  Query: {
    house: (_, args) => db.houseByName(args.name),
    wizard: (_, args) => db.wizardByName(args.name),

    accio: (_, args) =>
      fetch(ACCIO_URL + args.item)
        .then((res) => res.json())
        .then((json) => json.items[0])
        .then((item) => item.html_url)
  },

  Mutation: {
    grantPoints: (_, args) => {
      let house = db.houseByName(args.house)
      if (house)
        house.points += args.points
      return house
    }
  },

  House: {
    name: (house) => house.name,
    animal: (house) => house.animal,
    head: (house) => db.Wizards[house.head],
    points: (house) => house.points,
    verse: (house) => house.verse,
  },

  Wizard: {
    name: (wizard) => wizard.name,
    house: (wizard) => db.Houses[wizard.house],
    wand: (wizard) => db.Wands[wizard.wand],

    totalChocolateFrogCards: (wizard) =>
      wizard.totalChocolateFrogCards,

    friends: (wizard) =>
      wizard.friends.map((friend) => db.Wizards[friend]),
  },

  Wand: {
    length: (wand, args) => {
      switch (args.unit) {
        case 'INCH': return wand.length
        case 'CENTIMETER': return inchToCentimeter(wand.length)
      }
    }
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
