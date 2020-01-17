import * as express from 'express'
import * as asyncHandler from 'express-async-handler'

import { listRoute } from './list'

const app = express.Router()

app.get('/', asyncHandler(listRoute))

export const userRoutes = app
