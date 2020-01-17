import { db } from '../core/db'
import { tables, userColumns } from '../core/db/schema'

export const userQueries = {
  User: async (parent, { id }, context) => {
    return await db(tables.users)
      .where(userColumns.id, id)
      .first()
  },
}
