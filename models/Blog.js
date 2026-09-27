import mongoose from 'mongoose'

const sectionSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  body: { type: String, required: true },
  tip: { type: String },
  chart: [
    {
      number: String,
      chord: String,
      role: String,
    },
  ],
})

const blogSchema = new mongoose.Schema(
  {
    numericId: {
      type: Number,
      unique: true,
      sparse: true,
    },
    slug: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    tag: {
      type: String,
      required: true,
      trim: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    intro: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: () =>
        new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        }),
    },
    readTime: {
      type: String,
      default: '5 min read',
    },
    author: {
      type: String,
      default: 'Calix Joshua',
    },
    authorRole: {
      type: String,
      default: 'Founder & Lead Mentor, PraiseWave',
    },
    image: {
      type: String,
      default: 'https://images.unsplash.com/photo-1520523839898-507127053c37?w=1200&auto=format&fit=crop&q=80',
    },
    accent: {
      type: String,
      default: 'from-purple-600 to-indigo-700',
    },
    sections: [sectionSchema],
    keyTakeaways: [{ type: String }],
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Blog = mongoose.model('Blog', blogSchema)
export default Blog
