import * as express from 'express'
import { list } from '../../services/users';

export const listRoute = async (_: express.Request, res: express.Response, __: express.NextFunction) => {
  const users = await list()

  return res.send(users)
}
