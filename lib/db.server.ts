import { PrismaClient } from '@prisma/client'

let db: PrismaClient

declare global {
  // eslint-disable-next-line no-var
  var db: PrismaClient | undefined
}

if (process.env.NODE_ENV === 'production') {
  db = new PrismaClient()
  db.$connect()
} else {
  if (!global.db) {
    global.db = new PrismaClient()
    global.db.$connect()
  }

  db = global.db
}

export default db
