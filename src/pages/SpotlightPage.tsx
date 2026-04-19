import { motion } from 'framer-motion'
import { Star, User } from 'lucide-react'

interface SpotlightPageProps {
  isDark: boolean
}

const PLACEHOLDER_REVIEWS = [
  {
    title: 'The Fragile Threads of Power',
    author: 'Eliza Clark',
    genre: 'Gothic Fantasy',
    rating: 5,
    excerpt: 'A slow-burn gothic that earns every page of its considerable length. Clark writes cruelty with a scalpel.',
    image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400&q=80',
    reviewer: 'Hannah',
  },
  {
    title: 'All the White Spaces',
    author: 'Ally Wilkes',
    genre: 'Horror / Sci-Fi',
    rating: 4,
    excerpt: 'Antarctic horror done right. Wilkes understands that the most terrifying thing isn\'t the monster — it\'s the ice.',
    image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=400&q=80',
    reviewer: 'Laura',
  },
  {
    title: 'A Psalm for the Wild-Built',
    author: 'Becky Chambers',
    genre: 'Solarpunk',
    rating: 5,
    excerpt: 'Tender, philosophical, and quietly radical. A story about rest that makes you want to stop everything and think.',
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&q=80',
    reviewer: 'Sophie',
  },
]

const PLACEHOLDER_SPOTLIGHTS = [
  {
    name: 'Jeff VanderMeer',
    descriptor: 'Author of the Southern Reach Trilogy',
    blurb: 'VanderMeer is doing something no one else is doing in weird fiction — building ecosystems that feel genuinely alien while remaining devastatingly human at their core.',
    tags: ['Weird Fiction', 'New Weird', 'Eco-Horror'],
    image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&q=80',
    spotter: 'Daria',
  },
  {
    name: 'Sayaka Murata',
    descriptor: 'Author of Convenience Store Woman',
    blurb: 'Murata writes outsiders with such precision that you start to wonder if society is the strange one. Her sci-fi turns that lens up to eleven.',
    tags: ['Speculative', 'Literary', 'Japanese Fiction'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    spotter: 'Sophie',
  },
]

function StarRating({ rating, isDark }: { rating: number; isDark: boolean }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={12}
          aria-hidden="true"
          style={{
            fill: i < rating ? '#FFD700' : 'transparent',
            color: i < rating ? '#FFD700' : (isDark ? 'rgba(255,248,240,0.2)' : 'rgba(42,14,0,0.15)'),
          }}
        />
      ))}
    </div>
  )
}

