import { NextApiRequest, NextApiResponse } from 'next'
import { DataAggregator } from '../../lib/DataAggregator'

const API_KEY = process.env.API_KEY

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = req.headers['x-api-key']

  if (apiKey !== API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  if (req.method === 'GET') {
    try {
      const dataAggregator = new DataAggregator()
      const protocols = await dataAggregator.aggregateData()
      res.status(200).json(protocols)
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch protocol data' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}