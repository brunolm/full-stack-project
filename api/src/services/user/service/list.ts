import { db } from '../../core/db'
import { tables } from '../../core/db/schema'

export const list = async () => {
  const data = await db(tables.users)

  console.log('data', data)

  return data
}
