import { createLogger, format, transports } from 'winston'

import { env } from '../../../config'

export const logger = createLogger({
  level: env.isProduction ? 'info' : 'debug',
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.printf((info) => `[${info.level}] ${info.timestamp}: ${info.message}`),
  ),
  transports: [new transports.Console()],
})
