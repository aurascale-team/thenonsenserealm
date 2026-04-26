import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, User, ChevronLeft, ChevronRight } from 'lucide-react'

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
    image: '/mordew.jpg',
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
    reviewer: 'Laura',
    image: '/prophet.jpg',
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
    image: '/long long way.jpg',
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
    image: '/under the eye of the big bird.jpg',
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

// ── Book-flip reviews modal ───────────────────────────────────────────────────
// Each spread = one full review. Left page = title/author/stars. Right page = review text.
// Flipping moves to the next review entirely.

function grain(opacity: number) {
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='${opacity}'/%3E%3C/svg%3E")`
}

interface ReviewTheme {
  paper: string; paperLeft: string; ink: string; inkMuted: string
  inkFaint: string; rule: string; isDark: boolean
}

function ReviewLeftPage({ review, t, idx, total }: { review: typeof REVIEWS[0]; t: ReviewTheme; idx: number; total: number }) {
  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
      background: t.paperLeft, backgroundImage: grain(t.isDark ? 0.05 : 0.07),
      padding: '2rem 2.5rem 1.5rem 3rem', overflow: 'hidden',
    }}>
      <p className="font-heading text-xs tracking-widest uppercase flex-shrink-0 mb-3" style={{ color: t.inkFaint, letterSpacing: '0.3em' }}>
        The Nonsense Realm · Reviews
      </p>
      {/* Cover image */}
      <div className="flex-shrink-0 mb-4" style={{ height: '38%', overflow: 'hidden', border: `1px solid ${t.rule}` }}>
        <img
          src={review.image}
          alt={`Cover of ${review.title}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>
      <div className="flex items-center gap-3 mb-3" aria-hidden="true">
        <div className="flex-1 h-px" style={{ background: t.rule }} />
        <span style={{ color: t.rule, fontSize: '0.65rem' }}>◆</span>
        <div className="flex-1 h-px" style={{ background: t.rule }} />
      </div>
      <p className="font-heading text-xs tracking-widest uppercase mb-2" style={{ color: t.inkFaint }}>{review.genre}</p>
      <h2 id="review-modal-title" className="font-display font-bold mb-1"
        style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', color: t.ink, lineHeight: 1.15 }}>
        {review.title}
      </h2>
      <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontStyle: 'italic', fontSize: '0.85rem', color: t.inkMuted }}>
        {review.author}
      </p>
      <div className="flex items-center gap-3 mt-3">
        <StarRating rating={review.rating} isDark={t.isDark} />
        <span style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.75rem', color: t.inkFaint, fontStyle: 'italic' }}>
          reviewed by {review.reviewer}
        </span>
      </div>
      <p className="font-heading text-xs text-center mt-auto pt-3 flex-shrink-0" style={{ color: t.inkFaint }}>— {idx + 1} / {total} —</p>
    </div>
  )
}

function ReviewRightPage({ review, t, idx }: { review: typeof REVIEWS[0]; t: ReviewTheme; idx: number }) {
  const firstPara = review.full[0]
  const restParas = review.full.slice(1)
  const dropChar = firstPara.charAt(0) === '"' ? firstPara.charAt(1) : firstPara.charAt(0)
  const afterDrop = firstPara.charAt(0) === '"' ? '"' + firstPara.slice(2) : firstPara.slice(1)

  return (
    <div style={{
      width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
      background: t.paper, backgroundImage: grain(t.isDark ? 0.04 : 0.06),
      padding: '3rem 1rem 2rem 2.5rem', overflow: 'hidden',
    }}>
      <p className="font-heading text-xs tracking-widest uppercase mb-4 flex-shrink-0" style={{ color: t.inkFaint }}>
        {review.title}
      </p>
      <div className="flex-1 overflow-y-auto pr-4" style={{ scrollbarWidth: 'thin' }}>
        <p style={{ fontFamily: "'Glacial Indifference', sans-serif", lineHeight: 2, color: t.inkMuted, fontSize: '0.95rem', textAlign: 'justify', fontStyle: 'italic' }}>
          <span aria-hidden="true" style={{
            float: 'left', fontFamily: "'Cinzel Decorative', serif",
            fontSize: '3.8rem', lineHeight: '0.78',
            marginRight: '0.07em', marginTop: '0.1em',
            color: t.ink, fontWeight: 900,
          }}>
            {dropChar}
          </span>
          {afterDrop}
        </p>
        {restParas.map((para, pi) => (
          <p key={pi} className="mt-5"
            style={{ fontFamily: "'Glacial Indifference', sans-serif", lineHeight: 2, color: t.inkMuted, fontSize: '0.95rem', textAlign: 'justify' }}>
            {para}
          </p>
        ))}
      </div>
      <p className="font-heading text-xs text-center mt-3 flex-shrink-0" style={{ color: t.inkFaint }}>— {idx + 1} —</p>
    </div>
  )
}

interface ReviewsBookProps {
  isDark: boolean
  onClose: () => void
  initialIndex?: number
}

function ReviewsBook({ isDark, onClose, initialIndex = 0 }: ReviewsBookProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 640)

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const total = REVIEWS.length
  const [current, setCurrent] = useState(initialIndex)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDir, setFlipDir] = useState<'forward' | 'back'>('forward')
  const [next, setNext] = useState(initialIndex)

  useEffect(() => { closeRef.current?.focus() }, [])

  const triggerFlip = (dir: 'forward' | 'back', target: number) => {
    if (isFlipping) return
    setFlipDir(dir); setNext(target); setIsFlipping(true)
    setTimeout(() => { setCurrent(target); setIsFlipping(false) }, 480)
  }

  const goForward = () => { if (current < total - 1) triggerFlip('forward', current + 1) }
  const goBack = () => { if (current > 0) triggerFlip('back', current - 1) }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goForward()
      if (e.key === 'ArrowLeft') goBack()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = '' }
  }, [onClose, current, isFlipping])

  const t: ReviewTheme = {
    paper: isDark ? '#1c0f06' : '#f4ede0',
    paperLeft: isDark ? '#160c04' : '#ede4d0',
    ink: isDark ? '#e8ddd0' : '#1a0900',
    inkMuted: isDark ? 'rgba(232,221,208,0.92)' : 'rgba(26,9,0,0.82)',
    inkFaint: isDark ? 'rgba(232,221,208,0.28)' : 'rgba(26,9,0,0.25)',
    rule: isDark ? 'rgba(193,68,14,0.4)' : 'rgba(193,68,14,0.32)',
    isDark,
  }

  const bookShadow = isDark
    ? '16px 16px 0 rgba(0,0,0,0.55), 0 48px 100px rgba(0,0,0,0.75)'
    : '16px 16px 0 rgba(26,9,0,0.18), 0 48px 100px rgba(0,0,0,0.45)'

  const flipFromRight = flipDir === 'forward'
  const cur = REVIEWS[current]
  const nxt = REVIEWS[next]

  // Desktop: render a full two-page spread for a given review index
  const renderDesktopSpread = (idx: number, zIndex = 0, interactive = false) => {
    const rev = REVIEWS[idx]
    return (
      <div className="absolute inset-0 flex" style={{ zIndex }}>
        {/* Left page: click to go back (non-scrollable content) */}
        <div
          onClick={interactive && !isFlipping && idx > 0 ? goBack : undefined}
          style={{ width: '50%', height: '100%', borderRight: `1px solid ${t.rule}`, cursor: interactive && idx > 0 ? 'w-resize' : 'default' }}
        >
          <ReviewLeftPage review={rev} t={t} idx={idx} total={total} />
        </div>
        {/* Right page: scrollable review text, click right edge to advance */}
        <div style={{ width: '50%', height: '100%', position: 'relative' }}>
          <ReviewRightPage review={rev} t={t} idx={idx} />
          {interactive && idx < total - 1 && (
            <button
              onClick={!isFlipping ? goForward : undefined}
              className="absolute right-0 top-0 bottom-0 w-10 opacity-0 cursor-e-resize"
              aria-label="Next review" style={{ zIndex: 5 }}
            />
          )}
        </div>
      </div>
    )
  }

  // Mobile: show left page (cover) on even, right page (text) on odd sub-index
  // For simplicity on mobile: show left page only (tap right to see review text)
  const [mobileTab, setMobileTab] = useState<'left' | 'right'>('left')
  useEffect(() => { setMobileTab('left') }, [current])

  const renderMobileSpread = (idx: number, tab: 'left' | 'right', zIndex = 0) => {
    const rev = REVIEWS[idx]
    return (
      <div className="absolute inset-0" style={{ zIndex }}>
        {tab === 'left'
          ? <ReviewLeftPage review={rev} t={t} idx={idx} total={total} />
          : <ReviewRightPage review={rev} t={t} idx={idx} />}
      </div>
    )
  }

  // Mobile flip logic: tap right → show text; tap left → show cover; at edges navigate reviews
  const [mobileIsFlipping, setMobileIsFlipping] = useState(false)
  const [mobileFlipDir, setMobileFlipDir] = useState<'forward' | 'back'>('forward')
  const [mobileNextTab, setMobileNextTab] = useState<'left' | 'right'>('left')
  const [mobileNextIdx, setMobileNextIdx] = useState(0)

  const triggerMobileFlip = (dir: 'forward' | 'back', toIdx: number, toTab: 'left' | 'right') => {
    if (mobileIsFlipping) return
    setMobileFlipDir(dir); setMobileNextIdx(toIdx); setMobileNextTab(toTab); setMobileIsFlipping(true)
    setTimeout(() => { setCurrent(toIdx); setMobileTab(toTab); setMobileIsFlipping(false) }, 480)
  }

  const mobileGoForward = () => {
    if (mobileTab === 'left') triggerMobileFlip('forward', current, 'right')
    else if (current < total - 1) triggerMobileFlip('forward', current + 1, 'left')
  }
  const mobileGoBack = () => {
    if (mobileTab === 'right') triggerMobileFlip('back', current, 'left')
    else if (current > 0) triggerMobileFlip('back', current - 1, 'right')
  }

  const mobileFlipFromRight = mobileFlipDir === 'forward'

  return (
    <motion.div
      ref={overlayRef}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5"
      style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(12px)' }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
      role="dialog" aria-modal="true" aria-labelledby="review-modal-title"
    >
      <div className="relative flex flex-col" style={{ width: '100%', maxWidth: '1100px' }}>

        {/* Top bar */}
        <div className="flex items-center justify-between mb-3 px-1">
          <p className="font-heading text-xs tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
            {current + 1} / {total}
          </p>
          <button ref={closeRef} onClick={onClose}
            className="font-heading text-xs tracking-wider uppercase transition-opacity hover:opacity-70 min-h-[44px] px-2"
            aria-label="Close" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Close
          </button>
        </div>

        {/* Book */}
        <div className="relative w-full" style={{ height: isMobile ? 'min(72vh, 580px)' : 'min(76vh, 680px)', boxShadow: bookShadow }}>
          {isMobile ? (
            <>
              {mobileIsFlipping && renderMobileSpread(mobileNextIdx, mobileNextTab, 0)}
              {!mobileIsFlipping && renderMobileSpread(current, mobileTab, 1)}
              {mobileIsFlipping && (
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: mobileFlipFromRight ? -180 : 180 }}
                  transition={{ duration: 0.48, ease: [0.4, 0, 0.2, 1] }}
                  style={{
                    position: 'absolute', inset: 0,
                    transformOrigin: mobileFlipFromRight ? 'left center' : 'right center',
                    transformStyle: 'preserve-3d', zIndex: 10,
                  }}
                >
                  <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden' }}>
                    {mobileTab === 'left'
                      ? <ReviewLeftPage review={REVIEWS[current]} t={t} idx={current} total={total} />
                      : <ReviewRightPage review={REVIEWS[current]} t={t} idx={current} />}
                  </div>
                  <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', filter: 'brightness(0.5)' }}>
                    {mobileTab === 'left'
                      ? <ReviewLeftPage review={REVIEWS[current]} t={t} idx={current} total={total} />
                      : <ReviewRightPage review={REVIEWS[current]} t={t} idx={current} />}
                  </div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 0.5, 0] }} transition={{ duration: 0.48 }}
                    style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
                      background: mobileFlipFromRight
                        ? 'linear-gradient(to right, rgba(0,0,0,0.35) 0%, transparent 60%)'
                        : 'linear-gradient(to left, rgba(0,0,0,0.35) 0%, transparent 60%)',
                    }} />
                </motion.div>
              )}
              <button onClick={mobileGoBack}
                disabled={(mobileTab === 'left' && current <= 0) || mobileIsFlipping}
                className="absolute left-0 top-0 bottom-0 w-1/3 opacity-0 cursor-pointer disabled:cursor-default"
                aria-label="Previous" style={{ zIndex: 15 }} />
              <button onClick={mobileGoForward}
                disabled={(mobileTab === 'right' && current >= total - 1) || mobileIsFlipping}
                className="absolute right-0 top-0 bottom-0 w-1/3 opacity-0 cursor-pointer disabled:cursor-default"
                aria-label="Next" style={{ zIndex: 15 }} />
            </>
          ) : (
            <>
              {isFlipping && renderDesktopSpread(next, 0)}
              {!isFlipping && renderDesktopSpread(current, 1, true)}
              {isFlipping && (
                <>
                  {/* Still half */}
                  <div className="absolute inset-0 flex pointer-events-none" style={{ zIndex: 5 }}>
                    {flipFromRight ? (
                      <div style={{ width: '50%', height: '100%', borderRight: `1px solid ${t.rule}` }}>
                        <ReviewLeftPage review={cur} t={t} idx={current} total={total} />
                      </div>
                    ) : (
                      <>
                        <div style={{ width: '50%' }} />
                        <div style={{ width: '50%', height: '100%' }}>
                          <ReviewRightPage review={cur} t={t} idx={current} />
                        </div>
                      </>
                    )}
                  </div>
                  {/* Flipping half */}
                  <motion.div
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: flipFromRight ? -180 : 180 }}
                    transition={{ duration: 0.48, ease: [0.4, 0, 0.2, 1] }}
                    style={{
                      position: 'absolute', top: 0, bottom: 0, width: '50%',
                      ...(flipFromRight ? { left: '50%', transformOrigin: 'left center' } : { right: '50%', transformOrigin: 'right center' }),
                      transformStyle: 'preserve-3d', zIndex: 10, perspective: '1400px',
                    }}
                  >
                    <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden' }}>
                      {flipFromRight
                        ? <ReviewRightPage review={cur} t={t} idx={current} />
                        : <ReviewLeftPage review={cur} t={t} idx={current} total={total} />}
                    </div>
                    <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', filter: 'brightness(0.55)' }}>
                      {flipFromRight
                        ? <ReviewRightPage review={nxt} t={t} idx={next} />
                        : <ReviewLeftPage review={nxt} t={t} idx={next} total={total} />}
                    </div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 0.6, 0] }} transition={{ duration: 0.48 }}
                      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
                        background: flipFromRight
                          ? 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 50%)'
                          : 'linear-gradient(to left, rgba(0,0,0,0.4) 0%, transparent 50%)',
                      }} />
                  </motion.div>
                </>
              )}
              {/* Spine */}
              <div className="absolute inset-y-0 pointer-events-none" aria-hidden="true" style={{
                left: '50%', transform: 'translateX(-50%)', width: '50px', zIndex: 20,
                background: isDark
                  ? 'linear-gradient(to right, rgba(0,0,0,0.45) 0%, transparent 50%, rgba(0,0,0,0.3) 100%)'
                  : 'linear-gradient(to right, rgba(0,0,0,0.12) 0%, transparent 50%, rgba(0,0,0,0.08) 100%)',
              }} />
            </>
          )}
        </div>

        {/* Nav */}
        <div className="flex items-center justify-between mt-4 px-1">
          <button onClick={isMobile ? mobileGoBack : goBack}
            disabled={isMobile ? ((mobileTab === 'left' && current <= 0) || mobileIsFlipping) : (current <= 0 || isFlipping)}
            className="flex items-center gap-2 font-heading text-xs tracking-wider uppercase transition-opacity hover:opacity-80 disabled:opacity-20 min-h-[44px] px-3"
            style={{ color: 'rgba(255,255,255,0.6)' }}>
            <ChevronLeft size={16} aria-hidden="true" /> Prev
          </button>
          <div className="flex items-center gap-2">
            {REVIEWS.map((rev, i) => (
              <button key={i}
                onClick={() => { if (!(isMobile ? mobileIsFlipping : isFlipping) && i !== current) triggerFlip(i > current ? 'forward' : 'back', i) }}
                aria-label={`Go to review: ${rev.title}`}
                className="rounded-full transition-all"
                style={{ width: i === current ? 20 : 6, height: 6, background: i === current ? 'rgba(255,215,0,0.7)' : 'rgba(255,255,255,0.25)' }}
              />
            ))}
          </div>
          <button onClick={isMobile ? mobileGoForward : goForward}
            disabled={isMobile ? ((mobileTab === 'right' && current >= total - 1) || mobileIsFlipping) : (current >= total - 1 || isFlipping)}
            className="flex items-center gap-2 font-heading text-xs tracking-wider uppercase transition-opacity hover:opacity-80 disabled:opacity-20 min-h-[44px] px-3"
            style={{ color: 'rgba(255,255,255,0.6)' }}>
            Next <ChevronRight size={16} aria-hidden="true" />
          </button>
        </div>

      </div>
    </motion.div>
  )
}

export function SpotlightPage({ isDark }: SpotlightPageProps) {
  const [openAtIndex, setOpenAtIndex] = useState<number | null>(null)

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
          <p style={{ color: mutedColor, fontFamily: "'Glacial Indifference', sans-serif", fontStyle: 'italic', maxWidth: '38rem' }}>
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
                onClick={() => setOpenAtIndex(i)}
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
                    style={{ fontFamily: "'Glacial Indifference', sans-serif", color: mutedColor, fontStyle: 'italic' }}
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

      <AnimatePresence>
        {openAtIndex !== null && (
          <ReviewsBook
            isDark={isDark}
            initialIndex={openAtIndex}
            onClose={() => setOpenAtIndex(null)}
          />
        )}
      </AnimatePresence>
    </main>
  )
}
