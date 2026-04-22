import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Feather, Instagram, ExternalLink } from 'lucide-react'
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

  const surface = isDark ? 'rgba(22,8,0,0.99)' : '#ffffff'
  const border = isDark ? 'rgba(193,68,14,0.25)' : 'rgba(193,68,14,0.15)'
  const textColor = isDark ? '#fff8f0' : '#2a0e00'
  const mutedColor = isDark ? 'rgba(255,248,240,0.82)' : 'rgba(42,14,0,0.75)'
  const tealText = isDark ? '#00a896' : '#007a6e'
  const divider = isDark ? 'rgba(193,68,14,0.18)' : 'rgba(193,68,14,0.12)'

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
        style={{ background: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(8px)' }}
        onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="piece-modal-title"
      >
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 32, scale: 0.97 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[88vh] flex flex-col rounded-t-3xl sm:rounded-3xl overflow-hidden"
          style={{ background: surface, border: `1px solid ${border}`, boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}
        >
          {/* Sticky header */}
          <div
            className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b"
            style={{ borderColor: divider, background: isDark ? 'rgba(18,6,0,0.97)' : 'rgba(255,248,240,0.97)', backdropFilter: 'blur(8px)' }}
          >
            <div>
              <span
                className="font-heading text-xs tracking-widest uppercase px-2.5 py-0.5 rounded-full"
                style={{
                  background: isDark ? 'rgba(0,168,150,0.12)' : 'rgba(0,168,150,0.08)',
                  color: tealText,
                  border: `1px solid rgba(0,168,150,0.25)`,
                }}
              >
                {piece.type}
              </span>
              <h2
                id="piece-modal-title"
                className="font-display font-bold mt-1.5"
                style={{ fontSize: '1.05rem', color: textColor, lineHeight: 1.25 }}
              >
                {piece.title}
              </h2>
              <p className="font-heading text-xs mt-0.5" style={{ color: mutedColor, fontStyle: 'italic' }}>
                by {piece.author}
              </p>
            </div>
            <button
              ref={closeRef}
              onClick={onClose}
              className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full transition-opacity hover:opacity-70 min-h-[44px] min-w-[44px]"
              aria-label="Close"
              style={{ background: isDark ? 'rgba(255,248,240,0.08)' : 'rgba(42,14,0,0.06)', color: textColor }}
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto px-7 py-10">

            {/* Story text */}
            {piece.paragraphs.map((para, pi) => (
              <p
                key={pi}
                className={pi > 0 ? 'mt-5' : ''}
                style={{ fontFamily: "'Cinzel', serif", lineHeight: 2, color: mutedColor, fontSize: '0.95rem' }}
              >
                {para}
              </p>
            ))}

            {/* Author bio */}
            <div
              className="mt-12 pt-8 flex flex-col gap-3"
              style={{ borderTop: `1px solid ${divider}` }}
            >
              <div className="flex items-center gap-2">
                <Feather size={12} style={{ color: '#c1440e' }} aria-hidden="true" />
                <span className="font-heading text-xs tracking-widest uppercase" style={{ color: '#c1440e' }}>
                  About the Author
                </span>
              </div>
              <p className="font-display font-bold text-sm" style={{ color: textColor }}>
                {piece.author}
              </p>
              <p style={{ fontFamily: "'Cinzel', serif", lineHeight: 1.85, color: mutedColor, fontSize: '0.88rem' }}>
                {piece.authorBio}
              </p>
              {piece.authorLinks && piece.authorLinks.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-1">
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
