import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NonsenseLogo } from '../layout/NonsenseLogo'

interface DoorIntroProps {
  onComplete: () => void
}

function Particles() {
  const particles = useMemo(() =>
    Array.from({ length: 16 }, (_, i) => ({
      id: i,
      left: `${6 + i * 5.8}%`,
      size: i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 4,
      color: i % 2 === 0 ? '#FFD700' : '#00a896',
      yDist: 220 + (i * 19) % 280,
      xDrift: ((i * 11) % 50) - 25,
      duration: 2.8 + (i * 0.35) % 2,
      delay: (i * 0.45) % 3.5,
    })),
  [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{ left: p.left, bottom: -8, width: p.size, height: p.size, background: p.color }}
          animate={{ y: [0, -p.yDist], opacity: [0, 0.7, 0], x: [0, p.xDrift] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}

// A single door panel SVG — fixed aspect ratio, not stretched
function DoorPanel({ side }: { side: 'left' | 'right' }) {
  const isRight = side === 'right'
  return (
    <svg
      viewBox="0 0 240 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
    >
      {/* Door background */}
      <rect width="240" height="560" fill={isRight ? '#2a1000' : '#301200'} />

      {/* Subtle gradient shading */}
      <defs>
        <linearGradient id={`grad-${side}`} x1={isRight ? '0' : '1'} y1="0" x2={isRight ? '1' : '0'} y2="1">
          <stop offset="0%" stopColor="#3d1800" />
          <stop offset="60%" stopColor="#1a0800" />
        </linearGradient>
      </defs>
      <rect width="240" height="560" fill={`url(#grad-${side})`} />

      {/* Horizontal wood grain lines */}
      {[55, 100, 150, 200, 255, 310, 365, 415, 465, 510].map((y, i) => (
        <path
          key={i}
          d={`M 8 ${y} Q 120 ${y + (i % 2 === 0 ? -5 : 4)} 232 ${y}`}
          stroke="#c87a00"
          strokeWidth="0.6"
          opacity="0.25"
          fill="none"
        />
      ))}

      {/* Upper panel inset */}
      <rect x="22" y="30" width="196" height="215" rx="5"
        stroke="#FFD700" strokeWidth="1.2" fill="none" opacity="0.35" />
      {/* Inner upper panel bevel */}
      <rect x="30" y="38" width="180" height="199" rx="3"
        stroke="#FFD700" strokeWidth="0.5" fill="none" opacity="0.15" />

      {/* Lower panel inset */}
      <rect x="22" y="268" width="196" height="264" rx="5"
        stroke="#FFD700" strokeWidth="1.2" fill="none" opacity="0.35" />
      {/* Inner lower panel bevel */}
      <rect x="30" y="276" width="180" height="248" rx="3"
        stroke="#FFD700" strokeWidth="0.5" fill="none" opacity="0.15" />

      {/* Center rail between panels */}
      <rect x="22" y="248" width="196" height="16" rx="2"
        fill="#1a0800" stroke="#FFD700" strokeWidth="0.8" opacity="0.3" />

      {/* Door handle — on the inner edge */}
      {isRight ? (
        // Right door: handle on left side
        <g transform="translate(28, 262)">
          <rect x="0" y="0" width="10" height="32" rx="5"
            fill="url(#handle-grad)" stroke="#FFD700" strokeWidth="0.8" opacity="0.9" />
        </g>
      ) : (
        // Left door: handle on right side
        <g transform="translate(202, 262)">
          <rect x="0" y="0" width="10" height="32" rx="5"
            fill="url(#handle-grad)" stroke="#FFD700" strokeWidth="0.8" opacity="0.9" />
        </g>
      )}

      {/* Keyhole — only on right door */}
      {isRight && (
        <g transform="translate(113, 400)">
          <circle cx="7" cy="7" r="7" stroke="#FFD700" strokeWidth="1.2" fill="rgba(0,0,0,0.5)" opacity="0.7" />
          <path d="M4 14 L4 24 L10 24 L10 14" stroke="#FFD700" strokeWidth="1.2" fill="none" opacity="0.7" />
        </g>
      )}

      {/* Edge shadow — inner side */}
      {isRight ? (
        <rect x="0" y="0" width="20" height="560"
          fill="url(#left-shadow)" opacity="0.6" />
      ) : (
        <rect x="220" y="0" width="20" height="560"
          fill="url(#right-shadow)" opacity="0.6" />
      )}

      <defs>
        <linearGradient id="handle-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b8900a" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#b8900a" />
        </linearGradient>
        <linearGradient id="left-shadow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="right-shadow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function DoorIntro({ onComplete }: DoorIntroProps) {
  const [phase, setPhase] = useState<'idle' | 'opening' | 'done'>('idle')
  const [glowPulse, setGlowPulse] = useState(false)

  useEffect(() => {
    const t = setInterval(() => setGlowPulse((p) => !p), 1300)
    return () => clearInterval(t)
  }, [])

  const handleEnter = () => {
    if (phase !== 'idle') return
    setPhase('opening')
    setTimeout(() => {
      setPhase('done')
      setTimeout(onComplete, 350)
    }, 1900)
  }

  // Each door: full viewport height, width derived from SVG aspect ratio 240:560
  // So width = 100vh * (240/560) = ~42.86vh per door
  // Capped so two doors together don't exceed ~90vw total
  const doorStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 'min(calc(100vh * 240 / 560), 45vw)',
    height: '100%',
  }

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeIn' }}
        >
          {/* Background */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 50% 45%, #3a1500 0%, #1a0900 50%, #0c0500 100%)',
            }}
          />

          {/* Floor reflection */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '30%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)',
            }}
          />

          <Particles />

          {/* Teal glow in the seam when opening */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              zIndex: 4,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: 200,
              height: '100vh',
              background: 'radial-gradient(ellipse at 50% 50%, rgba(0,168,150,1) 0%, rgba(255,215,0,0.2) 40%, transparent 70%)',
              filter: 'blur(28px)',
            }}
            animate={{ opacity: phase === 'opening' ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          />

          {/* ── LEFT DOOR ── right edge pinned to horizontal center */}
          <div style={{ ...doorStyle, right: '50%', marginRight: 1, perspective: '1200px' }}>
            <motion.div
              style={{
                width: '100%',
                height: '100%',
                transformOrigin: 'left center',
                transformStyle: 'preserve-3d',
              }}
              animate={{ rotateY: phase === 'opening' ? 82 : 0 }}
              transition={{ duration: 1.7, ease: [0.2, 0.05, 0.1, 1.0] }}
            >
              {/* Outer door frame */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  boxShadow: '-6px 0 30px rgba(0,0,0,0.7), 6px 0 20px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255,215,0,0.2)',
                  borderRight: '3px solid rgba(255,215,0,0.4)',
                  overflow: 'hidden',
                }}
              >
                <DoorPanel side="left" />
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT DOOR ── left edge pinned to horizontal center */}
          <div style={{ ...doorStyle, left: '50%', marginLeft: 1, perspective: '1200px' }}>
            <motion.div
              style={{
                width: '100%',
                height: '100%',
                transformOrigin: 'right center',
                transformStyle: 'preserve-3d',
              }}
              animate={{ rotateY: phase === 'opening' ? -82 : 0 }}
              transition={{ duration: 1.7, ease: [0.2, 0.05, 0.1, 1.0] }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  boxShadow: '6px 0 30px rgba(0,0,0,0.7), -6px 0 20px rgba(0,0,0,0.4)',
                  border: '1px solid rgba(255,215,0,0.2)',
                  borderLeft: '3px solid rgba(255,215,0,0.4)',
                  overflow: 'hidden',
                }}
              >
                <DoorPanel side="right" />
              </div>
            </motion.div>
          </div>

          {/* ── CENTER CONTENT ── */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ zIndex: 10, pointerEvents: 'none' }}
            animate={{ opacity: phase === 'opening' ? 0 : 1, scale: phase === 'opening' ? 0.93 : 1 }}
            transition={{ duration: 0.4, ease: 'easeIn' }}
          >
            <div
              className="relative flex flex-col items-center gap-5 px-10 py-8"
              style={{
                background: 'rgba(8, 3, 0, 0.72)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,215,0,0.15)',
                maxWidth: 360,
                width: '88vw',
              }}
            >
              {/* Top line */}
              <div className="absolute top-0 left-8 right-8 h-px"
                style={{ background: 'linear-gradient(to right, transparent, rgba(255,215,0,0.5), transparent)' }} />

              <NonsenseLogo size="lg" />

              <p
                className="font-heading text-center"
                style={{
                  color: 'rgba(255,248,240,0.4)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                }}
              >
                Sci-Fi &amp; Fantasy Literary Magazine
              </p>

              <motion.button
                onClick={handleEnter}
                className="font-heading font-bold"
                style={{
                  background: 'transparent',
                  border: `1px solid ${glowPulse ? 'rgba(255,215,0,0.7)' : 'rgba(255,215,0,0.3)'}`,
                  color: '#FFD700',
                  fontSize: '0.7rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  padding: '0.75rem 2.5rem',
                  transition: 'border-color 0.8s ease, box-shadow 0.8s ease',
                  boxShadow: glowPulse ? '0 0 16px rgba(255,215,0,0.18)' : 'none',
                  cursor: 'pointer',
                  pointerEvents: 'auto',
                  borderRadius: 0,
                }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(255,215,0,0.3)' }}
                whileTap={{ scale: 0.97 }}
              >
                Enter the Realm
              </motion.button>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-8 right-8 h-px"
                style={{ background: 'linear-gradient(to right, transparent, rgba(0,168,150,0.4), transparent)' }} />
            </div>
          </motion.div>

          {/* Edge vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(0,0,0,0.65) 100%)',
              zIndex: 7,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
