import * as knex from 'knex'
import * as path from 'path'

import { env } from './env'

export const database = {
  client: env.database.client,
  connection: env.database.url,
  migrations: {
    directory: path.resolve('../database/migrations'),
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: path.resolve('../database/seeds'),
  },
} as knex.Config
