import * as express from 'express'

import { userRoutes } from './users'

const app = express.Router()

app.use('/users', userRoutes)

export const apiRoutes = app
