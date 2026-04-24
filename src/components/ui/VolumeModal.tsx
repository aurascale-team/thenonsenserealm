import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, BookOpen, Feather, Instagram, ExternalLink } from 'lucide-react'
import { volumeIPieces, type VolumePiece } from '../../data/content'

interface VolumeModalProps {
  isDark: boolean
  onClose: () => void
}

export function VolumeModal({ isDark, onClose }: VolumeModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  // Focus the close button on open, restore focus on close
  useEffect(() => {
    const prev = document.activeElement as HTMLElement
    closeRef.current?.focus()
    return () => prev?.focus()
  }, [])

  // Trap focus and close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const surface = isDark ? 'rgba(30,14,2,0.98)' : '#ffffff'
  const border = isDark ? 'rgba(193,68,14,0.25)' : 'rgba(193,68,14,0.15)'
  const textColor = isDark ? '#fff8f0' : '#2a0e00'
  const mutedColor = isDark ? 'rgba(255,248,240,0.82)' : 'rgba(42,14,0,0.75)'
  const tealText = isDark ? '#00a896' : '#007a6e'
  const divider = isDark ? 'rgba(193,68,14,0.18)' : 'rgba(193,68,14,0.12)'

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        ref={overlayRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
        style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(6px)' }}
        onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="volume-modal-title"
      >
        {/* Sheet */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 32, scale: 0.97 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full sm:max-w-4xl max-h-[92vh] sm:max-h-[88vh] flex flex-col rounded-t-3xl sm:rounded-3xl overflow-hidden"
          style={{ background: surface, border: `1px solid ${border}`, boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}
        >
          {/* Sticky header */}
          <div
            className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b"
            style={{ borderColor: divider, background: isDark ? 'rgba(26,9,0,0.95)' : 'rgba(255,248,240,0.97)', backdropFilter: 'blur(8px)' }}
          >
            <div className="flex items-center gap-3">
              <BookOpen size={16} style={{ color: tealText }} aria-hidden="true" />
              <div>
                <p className="font-heading text-xs tracking-widest uppercase" style={{ color: tealText }}>
                  Volume I · Preview
                </p>
                <h2
                  id="volume-modal-title"
                  className="font-display font-bold"
                  style={{ fontSize: '1.1rem', color: textColor, lineHeight: 1.2 }}
                >
                  Volume I
                </h2>
              </div>
            </div>
            <button
              ref={closeRef}
              onClick={onClose}
              className="flex items-center justify-center w-9 h-9 rounded-full transition-opacity hover:opacity-70 min-h-[44px] min-w-[44px]"
              aria-label="Close volume preview"
              style={{ background: isDark ? 'rgba(255,248,240,0.08)' : 'rgba(42,14,0,0.06)', color: textColor }}
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto">

            {/* Cover image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Volume I cover — a moody, atmospheric image"
                className="w-full h-full object-cover"
                style={{ filter: isDark ? 'brightness(0.5) saturate(1.3)' : 'brightness(0.65) saturate(1.1)' }}
              />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
                style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)' }}
              >
                <span className="font-display font-black text-white" style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', lineHeight: 1, textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}>
                  Vol. I
                </span>
                <span className="font-heading text-xs tracking-widest uppercase mt-2" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  The Nonsense Realm Magazine · 2026
                </span>
              </div>
            </div>

            {/* Editorial intro */}
            <div className="px-7 py-8" style={{ borderBottom: `1px solid ${divider}` }}>
              <div className="flex items-center gap-2 mb-4">
                <Feather size={13} style={{ color: '#c1440e' }} aria-hidden="true" />
                <span className="font-heading text-xs tracking-widest uppercase" style={{ color: '#c1440e' }}>
                  Editor's Note
                </span>
              </div>
              <p style={{ fontFamily: "'Glacial Indifference', sans-serif", lineHeight: 1.9, color: mutedColor, fontSize: '0.95rem' }}>
                Welcome to the first issue of The Nonsense Realm. We asked for weird, wacky, and outlandish — and you delivered beyond anything we expected. This debut volume contains flash fiction, short stories, and poetry that push at the edges of sci-fi and fantasy, written by voices we're incredibly proud to platform.
              </p>
              <p className="mt-4" style={{ fontFamily: "'Glacial Indifference', sans-serif", lineHeight: 1.9, color: mutedColor, fontSize: '0.95rem' }}>
                The pieces below are a preview. The full volume will be released on our website and social platforms when submissions close. Until then — enjoy the nonsense.
              </p>
              <p className="mt-4 text-sm" style={{ fontFamily: "'Glacial Indifference', sans-serif", fontStyle: 'italic', color: isDark ? 'rgba(255,248,240,0.5)' : 'rgba(42,14,0,0.45)' }}>
                — The Editors
              </p>
            </div>

            {/* Pieces */}
            {volumeIPieces.map((piece: VolumePiece, i: number) => (
              <div
                key={i}
                className="px-7 py-10"
                style={{ borderBottom: i < volumeIPieces.length - 1 ? `1px solid ${divider}` : 'none' }}
              >
                {/* Type badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="font-heading text-xs tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{
                      background: i % 2 === 0
                        ? (isDark ? 'rgba(0,168,150,0.12)' : 'rgba(0,168,150,0.08)')
                        : (isDark ? 'rgba(193,68,14,0.12)' : 'rgba(193,68,14,0.07)'),
                      color: i % 2 === 0 ? tealText : '#c1440e',
                      border: `1px solid ${i % 2 === 0 ? 'rgba(0,168,150,0.25)' : 'rgba(193,68,14,0.25)'}`,
                    }}
                  >
                    {piece.type}
                  </span>
                </div>

                {/* Title + author */}
                <h3 className="font-display font-bold mb-1" style={{ fontSize: '1.25rem', color: textColor }}>
                  {piece.title}
                </h3>
                <p className="font-heading text-xs mb-6" style={{ color: isDark ? 'rgba(255,248,240,0.45)' : 'rgba(42,14,0,0.4)', fontStyle: 'italic' }}>
                  by {piece.author}
                </p>

                {/* Full text */}
                {piece.paragraphs.map((para, pi) => (
                  <p
                    key={pi}
                    className={pi > 0 ? 'mt-4' : ''}
                    style={{ fontFamily: "'Glacial Indifference', sans-serif", lineHeight: 1.95, color: mutedColor, fontSize: '0.93rem' }}
                  >
                    {para}
                  </p>
                ))}

                {/* Author bio */}
                <div
                  className="mt-10 pt-6 flex flex-col gap-3"
                  style={{ borderTop: `1px solid ${divider}` }}
                >
                  <div className="flex items-center gap-2">
                    <Feather size={12} style={{ color: '#c1440e' }} aria-hidden="true" />
                    <span className="font-heading text-xs tracking-widest uppercase" style={{ color: '#c1440e' }}>
                      About the Author
                    </span>
                  </div>
                  <p className="font-heading font-semibold text-sm" style={{ color: textColor }}>
                    {piece.author}
                  </p>
                  <p style={{ fontFamily: "'Glacial Indifference', sans-serif", lineHeight: 1.8, color: mutedColor, fontSize: '0.88rem' }}>
                    {piece.authorBio}
                  </p>
                  {piece.authorLinks && piece.authorLinks.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-1">
                      {piece.authorLinks.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-heading text-xs tracking-wider transition-opacity hover:opacity-70 min-h-[44px]"
                          style={{ color: tealText }}
                        >
                          {link.url.includes('instagram') ? (
                            <Instagram size={12} aria-hidden="true" />
                          ) : (
                            <ExternalLink size={12} aria-hidden="true" />
                          )}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* CTA footer */}
            <div
              className="px-7 py-8 text-center"
              style={{ background: isDark ? 'rgba(193,68,14,0.07)' : 'rgba(193,68,14,0.04)', borderTop: `1px solid ${divider}` }}
            >
              <p className="font-heading text-xs tracking-widest uppercase mb-2" style={{ color: '#c1440e' }}>
                Submissions Open
              </p>
              <p className="mb-5 text-sm" style={{ fontFamily: "'Glacial Indifference', sans-serif", color: mutedColor }}>
                Want your work in Volume I or a future issue? Send it our way.
              </p>
              <a
                href="mailto:thenonsenserealmmagazine@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-heading text-sm tracking-wider uppercase font-bold transition-opacity hover:opacity-85 min-h-[44px]"
                style={{ background: '#c1440e', color: '#fff8f0', boxShadow: '0 0 20px rgba(193,68,14,0.3)' }}
              >
                Submit Your Work
              </a>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
