import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { BRAND, PHONE, PHONE_DISPLAY, services, heroSlides, gallery, categories, packages, testimonials, cities, stats } from '../data/content'
import { FallingPetals, Reveal, Counter, SectionTitle } from './Effects'

const wa = (msg) => `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  const links = ['services', 'gallery', 'packages', 'reviews', 'contact']
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="logo">📷 {BRAND}</a>
      <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">{open ? '✕' : '☰'}</button>
      <nav className={open ? 'open' : ''}>
        {links.map((l) => (
          <a key={l} href={`#${l}`} onClick={() => setOpen(false)}>{l}</a>
        ))}
        <a className="btn small" href={wa('Hi, I want to book a photographer')} target="_blank" rel="noreferrer">Book Now</a>
      </nav>
    </header>
  )
}

export function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 180])
  const op = useTransform(scrollY, [0, 500], [1, 0])
  const [slide, setSlide] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setSlide((x) => (x + 1) % heroSlides.length), 5000)
    return () => clearInterval(t)
  }, [slide])
  const words = 'Every Muhurtham. Every Smile. Forever.'.split(' ')
  return (
    <section id="home" className="hero">
      <motion.div className="hero-slides" style={{ y }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={slide}
            className="hero-slide"
            style={{ backgroundImage: `url(${heroSlides[slide]})` }}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.2 }, scale: { duration: 6, ease: 'linear' } }}
          />
        </AnimatePresence>
      </motion.div>
      <div className="hero-overlay" />
      <FallingPetals />
      <div className="kolam kolam-l" aria-hidden="true" />
      <div className="kolam kolam-r" aria-hidden="true" />
      <motion.div className="hero-content" style={{ opacity: op }}>
        <h1>
          {words.map((w, i) => (
            <motion.span key={i} className="word" initial={{ opacity: 0, y: 50, rotateX: -60 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ delay: 0.5 + i * 0.12, duration: 0.7 }}>
              {w}&nbsp;
            </motion.span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
          Wedding, baby shower, birthday and party photography across Tamil Nadu.
        </motion.p>
        <motion.div className="hero-cta" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8 }}>
          <a className="btn pulse" href="#contact">Check Availability</a>
          <a className="btn ghost" href="#gallery">View Our Work</a>
        </motion.div>
      </motion.div>
      <div className="hero-dots">
        {heroSlides.map((_, k) => <button key={k} className={k === slide ? 'on' : ''} onClick={() => setSlide(k)} aria-label={`Slide ${k + 1}`} />)}
      </div>
      <div className="scroll-hint" aria-hidden="true"><span /></div>
    </section>
  )
}

export function Marquee() {
  const row = [...cities, ...cities]
  return (
    <div className="marquee" aria-label="Cities served">
      <div className="marquee-track">
        {row.map((c, i) => <span key={i}>✦ {c}</span>)}
      </div>
    </div>
  )
}

export function Stats() {
  return (
    <section className="stats">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.1} className="stat">
          <strong><Counter to={s.n} suffix={s.suffix} /></strong>
          <span>{s.label}</span>
        </Reveal>
      ))}
    </section>
  )
}

