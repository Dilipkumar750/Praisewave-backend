import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import blogRoutes from './routes/blogRoutes.js'
import { ensureSeededBlogs } from './controllers/blogController.js'
import User from './models/User.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
)
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/blogs', blogRoutes)

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'PraiseWave Music Academy API is running smoothly',
    timestamp: new Date().toISOString(),
  })
})

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Server error:', err)
  res.status(500).json({
    message: err.message || 'Internal Server Error',
  })
})

// Database Connection & Server Initialization
const startServer = async () => {
  try {
    const mongoUri =
      process.env.MONGODB_URI ||
      'mongodb+srv://dilipk5406:dilipk5406@cluster0.zhn1ypi.mongodb.net/praisewave?retryWrites=true&w=majority&appName=Cluster0'

    console.log('Connecting to MongoDB Atlas...')
    await mongoose.connect(mongoUri)
    console.log('Connected to MongoDB successfully!')

    // Ensure default admin exists
    const adminExists = await User.findOne({ username: 'praisewave' })
    if (!adminExists) {
      await User.create({
        username: 'praisewave',
        password: 'praisewave123',
        role: 'admin',
      })
      console.log('Default admin initialized: praisewave / praisewave123')
    }

    // Seed default blogs if database is fresh
    await ensureSeededBlogs()

    const server = app.listen(PORT, () => {
      console.log(`PraiseWave Backend API server running on port ${PORT}`)
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Stop the existing process and try again.`)
        process.exit(1)
      } else {
        throw err
      }
    })
  } catch (error) {
    console.error('Database connection failed:', error.message)
    console.error('Please check your MongoDB URI and network connection.')
    process.exit(1)
  }
}

startServer()
