import Blog from '../models/Blog.js'

const makeSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const initialSeedBlogs = [
  {
    numericId: 1,
    slug: '5-essential-finger-dexterity-drills-every-keyboard-player-must-practice-daily',
    category: 'Piano Technique',
    title: '5 Essential Finger Dexterity Drills Every Keyboard Player Must Practice Daily',
    excerpt: 'Hanon and Czerny exercises broken down for modern keyboard players. How 15 minutes of intentional slow practice builds velocity, clean articulation, and prevents wrist fatigue.',
    date: 'Sep 12, 2026',
    readTime: '5 min read',
    author: 'Calix Joshua',
    authorRole: 'Founder & Lead Mentor, PraiseWave',
    tag: 'Piano',
    image: 'https://images.unsplash.com/photo-1520523839898-507127053c37?w=1200&auto=format&fit=crop&q=80',
    accent: 'from-purple-600 to-indigo-700',
    intro: 'Whether you are sitting down at a keyboard for the very first time or looking to break through a technical plateau, hand mechanics and finger independence determine your speed, control, and musical expression.',
    sections: [
      {
        heading: '1. The 5-Finger Independent Lift Drill (Five-Finger Pattern)',
        body: 'Place your right hand in the C Major 5-finger position (C-D-E-F-G). While holding all five keys down gently, lift only the thumb (1) and strike C cleanly with a firm fingertip. Repeat four times in steady quarter notes. Next, repeat with fingers 2, 3, 4, and 5.',
        tip: 'The 4th finger naturally shares a tendon with the 3rd and 5th fingers. Never force it high; focus on independent activation.',
      },
      {
        heading: '2. The Hanon No. 1 Expansion with Metronome Discipline',
        body: 'Hanon Exercise No. 1 trains the 4th and 5th fingers of both hands while expanding the stretch between the 1st and 2nd fingers. Start at 60 BPM (one note per click). Ensure identical volume and legato touch.',
        tip: 'Practice in contrary motion to build equal coordination in both hands.',
      },
      {
        heading: '3. Thumb-Under Arpeggio Pivoting (1-2-3-1 Crossing)',
        body: 'Smooth scalar runs and arpeggios require the thumb to smoothly glide underneath the palm without lifting your wrist into the air. Practice passing your thumb under fingers 2 and 3 on C, G, and F Major scales.',
      },
      {
        heading: '4. Staccato vs. Legato Articulation Workout',
        body: 'Play the ascending scale in the right hand with a crisp, bouncy staccato while the left hand plays smooth, connected legato whole notes. Switch hands on the way down.',
      },
      {
        heading: '5. Dynamic Finger Weight Control (Pianissimo to Fortissimo)',
        body: 'Play a repetitive 5-finger pattern where each repetition changes dynamics: Pianissimo (pp) -> Mezzo-Forte (mf) -> Fortissimo (ff) -> Diminuendo back to Pianissimo.',
      },
    ],
    keyTakeaways: [
      '15 minutes of slow, mindful daily practice beats 2 hours of rushed, sloppy playing.',
      'Always keep wrists neutral and level with the white keys to prevent repetitive strain.',
      'Use a metronome at 60–70 BPM before trying to play at high performance tempos.',
      'Finger 4 independence takes consistent patience — never force or strain.',
    ],
    isFeatured: true,
  },
  {
    numericId: 2,
    slug: 'understanding-chord-progressions-how-to-play-any-gospel-song-by-ear',
    category: 'Chord Progressions',
    title: 'Understanding Chord Progressions: How to Play Any Gospel Song by Ear',
    excerpt: 'The 1-4-5-6 progression explained for keyboard players. Once you understand how chords relate to each other, you can play and improvise over any worship song with confidence.',
    date: 'Sep 06, 2026',
    readTime: '6 min read',
    author: 'Calix Joshua',
    authorRole: 'Founder & Lead Mentor, PraiseWave',
    tag: 'Chords',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop&q=80',
    accent: 'from-cyan-600 to-blue-700',
    intro: 'Have you ever wondered how seasoned church keyboardists can sit down and play along with songs they have never formally rehearsed? The secret is understanding the Nashville Number System and diatonic chord relationships in Western harmony.',
    sections: [
      {
        heading: '1. What Are Diatonic Chords in a Major Key?',
        body: 'Every major scale contains 7 unique notes, and building triads on each scale degree creates a fixed series of Major, Minor, and Diminished chords that never change.',
        chart: [
          { number: 'I (One)', chord: 'Major (C)', role: 'Home / Tonic - Resolves all musical tension' },
          { number: 'ii (Two)', chord: 'Minor (Dm)', role: 'Pre-dominant / Smooth transitional movement' },
          { number: 'iii (Three)', chord: 'Minor (Em)', role: 'Gentle tonic substitute / Reflective color' },
          { number: 'IV (Four)', chord: 'Major (F)', role: 'Subdominant / Lifting, expansive worship emotion' },
          { number: 'V (Five)', chord: 'Major (G)', role: 'Dominant / Creates powerful pull back to I' },
          { number: 'vi (Six)', chord: 'Minor (Am)', role: 'Relative minor / Emotional, introspective atmosphere' },
          { number: 'vii° (Seven)', chord: 'Diminished (Bdim)', role: 'Leading tone tension / Passing chord' },
        ],
      },
      {
        heading: '2. The Iconic Gospel Worship Formula: I - V - vi - IV',
        body: 'Over 80% of modern worship anthems and gospel ballads are built on variations of this 4-chord sequence. In the key of C Major, this is: C -> G -> Am -> F. In the key of G Major: G -> D -> Em -> C.',
        tip: 'Learn this progression across 3 primary gospel keys (C, G, D, and F) first.',
      },
      {
        heading: '3. Chord Inversions: Eliminate Awkward Hand Jumps',
        body: 'Beginners frequently jump their entire hand up and down the keyboard in root positions. By using chord inversions (Root, 1st Inversion, 2nd Inversion), your fingers move by only 1 or 2 keys.',
      },
      {
        heading: '4. The 2-5-1 and Passing Chords in Gospel Harmony',
        body: 'To add soulful richness between main sections, gospel players insert secondary dominants and 2-5-1 cadences (e.g., Gm7 -> C7 -> Fmaj9).',
      },
    ],
    keyTakeaways: [
      'Think in numbers (I, IV, V, vi) rather than isolated chord names.',
      'Use chord inversions to keep hand movements compact and smooth.',
      'Master the I - V - vi - IV progression in keys C, G, D, and F first.',
      'Add suspended 2nds and 9ths for modern worship texture.',
    ],
  },
  {
    numericId: 3,
    slug: 'the-circle-of-fifths-demystified-how-to-transpose-and-modulate-any-song',
    category: 'Music Theory',
    title: 'The Circle of Fifths Demystified: How to Transpose and Modulate Any Song',
    excerpt: 'Stop memorizing key signatures by rote. Understand the geometric symmetry of Western harmony and start composing your own chord progressions with confidence.',
    date: 'Aug 29, 2026',
    readTime: '4 min read',
    author: 'Calix Joshua',
    authorRole: 'Founder & Lead Mentor, PraiseWave',
    tag: 'Theory',
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1200&auto=format&fit=crop&q=80',
    accent: 'from-emerald-600 to-teal-700',
    intro: 'The Circle of Fifths is often taught as an intimidating academic diagram, but in practice, it is the ultimate musician’s compass.',
    sections: [
      {
        heading: '1. The Clockface Layout of Keys',
        body: 'At 12 o’clock sits C Major (0 sharps, 0 flats). Moving clockwise by fifths adds sharps: G (1#), D (2#), A (3#), E (4#), B (5#), F# (6#). Moving counter-clockwise adds flats: F (1b), Bb (2b), Eb (3b).',
      },
      {
        heading: '2. Instantly Finding Closely Related Keys',
        body: 'Any key on the circle is intimately related to its immediate neighbors to the left and right, plus their relative minors.',
      },
      {
        heading: '3. Modulation Techniques for Live Worship',
        body: 'When leading into a dramatic key change on the final chorus, you can modulate up a whole step by using the V of the new key as a pivot chord.',
      },
    ],
    keyTakeaways: [
      'Clockwise adds sharps (# by 5ths); Counter-clockwise adds flats (b by 4ths).',
      'The inner circle contains the relative minor of every major key.',
      'Neighboring keys on the circle provide smooth harmonic modulation paths.',
    ],
  },
  {
    numericId: 4,
    slug: 'how-to-build-rock-solid-rhythm-as-a-keyboard-player-using-a-metronome',
    category: 'Rhythm & Timing',
    title: 'How to Build Rock-Solid Rhythm as a Keyboard Player Using a Metronome',
    excerpt: 'Most beginners skip metronome practice — and it shows. Learn the exact progressive method our instructors use to help students lock into a groove and never rush or drag.',
    date: 'Aug 21, 2026',
    readTime: '7 min read',
    author: 'Calix Joshua',
    authorRole: 'Founder & Lead Mentor, PraiseWave',
    tag: 'Rhythm',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&auto=format&fit=crop&q=80',
    accent: 'from-amber-600 to-rose-700',
    intro: 'Rhythm is the heartbeat of all music. You can play intricate chords, but without solid timing the performance loses its soul.',
    sections: [
      {
        heading: '1. The Disappearing Metronome Technique',
        body: 'When your rhythm is perfectly locked in, the metronome click seems to disappear beneath your piano strike.',
      },
      {
        heading: '2. Subdividing 8ths and 16ths in Your Head',
        body: 'Never count just 1 - 2 - 3 - 4. Always internalize subdivisions (1-and-2-and-3-and-4-and) to prevent rushing.',
      },
      {
        heading: '3. Practicing on Beats 2 and 4 Only',
        body: 'Set your metronome to click only on beats 2 and 4 (the snare drum backbeat). You supply beats 1 and 3 internally.',
      },
    ],
    keyTakeaways: [
      'Aim for the vanishing click phenomenon where strike masks the tick.',
      'Count internal subdivisions out loud during practice.',
      'Practice with backbeat clicks (beats 2 & 4) to master groove.',
    ],
  },
  {
    numericId: 5,
    slug: 'left-hand-independence-the-missing-skill-that-separates-good-from-great-keyboard-players',
    category: 'Hand Technique',
    title: 'Left Hand Independence: The Missing Skill That Separates Good from Great Keyboard Players',
    excerpt: 'Many students can play with their right hand but struggle with coordinating the left. Here is our structured system for developing true two-hand independence on the keyboard.',
    date: 'Aug 14, 2026',
    readTime: '6 min read',
    author: 'Calix Joshua',
    authorRole: 'Founder & Lead Mentor, PraiseWave',
    tag: 'Technique',
    image: 'https://images.unsplash.com/photo-1520523839898-507127053c37?w=1200&auto=format&fit=crop&q=80',
    accent: 'from-pink-600 to-fuchsia-700',
    intro: 'Breaking the left-hand freeze requires isolating rhythmic and harmonic roles before combining both hands.',
    sections: [
      {
        heading: '1. Isolate and Master the Left Hand Role First',
        body: 'Never learn both hands simultaneously from scratch on a new piece. Automate the left hand part first.',
      },
      {
        heading: '2. Octave-Fifth Root Foundations (1 - 5 - 8 Shapes)',
        body: 'In worship playing, master open 1-5-8 shell voicings in the bass to keep sound powerful and clear.',
      },
      {
        heading: '3. Polyrhythmic Tapping Drills Away from the Piano',
        body: 'Tap quarter notes with left hand while tapping eighth notes with right hand on a tabletop.',
      },
    ],
    keyTakeaways: [
      'Automate left hand accompaniment before combining hands.',
      'Use 1-5-8 open voicings in the bass register.',
      'Practice tabletop hand tapping drills daily.',
    ],
  },
  {
    numericId: 6,
    slug: 'church-keyboard-playing-101-how-to-support-a-worship-team-as-a-beginner',
    category: 'Worship Keyboard',
    title: 'Church Keyboard Playing 101: How to Support a Worship Team as a Beginner',
    excerpt: 'Playing keyboard in a church context requires more than just knowing chords. Learn how to listen, respond, and support a worship team with tasteful, ministry-focused playing.',
    date: 'Aug 04, 2026',
    readTime: '5 min read',
    author: 'Calix Joshua',
    authorRole: 'Founder & Lead Mentor, PraiseWave',
    tag: 'Worship',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop&q=80',
    accent: 'from-yellow-600 to-amber-700',
    intro: 'Church and worship keyboard playing is all about space, frequency awareness, and supporting the congregation focus.',
    sections: [
      {
        heading: '1. Tone Layering: Piano + Ambient Pad Magic',
        body: 'Layer a warm grand piano with a subtle analog or string pad with high cut to create smooth atmospheric transitions.',
      },
      {
        heading: '2. Stay Out of the Bass Player’s Frequency Lane',
        body: 'Stay in the mid-register (C3 to C5) with simple inversions and let the bassist handle the low rumble.',
      },
      {
        heading: '3. The Power of Space & Dynamic Arcs',
        body: 'Dynamics tell the emotional story: single sustained chords during prayer, rhythmic builds during choruses.',
      },
    ],
    keyTakeaways: [
      'Layer a warm ambient pad with piano to create smooth transitions.',
      'Leave low frequencies for the bass guitarist.',
      'Serve the room and congregation — less is often vastly more powerful.',
    ],
  },
]

