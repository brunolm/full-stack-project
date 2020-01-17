import { ApolloServer, IResolvers } from 'apollo-server'
import { importSchema } from 'graphql-import'
import * as path from 'path'

import { env } from './config'
import { userMutations } from './services/user/mutations'
import { userQueries } from './services/user/queries'

const start = async () => {
  const typeDefs = importSchema(path.resolve(__dirname, './services/schema.graphql'))
  const resolvers: IResolvers<any, any> = {
    Query: {
      ...userQueries,
    },

    Mutation: {
      ...userMutations,
    },
  }

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })

  const { url } = await server.listen({ port: env.port, host: env.host })
  // tslint:disable-next-line: no-console
  console.log(`🚀 Server ready at ${url}`)
}

start()
