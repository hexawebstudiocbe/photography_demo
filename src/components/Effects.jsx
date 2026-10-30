import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useInView } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  return <motion.div className="scroll-progress" style={{ scaleX }} />
}

const PETALS = ['🌸', '🌼', '✨', '🌺', '💛']

export function FallingPetals({ count = 18 }) {
  const [items] = useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: PETALS[i % PETALS.length],
      left: Math.random() * 100,
      size: 14 + Math.random() * 18,
      duration: 9 + Math.random() * 10,
      delay: -Math.random() * 15,
      sway: 30 + Math.random() * 60,
    })),
  )
  return (
    <div className="petals" aria-hidden="true">
      {items.map((p) => (
        <span
          key={p.id}
          style={{
            left: `${p.left}%`,
            fontSize: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--sway': `${p.sway}px`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  )
}

export function Reveal({ children, delay = 0, y = 40, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const dur = 1600
    const start = performance.now()
    let raf
    const tick = (now) => {
      const t = Math.min((now - start) / dur, 1)
      setVal(Math.round(to * (1 - Math.pow(1 - t, 3))))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])
  return <span ref={ref}>{val}{suffix}</span>
}

export function SectionTitle({ title, sub }) {
  return (
    <Reveal className="section-title">
      <h2>{title}</h2>
      <div className="divider"><i /><b>❀</b><i /></div>
      {sub && <p>{sub}</p>}
    </Reveal>
  )
}