export function SpotlightPage({ isDark }: SpotlightPageProps) {
  const textColor = isDark ? '#fff8f0' : '#2a0e00'
  const mutedColor = isDark ? 'rgba(255,248,240,0.82)' : 'rgba(42,14,0,0.75)'
  const subtleColor = isDark ? 'rgba(255,248,240,0.45)' : 'rgba(42,14,0,0.4)'
  const cardBg = isDark ? 'rgba(30,14,2,0.75)' : 'rgba(255,255,255,0.92)'
  const cardBorder = isDark ? 'rgba(193,68,14,0.28)' : 'rgba(193,68,14,0.18)'
  const tealText = isDark ? '#00a896' : '#007a6e'

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Page header */}
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <span className="font-heading text-xs tracking-widest uppercase" style={{ color: tealText }}>
            Reviews &amp; Spotlights
          </span>
          <h1
            className="font-display font-bold mt-2 mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: textColor }}
          >
            Underground Reads
          </h1>
          <p style={{ color: mutedColor, fontFamily: "'Cinzel', serif", fontStyle: 'italic', maxWidth: '38rem' }}>
            Our editors spotlight the books they can't put down and the authors doing something no one else is.
          </p>
          <div className="mt-4 h-px w-32" style={{ background: `linear-gradient(to right, ${tealText}, transparent)` }} />
        </motion.header>

        {/* ── Reviews ── */}
        <section aria-label="Book reviews" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <h2 className="font-display font-bold text-xl" style={{ color: textColor }}>Reviews</h2>
            <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${cardBorder}, transparent)` }} />
            <span
              className="font-heading text-xs tracking-widest uppercase px-3 py-1 rounded-full"
              style={{
                background: isDark ? 'rgba(193,68,14,0.12)' : 'rgba(193,68,14,0.07)',
                color: '#c1440e',
                border: '1px solid rgba(193,68,14,0.3)',
              }}
            >
              Placeholder
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PLACEHOLDER_REVIEWS.map((review, i) => (
              <motion.article
                key={review.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
              >
                {/* Book cover image */}
                <div className="relative h-40 overflow-hidden flex-shrink-0">
                  <img
                    src={review.image}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                    style={{ filter: isDark ? 'brightness(0.55) saturate(1.2)' : 'brightness(0.7)' }}
                  />
                  <div
                    className="absolute inset-0"
                    aria-hidden="true"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }}
                  />
                  <span
                    className="absolute bottom-3 left-3 font-heading text-xs tracking-widest uppercase px-2 py-0.5 rounded-full"
                    style={{
                      background: 'rgba(193,68,14,0.85)',
                      color: '#fff',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    {review.genre}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 px-5 py-5">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-display font-bold leading-tight" style={{ fontSize: '0.95rem', color: textColor }}>
                      {review.title}
                    </h3>
                  </div>
                  <p className="font-heading text-xs mb-3" style={{ color: subtleColor, fontStyle: 'italic' }}>
                    {review.author}
                  </p>
                  <StarRating rating={review.rating} isDark={isDark} />
                  <p
                    className="mt-3 flex-1 text-xs leading-relaxed"
                    style={{ fontFamily: "'Cinzel', serif", color: mutedColor, fontStyle: 'italic' }}
                  >
                    "{review.excerpt}"
                  </p>
                  <div
                    className="mt-4 pt-4 flex items-center gap-2"
                    style={{ borderTop: `1px solid ${cardBorder}` }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: isDark ? 'rgba(193,68,14,0.2)' : 'rgba(193,68,14,0.1)' }}
                      aria-hidden="true"
                    >
                      <User size={10} style={{ color: '#c1440e' }} />
                    </div>
                    <span className="font-heading text-xs" style={{ color: subtleColor }}>
                      Reviewed by {review.reviewer}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ── Spotlights ── */}
        <section aria-label="Author spotlights" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <h2 className="font-display font-bold text-xl" style={{ color: textColor }}>Spotlights</h2>
            <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${cardBorder}, transparent)` }} />
            <span
              className="font-heading text-xs tracking-widest uppercase px-3 py-1 rounded-full"
              style={{
                background: isDark ? 'rgba(0,168,150,0.12)' : 'rgba(0,168,150,0.07)',
                color: tealText,
                border: `1px solid rgba(0,168,150,0.3)`,
              }}
            >
              Placeholder
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PLACEHOLDER_SPOTLIGHTS.map((spot, i) => (
              <motion.article
                key={spot.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl overflow-hidden flex flex-col sm:flex-row"
                style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
              >
                {/* Side image */}
                <div className="relative sm:w-36 flex-shrink-0 h-40 sm:h-auto overflow-hidden">
                  <img
                    src={spot.image}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover object-top"
                    style={{ filter: isDark ? 'brightness(0.5) saturate(1.1) sepia(0.2)' : 'brightness(0.65) saturate(0.9)' }}
                  />
                  <div
                    className="absolute inset-0 sm:hidden"
                    aria-hidden="true"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }}
                  />
                  <div
                    className="absolute inset-0 hidden sm:block"
                    aria-hidden="true"
                    style={{ background: 'linear-gradient(to right, transparent 60%, rgba(0,0,0,0.3) 100%)' }}
                  />
                </div>

                {/* Body */}
                <div className="flex-1 px-6 py-5 flex flex-col justify-center">
                  <span
                    className="font-heading text-xs tracking-widest uppercase mb-2 inline-block"
                    style={{ color: tealText }}
                  >
                    Editor's Pick
                  </span>
                  <h3 className="font-display font-bold mb-0.5" style={{ fontSize: '1.1rem', color: textColor }}>
                    {spot.name}
                  </h3>
                  <p className="font-heading text-xs mb-4" style={{ color: subtleColor, fontStyle: 'italic' }}>
                    {spot.descriptor}
                  </p>
                  <p
                    className="text-xs leading-relaxed mb-4"
                    style={{ fontFamily: "'Cinzel', serif", color: mutedColor }}
                  >
                    {spot.blurb}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {spot.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-heading text-xs tracking-wider uppercase px-2 py-0.5 rounded-full"
                        style={{
                          background: isDark ? 'rgba(0,168,150,0.1)' : 'rgba(0,168,150,0.07)',
                          color: tealText,
                          border: '1px solid rgba(0,168,150,0.25)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: isDark ? 'rgba(0,168,150,0.15)' : 'rgba(0,168,150,0.1)' }}
                      aria-hidden="true"
                    >
                      <User size={10} style={{ color: tealText }} />
                    </div>
                    <span className="font-heading text-xs" style={{ color: subtleColor }}>
                      Spotted by {spot.spotter}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Follow nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 text-center"
          style={{
            background: isDark ? 'rgba(0,168,150,0.06)' : 'rgba(0,168,150,0.04)',
            border: '1px solid rgba(0,168,150,0.2)',
          }}
        >
          <p className="font-heading text-xs tracking-widest uppercase mb-2" style={{ color: tealText }}>
            More coming soon
          </p>
          <p
            className="text-sm mb-5 max-w-md mx-auto"
            style={{ fontFamily: "'Cinzel', serif", fontStyle: 'italic', color: mutedColor }}
          >
            Our editors post reviews and spotlights as they read. Follow us for real-time picks.
          </p>
          <a
            href="https://www.instagram.com/thenonsenserealm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading text-sm tracking-wider uppercase transition-opacity hover:opacity-80 min-h-[44px]"
            aria-label="Follow The Nonsense Realm on Instagram (opens in new tab)"
            style={{
              background: isDark ? 'rgba(0,168,150,0.15)' : 'rgba(0,168,150,0.1)',
              border: `1px solid rgba(0,168,150,0.35)`,
              color: tealText,
            }}
          >
            @thenonsenserealm
          </a>
        </motion.div>

      </div>
    </main>
  )
}
