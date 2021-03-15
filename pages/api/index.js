import { ApolloServer, gql } from 'apollo-server-micro'
import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient } from 'mongodb'

require('dotenv').config()

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    blog: String
    stars: Int
  }

  type Query {
    users: [User]!
    hello: String!
  }
`

const resolvers = {
  Query: {
    users(_parent, _args, _context, _info) {
      return _context.db
        .collection('users')
        .findOne()
        .then((data) => {
          return data.users
        })
    },
    hello: () => {
      'hi = 'hi'
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

let db

const apolloServer = new ApolloServer({
  schema,
  context: async () => {
    if (!db) {
      try {
        const dbClient = new MongoClient(process.env.MONGO_DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })

        if (!dbClient.isConnected()) await dbClient.connect()
        db = dbClient.db('next-graphql') // database name
      } catch (e) {
        console.log('--->error while connecting via graphql context (db)', e)
      }
    }

    return { db }
  }
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default apolloServer.createHandler({ path: '/api/graphql' })
