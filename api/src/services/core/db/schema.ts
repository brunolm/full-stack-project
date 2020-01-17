import { User } from "../../../models"

export const tables = {
  users: 'users',
}

export const userColumns: { [T in keyof User]: string } = {
  id: 'users.id',
  name: 'users.name',
  email: 'users.email',
  password: 'users.password',
  createdAt: 'users.created_at',
  updatedAt: 'users.updated_at',
  deleted: 'users.deleted',
}
