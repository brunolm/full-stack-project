import { db } from '../../core/db'
import { tables, userColumns } from '../../core/db/schema'

export const get = async (id: number) => {
  const user = await db(tables.users)
    .where(userColumns.id, id)
    .first()

  return user
}
