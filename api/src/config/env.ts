import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config({ path: path.join(__dirname, '../../.env') })

interface Environment {
  nodeEnv: string
  virtualHost: string
  virtualPort: string
  host: string
  port: number
  isProduction: boolean
  isTest: boolean
  isDevelopment: boolean

  database: {
    url: string
    client: string
  }
}

export const env = {
  nodeEnv: process.env.NODE_ENV,
  virtualHost: process.env.VIRTUAL_HOST,
  virtualPort: process.env.VIRTUAL_PORT,
  host: process.env.HOST || '0.0.0.0',
  port: +process.env.PORT,
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  isDevelopment: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',

  database: {
    url: process.env.DATABASE_URL,
    client: process.env.DATABASE_CLIENT || 'postgresql',
  },
} as Environment
