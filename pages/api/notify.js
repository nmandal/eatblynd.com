import { redis, authenticate } from '../../lib/utils'
import { DB_NAME, FEATURE_TYPE } from '../../lib/const'

export default async (req, res) => {
  const email = req.query.email

  const notify = {
    email,
    createdAt: Date.now(),
    status: FEATURE_TYPE.NOTIFY
  }

  await redis.zadd(DB_NAME, 'NX', 1, JSON.stringify(notify))

  res.json({ body: 'success' })
}