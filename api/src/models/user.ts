import { Base } from './base'

export interface User extends Base {
  email: string
  password: string
  name: string
}
