import * as knex from 'knex'
import { database } from '../../../config'

export const db = knex(database)
