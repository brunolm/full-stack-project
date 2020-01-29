import { db } from '../../core/db'
import { tables } from '../../core/db/schema'

export const list = async () => {
  const user = await db(tables.users)

  return user
}
