import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, User, X, ChevronRight } from 'lucide-react'

interface SpotlightPageProps {
  isDark: boolean
}

const REVIEWS = [
  {
    title: 'Mordew',
    author: 'Alex Pheby',
    genre: 'Dark Fantasy',
    rating: 5,
    reviewer: 'Laura',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80',
    summary: 'God is dead, his corpse hidden in the catacombs beneath Mordew — and that\'s just the beginning. A magnificent, skin-crawling dark fantasy that latches on like a leech.',
    full: [
      '"God is dead, his corpse hidden in the catacombs beneath Mordew."',
      'What a line! The cover had me already, but this line – the first thing that meets you on the back cover – sealed the deal.',
      'I have not seen enough people talking about this fantastic book. What starts off as an atmospheric, gloomy fantasy transpires into a ragtag heist that in turn shifts into a dark adventure of underbellies and unsightly sewer systems. Death looms, lurking in Nathan\'s periphery like a cataract.',
      'Magnificent, disturbing images; splendidly awful mobsters; vibrant body horror; and an ending that takes you by surprise, despite the warning signs the book gives: the irony, the sarcasm, the all-consuming bleakness simmering within the narrative at all times like worms in your lungs.',
      'The atmosphere, the tone, the skin-crawling descriptions – the world of Mordew is alive from the very first page. If you want a read that\'ll latch onto you like a leech, a narrative that\'ll sink its teeth in like a plague – until you\'re right there beside Nathan in the Mud, burying your corpse-cold hands into the living spawn, cringing at the half-living, half-perishing nibbling things within – do not hesitate to read this book.',
      'An absolute banger. Five stars.',
    ],
  },
  {
    title: 'Prophet',
    author: 'Helen Macdonald and Sin Blaché',
    genre: 'Horror / Sci-Fi / Gothic',
    rating: 5,
    reviewer: 'Sophie',
    image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80',
    summary: 'A shape-shifting romp with big ideas and a bigger heart. Weird sci-fi meets gothic horror — and I fell head over heels for it almost instantly.',
    full: [
      'I picked up Prophet (2023) from my library a few days ago not knowing anything about the book, besides a quick glance at the blurb and a quotation from C Pam Zhang declaring the novel a \'shape-shifting romp with big ideas and a bigger heart.\' I did not expect, at all, to fall—pretty much instantaneously—head over heels in love with it.',
      'I adore weird science-fiction; the sort that takes the fugly grotesqueness of horror and blends it with the mind-bending liminality of the gothic. Prophet has this weird mix and is a refreshing genre-bender of horror, science-fiction, and the gothic, all tied up with questions of nostalgia, trauma, and liminality.',
      'I think what\'s most impressive about this novel is its characters, as I felt a quick love for Rao, Adam, and Hunter. There is a tantalising tension between our band of characters despite the domestic feel of their relationships; there was always something simmering under the surface, slowly bubbling up, that kept me turning the pages.',
      'Ultimately, I found myself waking up each morning excited to read Prophet and thinking about it as soon as my shift ended at work, or I got back in from the shop. There haven\'t been many books this year which have gripped me like that. I loved the feel of the book, the writing style, the perfect execution of a romance always on the edge, teetering, and I really loved the weird, liminal spaces. Needless to say, after borrowing a copy from the library, I\'ll need to add this one to the collection.',
      'Five Stars.',
    ],
  },
  {
    title: 'The Long Way to a Small, Angry Planet',
    author: 'Becky Chambers',
    genre: 'Solarpunk / Sci-Fi',
    rating: 5,
    reviewer: 'Sophie',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80',
    summary: 'Warm, inclusive, and alive. A small tunnelling ship crewed by different species just trying to make an honest living — this book will make you feel at home in the universe.',
    full: [
      'I was surprised by what sort of book this is. I contend I was misled by the title and starry sky on the cover, which suggest grand and bleak musings on the end of our isolation in the vast universe. Perhaps the hubris of billionaires and world leaders causing our small and angry planet\'s destruction. (Spoiler alert: the small and angry planet is not Earth). And it is all those musings, but as distant scenery.',
      'Many centuries after the earth\'s ecosystem collapsed and only the richest amongst us escaped to Mars, there is a brilliant little stage set by Chambers for life to prevail: a small interplanetary tunnelling ship, crewed with different species just trying to make an honest living post-earth.',
      'Chambers fills the ship with companionable relationships, laughter, kindness – all that good stuff. What makes the book so warm and alive is the commitment to inclusivity. Humans break bread with Aeluons, Grum, and anyone else who cares to join. Immediately striking is the modifications in the ship to allow different bodies to live comfortably (carpet on the metal grids so that the reptilian character Sissix doesn\'t get her claws stuck) and a sizeable paragraph of dialogue between lovers Jenk the human and Lovelace the AI highlighting that not every person with disabilities wishes to become able-bodied, and accordingly should be received and accommodated as they are.',
      'The only criticism I have is that early on, before Kizzy\'s character is fleshed out, the dialogue characterises her as a bit one-dimensional – think late 2000\'s \'I\'m so random!\' energy. Minding this exception, the novel\'s biggest strength is by far the characterisations – they are universally thoughtful and selfless, and increasingly nuanced as you read on. This does mean the plot is a little thin on the ground, but the richness of Chambers\' characters and world-building more than makes up for this.',
      '5 stars. Onwards to the sequel!',
    ],
  },
  {
    title: 'Under the Eye of the Big Bird',
    author: 'Hiromi Kawakami',
    genre: 'Speculative Fiction',
    rating: 4,
    reviewer: 'Sophie',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80',
    summary: 'Shortlisted for the International Booker Prize. Strange, beautifully written, and rewards active readers willing to lose themselves in its quietly radical world.',
    full: [
      'Shortlisted for the International Booker Prize, originally published in 2016 in Japanese, and translated by Asa Yoneda into English for release in the UK earlier this year, this is a strange, beautifully written, speculative fiction novel – except it\'s not. It\'s more accurate to describe this novel as a series of interconnected short stories which eventually form a cohesive whole.',
      'The premise is how humans respond to the end of the anthropocene (the end of the era of human dominance over the planet), and the effects of artificially extending our lifespans, of mixing our DNA with other species, and of completely rearranging societal constructs like the nuclear family in order to support these new ways of living.',
      'I\'ve tried my best to describe the plot, but part of the charm is that the plot – and even the characters – is heavily obscured by beautiful prose. Keeping track of characters is rewarding, though, as they\'ll often pop up a hundred pages later to reveal something crucial about Kawakami\'s world. A background character from chapter four may be the star of chapter eleven. (The eponymous bird in question doesn\'t appear until roughly the halfway mark). Such is the density of the world that it can be slow-going until the various strands weave together, I\'ll admit. This book rewards readers who read actively; meaning scribbling notes in the margins if you\'re like me, or if that\'s taboo, keeping a pen and notebook handy to keep track of which characters appear in which chapters.',
      'For those of you who\'ve read this book and are still digesting it, as I am, \'intriguing in a good way\' is a useful, succinct response if someone asks you what it\'s about. Any more than that is best found out for oneself.',
    ],
  },
]

