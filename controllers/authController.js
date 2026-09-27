import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET || 'praisewave_default_secret_key',
    {
      expiresIn: '30d',
    }
  )
}

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body

    if (!username || !password) {
      return res.status(400).json({ message: 'Please provide both username and password' })
    }

    const cleanUsername = username.trim().toLowerCase()
    let user = await User.findOne({ username: cleanUsername })

    // Auto-create default admin if not existing and matches credentials
    if (!user && cleanUsername === 'praisewave' && password === 'praisewave123') {
      user = await User.create({
        username: 'praisewave',
        password: 'praisewave123',
        role: 'admin',
      })
    }

    if (user && (await user.matchPassword(password))) {
      return res.json({
        _id: user._id,
        username: user.username,
        role: user.role,
        token: generateToken(user._id),
      })
    } else {
      return res.status(401).json({ message: 'Invalid username or password' })
    }
  } catch (error) {
    console.error('Login error:', error)
    return res.status(500).json({ message: 'Server error during authentication', error: error.message })
  }
}

// @desc    Get current user profile
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password')
    if (user) {
      return res.json(user)
    } else {
      return res.status(404).json({ message: 'User not found' })
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error: error.message })
  }
}
