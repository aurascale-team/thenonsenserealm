import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Instagram, ExternalLink } from 'lucide-react'
import { type VolumePiece } from '../../data/content'

interface PieceModalProps {
  piece: VolumePiece
  isDark: boolean
  onClose: () => void
}

export function PieceModal({ piece, isDark, onClose }: PieceModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const prev = document.activeElement as HTMLElement
    closeRef.current?.focus()
    return () => prev?.focus()
  }, [])

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

  const paperLight = '#f4ede0'
  const paperDark = '#1c0f06'
  const paper = isDark ? paperDark : paperLight
  // Left page slightly darker for contrast
  const paperLeft = isDark ? '#160c04' : '#ede4d0'
  const ink = isDark ? '#e8ddd0' : '#1a0900'
  const inkMuted = isDark ? 'rgba(232,221,208,0.92)' : 'rgba(26,9,0,0.82)'
  const inkFaint = isDark ? 'rgba(232,221,208,0.28)' : 'rgba(26,9,0,0.25)'
  const rule = isDark ? 'rgba(193,68,14,0.4)' : 'rgba(193,68,14,0.32)'
  const tealText = isDark ? '#00a896' : '#007a6e'
  const spineGrad = isDark
    ? 'linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.0) 6%), linear-gradient(to left, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.0) 6%)'
    : 'linear-gradient(to right, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.0) 6%), linear-gradient(to left, rgba(0,0,0,0.07) 0%, rgba(0,0,0,0.0) 6%)'

  const grain = (opacity: number) =>
    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='${opacity}'/%3E%3C/svg%3E")`

  const [firstPara, ...restParas] = piece.paragraphs
  const dropLetter = firstPara.charAt(0)
  const firstRest = firstPara.slice(1)

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6"
        style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(12px)' }}
        onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="piece-modal-title"
      >
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full flex overflow-hidden"
          style={{
            maxWidth: '1200px',
            maxHeight: '90vh',
            borderRadius: 0,
            boxShadow: isDark
              ? '12px 12px 0 rgba(0,0,0,0.5), -4px 4px 0 rgba(0,0,0,0.3), 0 48px 100px rgba(0,0,0,0.8)'
              : '12px 12px 0 rgba(26,9,0,0.18), -4px 4px 0 rgba(26,9,0,0.1), 0 48px 100px rgba(0,0,0,0.45)',
          }}
        >
          {/* ── LEFT PAGE — title block ── */}
          <div
            className="hidden sm:flex flex-col justify-between flex-shrink-0 overflow-y-auto"
            style={{
              width: '42%',
              background: paperLeft,
              backgroundImage: grain(isDark ? 0.05 : 0.07),
              borderRight: `1px solid ${rule}`,
              padding: '4rem 3rem 3rem 4rem',
            }}
          >
            {/* Top matter */}
            <div>
              <p className="font-heading text-xs tracking-widest uppercase mb-8" style={{ color: inkFaint, letterSpacing: '0.3em' }}>
                The Nonsense Realm · Vol. I
              </p>

              {/* Top rule */}
              <div className="flex items-center gap-3 mb-6" aria-hidden="true">
                <div className="flex-1 h-px" style={{ background: rule }} />
                <span style={{ color: rule, fontSize: '0.9rem' }}>❧</span>
                <div className="flex-1 h-px" style={{ background: rule }} />
              </div>

              {/* Type */}
              <p className="font-heading text-xs tracking-widest uppercase mb-5" style={{ color: inkFaint }}>
                {piece.type}
              </p>

              {/* Title */}
              <h2
                id="piece-modal-title"
                className="font-display font-bold"
                style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: ink, lineHeight: 1.2, letterSpacing: '0.01em' }}
              >
                {piece.title}
              </h2>

              {/* Byline */}
              <p
                className="mt-4"
                style={{ fontFamily: "'Glacial Indifference', sans-serif", fontStyle: 'italic', fontSize: '0.85rem', color: inkMuted, letterSpacing: '0.05em' }}
              >
                by {piece.author}
              </p>

              {/* Bottom rule */}
              <div className="flex items-center gap-3 mt-6" aria-hidden="true">
                <div className="flex-1 h-px" style={{ background: rule }} />
                <span style={{ color: rule, fontSize: '0.65rem' }}>◆</span>
                <div className="flex-1 h-px" style={{ background: rule }} />
              </div>
            </div>

            {/* Author bio — pinned toward bottom */}
            <div className="mt-10">
              <p className="font-heading text-xs tracking-widest uppercase mb-3" style={{ color: isDark ? 'rgba(193,68,14,0.65)' : '#c1440e' }}>
                About the Author
              </p>
              {piece.authorImage && (
                <div className="mb-3" style={{ width: 192, height: 192, borderRadius: '50%', overflow: 'hidden', border: `1px solid ${rule}` }}>
                  <img src={piece.authorImage} alt={piece.author} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
              <p className="font-display font-bold mb-2" style={{ fontSize: '0.85rem', color: ink }}>
                {piece.author}
              </p>
              <p style={{ fontFamily: "'Glacial Indifference', sans-serif", lineHeight: 1.8, color: inkMuted, fontSize: '0.8rem' }}>
                {piece.authorBio}
              </p>
              {piece.authorLinks && piece.authorLinks.length > 0 && (
                <div className="flex flex-col gap-2 mt-3">
                  {piece.authorLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-heading text-xs tracking-wider transition-opacity hover:opacity-70"
                      style={{ color: tealText }}
                    >
                      {link.url.includes('instagram') ? (
                        <Instagram size={11} aria-hidden="true" />
                      ) : (
                        <ExternalLink size={11} aria-hidden="true" />
                      )}
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              {/* Page number */}
              <p className="mt-8 font-heading text-xs text-center" style={{ color: inkFaint }}>
                — 1 —
              </p>
            </div>
          </div>

          {/* ── SPINE SHADOW overlay ── */}
          <div
            className="hidden sm:block absolute inset-y-0 pointer-events-none"
            aria-hidden="true"
            style={{ left: '42%', width: '100%', backgroundImage: spineGrad, zIndex: 2 }}
          />

          {/* ── RIGHT PAGE — story text ── */}
          <div
            className="flex flex-col flex-1 overflow-hidden"
            style={{
              background: paper,
              backgroundImage: grain(isDark ? 0.04 : 0.06),
            }}
          >
            {/* Close button */}
            <button
              ref={closeRef}
              onClick={onClose}
              className="absolute top-3 right-3 z-10 flex items-center justify-center transition-opacity hover:opacity-60 min-h-[44px] min-w-[44px]"
              aria-label="Close"
              style={{ color: inkFaint }}
            >
              <X size={15} aria-hidden="true" />
            </button>

            {/* Mobile-only title (hidden on sm+) */}
            <div
              className="sm:hidden px-8 pt-12 pb-6"
              style={{ borderBottom: `1px solid ${rule}` }}
            >
              <p className="font-heading text-xs tracking-widest uppercase mb-2" style={{ color: inkFaint }}>
                {piece.type}
              </p>
              <h2
                id="piece-modal-title"
                className="font-display font-bold"
                style={{ fontSize: '1.4rem', color: ink, lineHeight: 1.2 }}
              >
                {piece.title}
              </h2>
              <p className="mt-2" style={{ fontFamily: "'Glacial Indifference', sans-serif", fontStyle: 'italic', fontSize: '0.85rem', color: inkMuted }}>
                by {piece.author}
              </p>
            </div>

            {/* Story body */}
            <div className="flex-1 overflow-y-auto px-10 sm:px-16 pt-14 pb-14">
              {/* Drop cap first paragraph */}
              <p style={{ fontFamily: "'Glacial Indifference', sans-serif", lineHeight: 2.05, color: inkMuted, fontSize: '1.2rem', textAlign: 'justify' }}>
                <span
                  aria-hidden="true"
                  style={{
                    float: 'left',
                    fontFamily: "'Cinzel Decorative', serif",
                    fontSize: '4.4rem',
                    lineHeight: '0.75',
                    marginRight: '0.07em',
                    marginTop: '0.12em',
                    color: ink,
                    fontWeight: 900,
                  }}
                >
                  {dropLetter}
                </span>
                {firstRest}
              </p>

              {restParas.map((para, pi) => (
                <p
                  key={pi}
                  className="mt-5"
                  style={{ fontFamily: "'Glacial Indifference', sans-serif", lineHeight: 2.05, color: inkMuted, fontSize: '1.2rem', textAlign: 'justify' }}
                >
                  {para}
                </p>
              ))}

              {/* End ornament */}
              <p className="text-center mt-12" aria-hidden="true" style={{ color: rule, fontSize: '0.85rem', letterSpacing: '0.5em' }}>
                ✦ ✦ ✦
              </p>

              {/* Mobile author bio */}
              <div className="sm:hidden mt-10 pt-8" style={{ borderTop: `1px solid ${rule}` }}>
                <p className="font-heading text-xs tracking-widest uppercase mb-3" style={{ color: isDark ? 'rgba(193,68,14,0.65)' : '#c1440e' }}>
                  About the Author
                </p>
                {piece.authorImage && (
                  <div className="mb-3" style={{ width: 168, height: 168, borderRadius: '50%', overflow: 'hidden', border: `1px solid ${rule}` }}>
                    <img src={piece.authorImage} alt={piece.author} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
                <p className="font-display font-bold mb-2" style={{ fontSize: '0.9rem', color: ink }}>
                  {piece.author}
                </p>
                <p style={{ fontFamily: "'Glacial Indifference', sans-serif", lineHeight: 1.85, color: inkMuted, fontSize: '0.85rem' }}>
                  {piece.authorBio}
                </p>
                {piece.authorLinks && piece.authorLinks.length > 0 && (
                  <div className="flex flex-wrap gap-4 mt-3">
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

              {/* Page footer */}
              <p className="text-center mt-10 font-heading text-xs tracking-widest" style={{ color: inkFaint }}>
                — 2 —
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