// Spotlights data kept for future use
// Spotlights content — ready for when we have real entries
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

interface ReviewModalProps {
  review: typeof REVIEWS[0]
  isDark: boolean
  onClose: () => void
}

function ReviewModal({ review, isDark, onClose }: ReviewModalProps) {
  const surface = isDark ? 'rgba(26,9,0,0.98)' : '#ffffff'
  const border = isDark ? 'rgba(193,68,14,0.25)' : 'rgba(193,68,14,0.15)'
  const textColor = isDark ? '#fff8f0' : '#2a0e00'
  const mutedColor = isDark ? 'rgba(255,248,240,0.82)' : 'rgba(42,14,0,0.75)'
  const divider = isDark ? 'rgba(193,68,14,0.18)' : 'rgba(193,68,14,0.12)'

  // Close on Escape, lock body scroll
  useState(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="review-modal-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[85vh] flex flex-col rounded-t-3xl sm:rounded-3xl overflow-hidden"
        style={{ background: surface, border: `1px solid ${border}`, boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}
      >
        {/* Header */}
        <div
          className="flex-shrink-0 flex items-start justify-between gap-4 px-7 py-5 border-b"
          style={{ borderColor: divider }}
        >
          <div>
            <p className="font-heading text-xs tracking-widest uppercase mb-1" style={{ color: '#c1440e' }}>
              {review.genre}
            </p>
            <h2
              id="review-modal-title"
              className="font-display font-bold leading-tight"
              style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', color: textColor }}
            >
              {review.title}
            </h2>
            <p className="font-heading text-sm mt-0.5" style={{ color: mutedColor, fontStyle: 'italic' }}>
              {review.author}
            </p>
          </div>
          <button
            onClick={onClose}
            autoFocus
            className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full transition-opacity hover:opacity-70 min-h-[44px] min-w-[44px]"
            aria-label="Close review"
            style={{ background: isDark ? 'rgba(255,248,240,0.08)' : 'rgba(42,14,0,0.06)', color: textColor }}
          >
            <X size={15} aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-7 py-6 space-y-5">
          <div className="flex items-center gap-3 pb-5" style={{ borderBottom: `1px solid ${divider}` }}>
            <StarRating rating={review.rating} isDark={isDark} />
            <div className="flex items-center gap-1.5">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: isDark ? 'rgba(193,68,14,0.2)' : 'rgba(193,68,14,0.1)' }}
                aria-hidden="true"
              >
                <User size={10} style={{ color: '#c1440e' }} />
              </div>
              <span className="font-heading text-xs" style={{ color: isDark ? 'rgba(255,248,240,0.45)' : 'rgba(42,14,0,0.4)', fontStyle: 'italic' }}>
                Reviewed by {review.reviewer}
              </span>
            </div>
          </div>

          {review.full.map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "'Cinzel', serif",
                lineHeight: 1.9,
                color: mutedColor,
                fontSize: '0.93rem',
                fontStyle: i === 0 ? 'italic' : 'normal',
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function SpotlightPage({ isDark }: SpotlightPageProps) {
  const [openReview, setOpenReview] = useState<typeof REVIEWS[0] | null>(null)

  const textColor = isDark ? '#fff8f0' : '#2a0e00'
  const mutedColor = isDark ? 'rgba(255,248,240,0.82)' : 'rgba(42,14,0,0.75)'
  const subtleColor = isDark ? 'rgba(255,248,240,0.45)' : 'rgba(42,14,0,0.4)'
  const cardBg = isDark ? 'rgba(30,14,2,0.75)' : 'rgba(255,255,255,0.92)'
  const cardBorder = isDark ? 'rgba(193,68,14,0.28)' : 'rgba(193,68,14,0.18)'

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Page header */}
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <span className="font-heading text-xs tracking-widest uppercase" style={{ color: '#c1440e' }}>
            Reviews &amp; Spotlights
          </span>
          <h1
            className="font-display font-bold mt-2 mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: textColor }}
          >
            Underground Reads
          </h1>
          <p style={{ color: mutedColor, fontFamily: "'Cinzel', serif", fontStyle: 'italic', maxWidth: '38rem' }}>
            Our editors spotlight the books they can't put down. Click any card to read the full review.
          </p>
          <div className="mt-4 h-px w-32" style={{ background: 'linear-gradient(to right, #c1440e, transparent)' }} />
        </motion.header>

        {/* Reviews grid */}
        <section aria-label="Book reviews">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {REVIEWS.map((review, i) => (
              <motion.button
                key={review.title}
                onClick={() => setOpenReview(review)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="group text-left rounded-2xl overflow-hidden flex flex-col transition-shadow"
                style={{ background: cardBg, border: `1px solid ${cardBorder}` }}
                aria-label={`Read full review of ${review.title} by ${review.author}`}
              >
                {/* Cover image */}
                <div className="relative h-36 overflow-hidden flex-shrink-0">
                  <img
                    src={review.image}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: isDark ? 'brightness(0.5) saturate(1.2)' : 'brightness(0.65)' }}
                  />
                  <div
                    className="absolute inset-0"
                    aria-hidden="true"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }}
                  />
                  <span
                    className="absolute bottom-3 left-3 font-heading text-xs tracking-widest uppercase px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(193,68,14,0.85)', color: '#fff', backdropFilter: 'blur(4px)' }}
                  >
                    {review.genre}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 px-5 py-5">
                  <h3 className="font-display font-bold leading-tight mb-0.5" style={{ fontSize: '1rem', color: textColor }}>
                    {review.title}
                  </h3>
                  <p className="font-heading text-xs mb-3" style={{ color: subtleColor, fontStyle: 'italic' }}>
                    {review.author}
                  </p>
                  <StarRating rating={review.rating} isDark={isDark} />
                  <p
                    className="mt-3 flex-1 text-xs leading-relaxed line-clamp-3"
                    style={{ fontFamily: "'Cinzel', serif", color: mutedColor, fontStyle: 'italic' }}
                  >
                    "{review.summary}"
                  </p>
                  <div
                    className="mt-4 pt-4 flex items-center justify-between"
                    style={{ borderTop: `1px solid ${cardBorder}` }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: isDark ? 'rgba(193,68,14,0.2)' : 'rgba(193,68,14,0.1)' }}
                        aria-hidden="true"
                      >
                        <User size={10} style={{ color: '#c1440e' }} />
                      </div>
                      <span className="font-heading text-xs" style={{ color: subtleColor }}>
                        {review.reviewer}
                      </span>
                    </div>
                    <span
                      className="inline-flex items-center gap-1 font-heading text-xs tracking-wider uppercase transition-all group-hover:gap-2"
                      style={{ color: '#c1440e' }}
                      aria-hidden="true"
                    >
                      Read <ChevronRight size={11} />
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Spotlights section — hidden until content is ready */}
        {false && PLACEHOLDER_SPOTLIGHTS.length > 0 && null}

      </div>

      {/* Review modal */}
      <AnimatePresence>
        {openReview && (
          <ReviewModal
            review={openReview}
            isDark={isDark}
            onClose={() => setOpenReview(null)}
          />
        )}
      </AnimatePresence>
    </main>
  )
}
