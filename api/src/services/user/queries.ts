import { get } from './service/get'
import { list } from './service/list'

export const userQueries = {
  User: async (_parent, { id }, _context) => {
    return get(id)
  },

  Users: async (_parent, _params, _context) => {
    return list()
  },
}
