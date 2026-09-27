import app, { connectDB } from '../server.js'

export default async function handler(req, res) {
  try {
    await connectDB()
    return app(req, res)
  } catch (error) {
    console.error('Vercel serverless error:', error)
    return res.status(500).json({ message: 'Server initialization error', error: error.message })
  }
}
