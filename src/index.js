const { GraphQLServer } = require('graphql-yoga')
const db = require('./wizard-db')

const resolvers = {
  Query: {
    house: (_, args) => db.houseByName(args.name),
    wizard: (_, args) => db.wizardByName(args.name),
  },

  House: {
    name: (house) => house.name,
    animal: (house) => house.animal,
    head: (house) => db.Wizards[house.head],
    points: (house) => house.points,
    verse: (house) => house.verse,
  },

  Wizard: {
    wand: () => null, // TODO
    friends: (wizard) =>
      wizard.friends.map((friend) => db.Wizards[friend])
  },

  Wand: {
    // TODO
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
