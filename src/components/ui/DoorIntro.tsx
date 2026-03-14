import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NonsenseLogo } from '../layout/NonsenseLogo'

interface DoorIntroProps {
  onComplete: () => void
}

function Particles() {
  const particles = useMemo(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${8 + i * 5.2}%`,
      size: i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 4,
      color: i % 2 === 0 ? '#FFD700' : '#00a896',
      yDist: 200 + (i * 17) % 300,
      xDrift: ((i * 13) % 60) - 30,
      duration: 2.5 + (i * 0.3) % 2,
      delay: (i * 0.4) % 3,
    })),
  [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{ left: p.left, bottom: -8, width: p.size, height: p.size, background: p.color }}
          animate={{ y: [0, -p.yDist], opacity: [0, 0.8, 0], x: [0, p.xDrift] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}

function DoorGrain({ side }: { side: 'left' | 'right' }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.18, transform: side === 'right' ? 'scaleX(-1)' : undefined }}
      viewBox="0 0 200 600"
      preserveAspectRatio="none"
    >
      {[60, 130, 200, 270, 340, 410, 480].map((y, i) => (
        <path
          key={i}
          d={`M 10 ${y} Q 100 ${y - 8 + i * 2} 190 ${y}`}
          stroke="#FFD700"
          strokeWidth="0.8"
          fill="none"
        />
      ))}
      <rect x="18" y="35"  width="164" height="215" rx="6" stroke="#FFD700" strokeWidth="1.5" fill="none" />
      <rect x="18" y="290" width="164" height="265" rx="6" stroke="#FFD700" strokeWidth="1.5" fill="none" />
      {side === 'right' && (
        <g transform="translate(91, 294)">
          <circle cx="9" cy="9" r="8" stroke="#FFD700" strokeWidth="1.5" fill="rgba(255,215,0,0.06)" />
          <path d="M5 17 L5 30 L13 30 L13 17" stroke="#FFD700" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        </g>
      )}
    </svg>
  )
}

export function DoorIntro({ onComplete }: DoorIntroProps) {
  const [phase, setPhase] = useState<'idle' | 'opening' | 'done'>('idle')
  const [glowPulse, setGlowPulse] = useState(false)

  useEffect(() => {
    const t = setInterval(() => setGlowPulse((p) => !p), 1200)
    return () => clearInterval(t)
  }, [])

  const handleEnter = () => {
    if (phase !== 'idle') return
    setPhase('opening')
    setTimeout(() => {
      setPhase('done')
      setTimeout(onComplete, 400)
    }, 1800)
  }

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeIn' }}
        >
          {/* Background */}
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 40%, #3d1800 0%, #1a0a00 55%, #0d0600 100%)' }}
          />
          <Particles />

          {/* Teal glow bleeding through the seam when opening */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 2 }}
            animate={{ opacity: phase === 'opening' ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div style={{
              position: 'absolute', left: '50%', top: 0, bottom: 0, width: 160,
              transform: 'translateX(-50%)',
              background: 'radial-gradient(ellipse at 50% 50%, rgba(0,168,150,0.95) 0%, rgba(255,215,0,0.25) 45%, transparent 70%)',
              filter: 'blur(24px)',
            }} />
          </motion.div>

          {/* ── LEFT DOOR ── positioned absolutely on left half */}
          <div
            className="absolute top-0 bottom-0 left-0"
            style={{ width: '50%', perspective: '1400px' }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ transformOrigin: 'right center', transformStyle: 'preserve-3d', zIndex: 3 }}
              animate={{ rotateY: phase === 'opening' ? -105 : 0 }}
              transition={{ duration: 1.6, ease: [0.22, 0.1, 0.15, 1.0] }}
            >
              <div
                className="absolute inset-0 flex items-center justify-end pr-10"
                style={{
                  background: 'linear-gradient(155deg, #3d1800 0%, #2a1000 45%, #160900 100%)',
                  borderRight: '3px solid rgba(255,215,0,0.3)',
                  boxShadow: 'inset -12px 0 40px rgba(0,0,0,0.5)',
                }}
              >
                <DoorGrain side="left" />
                {/* Handle — right side of left door */}
                <div
                  className="relative z-10 w-3 h-14 rounded-full"
                  style={{
                    background: 'linear-gradient(180deg, #b8900a 0%, #FFD700 50%, #b8900a 100%)',
                    boxShadow: '0 0 14px rgba(255,215,0,0.7), 0 0 4px rgba(255,215,0,0.4)',
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT DOOR ── positioned absolutely on right half */}
          <div
            className="absolute top-0 bottom-0 right-0"
            style={{ width: '50%', perspective: '1400px' }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d', zIndex: 3 }}
              animate={{ rotateY: phase === 'opening' ? 105 : 0 }}
              transition={{ duration: 1.6, ease: [0.22, 0.1, 0.15, 1.0] }}
            >
              <div
                className="absolute inset-0 flex items-center justify-start pl-10"
                style={{
                  background: 'linear-gradient(205deg, #3d1800 0%, #2a1000 45%, #160900 100%)',
                  borderLeft: '3px solid rgba(255,215,0,0.3)',
                  boxShadow: 'inset 12px 0 40px rgba(0,0,0,0.5)',
                }}
              >
                <DoorGrain side="right" />
                {/* Handle — left side of right door */}
                <div
                  className="relative z-10 w-3 h-14 rounded-full"
                  style={{
                    background: 'linear-gradient(180deg, #b8900a 0%, #FFD700 50%, #b8900a 100%)',
                    boxShadow: '0 0 14px rgba(255,215,0,0.7), 0 0 4px rgba(255,215,0,0.4)',
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* ── CENTER CONTENT — above both doors ── */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            style={{ zIndex: 10 }}
            animate={{ opacity: phase === 'opening' ? 0 : 1, scale: phase === 'opening' ? 0.92 : 1 }}
            transition={{ duration: 0.45, ease: 'easeIn' }}
          >
            <div
              className="relative flex flex-col items-center gap-6 px-12 py-10"
              style={{
                background: 'rgba(10,4,0,0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,215,0,0.18)',
                borderRadius: 2,
                maxWidth: 380,
                width: '90vw',
              }}
            >
              {/* Top ornament */}
              <div className="absolute -top-px left-0 right-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent, rgba(255,215,0,0.5), transparent)' }} />

              <NonsenseLogo size="lg" />

              <p
                className="font-heading text-xs tracking-widest uppercase text-center"
                style={{ color: 'rgba(255,248,240,0.45)', letterSpacing: '0.28em' }}
              >
                Sci-Fi &amp; Fantasy Literary Magazine
              </p>

              <motion.button
                onClick={handleEnter}
                className="font-heading text-xs tracking-widest uppercase font-bold px-10 py-3.5"
                style={{
                  background: 'transparent',
                  border: `1px solid ${glowPulse ? 'rgba(255,215,0,0.75)' : 'rgba(255,215,0,0.35)'}`,
                  color: '#FFD700',
                  letterSpacing: '0.22em',
                  transition: 'border-color 0.7s ease, box-shadow 0.7s ease',
                  boxShadow: glowPulse
                    ? '0 0 18px rgba(255,215,0,0.2), inset 0 0 14px rgba(255,215,0,0.04)'
                    : 'none',
                  cursor: 'pointer',
                  pointerEvents: 'auto',
                  borderRadius: 0,
                }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(255,215,0,0.35)' }}
                whileTap={{ scale: 0.97 }}
              >
                Enter the Realm
              </motion.button>

              {/* Bottom ornament */}
              <div className="absolute -bottom-px left-0 right-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent, rgba(0,168,150,0.45), transparent)' }} />
            </div>
          </motion.div>

          {/* Vignette at screen edges */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)',
              zIndex: 6,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
