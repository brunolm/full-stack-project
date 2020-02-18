import { User } from '../../../models'
import { prefixKeys } from '../prefix-keys'

export const tables = {
  users: 'users',
}

// TODO: here
// Need to map camelCase to snake case manually

const baseColumns = prefixKeys(undefined, {
  id: undefined,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deleted: undefined,
})

export const userColumns: { [T in keyof User]: string } = prefixKeys('users.', {
  ...baseColumns,
  name: undefined,
  email: undefined,
  password: undefined,
})
