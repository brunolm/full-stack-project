import { ApolloServer, IResolvers, makeExecutableSchema } from 'apollo-server'
import { importSchema } from 'graphql-import'
import { applyMiddleware } from 'graphql-middleware'
import { FieldValidationError, MutationValidationError, yupMiddleware } from 'graphql-yup-middleware'
import * as path from 'path'

import { env } from './config'
import { userMutations } from './services/user/mutations'
import { userQueries } from './services/user/queries'

const start = async () => {
  const typeDefs = [
    MutationValidationError,
    FieldValidationError,
    importSchema(path.resolve(__dirname, './services/schema.graphql')),
  ]

  const resolvers: IResolvers<any, any> = {
    Query: {
      ...userQueries,
    },

    Mutation: {
      ...userMutations,
    },
  }

  const schema = makeExecutableSchema({ typeDefs, resolvers })

  const schemaWithMiddleware = applyMiddleware(
    schema,
    yupMiddleware({
      errorPayloadBuilder: (err, _) => {
        throw err

        // return {
        //   error: err.errors.join(', '),
        // }
      },
    }),
  )

  const server = new ApolloServer({
    mocks: false,
    schema: schemaWithMiddleware,
    formatError(err) {
      const { exception } = err.extensions

      err.extensions.code = exception.name

      if (exception.name === 'ValidationError') {
        err.extensions.errors = exception.inner.reduce((errors, fieldError) => {
          errors[fieldError.type] = fieldError.message

          return errors
        }, {})
      } else {
        err.extensions.errors = exception.errors
      }

      if (env.isProduction) {
        err.extensions.exception = {}
      }

      return err
    },
  })

  const { url } = await server.listen({ port: env.port, host: env.host })
  // tslint:disable-next-line: no-console
  console.log(`🚀 Server ready at ${url}`)
}

start()
