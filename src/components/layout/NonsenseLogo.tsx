import { motion } from 'framer-motion'

interface NonsenseLogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function NonsenseLogo({ size = 'md', className = '' }: NonsenseLogoProps) {
  const sizes = {
    sm: { outer: 36, inner: 24, text: 'text-xs' },
    md: { outer: 56, inner: 38, text: 'text-sm' },
    lg: { outer: 80, inner: 54, text: 'text-base' },
  }
  const s = sizes[size]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Dragon + Orbital Rings SVG Logo */}
      <div className="relative" style={{ width: s.outer, height: s.outer }}>
        <svg
          width={s.outer}
          height={s.outer}
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer orbital ring */}
          <motion.ellipse
            cx="40" cy="40" rx="38" ry="14"
            stroke="#0099CC" strokeWidth="1.5" fill="none"
            strokeDasharray="4 3"
            style={{ transformOrigin: '40px 40px' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          />
          {/* Inner orbital ring - tilted */}
          <motion.ellipse
            cx="40" cy="40" rx="28" ry="10"
            stroke="#FFD700" strokeWidth="1" fill="none" opacity="0.7"
            style={{ transformOrigin: '40px 40px', transform: 'rotate(60deg)' }}
            animate={{ rotate: [60, 60 + 360] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />
          {/* Dragon body (simplified) */}
          <g>
            {/* Body */}
            <motion.path
              d="M28 44 Q32 36 40 34 Q48 32 52 38 Q56 44 50 50 Q44 56 36 54 Q28 52 28 44Z"
              fill="#4B0082"
              stroke="#0099CC"
              strokeWidth="1"
              whileHover={{ scale: 1.05 }}
            />
            {/* Head */}
            <path
              d="M48 32 Q54 26 58 28 Q60 24 56 22 Q54 20 50 24 Q46 28 48 32Z"
              fill="#4B0082"
              stroke="#0099CC"
              strokeWidth="1"
            />
            {/* Eye */}
            <circle cx="54" cy="27" r="1.5" fill="#FFD700" />
            {/* Wing */}
            <path
              d="M36 36 Q26 28 22 22 Q30 26 38 32"
              stroke="#0099CC"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Tail */}
            <path
              d="M30 50 Q22 56 20 62 Q24 58 28 54"
              stroke="#0099CC"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Fire */}
            <motion.path
              d="M58 26 Q64 22 66 18 Q62 22 60 20 Q64 16 62 14 Q58 18 58 22"
              fill="#FFD700"
              opacity="0.9"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </g>
          {/* Stars */}
          {[
            { cx: 12, cy: 15, r: 1.2 },
            { cx: 68, cy: 20, r: 1 },
            { cx: 20, cy: 62, r: 0.8 },
            { cx: 65, cy: 58, r: 1.2 },
            { cx: 8, cy: 38, r: 0.7 },
          ].map((star, i) => (
            <motion.circle
              key={i}
              cx={star.cx} cy={star.cy} r={star.r}
              fill="#FFD700"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
            />
          ))}
        </svg>
      </div>
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className="font-display font-black text-[#0099CC] tracking-widest uppercase"
          style={{ fontSize: size === 'lg' ? '1.4rem' : size === 'md' ? '1rem' : '0.7rem', letterSpacing: '0.2em' }}
        >
          The
        </span>
        <span
          className="font-display font-black text-realm-white tracking-wider uppercase"
          style={{ fontSize: size === 'lg' ? '2rem' : size === 'md' ? '1.4rem' : '0.95rem', letterSpacing: '0.12em', lineHeight: 1 }}
        >
          Nonsense
        </span>
        <span
          className="font-display font-black tracking-widest uppercase"
          style={{
            fontSize: size === 'lg' ? '1.1rem' : size === 'md' ? '0.8rem' : '0.55rem',
            color: '#FFD700',
            letterSpacing: '0.35em',
          }}
        >
          Realm
        </span>
      </div>
    </div>
  )
}
