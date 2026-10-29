import { useEffect, useRef, useState } from 'react'
import { animate } from 'motion/react'
import { sm } from '../sm.jsx'
import { Icon } from './Icon.jsx'
import { LargeTitle, StaggerFadeUp } from './Type.jsx'
import { DevEmoji } from './DevEmoji.jsx'
import { hobbies, reminders } from '../data.js'
import { playThrottled } from '../sfx.js'
import { useLanded } from '../useLanded.js'

// Counts up each time it scrolls into view, and resets when it leaves. It ticks like a
// slot counter as it climbs (pitch rising with the number) and dings when it lands.
export function CountUp({ to, suffix = '', quiet = false }) {
  const ref = useRef(null)
  const inView = useLanded(ref, { amount: 0.6 })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) {
      const t = setTimeout(() => setN(0), 300)
      return () => clearTimeout(t)
    }
    const steps = 18
    let lastStep = 0
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        setN(Math.round(v))
        const p = v / to
        const step = Math.floor(p * steps)
        if (!quiet && step > lastStep && step < steps) {
          lastStep = step
          playThrottled('tick', 45, { rate: 0.85 + p * 0.55 })
        }
      },
      onComplete: () => {
        if (!quiet) playThrottled('done', 400)
      },
    })
    return () => controls.stop()
  }, [inView, to, quiet])

  return (
    <span ref={ref}>
      {n.toLocaleString('en-US')}
      {suffix}
    </span>
  )
}

const rise = (i = 0) => ({
  initial: { opacity: 0, y: 40, scale: 0.94 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: false, amount: 0.25 },
  transition: { type: 'spring', stiffness: 110, damping: 20, mass: 0.9, delay: i * 0.07 },
})

// Profile card: the emoji character on the left; name, age and a short description on the right.
function ProfileWidget() {
  return (
    <sm.div className="card widget profile-widget" {...rise(0)}>
      <sm.span
        className="memoji"
        animate={{ y: [0, -7, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <DevEmoji size={84} />
      </sm.span>
      <div className="profile-text">
        <div className="profile-head">
          <h3 className="profile-name">PRIME</h3>
          <span className="profile-age">Founder of OXYCHEM</span>
        </div>
        <StaggerFadeUp
          className="profile-bio"
          text="Founder of OXYCHEM. Complex concepts become easy with visual notes, motion and code."
          mark="Complex concepts become easy"
          delay={0.2}
        />
      </div>
    </sm.div>
  )
}

// The curve is decorative; the count matches the four linked live projects.
function ViewsWidget() {
  const line = 'M0 97 C 28 96, 46 82, 78 80 S 120 56, 152 50 S 190 24, 206 12'
  return (
    <sm.div className="card widget views-widget" {...rise(2)}>
      <span className="widget-label">
        <Icon name="solar:widget-5-linear" size={13} /> Featured work
      </span>
      <strong className="big-number">
        <CountUp to={4} />
      </strong>
      <small className="up-tag">live projects</small>
      {/* the wrapper is what scroll-detection watches: the clipped graph itself has no visible area */}
      <sm.div className="spark" aria-hidden="true" initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.5 }}>
        <sm.svg
          viewBox="0 0 214 100"
          preserveAspectRatio="none"
          variants={{
            hidden: { clipPath: 'inset(0 100% 0 0)' },
            show: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 1.8, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <path d={`${line} L206 100 L0 100 Z`} className="spark-area" />
          <path d={line} className="spark-line" />
        </sm.svg>
        <sm.span
          className="spark-dot"
          variants={{
            hidden: { scale: 0 },
            show: { scale: 1, transition: { delay: 1.7, type: 'spring' } },
          }}
        />
      </sm.div>
    </sm.div>
  )
}

function HobbiesWidget() {
  return (
    <sm.div className="card widget interests-widget" {...rise(3)}>
      <span className="widget-label">
        <Icon name="solar:book-2-linear" size={14} /> Learning themes
      </span>
      <div className="app-grid">
        {hobbies.map((it, i) => (
          <sm.span
            key={it.label}
            className="app"
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ type: 'spring', stiffness: 300, damping: 16, delay: 0.1 + i * 0.05 }}
          >
            <i className="app-icon" style={{ '--c': it.color }}>
              <Icon name={it.icon} size={22} />
            </i>
            <small>{it.label}</small>
          </sm.span>
        ))}
      </div>
    </sm.div>
  )
}

function LearningMapWidget() {
  return (
    <div className="card map-widget">
      <div className="map-heading">
        <div>
          <span className="widget-label">
            <Icon name="solar:map-point-linear" size={14} /> Learning region
          </span>
          <h3>Bengali-medium learning</h3>
          <p>Online lessons aligned with WBBSE subjects.</p>
        </div>
        <span className="app-icon map-mark" aria-hidden="true">
          <Icon name="solar:book-bookmark-linear" size={21} />
        </span>
      </div>
      <iframe
        className="learning-map"
        title="OpenStreetMap view of West Bengal and surrounding region"
        src="https://www.openstreetmap.org/export/embed.html?bbox=85.0%2C21.5%2C89.9%2C27.5&layer=mapnik"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      <div className="map-caption">
        <span>Regional curriculum view · no personal address</span>
        <a
          href="https://www.openstreetmap.org/#map=7/24.4/87.5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open map <Icon name="solar:arrow-right-up-linear" size={14} />
        </a>
      </div>
    </div>
  )
}

// iOS Reminders: the circles tick off one by one.
function RemindersWidget() {
  return (
    <sm.div className="card widget reminders-widget" {...rise(4)}>
      <span className="widget-label">
        <Icon name="solar:check-circle-bold" size={14} /> What I do
      </span>
      <ul>
        {reminders.map((r, i) => (
          <li key={r}>
            <sm.span
              className="tick"
              initial={{ scale: 0.6, backgroundColor: 'rgba(120,130,150,0)' }}
              whileInView={{ scale: 1, backgroundColor: '#0a84ff' }}
              viewport={{ once: false }}
              landSound={{ name: 'select', delay: 800 + i * 550, vol: 0.8 }}
              transition={{ delay: 0.8 + i * 0.55, type: 'spring', stiffness: 300, damping: 14 }}
            >
              <Icon name="solar:check-circle-bold" size={20} />
            </sm.span>
            {r}
          </li>
        ))}
      </ul>
    </sm.div>
  )
}

// The About section as an iPhone home screen full of widgets.
export function HomeScreen() {
  return (
    <section id="about" className="section">
      <div className="container">
        <LargeTitle>About</LargeTitle>
        <div className="home-grid">
          <ProfileWidget />
          <ViewsWidget />
          <LearningMapWidget />
          <HobbiesWidget />
          <RemindersWidget />
        </div>
      </div>
    </section>
  )
}