// Auto-seed helper — also patches missing slugs on existing docs
export const ensureSeededBlogs = async () => {
  try {
    const count = await Blog.countDocuments()
    if (count === 0) {
      console.log('Seeding initial 6 masterclass blogs...')
      await Blog.insertMany(initialSeedBlogs)
      console.log('Blogs successfully seeded!')
    } else {
      // Patch any existing docs that are missing a slug
      const missingSlug = await Blog.find({ slug: { $exists: false } })
      for (const doc of missingSlug) {
        doc.slug = makeSlug(doc.title)
        await doc.save().catch(() => {})
      }
    }
  } catch (err) {
    console.error('Error auto-seeding blogs:', err.message)
  }
}

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Public
export const getBlogs = async (req, res) => {
  try {
    const { tag, search } = req.query
    let query = {}

    if (tag && tag !== 'All') {
      query.tag = { $regex: new RegExp(`^${tag}$`, 'i') }
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { category: { $regex: search, $options: 'i' } },
      ]
    }

    const blogs = await Blog.find(query).sort({ numericId: 1, createdAt: -1 })
    res.json(blogs)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error: error.message })
  }
}

// @desc    Get single blog by ID or numericId
// @route   GET /api/blogs/:id
// @access  Public
export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params
    let blog = null

    // 1. Numeric ID (e.g. 1, 2, 3)
    if (!isNaN(id)) {
      blog = await Blog.findOne({ numericId: Number(id) })
    }

    // 2. Slug (e.g. understanding-chord-progressions-...)
    if (!blog) {
      blog = await Blog.findOne({ slug: id.toLowerCase() })
    }

    // 3. MongoDB ObjectId
    if (!blog && id.match(/^[0-9a-fA-F]{24}$/)) {
      blog = await Blog.findById(id)
    }

    if (blog) {
      res.json(blog)
    } else {
      res.status(404).json({ message: 'Article not found' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching article', error: error.message })
  }
}

// @desc    Create a new blog
// @route   POST /api/blogs
// @access  Private (Admin)
export const createBlog = async (req, res) => {
  try {
    const {
      title,
      category,
      tag,
      excerpt,
      intro,
      readTime,
      author,
      authorRole,
      image,
      accent,
      sections,
      keyTakeaways,
      isFeatured,
    } = req.body

    if (!title || !category || !excerpt) {
      return res.status(400).json({ message: 'Title, category, and excerpt are required' })
    }

    // Generate next numericId and auto slug
    const highestBlog = await Blog.findOne().sort({ numericId: -1 })
    const nextNumericId = (highestBlog && highestBlog.numericId ? highestBlog.numericId : 0) + 1
    const generatedSlug = req.body.slug || makeSlug(title)

    const newBlog = new Blog({
      numericId: nextNumericId,
      slug: generatedSlug,
      title,
      category,
      tag: tag || category,
      excerpt,
      intro: req.body.intro || intro || '',
      readTime: readTime || '5 min read',
      author: author || 'Calix Joshua',
      authorRole: authorRole || 'Founder & Lead Mentor, PraiseWave',
      image: image || 'https://images.unsplash.com/photo-1520523839898-507127053c37?w=1200&auto=format&fit=crop&q=80',
      accent: accent || 'from-purple-600 to-indigo-700',
      sections: req.body.sections || sections || [],
      keyTakeaways: req.body.keyTakeaways || keyTakeaways || [],
      isFeatured: Boolean(isFeatured),
      content: req.body.content || '',
      summary: req.body.summary || '',
      published: req.body.published !== undefined ? req.body.published : true,
      tags: req.body.tags || [],
    })

    const savedBlog = await newBlog.save()
    res.status(201).json(savedBlog)
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog', error: error.message })
  }
}

// @desc    Update a blog
// @route   PUT /api/blogs/:id
// @access  Private (Admin)
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params
    let blog = null

    if (!isNaN(id)) {
      blog = await Blog.findOne({ numericId: Number(id) })
    }
    if (!blog) {
      blog = await Blog.findOne({ slug: id.toLowerCase() })
    }
    if (!blog && id.match(/^[0-9a-fA-F]{24}$/)) {
      blog = await Blog.findById(id)
    }

    if (!blog) {
      return res.status(404).json({ message: 'Article not found' })
    }

    const fields = [
      'title', 'category', 'tag', 'excerpt', 'intro', 'readTime',
      'author', 'authorRole', 'image', 'accent', 'sections', 'keyTakeaways',
      'isFeatured', 'content', 'summary', 'published', 'tags',
    ]
    fields.forEach((field) => {
      if (req.body[field] !== undefined) blog[field] = req.body[field]
    })

    // Re-generate slug if title changed and no slug provided
    if (req.body.slug) {
      blog.slug = req.body.slug
    } else if (req.body.title && !blog.slug) {
      blog.slug = makeSlug(req.body.title)
    }

    const updatedBlog = await blog.save()
    res.json(updatedBlog)
  } catch (error) {
    res.status(500).json({ message: 'Error updating blog', error: error.message })
  }
}

// @desc    Delete a blog
// @route   DELETE /api/blogs/:id
// @access  Private (Admin)
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params
    let blog = null

    if (!isNaN(id)) {
      blog = await Blog.findOne({ numericId: Number(id) })
    }
    if (!blog) {
      blog = await Blog.findOne({ slug: id.toLowerCase() })
    }
    if (!blog && id.match(/^[0-9a-fA-F]{24}$/)) {
      blog = await Blog.findById(id)
    }

    if (!blog) {
      return res.status(404).json({ message: 'Article not found' })
    }

    await Blog.deleteOne({ _id: blog._id })
    res.json({ message: 'Article deleted successfully', id: blog._id, numericId: blog.numericId, slug: blog.slug })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog', error: error.message })
  }
}
