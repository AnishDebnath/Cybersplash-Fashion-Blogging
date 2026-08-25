import React, { useState, useEffect } from 'react'

const A = '/assets'

// Hero images
const h62320 = `${A}/62320.png`
const h94f52 = `${A}/94f52.png`
const h038a6 = `${A}/038a6.png`

// Slides data
const SLIDES = [
  { img: h62320, label: 'FEATURED POSTS', title: 'Elegant Neutral Looks', sub: 'Timeless style for every moment.' },
  { img: h94f52, label: "EDITOR'S PICKS", title: 'Modern Classic Outfits', sub: 'Effortless fashion with a refined touch.' },
  { img: h038a6, label: 'LATEST IN FASHION', title: 'Chic Street Style', sub: 'Where comfort meets confidence.' }
]

function HeroCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((active + 1) % 3), 5500)
    return () => clearInterval(id)
  }, [active])

  const prev = () => setActive((active + 2) % 3)
  const next = () => setActive((active + 1) % 3)

  const arrowStyle: React.CSSProperties = {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    width: 78, height: 78, borderRadius: '50%',
    background: 'rgba(255,255,255,0.15)',
    border: '2px solid rgba(255,255,255,0.5)',
    backdropFilter: 'blur(8px)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', color: '#fff', fontSize: 38,
    userSelect: 'none', zIndex: 10,
    transition: 'background 0.2s',
  }

  return (
    <div style={{ position: 'absolute', left: 0, top: 817, width: 1920, height: 960, overflow: 'hidden' }}>
      {/* Slides with layered transition */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            transition: 'opacity 1s cubic-bezier(0.65, 0, 0.35, 1), transform 1s cubic-bezier(0.65, 0, 0.35, 1)',
            opacity: i === active ? 1 : 0,
            transform: i === active
              ? 'translateX(0) scale(1)'
              : i === 0
                ? 'translateX(-5%) scale(1.02)'
                : i === 1
                  ? 'translateX(5%) scale(1.04)'
                  : 'translateX(-5%) scale(1.02)',
          }}
        >
          <img
            key={`${i}-${active}`}
            src={s.img}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transformOrigin: 'center',
            }}
          />
        </div>
      ))}

      {/* Dark gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.72) 100%)' }} />

      {/* Pink vignette */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 3, background: 'radial-gradient(ellipse at center, transparent 38%, rgba(193,83,107,0.22) 100%)' }} />

      {/* Text content */}
      <div key={active} className="cs-hero-content" style={{ position: 'absolute', inset: 0, zIndex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 26, padding: '0 220px' }}>
        <p style={{
          margin: 0, fontFamily: 'Inter', fontSize: 26, letterSpacing: '8px', color: '#f2a8c4', textTransform: 'uppercase',
          animationDelay: '120ms'
        }}>
          {SLIDES[active].label}
        </p>
        <div style={{ width: 280, height: 1.5, background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.9), transparent)' }} />
        <h2 style={{
          margin: 0, textAlign: 'center', fontFamily: 'Lora', fontStyle: 'italic', fontWeight: 400, fontSize: 108, lineHeight: 1.18, color: '#fff', textShadow: '0 3px 28px rgba(0,0,0,0.45)',
          animationDelay: '260ms'
        }}>
          {SLIDES[active].title}
        </h2>
        <p style={{
          margin: 0, textAlign: 'center', fontFamily: 'Alice', fontSize: 36, lineHeight: 1.55, color: 'rgba(255,255,255,0.87)',
          animationDelay: '400ms'
        }}>
          {SLIDES[active].sub}
        </p>
        <div style={{ marginTop: 12, animationDelay: '540ms' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 18, padding: '22px 56px', borderRadius: 60, background: 'linear-gradient(135deg, #dd72a6 0%, #c1536b 100%)', fontFamily: 'Arimo', fontSize: 28, letterSpacing: '5px', color: '#fff', boxShadow: '0 10px 36px rgba(193,83,107,0.45)' }}>
            EXPLORE NOW <span style={{ fontSize: 24 }}>→</span>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div onClick={prev} style={{ ...arrowStyle, left: 64 }}>‹</div>
      <div onClick={next} style={{ ...arrowStyle, right: 64 }}>›</div>

      {/* Dot indicators */}
      <div style={{ position: 'absolute', bottom: 48, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 14, zIndex: 10 }}>
        {SLIDES.map((_, i) => (
          <div key={i} onClick={() => setActive(i)} style={{ height: 10, width: i === active ? 50 : 10, borderRadius: 6, background: i === active ? '#dd72a6' : 'rgba(255,255,255,0.45)', cursor: 'pointer', transition: 'width 0.4s ease, background 0.3s ease' }} />
        ))}
      </div>

      {/* Bottom gold divider */}
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 500, height: 3, zIndex: 10, background: 'linear-gradient(to right, transparent, #c9a96e 40%, #c9a96e 60%, transparent)' }} />
    </div>
  )
}

export { HeroCarousel }