import { redis, authenticate } from '../../lib/utils'
import { DB_NAME, FEATURE_TYPE } from '../../lib/const'

export default async (req, res) => {
  const email = req.query.email

  const subscribe = {
    email,
    createdAt: Date.now(),
    status: FEATURE_TYPE.SUBSCRIBE
  }

  await redis.zadd(DB_NAME, 'NX', 1, JSON.stringify(subscribe))

  res.json({ body: 'success' })
}
