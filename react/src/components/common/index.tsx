import React from 'react'

function Box({ l, t, r, b, w, h, clip, style, className, children }: {
  l?: number; t?: number; r?: number; b?: number; w?: number; h?: number
  clip?: boolean; style?: React.CSSProperties; className?: string; children?: React.ReactNode
}) {
  return (
    <div className={className} style={{
      position: 'absolute',
      ...(l !== undefined && { left: l }),
      ...(t !== undefined && { top: t }),
      ...(r !== undefined && { right: r }),
      ...(b !== undefined && { bottom: b }),
      ...(w !== undefined && { width: w }),
      ...(h !== undefined && { height: h }),
      ...(clip || style?.borderRadius !== undefined ? { overflow: 'hidden' } : {}),
      ...style,
    }}>{children}</div>
  )
}

function Txt({ l, t, r, style, className, children }: {
  l?: number; t: number; r?: number; style?: React.CSSProperties; className?: string; children: React.ReactNode
}) {
  return (
    <div className={className} style={{
      position: 'absolute',
      ...(l !== undefined && { left: l }),
      top: t,
      ...(r !== undefined && { right: r }),
      transform: 'translateY(-50%)',
      ...style,
    }}>{children}</div>
  )
}

function Img({ src, alt = '', style }: { src: string; alt?: string; style?: React.CSSProperties }) {
  return <img src={src} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', maxWidth: 'none', ...style }} />
}

function Masked({ mask, mw, mh, children, style }: {
  mask: string; mw: number; mh: number; children: React.ReactNode; style?: React.CSSProperties
}) {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      maskImage: `url("${mask}")`, WebkitMaskImage: `url("${mask}")`,
      maskSize: `${mw}px ${mh}px`, WebkitMaskSize: `${mw}px ${mh}px`,
      maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat',
      maskComposite: 'intersect', WebkitMaskComposite: 'source-in',
      ...style,
    }}>{children}</div>
  )
}

function NavItem({ label, l, tracking = '7.4214px' }: { label: string; l: number; tracking?: string }) {
  const base: React.CSSProperties = {
    position: 'absolute', left: l, top: 696.21,
    transform: 'translateY(-50%)',
    fontFamily: 'Arimo', fontSize: 33.7, lineHeight: '46.383px',
    letterSpacing: tracking, textAlign: 'center',
  }
  return <>
    <div className="cs-nav-item" style={{ ...base, color: 'transparent', textShadow: '0.424px 0.424px 0.3px rgba(0,0,0,0.3)' }}>{label}</div>
    <div className="cs-nav-item" style={{ ...base, color: '#000' }}>{label}</div>
  </>
}

export { Box, Txt, Img, Masked, NavItem }
export { HeroCarousel } from './HeroCarousel'