export function Services() {
  return (
    <section id="services" className="section">
      <SectionTitle title="Events We Capture" sub="From sacred ceremonies to joyful parties, we cover every celebration." />
      <div className="grid services">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={(i % 3) * 0.12}>
            <motion.div className="card service" whileHover="hover" initial="rest" animate="rest">
              <div className="service-img">
                <motion.img src={s.img} alt={s.title} loading="lazy" variants={{ rest: { scale: 1 }, hover: { scale: 1.15 } }} transition={{ duration: 0.8 }} />
                <div className="shine" />
                <motion.div className="icon" variants={{ rest: { rotate: 0, y: 0 }, hover: { rotate: 360, y: -6 } }} transition={{ duration: 0.6 }}>{s.icon}</motion.div>
              </div>
              <div className="service-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <motion.span className="more" variants={{ rest: { x: 0 }, hover: { x: 8 } }}>Book this event →</motion.span>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Gallery() {
  const [cat, setCat] = useState('all')
  const [sel, setSel] = useState(null)
  const list = cat === 'all' ? gallery : gallery.filter((g) => g.cat === cat)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setSel(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="gallery" className="section dark">
      <SectionTitle title="Our Gallery" sub="A few moments from families we have had the joy to work with." />
      <div className="filters">
        {categories.map((c) => (
          <button key={c.key} className={cat === c.key ? 'active' : ''} onClick={() => setCat(c.key)}>{c.label}</button>
        ))}
      </div>
      <motion.div layout className="masonry">
        <AnimatePresence mode="popLayout">
          {list.map((g) => (
            <motion.figure
              key={g.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSel(g)}
              style={{ aspectRatio: `1 / ${g.ratio}` }}
            >
              <img src={g.src} alt={g.title} loading="lazy" />
              <figcaption>{g.title}</figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {sel && (
          <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}>
            <motion.img src={sel.full} alt={sel.title} initial={{ scale: 0.7 }} animate={{ scale: 1 }} exit={{ scale: 0.7 }} />
            <p>{sel.title}</p>
            <button aria-label="Close">✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export function Packages() {
  return (
    <section id="packages" className="section">
      <SectionTitle title="Packages" sub="Indicative pricing. Custom quote for your event on request." />
      <div className="grid packages">
        {packages.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.15}>
            <motion.div className={`card pkg ${p.featured ? 'featured' : ''}`} whileHover={{ y: -12, scale: 1.02 }}>
              {p.featured && <em className="ribbon">Most Popular</em>}
              <h3>{p.name}</h3>
              <div className="price">{p.price}</div>
              <small>{p.note}</small>
              <ul>{p.items.map((it) => <li key={it}>✓ {it}</li>)}</ul>
              <a className="btn" href={wa(`Hi, I am interested in the ${p.name} package`)} target="_blank" rel="noreferrer">Choose {p.name}</a>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Reviews() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])
  const t = testimonials[i]
  return (
    <section id="reviews" className="section reviews">
      <SectionTitle title="Happy Families" />
      <div className="review-box">
        <AnimatePresence mode="wait">
          <motion.blockquote key={i} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.5 }}>
            <p>“{t.text}”</p>
            <footer>★★★★★<br /><b>{t.name}</b>, {t.place}</footer>
          </motion.blockquote>
        </AnimatePresence>
        <div className="dots">
          {testimonials.map((_, k) => <button key={k} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={`Review ${k + 1}`} />)}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const [f, setF] = useState({ name: '', event: 'Wedding', date: '', place: '', msg: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    window.open(wa(`Hi, I am ${f.name}. Event: ${f.event}. Date: ${f.date}. Place: ${f.place}. ${f.msg}`), '_blank')
  }
  return (
    <section id="contact" className="section dark">
      <SectionTitle title="Book Your Date" sub="Dates fill fast in muhurtham season. Tell us about your event." />
      <Reveal>
        <form className="form" onSubmit={submit}>
          <input required placeholder="Your name" value={f.name} onChange={set('name')} />
          <select value={f.event} onChange={set('event')}>
            {['Wedding', 'Baby Shower', 'Birthday', 'Party', 'Puberty Function', 'Personal Shoot', 'Other'].map((o) => <option key={o}>{o}</option>)}
          </select>
          <input required type="date" value={f.date} onChange={set('date')} />
          <input required placeholder="Event place / district" value={f.place} onChange={set('place')} />
          <textarea rows="4" placeholder="Anything else?" value={f.msg} onChange={set('msg')} />
          <button className="btn pulse" type="submit">Send on WhatsApp</button>
        </form>
        <p className="contact-line">📞 {PHONE_DISPLAY} &nbsp;·&nbsp; 📍 Tamil Nadu, travel anywhere</p>
      </Reveal>
    </section>
  )
}

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer">
      <p>© {YEAR} {BRAND}. Made with ❤ in Tamil Nadu.</p>
      <FloatingContact />
    </footer>
  )
}

const WaIcon = () => (
  <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true"><path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.3.7 4.5 1.9 6.3L4 29l8-2c1.7.9 3.5 1.4 5.5 1.4 6.6 0 12-5.3 12-11.9S22.6 3 16 3zm0 21.8c-1.7 0-3.3-.5-4.7-1.3l-.5-.3-4.7 1.2 1.3-4.5-.3-.5a9.700 9.700 0 0 1-1.500-5.200c0-5.400 4.400-9.700 9.900-9.700s9.900 4.300 9.900 9.700-4.400 9.700-9.900 9.700zm5.400-7.300c-.3-.1-1.700-.8-2-.9-.3-.1-.5-.1-.7.1-.2.300-.8.900-.9 1.100-.2.200-.3.200-.6.100-.3-.1-1.200-.4-2.300-1.400-.9-.8-1.400-1.700-1.600-2-.2-.3 0-.5.100-.6l.4-.5c.1-.2.200-.3.300-.5.100-.2 0-.4 0-.5-.1-.1-.7-1.600-.9-2.200-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400-.3.300-1 1-1 2.400s1 2.800 1.200 3c.1.200 2 3.100 4.900 4.300.7.300 1.200.5 1.600.6.700.2 1.300.2 1.800.1.600-.1 1.700-.7 1.900-1.400.2-.7.200-1.200.2-1.400-.1-.1-.3-.2-.6-.3z"/></svg>
)
const CallIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M6.600 10.800a15.100 15.100 0 0 0 6.600 6.600l2.200-2.200c.3-.3.700-.4 1-.2 1.100.4 2.300.6 3.600.6.600 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.400-1 1-1h3.500c.6 0 1 .4 1 1 0 1.300.2 2.500.6 3.600.1.300 0 .7-.2 1l-2.300 2.200z"/></svg>
)

export function FloatingContact() {
  return (
    <div className="float-contact">
      <a className="fc call" href={`tel:+${PHONE}`} aria-label="Call us"><CallIcon /><span>Call</span></a>
      <a className="fc wa" href={wa('Hi, I want to book a photographer')} target="_blank" rel="noreferrer" aria-label="WhatsApp us"><WaIcon /><span>WhatsApp</span></a>
    </div>
  )
}
