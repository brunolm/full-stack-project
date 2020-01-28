import { db } from '../core/db'
import { tables, userColumns } from '../core/db/schema'

export const userQueries = {
  User: async (_parent, { id }, _context) => {
    return await db(tables.users)
      .where(userColumns.id, id)
      .first()
  },
}
