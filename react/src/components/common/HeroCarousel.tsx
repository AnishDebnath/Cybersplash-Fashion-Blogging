import React, { useState, useEffect } from 'react'

const A = '/assets'

const h62320 = `${A}/62320.png`
const h94f52 = `${A}/94f52.png`
const h038a6 = `${A}/038a6.png`

const SLIDES = [
    { img: h62320, label: 'FEATURED POSTS', title: 'Elegant Neutral Looks', sub: 'Timeless style for every moment.' },
    { img: h94f52, label: "EDITOR'S PICKS", title: 'Modern Classic Outfits', sub: 'Effortless fashion with a refined touch.' },
    { img: h038a6, label: 'LATEST IN FASHION', title: 'Chic Street Style', sub: 'Where comfort meets confidence.' }
]

const TRANSITION_COUNT = 14

function HeroCarousel() {
    const [active, setActive] = useState(0)
    const [transitionMode, setTransitionMode] = useState(0)

    const changeSlide = (nextIndex: number) => {
        setTransitionMode((mode) => (mode + 1) % TRANSITION_COUNT)
        setActive(nextIndex)
    }

    useEffect(() => {
        const id = setInterval(() => {
            setTransitionMode((mode) => (mode + 1) % TRANSITION_COUNT)
            setActive((current) => (current + 1) % SLIDES.length)
        }, 2000)
        return () => clearInterval(id)
    }, [])

    const prev = () => changeSlide((active + SLIDES.length - 1) % SLIDES.length)
    const next = () => changeSlide((active + 1) % SLIDES.length)

    const arrowStyle: React.CSSProperties = {
        position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: 62, height: 62, borderRadius: '50%',
        background: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', color: '#1e293b', fontSize: 20, lineHeight: 1, userSelect: 'none', zIndex: 10,
        boxShadow: '0 8px 24px rgba(0,0,0,0.16)', transition: 'background 0.2s, color 0.2s, transform 0.2s',
    }

    return (
        <div className="cs-hero-carousel" style={{ position: 'absolute', left: 0, top: 817, width: 1920, height: 960, overflow: 'hidden', background: '#fff' }}>
            <div className={`cs-hero-frame cs-hero-transition-${transitionMode}`}>
                {SLIDES.map((s, i) => (
                    <div key={i} className={i === active ? 'cs-hero-slide cs-hero-slide-active' : 'cs-hero-slide'} style={{ position: 'absolute', inset: 0, overflow: 'hidden', transition: 'opacity 1s cubic-bezier(0.65, 0, 0.35, 1)', opacity: i === active ? 1 : 0 }}>
                        <img key={`${i}-${active}`} className="cs-hero-slide-image" src={s.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transformOrigin: 'center' }} />
                    </div>
                ))}
                <div className="cs-hero-overlay" />
                <div key={active} className="cs-hero-content">
                    <p style={{ margin: 0, fontFamily: 'Inter', fontSize: 25, fontWeight: 400, letterSpacing: '2px', color: '#f2a8c4', animationDelay: '120ms' }}>{SLIDES[active].label}</p>
                    <h2 style={{ margin: 0, maxWidth: 980, textAlign: 'center', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 700, fontSize: 72, lineHeight: 1.14, color: '#fff', textShadow: '0 3px 24px rgba(0,0,0,0.42)', animationDelay: '260ms' }}>
                        {SLIDES[active].title.split(' ').map((word, index) => <React.Fragment key={`${word}-${index}`}>{index > 0 && ' '}<span className={index === SLIDES[active].title.split(' ').length - 1 ? 'cs-hero-title-accent' : undefined}>{word}</span></React.Fragment>)}
                    </h2>
                    <div style={{ marginTop: 14, animationDelay: '540ms' }}><button className="cs-hero-cta" type="button">EXPLORE NOW <span>➜</span></button></div>
                </div>
                <a className="cs-hero-callout"><span className="cs-hero-call-icon" aria-hidden="true">☎</span><span className="cs-hero-call-copy"><strong>CALL US FREE</strong><b>(1900)-1088-88</b></span></a>
                <button aria-label="Previous slide" onClick={prev} style={{ ...arrowStyle, left: 174 }}><span className="cs-hero-arrow-icon" style={{ transform: 'rotate(180deg)' }}>➜</span></button>
                <button aria-label="Next slide" onClick={next} style={{ ...arrowStyle, right: 174 }}><span className="cs-hero-arrow-icon">➜</span></button>
            </div>
        </div>
    )
}

export { HeroCarousel }
