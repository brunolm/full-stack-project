import { User } from '../../../models'
import { db } from '../../core/db'
import { tables, userColumns } from '../../core/db/schema'

export const create = async (user: User) => {
  // TODO: extract
  for (const key of Object.keys(user)) {
    if (!(key in userColumns)) {
      delete user[key]
    }
  }

  delete user.id

  const [createdUser] = await db(tables.users)
    .insert(user)
    .returning('*')

  return createdUser
}
