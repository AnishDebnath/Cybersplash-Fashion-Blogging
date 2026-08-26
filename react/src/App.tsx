import React, { useState, useEffect } from 'react'
import { HeroCarousel } from './components/common/HeroCarousel'
import { Box, Txt, Img, Masked, NavItem } from './components/common'

const A = '/assets'

// Hero
const h2d2bd = `${A}/2d2bd.png`
const hbf771 = `${A}/bf771.png`
const h054a6 = `${A}/054a6.png`
const h8eaf9 = `${A}/8eaf9.png`
const h4b1b4 = `${A}/4b1b4.png`
const h62320 = `${A}/62320.png`
const h94f52 = `${A}/94f52.png`
const h038a6 = `${A}/038a6.png`
const h17c7b = `${A}/17c7b.png`
const h2fc78 = `${A}/2fc78.png`
const hf0d89 = `${A}/f0d89.png`
const hb1a24 = `${A}/b1a24.png`
const hd81b9 = `${A}/d81b9.png`
const hff3a2 = `${A}/ff3a2.png`
const h34asda = `${A}/34asda.png`
const h4sdad = `${A}/4sdad.png`
const h13dasd = `${A}/13dasd.png`
const he4waf = `${A}/e4waf.png`
const he7d3b = `${A}/e7d3b.png`
const ha2e9e = `${A}/a2e9e.png`
const h7c0cc = `${A}/7c0cc.png`
const h05a55 = `${A}/05a55.png`
const h847e0 = `${A}/847e0.png`
const h9edc9 = `${A}/9edc9.png`
const ha238c = `${A}/a238c.png`
const hbb8c6 = `${A}/bb8c6.png`
const he9590 = `${A}/e9590.svg`
const hb03bb = `${A}/b03bb.svg`
const h50d4f = `${A}/50d4f.svg`
const hdc8f8 = `${A}/dc8f8.svg`
const hd603b = `${A}/d603b.svg`
const h30c6f = `${A}/30c6f.svg`
const h41d30 = `${A}/41d30.svg`
const h94b81 = `${A}/94b81.svg`
const h156f9 = `${A}/156f9.svg`
const hf6927 = `${A}/f6927.svg`
const hcdcd1 = `${A}/cdcd1.svg`
const h8e0c6 = `${A}/8e0c6.svg`
const h26994 = `${A}/26994.svg`
const h36e7a = `${A}/36e7a.svg`
const h1a96d = `${A}/1a96d.svg`

// Editorial
const eaa62e = `${A}/aa62e.png`
const e10437 = `${A}/10437.png`
const e41910 = `${A}/41910.png`

// Latest Stories
const sb2e79 = `${A}/b2e79.png`
const s8bd87 = `${A}/8bd87.png`
const s47efc = `${A}/47efc.png`
const se9305 = `${A}/e9305.png`
const s80cf0 = `${A}/80cf0.png`
const s7cbc9 = `${A}/7cbc9.png`
const s8330a = `${A}/8330a.png`
const se465f = `${A}/e465f.png`
const se0b50 = `${A}/e0b50.png`
const sd2a6e = `${A}/d2a6e.png`
const se83bf = `${A}/e83bf.png`
const s1ede6 = `${A}/1ede6.png`
const s05a55 = `${A}/05a55.png`
const s90bed = `${A}/90bed.png`
const sa238c = `${A}/a238c.png`
const sc9e88 = `${A}/c9e88.png`
const sf2de5 = `${A}/f2de5.png`
const s054a6 = `${A}/054a6.png`
const s85de8 = `${A}/85de8.png`
const s43832 = `${A}/43832.svg`
const s6c169 = `${A}/6c169.svg`
const se1fac = `${A}/e1fac.svg`
const s4ce1a = `${A}/4ce1a.svg`
const s2bf46 = `${A}/2bf46.svg`
const s70fe2 = `${A}/70fe2.svg`
const s24b7c = `${A}/24b7c.svg`
const s5b5bb = `${A}/5b5bb.svg`
const s485da = `${A}/485da.svg`
const seab3b = `${A}/eab3b.svg`
const s4b1b4 = `${A}/4b1b4.png`
const sbb8c6 = `${A}/bb8c6.png`
const sbdasd = `${A}/13dasd.png`

// Style Categories
const cd2a6e = `${A}/d2a6e.png`
const c8c317 = `${A}/8c317.png`
const c12864 = `${A}/12864.png`
const c2633f = `${A}/2633f.png`
const c1ede6 = `${A}/1ede6.png`
const c528be = `${A}/528be.png`
const c65b46 = `${A}/65b46.png`
const ca238c = `${A}/a238c.png`
const c4b1b4 = `${A}/4b1b4.png`
const cbb8c6 = `${A}/bb8c6.png`
const c42fb2 = `${A}/42fb2.svg`
const cb73da = `${A}/b73da.svg`
const c34358 = `${A}/34358.svg`
const c7e481 = `${A}/7e481.svg`

// About
const abb8c6 = `${A}/bb8c6.png`
const a1b2ff = `${A}/1b2ff.png`
const ad81b9 = `${A}/d81b9.png`
const aa9870 = `${A}/a9870.png`
const a3ca48 = `${A}/3ca48.png`
const ae2eb5 = `${A}/e2eb5.png`
const a11571 = `${A}/11571.png`
const a4b1b4 = `${A}/4b1b4.png`
const aa0d31 = `${A}/a0d31.png`

// Instagram
const ia9870 = `${A}/a9870.png`
const ibb8c6 = `${A}/bb8c6.png`
const ie3a76 = `${A}/e3a76.png`
const if7dab = `${A}/f7dab.png`
const i6bb39 = `${A}/6bb39.png`
const ia2e9e = `${A}/a2e9e.png`
const id81b9 = `${A}/d81b9.png`
const i8c95f = `${A}/8c95f.png`
const i4b1b4 = `${A}/4b1b4.png`
const i90bed = `${A}/90bed.png`
const i12eqsd = `${A}/12eqsd.png`
const id67f4 = `${A}/d67f4.svg`
const ifaeb8 = `${A}/faeb8.svg`

// Newsletter
const n3748b = `${A}/3748b.png`
const nc07de = `${A}/c07de.png`
const nf5dd3 = `${A}/f5dd3.png`
const nbb8c6 = `${A}/bb8c6.png`
const ne976d = `${A}/e976d.svg`
const n4f8cd = `${A}/4f8cd.svg`
const n0d711 = `${A}/0d711.svg`
const nb52d5 = `${A}/b52d5.svg`
const n6dcae = `${A}/6dcae.svg`
const n61810 = `${A}/61810.svg`
const n740c4 = `${A}/740c4.svg`
const n5e9b0 = `${A}/5e9b0.svg`
const nc434a = `${A}/c434a.svg`
const n268a5 = `${A}/268a5.svg`
const n38008 = `${A}/38008.svg`
const nbbeee = `${A}/bbeee.svg`
const n2a4e0 = `${A}/2a4e0.svg`

// Footer
const f321ac = `${A}/321ac.png`
const ffe12b = `${A}/fe12b.png`
const f54576 = `${A}/54576.png`
const fa4ff7 = `${A}/a4ff7.png`
const fe8b87 = `${A}/e8b87.png`
const f040f5 = `${A}/040f5.png`
const f86f2b = `${A}/86f2b.svg`
const ff0bf8 = `${A}/f0bf8.svg`
const f8ece0 = `${A}/8ece0.svg`

const DESIGN_W = 1920
const SECTION_HEIGHTS = [3606, 1635, 3817, 1247, 1062, 1741, 1132, 793]
const DESIGN_H = SECTION_HEIGHTS.reduce((a, b) => a + b, 0)


function Hero() {
  return (
    <div style={{ position: 'relative', width: 1920, height: 3606, overflow: 'hidden', background: '#fff' }}>

      {/* ── Corner border top-left ── */}
      <Box l={0} t={0} w={421.59} h={421.77}><Img src={he7d3b} /></Box>

      {/* ── Corner border top-right (mirrored) ── */}
      <Box l={1498.41} t={0} w={421.59} h={421.77} style={{ transform: 'scaleX(-1)' }}><Img src={he7d3b} /></Box>

      {/* ── Sparkling glitter top-right ── */}
      <Box l={1225.84} t={6.47} w={527.47} h={624.22}><Img src={ha238c} /></Box>

      {/* ── Glitter stars top-center ── */}
      <Box l={280.81} t={-100.84} w={281.58} h={309.86}><Img src={hbb8c6} /></Box>

      {/* ── Leaves illustrations left ── */}
      <Box l={0} t={189.42} w={527.78} h={431.42} clip>
        <div style={{ position: 'absolute', left: -10.47, top: 0, width: 548.72, height: 431.42 }}><Img src={h847e0} /></div>
      </Box>
      <Box l={22.49} t={211.91} w={527.78} h={431.42} clip>
        <div style={{ position: 'absolute', left: -10.47, top: 0, width: 548.72, height: 431.42 }}><Img src={h847e0} /></div>
      </Box>

      {/* ── Right-side flower asset ── */}
      <Box l={1260} t={150} w={650} h={380} style={{ pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', inset: 0, transform: 'translateX(10px) translateY(80px)' }}>
          <Img src={he4waf} style={{ objectFit: 'contain', objectPosition: 'right bottom' }} />
        </div>
      </Box>

      {/* ── Large center portrait ── */}
      <Box l={653.88} t={-77.32} w={612.23} h={678.03} clip>
        <div style={{ position: 'absolute', left: -177.88, top: 0, width: 943.64, height: 943.64 }}><Img src={h2d2bd} /></div>
      </Box>

      {/* ── Golden sparks left ── */}
      <Box l={-92.05} t={620.85} w={790.97} h={278.48}><Img src={hbf771} /></Box>

      {/* ── Golden sparkles right (clipped) ── */}
      <Box l={1266.12} t={578} w={588.58} h={316.86} clip>
        <div style={{ position: 'absolute', left: 0, top: -134.88, width: 588.58, height: 586.63 }}><Img src={h054a6} /></div>
      </Box>

      {/* ── Thin separator line ── */}
      <Box l={115.38} t={620.85} w={1742.84} h={7.98}><Img src={h8eaf9} /></Box>

      {/* ── Full-width nav separator mask ── */}
      <Box l={0} t={655.99} w={1920} h={80.44} style={{ opacity: 0.92 }}>
        <Masked mask={h36e7a} mw={1920} mh={80.44}><Img src={h1a96d} /></Masked>
      </Box>

      {/* ── Navigation ── */}
      <NavItem label="HOME" l={235.25} />
      <NavItem label="FASHION" l={434.16} />
      <NavItem label="BEAUTY" l={688.61} />
      <NavItem label="LIFESTYLE" l={924.41} tracking="3.3733px" />
      <NavItem label="ABOUT" l={1197.39} />
      <NavItem label="CONTACT" l={1405.57} />

      {/* ── Carousel (inserted at t=817, pushes everything below down by 960) ── */}
      <HeroCarousel />

      {/* ── Row 1: Three poster columns (original t + 960) ── */}
      <Box l={0} t={1777} w={639.54} h={812.58} clip>
        <div style={{ position: 'absolute', left: 0, top: -162.18, width: 639.54, height: 1136.96 }}><Img src={h62320} /></div>
      </Box>
      <Box l={638.82} t={1777} w={639.54} h={812.58} clip>
        <div style={{ position: 'absolute', left: -94.81, top: 0, width: 829.17, height: 812.58 }}><Img src={h94f52} /></div>
      </Box>
      <Box l={1276.96} t={1777} w={643.04} h={812.59} clip>
        <div style={{ position: 'absolute', left: 0, top: -75.38, width: 643.04, height: 963.34 }}><Img src={h038a6} /></div>
      </Box>

      {/* Row 1 column overlays */}
      <Box l={0} t={2271} w={563.27} h={314.37} clip style={{ opacity: 0.5 }}><Img src={hdc8f8} /></Box>
      <Box l={639.54} t={2271} w={563.27} h={314.37} clip style={{ opacity: 0.5 }}><Img src={hdc8f8} /></Box>
      <Box l={1276.96} t={2271} w={563.27} h={314.37} clip style={{ opacity: 0.5 }}><Img src={hdc8f8} /></Box>

      {/* Left column text */}
      <Txt l={9.04} r={1480.5} t={2346} style={{ fontFamily: 'Alice', fontSize: 50, lineHeight: '69px', color: '#fff' }}>
        <p style={{ margin: 0 }}>Elegant Neutral</p><p style={{ margin: 0 }}>Looks</p>
      </Txt>
      <Txt l={16.42} r={1487.47} t={2434} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 34, lineHeight: '47px', color: '#fff' }}>
        <p style={{ margin: 0 }}>Timeless style for every</p>
      </Txt>
      <Txt l={16.42} r={1747.35} t={2484} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 34, lineHeight: '47px', color: '#fff' }}>
        <p style={{ margin: 0 }}>moment.</p>
      </Txt>

      {/* Center column text */}
      <Txt l={653.88} r={832.81} t={2346} style={{ fontFamily: 'Alice', fontSize: 50, lineHeight: '69px', color: '#fff' }}>
        <p style={{ margin: 0 }}>Modern Classic</p><p style={{ margin: 0 }}>Outfits</p>
      </Txt>
      <Txt l={661.25} r={828.15} t={2470} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 34, lineHeight: '47px', color: '#fff' }}>
        <p style={{ margin: 0 }}>Effortless fashion with a</p>
      </Txt>
      <Txt l={661.25} r={1012.54} t={2520} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 34, lineHeight: '47px', color: '#fff' }}>
        <p style={{ margin: 0 }}>refined touch.</p>
      </Txt>

      {/* Right column text */}
      <Txt l={1292.42} r={322.59} t={2346} style={{ fontFamily: 'Alice', fontSize: 50, lineHeight: '69px', color: '#fff' }}>
        <p style={{ margin: 0 }}>Chic Street</p><p style={{ margin: 0 }}>Style</p>
      </Txt>
      <Txt l={1292.42} r={246.45} t={2474} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 34, lineHeight: '47px', color: '#fff' }}>
        <p style={{ margin: 0 }}>Where comfort meets</p>
      </Txt>
      <Txt l={1292.42} r={427.02} t={2524} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 34, lineHeight: '47px', color: '#fff' }}>
        <p style={{ margin: 0 }}>confidence.</p>
      </Txt>

      {/* ── Decorative transition (original t + 960) ── */}
      <Box l={-211.06} t={2585} w={561.8} h={392.55}><Img src={h4b1b4} /></Box>
      <Box l={486.11} t={2629} w={908.11} h={52.59}><Img src={hd81b9} /></Box>
      <Box l={698.93} t={2707} w={495.31} h={19.81}><Img src={ha2e9e} /></Box>
      <Box l={-127.2} t={2575} w={548.8} h={344.36}><Img src={h05a55} /></Box>
      <Box l={1243.99} t={2590} w={426.53} h={451.89} clip>
        <div style={{ position: 'absolute', left: -159.47, top: 0, width: 646.72, height: 451.89 }}><Img src={h4b1b4} /></div>
      </Box>
      <Box l={1643.18} t={2590} w={317.03} h={505.47} clip>
        <div style={{ position: 'absolute', left: -20.63, top: 0, width: 339.3, height: 505.47 }}><Img src={h2fc78} /></div>
      </Box>

      {/* ── Row 2: Featured Posts portraits (original t + 960) ── */}
      <Box l={82.67} t={2793} w={536.14} h={662.06} clip>
        <div style={{ position: 'absolute', left: 0, top: -45.59, width: 536.14, height: 753.26 }}><Img src={hb1a24} /></div>
      </Box>
      <Box l={698.93} t={2793} w={531.89} h={662.07} clip>
        <div style={{ position: 'absolute', left: 0, top: -67.37, width: 531.89, height: 796.83 }}><Img src={h17c7b} /></div>
      </Box>
      <Box l={1310.69} t={2793} w={522.14} h={662.08} clip>
        <div style={{ position: 'absolute', left: -9.17, top: 0, width: 540.47, height: 662.08 }}><Img src={hf0d89} /></div>
      </Box>

      {/* Section label masks */}
      <Box l={136.78} t={3067} w={429.49} h={85.75}>
        <Masked mask={h94b81} mw={429.49} mh={85.75}><Img src={h156f9} /></Masked>
      </Box>
      <Box l={751.74} t={3067} w={416.52} h={85.75}>
        <Masked mask={hf6927} mw={416.52} mh={85.75}><Img src={hcdcd1} /></Masked>
      </Box>
      <Box l={1351.29} t={3067} w={452.31} h={85.75}>
        <Masked mask={h8e0c6} mw={452.31} mh={85.75}><Img src={h26994} /></Masked>
      </Box>

      {/* Section label text */}
      <Txt l={172.52} r={1386.56} t={3107} style={{ fontFamily: 'Inter', fontSize: 30, lineHeight: '42px', color: '#fff', textAlign: 'center', letterSpacing: '2px' }}>
        <p style={{ margin: 0 }}>FEATURED POSTS</p>
      </Txt>
      <Txt l={800.49} r={793.44} t={3107} style={{ fontFamily: 'Inter', fontSize: 30, lineHeight: '42px', color: '#fff', textAlign: 'center', letterSpacing: '2px' }}>
        <p style={{ margin: 0 }}>{"EDITOR'S PICKS"}</p>
      </Txt>
      <Txt l={1377.47} r={139.64} t={3107} style={{ fontFamily: 'Inter', fontSize: 30, lineHeight: '42px', color: '#fff', textAlign: 'center', letterSpacing: '2px' }}>
        <p style={{ margin: 0 }}>LATEST IN FASHION</p>
      </Txt>

      {/* Bottom decorations */}
      <Box l={1625.88} t={3353} w={355.44} h={331.75}><Img src={h7c0cc} /></Box>
      <Box l={1222.72} t={3413} w={447.81} h={173.11} clip>
        <div style={{ position: 'absolute', left: 0, top: -15.04, width: 447.81, height: 203.19 }}><Img src={h9edc9} /></div>
      </Box>
      <Box l={716.92} t={3527} w={505.8} h={38.77}><Img src={hff3a2} /></Box>
    </div>
  )
}

function Editorial() {
  return (
    <div style={{ position: 'relative', width: 1920, height: 1635, overflow: 'hidden', background: '#fffff9' }}>
      {/* Large editorial photo */}
      <Box l={33.46} t={0} w={1853.08} h={1191.91} clip>
        <div style={{ position: 'absolute', left: 0, top: -137.58, width: 1853.06, height: 1362 }}><Img src={eaa62e} /></div>
      </Box>

      {/* Gold leaf left */}
      <Box l={112.67} t={1215.92} w={169.58} h={418.73}><Img src={e10437} /></Box>

      {/* Sparkles right */}
      <Box l={1617.82} t={1215.71} w={302.17} h={418.95} clip>
        <div style={{ position: 'absolute', left: -21.99, top: 0, width: 346.16, height: 418.95 }}><Img src={e41910} /></div>
      </Box>

      {/* Star confetti bottom-left */}
      <Box l={-279.54} t={1323.65} w={561.8} h={470.22} clip>
        <div style={{ position: 'absolute', left: -55.58, top: 0, width: 672.95, height: 470.22 }}><Img src={h4b1b4} /></div>
      </Box>

      {/* Golden geometric line */}
      <Box l={599.74} t={1558.76} w={768} h={44.47}><Img src={hd81b9} /></Box>

      {/* Date label */}
      <Txt l={724.78} t={1212.9} style={{ fontFamily: 'Inter', fontSize: 28.1, letterSpacing: '6.92px', color: '#000', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>MARCH 2026 — FASHION</p>
      </Txt>

      {/* Title */}
      <Txt l={421.29} r={379.18} t={1330} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 64, lineHeight: '89px', color: '#dd72a6', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>The Return of Effortless Elegance</p>
      </Txt>

      {/* Description */}
      <Txt l={296.73} r={234.39} t={1468} style={{ fontFamily: 'Alice', fontSize: 29, lineHeight: '40px', color: '#000', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>Fashion trends may come and go, but true elegance remains timeless. This season</p>
        <p style={{ margin: 0 }}>embraces soft tones, minimal silhouettes, and confident simplicity that defines modern</p>
        <p style={{ margin: 0 }}>style.</p>
      </Txt>
    </div>
  )
}

function LatestStories() {
  return (
    <div style={{ position: 'relative', width: 1920, height: 3817, overflow: 'hidden', background: '#fff' }}>



      {/* Latest Stories decorative assets */}
      <Box l={1280} t={0} w={220} h={220} style={{ opacity: 0.95, pointerEvents: 'none' }}>
        <Img src={h13dasd} style={{ objectFit: 'contain', objectPosition: 'center' }} />
      </Box>
      <Box l={1440} t={50} w={430} h={330} style={{ pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', inset: 0, transform: 'translateX(12px)' }}>
          <Img src={h4sdad} style={{ objectFit: 'contain', objectPosition: 'right top' }} />
        </div>
      </Box>

      {/* Top glitter stars */}
      <Box l={218.53} t={-39.2} w={281.58} h={309.86}><Img src={sbb8c6} /></Box>
      <Box l={1214} t={31.77} w={412.39} h={453.8}><Img src={sbb8c6} /></Box>

      {/* Sparkling glitter top-left */}
      <Box l={-125.38} t={-19.35} w={411.5} h={410.61} clip>
        <div style={{ position: 'absolute', left: 0, top: -38.19, width: 411.5, height: 486.98 }}><Img src={sa238c} /></div>
      </Box>

      {/* Title "Latest Stories" */}
      <Txt l={506.31} r={605.77} t={89.2} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 131.1, lineHeight: '147.584px', color: '#c1536b', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>Latest Stories</p>
      </Txt>

      {/* Aesthetic golden line */}
      <Box l={717.98} t={176.15} w={384} h={19.52}><Img src={se83bf} /></Box>

      {/* ── Row 1 portraits ── */}
      {/* Left */}
      <Box l={28.23} t={470.93} w={603.38} h={685.8} clip className="cs-portrait-card">
        <div className="cs-card-img" style={{ position: 'absolute', left: 0, top: -34.2, width: 603.38, height: 754.22 }}><Img src={s8bd87} /></div>
      </Box>
      {/* Center */}
      <Box l={658.31} t={470.93} w={603.38} h={773.59} clip className="cs-portrait-card">
        <div className="cs-card-img" style={{ position: 'absolute', left: -7.27, top: 0, width: 617.89, height: 773.59 }}><Img src={s47efc} /></div>
      </Box>
      {/* Right */}
      <Box l={1287.93} t={470.93} w={603.35} h={509.89} clip className="cs-portrait-card">
        <div className="cs-card-img" style={{ position: 'absolute', left: 0, top: -165.26, width: 603.35, height: 739.19 }}><Img src={sb2e79} /></div>
      </Box>

      {/* ── Row 1 decorative ── */}
      <Box l={142.09} t={1312.3} w={311.89} h={28.45}><Img src={sd2a6e} /></Box>
      <Box l={596.25} t={1297.06} w={127.31} h={228.38}><Img src={s90bed} /></Box>
      <Box l={790.08} t={1354.78} w={311.89} h={28.45}><Img src={sd2a6e} /></Box>
      <Box l={1433.67} t={1150.79} w={311.89} h={28.45}><Img src={sd2a6e} /></Box>

      {/* Bokeh effects */}
      <Box l={-106.54} t={1265.61} w={259.5} h={265.75} clip>
        <div style={{ position: 'absolute', left: -6.36, top: 0, width: 272.2, height: 265.75 }}><Img src={sf2de5} /></div>
      </Box>
      <Box l={1781.74} t={1029.84} w={332.83} h={324.92} clip>
        <div style={{ position: 'absolute', left: -36.67, top: 0, width: 332.83, height: 324.92 }}><Img src={sf2de5} /></div>
      </Box>

      {/* Star confetti / glitter row 1 */}
      <Box l={470.49} t={1180.79} w={267.34} h={186.81}><Img src={s4b1b4} /></Box>
      <Box l={1212.3} t={1182.42} w={236.05} h={259.75}><Img src={sbb8c6} /></Box>

      {/* ── Row 1 article text ── */}
      {/* Left article */}
      <Txt l={91.61} r={1376.78} t={313.56} style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 22.1, lineHeight: '30.922px', color: '#000', textAlign: 'center', letterSpacing: '5.5323px' }}>
        <p style={{ margin: 0 }}>MARCH 1, 2026 — LIFESTYLE</p>
      </Txt>
      <Txt l={110.8} r={1401.54} t={396.75} className="cs-article-title" style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 38, lineHeight: '42px', color: '#dd72a6', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>The Royal Aesthetic:</p>
        <p style={{ margin: 0 }}>Inspired Living</p>
      </Txt>
      <Txt l={74.6} r={1365.33} t={1239.31} style={{ fontFamily: 'Alice', fontSize: 25, lineHeight: '34px', color: '#000', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>Step into a world of timeless</p>
        <p style={{ margin: 0 }}>elegance inspired by rich textures</p>
        <p style={{ margin: 0 }}>and graceful living.</p>
      </Txt>

      {/* Center article */}
      <Txt l={742.37} r={750.71} t={313.56} style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 22.5, lineHeight: '30.922px', color: '#000', textAlign: 'center', letterSpacing: '5.5323px' }}>
        <p style={{ margin: 0 }}>MARCH 1, 2026 — FASHION</p>
      </Txt>
      <Txt l={716.86} r={744.64} t={396.75} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 38, lineHeight: '42px', color: '#dd72a6', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>Denim Diaries: Casual</p>
        <p style={{ margin: 0 }}>Meets Chic</p>
      </Txt>
      <Txt l={707.71} r={708} t={1302.49} style={{ fontFamily: 'Alice', fontSize: 25, lineHeight: '34px', color: '#000', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>Denim redefined with elegance and</p>
        <p style={{ margin: 0 }}>everyday comfort.</p>
      </Txt>

      {/* Right article */}
      <Txt l={1365.47} r={145.35} t={315.54} style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 22.1, lineHeight: '30.922px', color: '#000', textAlign: 'center', letterSpacing: '5.5323px' }}>
        <p style={{ margin: 0 }}>MARCH 1, 2026 — BEAUTY</p>
      </Txt>
      <Txt l={1327.17} r={91.61} t={398.72} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 38, lineHeight: '42px', color: '#dd72a6', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>My Story: A Journey into</p>
        <p style={{ margin: 0 }}>Style</p>
      </Txt>
      <Txt l={1342.11} r={65.05} t={1065.43} style={{ fontFamily: 'Alice', fontSize: 25, lineHeight: '34px', color: '#000', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>A glimpse into how fashion became</p>
        <p style={{ margin: 0 }}>more than just clothing — it became</p>
        <p style={{ margin: 0 }}>a statement of identity.</p>
      </Txt>

      {/* ── Row 2 portraits ── */}
      <Box l={28} t={1525.45} w={603.38} h={789.65} clip className="cs-portrait-card">
        <div className="cs-card-img" style={{ position: 'absolute', left: 0, top: -7.41, width: 603.38, height: 804.49 }}><Img src={s7cbc9} /></div>
      </Box>
      <Box l={658.08} t={1600.26} w={603.38} h={809.68} clip className="cs-portrait-card">
        <div className="cs-card-img" style={{ position: 'absolute', left: 0, top: -47.97, width: 603.38, height: 905.62 }}><Img src={se9305} /></div>
      </Box>
      <Box l={1288.16} t={1381.66} w={603.38} h={744.46} clip className="cs-portrait-card">
        <div className="cs-card-img" style={{ position: 'absolute', left: 0, top: -30.02, width: 603.38, height: 804.49 }}><Img src={s80cf0} /></div>
      </Box>

      {/* ── Row 2 decorative ── */}
      <Box l={1049.72} t={1232.62} w={319.64} h={200.56} clip>
        <div style={{ position: 'absolute', inset: 0, transform: 'rotate(180deg)', transformOrigin: 'center' }}>
          <Img src={s05a55} />
        </div>
      </Box>
      <Box l={567.71} t={2444.39} w={127.31} h={228.38}><Img src={s90bed} /></Box>
      <Box l={1164.18} t={2325.86} w={367.13} h={230.38}><Img src={s05a55} /></Box>

      {/* Row 2 sparkle effects */}
      <Box l={-125.93} t={2366.28} w={317.92} h={316.86}><Img src={s054a6} /></Box>
      <Box l={1728} t={2176.88} w={236.36} h={437.48} clip>
        <div style={{ position: 'absolute', left: -66.66, top: 0, width: 369.67, height: 437.48 }}><Img src={sa238c} /></div>
      </Box>

      {/* ── Row 2 article text ── */}
      {/* Left */}
      <Txt l={123.01} r={1390.1} t={1417.91} style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 22.3, lineHeight: '30.922px', color: '#000', textAlign: 'center', letterSpacing: '5.5323px' }}>
        <p style={{ margin: 0 }}>MARCH 1, 2026 — TRENDS</p>
      </Txt>
      <Txt l={61.14} r={1338.19} t={1476.48} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 38, lineHeight: '42px', color: '#dd72a6', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>Minimalism: Less is More</p>
      </Txt>
      <Txt l={112.11} r={1402.84} t={2370.27} style={{ fontFamily: 'Alice', fontSize: 25, lineHeight: '34px', color: '#000', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>Clean cuts and neutral tones</p>
        <p style={{ margin: 0 }}>redefine modern fashion.</p>
      </Txt>

      {/* Center */}
      <Txt l={742.37} r={750.71} t={1454.14} style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 22.5, lineHeight: '30.922px', color: '#000', textAlign: 'center', letterSpacing: '5.5323px' }}>
        <p style={{ margin: 0 }}>MARCH 1, 2026 — FASHION</p>
      </Txt>
      <Txt l={724.53} r={743.87} t={1530.3} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 38, lineHeight: '42px', color: '#dd72a6', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>Street Style: New York</p>
        <p style={{ margin: 0 }}>Edition</p>
      </Txt>
      <Txt l={704.58} r={695.95} t={2466.5} style={{ fontFamily: 'Alice', fontSize: 25, lineHeight: '34px', color: '#000', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>Bold and confident looks inspired by</p>
        <p style={{ margin: 0 }}>urban fashion culture.</p>
      </Txt>

      {/* Right */}
      <Txt l={1401.32} r={136.34} t={1232.62} style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 22, lineHeight: '30.922px', color: '#000', textAlign: 'center', letterSpacing: '5.5323px' }}>
        <p style={{ margin: 0 }}>MARCH 1, 2026 — STYLE</p>
      </Txt>
      <Txt l={1352.22} r={76.09} t={1315.91} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 38, lineHeight: '42px', color: '#dd72a6', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>Modern Muse: Everyday</p>
        <p style={{ margin: 0 }}>Glam</p>
      </Txt>
      <Txt l={1331.69} r={63.79} t={2229.06} style={{ fontFamily: 'Alice', fontSize: 25, lineHeight: '34px', color: '#000', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>Effortlessly blending comfort with</p>
        <p style={{ margin: 0 }}>sophistication, this look captures the</p>
        <p style={{ margin: 0 }}>essence of modern fashion with a</p>
        <p style={{ margin: 0 }}>chic everyday twist.</p>
      </Txt>

      {/* ── Row 2 geom lines ── */}
      <Box l={158.59} t={2426.82} w={311.89} h={28.45}><Img src={sd2a6e} /></Box>
      <Box l={794.29} t={2526.12} w={311.89} h={28.45}><Img src={sd2a6e} /></Box>
      <Box l={1436.48} t={2326.37} w={311.89} h={28.45}><Img src={sd2a6e} /></Box>

      {/* ── Row 3 portraits ── */}
      <Box l={28} t={2669.43} w={603.38} h={660.31} clip className="cs-portrait-card">
        <div className="cs-card-img" style={{ position: 'absolute', left: -38.33, top: 0, width: 660.31, height: 660.31 }}><Img src={s8330a} /></div>
      </Box>
      <Box l={658.31} t={2777.92} w={603.36} h={551.86} clip className="cs-portrait-card">
        <div className="cs-card-img" style={{ position: 'absolute', left: 0, top: -184.11, width: 603.36, height: 754.19 }}><Img src={se465f} /></div>
      </Box>
      <Box l={1287.93} t={2576.51} w={603.38} h={770.79} clip className="cs-portrait-card">
        <div className="cs-card-img" style={{ position: 'absolute', left: 0, top: -47.9, width: 603.38, height: 866.58 }}><Img src={se0b50} /></div>
      </Box>

      {/* Row 3 glitter */}
      <Box l={1184.79} t={2536} w={206.73} h={227.5}><Img src={sbb8c6} /></Box>

      {/* ── Row 3 article text ── */}
      {/* Left */}
      <Txt l={118.44} r={1392.38} t={2524.71} style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 22.1, lineHeight: '30.922px', color: '#000', textAlign: 'center', letterSpacing: '5.5323px' }}>
        <p style={{ margin: 0 }}>MARCH 1, 2026 — BEAUTY</p>
      </Txt>
      <Txt l={88.65} r={1368.13} t={2598.05} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 38, lineHeight: '42px', color: '#dd72a6', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>{"Glow & Grace: Natural"}</p>
        <p style={{ margin: 0 }}>Beauty Trends</p>
      </Txt>
      <Txt l={115.41} r={1388.05} t={3438.84} style={{ fontFamily: 'Alice', fontSize: 25, lineHeight: '34px', color: '#000', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>Embrace a fresh, radiant look</p>
        <p style={{ margin: 0 }}>with minimal makeup and</p>
        <p style={{ margin: 0 }}>skincare-focused beauty that</p>
        <p style={{ margin: 0 }}>enhances your natural glow.</p>
      </Txt>

      {/* Center */}
      <Txt l={753.62} r={739.46} t={2627.58} style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 22.5, lineHeight: '30.922px', color: '#000', textAlign: 'center', letterSpacing: '5.5323px' }}>
        <p style={{ margin: 0 }}>MARCH 1, 2026 — FASHION</p>
      </Txt>
      <Txt l={713.07} r={704.44} t={2703.74} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 38, lineHeight: '42px', color: '#dd72a6', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>Effortless Layers: Styling</p>
        <p style={{ margin: 0 }}>with Ease</p>
      </Txt>
      <Txt l={728.19} r={728.69} t={3431.3} style={{ fontFamily: 'Alice', fontSize: 25, lineHeight: '34px', color: '#000', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>Layering meets elegance with</p>
        <p style={{ margin: 0 }}>versatile pieces that create a</p>
        <p style={{ margin: 0 }}>balanced, stylish look perfect for</p>
        <p style={{ margin: 0 }}>everyday fashion.</p>
      </Txt>

      {/* Right */}
      <Txt l={1359.66} r={108.73} t={2429.24} style={{ fontFamily: 'Inter', fontWeight: 700, fontSize: 22.1, lineHeight: '30.922px', color: '#000', textAlign: 'center', letterSpacing: '5.5323px' }}>
        <p style={{ margin: 0 }}>MARCH 1, 2026 — LIFESTYLE</p>
      </Txt>
      <Txt l={1318.95} r={75.76} t={2506.89} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 38, lineHeight: '42px', color: '#dd72a6', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>Cozy Chic: Comfort Meets</p>
        <p style={{ margin: 0 }}>Style</p>
      </Txt>
      <Txt l={1361.8} r={82.87} t={3450.26} style={{ fontFamily: 'Alice', fontSize: 25, lineHeight: '34px', color: '#000', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>Soft layers and relaxed</p>
        <p style={{ margin: 0 }}>silhouettes redefine comfort</p>
        <p style={{ margin: 0 }}>dressing while keeping your style</p>
        <p style={{ margin: 0 }}>effortlessly on point.</p>
      </Txt>

      {/* ── Row 3 geom lines ── */}
      <Box l={152.96} t={3540.61} w={311.89} h={28.45}><Img src={sd2a6e} /></Box>
      <Box l={803.7} t={3530.02} w={311.89} h={28.45}><Img src={sd2a6e} /></Box>
      <Box l={1439.31} t={3550.38} w={311.89} h={28.45}><Img src={sd2a6e} /></Box>
      <Box l={1193.89} t={3401.77} w={127.31} h={228.38}><Img src={s90bed} /></Box>

      {/* Row 3 decorative effects */}
      <Box l={1806.04} t={3389.32} w={281.58} h={309.86}><Img src={sbb8c6} /></Box>
      <Box l={1304.63} t={3598.52} w={477.09} h={171.36}><Img src={sc9e88} /></Box>
      <Box l={-295.13} t={3376.22} w={448.08} h={328.78} clip>
        <div style={{ position: 'absolute', left: -99.08, top: 0, width: 646.25, height: 328.78 }}><Img src={s85de8} /></div>
      </Box>
      <Box l={540.24} t={3316.5} w={267.34} h={340.36} clip>
        <div style={{ position: 'absolute', left: -109.88, top: 0, width: 487.11, height: 340.36 }}><Img src={s4b1b4} /></div>
      </Box>

      {/* Left-side decorative flourish near button */}
      <Box l={150} t={3600.31} w={500} h={180} style={{ pointerEvents: 'none', transform: 'scaleX(-1)' }}>
        <Img src={sc9e88} style={{ objectFit: 'contain', objectPosition: 'center' }} />
      </Box>

      {/* ── Explore More button ── */}
      <Box l={711.9} t={3627.31} w={531.34} h={108.25} className="cs-btn">
        <Masked mask={seab3b} mw={531.34} mh={108.25}><Img src={s1ede6} /></Masked>
      </Box>

      <Txt l={850.08} r={724.06} t={3682.08} style={{ fontFamily: 'Arimo', fontSize: 43.2, lineHeight: '59.034px', color: '#fff', textAlign: 'center', pointerEvents: 'none' }}>
        <p style={{ margin: 0 }}>EXPLORE MORE</p>
      </Txt>
    </div>
  )
}

function StyleCategories() {
  return (
    <div style={{ position: 'relative', width: 1920, height: 1247, overflow: 'hidden', background: '#fffff9' }}>
      {/* Glitter stars */}
      <Box l={995.99} t={-30.26} w={476.52} h={309.86} clip>
        <div style={{ position: 'absolute', left: 0, top: -107.26, width: 476.52, height: 524.36 }}><Img src={cbb8c6} /></div>
      </Box>
      <Box l={-148.61} t={19.13} w={377.56} h={377.56} clip>
        <div style={{ position: 'absolute', left: -101.13, top: 0, width: 540.36, height: 377.56 }}><Img src={c4b1b4} /></div>
      </Box>

      {/* Golden floral branch top-right */}
      <Box l={1557.96} t={19.13} w={422.72} h={236.23} clip>
        <div style={{ position: 'absolute', left: -3.8, top: -2.06, width: 422.72, height: 238.31 }}><Img src={c528be} /></div>
      </Box>

      {/* Golden geom line top-left */}
      <Box l={158.33} t={166.17} w={553.56} h={50.5}><Img src={cd2a6e} /></Box>

      {/* Title */}
      <Txt l={53.66} r={974.16} t={88.76} style={{ fontFamily: 'Cinzel Decorative', fontWeight: 700, fontSize: 72, lineHeight: '82px', color: '#c1536b', letterSpacing: '2.5px' }}>
        <p style={{ margin: 0 }}>STYLE CATEGORIES</p>
      </Txt>

      {/* Three category images */}
      <Box l={17.73} t={277.9} w={618.28} h={740.1} clip className="cs-portrait-card" style={{ borderRadius: 40 }}>
        <div className="cs-card-img" style={{ position: 'absolute', left: 0, top: -181.97, width: 618.28, height: 1104.07 }}><Img src={c8c317} /></div>
      </Box>
      <Box l={648.05} t={277.9} w={618.28} h={740.1} clip className="cs-portrait-card" style={{ borderRadius: 40 }}>
        <div className="cs-card-img" style={{ position: 'absolute', left: 0, top: -93.94, width: 618.28, height: 927.99 }}><Img src={c2633f} /></div>
      </Box>
      <Box l={1278.98} t={277.9} w={618.28} h={740.1} clip className="cs-portrait-card" style={{ borderRadius: 40 }}>
        <div className="cs-card-img" style={{ position: 'absolute', left: 0, top: -23.66, width: 618.28, height: 927.99 }}><Img src={c12864} /></div>
      </Box>

      {/* Category label overlays */}
      <Box l={17.73} t={788.94} w={563.28} h={229.08} style={{ opacity: 0.5, borderRadius: 40 }}>
        <Masked mask={cb73da} mw={563.28} mh={229.08}><Img src={c34358} /></Masked>
      </Box>
      <Box l={647.65} t={788.94} w={563.28} h={229.08} style={{ opacity: 0.5, borderRadius: 40 }}>
        <Masked mask={cb73da} mw={563.28} mh={229.08}><Img src={c34358} /></Masked>
      </Box>
      <Box l={1277.57} t={788.94} w={563.28} h={229.08} style={{ opacity: 0.5, borderRadius: 40 }}>
        <Masked mask={cb73da} mw={563.28} mh={229.08}><Img src={c34358} /></Masked>
      </Box>

      {/* Category titles */}
      <Txt l={26.66} r={1624.43} t={833.72} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 44, lineHeight: '60px', color: '#fff' }}>
        <p style={{ margin: 0 }}>Minimalism</p>
      </Txt>
      <Txt l={663.27} r={1004.45} t={833.72} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 44, lineHeight: '60px', color: '#fff' }}>
        <p style={{ margin: 0 }}>Street Style</p>
      </Txt>
      <Txt l={1294.42} r={405.48} t={833.72} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 44, lineHeight: '60px', color: '#fff' }}>
        <p style={{ margin: 0 }}>Cozy Chic</p>
      </Txt>

      {/* Category descriptions */}
      <Txt l={26.66} r={1488.3} t={946.82} style={{ fontFamily: 'Alice', fontSize: 25, lineHeight: '34px', color: '#fff' }}>
        <p style={{ margin: 0 }}>Clean cuts and neutral tones</p>
        <p style={{ margin: 0 }}>redefine modern fashion.</p>
      </Txt>
      <Txt l={663.66} r={736.87} t={943.16} style={{ fontFamily: 'Alice', fontSize: 25, lineHeight: '34px', color: '#fff' }}>
        <p style={{ margin: 0 }}>Bold and confident looks inspired by</p>
        <p style={{ margin: 0 }}>urban culture.</p>
      </Txt>
      <Txt l={1294.44} r={138.97} t={943.16} style={{ fontFamily: 'Alice', fontSize: 25, lineHeight: '34px', color: '#fff' }}>
        <p style={{ margin: 0 }}>Soft layers and relaxed silhouettes</p>
        <p style={{ margin: 0 }}>for everyday comfort.</p>
      </Txt>

      {/* Wavy calligraphy decoration */}
      <Box l={222.96} t={1106.5} w={424.31} h={83.09}><Img src={c65b46} /></Box>
      <Box r={222.96} t={1106.5} w={424.31} h={83.09} style={{ transform: 'scaleX(-1)' }}><Img src={c65b46} /></Box>


      {/* Sparkling glitter */}
      <Box l={-76.12} t={982.2} w={531.2} h={279.72} clip>
        <div style={{ position: 'absolute', left: 0, top: -174.47, width: 531.2, height: 628.64 }}><Img src={ca238c} /></div>
      </Box>
      <Box l={1490.17} t={1008.19} w={531.2} h={279.72} clip>
        <div style={{ position: 'absolute', left: 0, top: -174.46, width: 531.2, height: 628.64 }}><Img src={ca238c} /></div>
      </Box>

      {/* See More button */}
      <Box l={738.96} t={1106.5} w={436.44} h={88.92} className="cs-btn">
        <Masked mask={c7e481} mw={436.44} mh={88.92}><Img src={c1ede6} /></Masked>
      </Box>
      <Txt l={869.95} r={815.78} t={1152.37} style={{ fontFamily: 'Arimo', fontSize: 39.4, lineHeight: '54.817px', color: '#fff', textAlign: 'center', letterSpacing: '3.2665px', pointerEvents: 'none' }}>
        <p style={{ margin: 0 }}>SEE MORE</p>
      </Txt>

      {/* Bottom star confetti */}
      <Box l={832.28} t={1236.19} w={622} h={434.63}><Img src={c4b1b4} /></Box>
    </div>
  )
}

function About() {
  return (
    <div style={{ position: 'relative', width: 1920, height: 1062, overflow: 'hidden', background: '#fff' }}>
      {/* Glitter stars center */}
      <Box l={870.42} t={530.6} w={281.58} h={309.86}><Img src={abb8c6} /></Box>

      {/* Portrait left half */}
      <Box l={0} t={0} w={1043.98} h={1062} clip>
        <div style={{ position: 'absolute', left: -1.31, top: -3.87, width: 1065.06, height: 1065.06 }}><Img src={a1b2ff} style={{ position: 'static', inset: 'auto', width: '100%', height: 1063 }} /></div>
      </Box>

      {/* Golden geometric line */}
      <Box l={1139.74} t={926.39} w={619.63} h={35.88}><Img src={ad81b9} /></Box>

      {/* Gold border vintage */}
      <Box l={1246.78} t={993.43} w={405.55} h={37.34}><Img src={aa9870} /></Box>

      {/* Gold divider */}
      <Box l={1257.56} t={265.02} w={384} h={30.88}><Img src={a3ca48} /></Box>

      {/* Bouquet top-right */}
      <Box l={1715.29} t={0} w={260.03} h={470.66}><Img src={ae2eb5} /></Box>

      {/* Glitter abstract top */}
      <Box l={492.22} t={-270.99} w={245.44} h={341.48}><Img src={a11571} /></Box>

      {/* Star confetti center-right */}
      <Box l={1044} t={0} w={288.91} h={369.75} clip>
        <div style={{ position: 'absolute', left: -250.71, top: 0, width: 539.63, height: 377.06 }}><Img src={a4b1b4} /></div>
      </Box>

      {/* Confetti explosion bottom-right */}
      <Box l={1629.04} t={737.25} w={432.53} h={414.16}><Img src={aa0d31} /></Box>

      {/* About text */}
      <Txt l={1335.25} r={229.43} t={60} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 84.3, lineHeight: '105.42px', color: '#dd72a6', textAlign: 'center' }}>
        <p style={{ margin: 0, width: 360 }}>About</p>
      </Txt>
      <Txt l={1214.75} r={109.93} t={166} style={{ fontFamily: 'Lora', fontStyle: 'italic', fontSize: 84.3, lineHeight: '105.42px', color: '#dd72a6', textAlign: 'center' }}>
        <p style={{ margin: 0, width: 580 }}>Cybersplash</p>
      </Txt>
      <Txt l={1149.91} r={179.05} t={580} style={{ fontFamily: 'Alice', fontStyle: 'italic', fontSize: 35, lineHeight: '48px', color: '#000', textAlign: 'center' }}>
        <p style={{ margin: 0, borderStyle: 'none', borderColor: 'rgba(0,0,0,0)' }}>Cybersplash is a modern</p>
        <p style={{ margin: 0 }}>fashion and lifestyle platform</p>
        <p style={{ margin: 0 }}>for women who embrace</p>
        <p style={{ margin: 0 }}>elegance, confidence, and</p>
        <p style={{ margin: 0 }}>individuality. We curate the</p>
        <p style={{ margin: 0 }}>latest trends, styling ideas,</p>
        <p style={{ margin: 0 }}>and inspiring stories to help</p>
        <p style={{ margin: 0 }}>you express your personal</p>
        <p style={{ margin: 0 }}>style effortlessly.</p>
      </Txt>
    </div>
  )
}

function Instagram() {
  return (
    <div style={{ position: 'relative', width: 1920, height: 1741, overflow: 'hidden', background: '#fff' }}>
      {/* Gold border top-center */}
      <Box l={616.29} t={289.15} w={686.05} h={63.17}><Img src={ia9870} /></Box>

      {/* Glitter stars top-left */}
      <Box l={236.67} t={241.01} w={281.58} h={309.86}><Img src={ibb8c6} /></Box>

      {/* Glitter stars top-center overflow */}
      <Box l={694.7} t={-207.07} w={574.44} h={272.8} clip>
        <div style={{ position: 'absolute', left: 0, top: -179.66, width: 574.44, height: 632.11 }}><Img src={ibb8c6} /></div>
      </Box>

      {/* Three portrait photos */}
      <Box l={0} t={415.36} w={639.54} h={724.83} clip className="cs-portrait-card">
        <div className="cs-card-img" style={{ position: 'absolute', left: 0, top: -206.05, width: 639.54, height: 1136.96 }}><Img src={ie3a76} /></div>
      </Box>
      <Box l={639.54} t={415.36} w={639.54} h={724.83} clip className="cs-portrait-card">
        <div className="cs-card-img" style={{ position: 'absolute', left: 0, top: -206.05, width: 639.54, height: 1136.96 }}><Img src={if7dab} /></div>
      </Box>
      <Box l={1279.09} t={415.36} w={640.91} h={724.86} clip className="cs-portrait-card">
        <div className="cs-card-img" style={{ position: 'absolute', left: 0, top: -193.67, width: 640.91, height: 1112.21 }}><Img src={i6bb39} /></div>
      </Box>

      {/* Glitter top-right */}
      <Box l={1490.34} t={1042.21} w={301.44} h={240.33} clip>
        <div style={{ position: 'absolute', left: 0, top: -45.68, width: 301.44, height: 331.7 }}><Img src={ibb8c6} /></div>
      </Box>

      {/* Star confetti */}
      <Box l={155.8} t={1140.23} w={460.48} h={402.17} clip>
        <div style={{ position: 'absolute', left: -57.54, top: 0, width: 575.56, height: 402.17 }}><Img src={i4b1b4} /></div>
      </Box>
      <Box l={1344} t={1453.65} w={460.48} h={402.17} clip>
        <div style={{ position: 'absolute', left: -57.54, top: 0, width: 575.56, height: 402.17 }}><Img src={i4b1b4} /></div>
      </Box>
      <Box l={0} t={1350} w={280} h={400} style={{ pointerEvents: 'none' }}>
        <Img src={i12eqsd} style={{ objectFit: 'contain', objectPosition: 'left center' }} />
      </Box>
      <Box l={1527.2} t={44.73} w={529.16} h={392.55} clip>
        <div style={{ position: 'absolute', left: -16.32, top: 0, width: 561.8, height: 392.55 }}><Img src={i4b1b4} /></div>
      </Box>

      {/* Elegant gold line */}
      <Box l={576} t={1203.48} w={768} h={30.72}><Img src={ia2e9e} /></Box>

      {/* Golden horizontal line */}
      <Box l={649.5} t={1654.74} w={619.63} h={35.88}><Img src={id81b9} /></Box>

      {/* Golden floral branch right */}
      <Box l={1663.56} t={1140.23} w={256.44} h={599.84}><Img src={i8c95f} /></Box>

      <Box l={16} t={34} w={200} h={560} style={{ pointerEvents: 'none' }}>
        <Img src={i12eqsd} style={{ objectFit: 'contain', objectPosition: 'left top' }} />
      </Box>

      {/* Instagram title */}
      <Txt l={212.72} r={149.17} t={184.25} style={{ fontFamily: 'Alex Brush', fontSize: 120, lineHeight: '178px', color: '#dd72a6', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>Follow on instagram @cybersplase</p>
      </Txt>

      {/* Follow tagline */}
      <Txt l={479.89} r={475.21} t={1375} style={{ fontFamily: 'Cinzel Decorative', fontWeight: 700, fontSize: 45, lineHeight: '63px', color: '#dd72a6', textAlign: 'center', letterSpacing: '4px' }}>
        <p style={{ margin: 0, marginTop: 150 }}>FOLLOW US FOR DAILY</p>
        <p style={{ margin: 0 }}>FASHION INSPIRATION, BEAUTY</p>
        <p style={{ margin: 0 }}>TRENDS, AND STYLING IDEAS</p>
        <p style={{ margin: 0 }}>THAT ELEVATE YOUR EVERYDAY</p>
        <p style={{ margin: 0 }}>LOOK.</p>
      </Txt>
    </div>
  )
}

function Newsletter() {
  return (
    <div style={{ position: 'relative', width: 1920, height: 1132, overflow: 'hidden', background: '#fff' }}>
      {/* Glitter stars corners */}
      <Box l={-52.91} t={0} w={501.92} h={257.03} clip>
        <div style={{ position: 'absolute', left: 0, top: -156, width: 501.92, height: 552.33 }}><Img src={nbb8c6} /></div>
      </Box>
      <Box l={1417.34} t={0} w={502.66} h={257.03} clip>
        <div style={{ position: 'absolute', left: 0, top: -148.05, width: 502.66, height: 553.13 }}><Img src={nbb8c6} /></div>
      </Box>

      {/* Three portrait photos */}
      <Box l={39.02} t={257.04} w={567.13} h={628.37} clip className="cs-portrait-card">
        <div className="cs-card-img" style={{ position: 'absolute', left: 0, top: -108.5, width: 567.13, height: 845.37 }}><Img src={n3748b} /></div>
      </Box>
      <Box l={675.03} t={257.04} w={567.13} h={628.37} clip className="cs-portrait-card">
        <div className="cs-card-img" style={{ position: 'absolute', left: 0, top: -63.9, width: 567.13, height: 756.16 }}><Img src={nf5dd3} /></div>
      </Box>
      <Box l={1310.35} t={257.04} w={567.13} h={628.37} clip className="cs-portrait-card">
        <div className="cs-card-img" style={{ position: 'absolute', left: 0, top: -111.43, width: 567.13, height: 851.22 }}><Img src={nc07de} /></div>
      </Box>

      {/* Category label overlays */}
      <Box l={198.06} t={528.36} w={250.97} h={85.74}>
        <Masked mask={n4f8cd} mw={250.97} mh={85.74}><Img src={n0d711} /></Masked>
      </Box>
      <Box l={800.53} t={528.36} w={335.58} h={85.74}>
        <Masked mask={nb52d5} mw={335.58} mh={85.74}><Img src={n6dcae} /></Masked>
      </Box>
      <Box l={1486.08} t={528.36} w={215.67} h={85.74}>
        <Masked mask={n61810} mw={215.67} mh={85.74}><Img src={n740c4} /></Masked>
      </Box>

      {/* Title "The Fashion Edit" */}
      <Txt l={517.9} r={572.7} t={117.57} style={{ fontFamily: 'Alex Brush', fontSize: 120, lineHeight: '168px', color: '#dd72a6', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>The Fashion Edit</p>
      </Txt>

      {/* Category labels */}
      <Txt l={221.95} r={1496.52} t={570.52} style={{ fontFamily: 'Cinzel Decorative', fontWeight: 700, fontSize: 32, lineHeight: '44px', color: '#fff', textAlign: 'center', letterSpacing: '2px' }}>
        <p style={{ margin: 0 }}>Fashion</p>
      </Txt>
      <Txt l={822.38} r={802.69} t={570.52} style={{ fontFamily: 'Cinzel Decorative', fontWeight: 700, fontSize: 32, lineHeight: '44px', color: '#fff', textAlign: 'center', letterSpacing: '2px' }}>
        <p style={{ margin: 0 }}>Inspiration</p>
      </Txt>
      <Txt l={1512.09} r={241.22} t={574.51} style={{ fontFamily: 'Cinzel Decorative', fontWeight: 700, fontSize: 32, lineHeight: '44px', color: '#fff', textAlign: 'center', letterSpacing: '2px' }}>
        <p style={{ margin: 0 }}>Travel</p>
      </Txt>

      {/* Subscribe description */}
      <Txt l={39.02} r={1250.58} t={1019.4} style={{ fontFamily: 'Inter', fontSize: 33.5, lineHeight: '49.195px', color: '#000' }}>
        <p style={{ margin: 0, width: 640 }}>Unlock a world of luxury fashion, expert</p>
        <p style={{ margin: 0 }}>styling tips, and exclusive updates</p>
      </Txt>

      {/* First name input — white background + real input */}
      <Box l={817.04} t={973.77} w={390.39} h={80.39}>
        <div style={{ position: 'absolute', inset: 0, background: '#fff', border: '1px solid #d9d7d7', boxSizing: 'border-box' }} />
        <input
          type="text"
          placeholder="First name"
          className="cs-input"
          style={{ position: 'absolute', left: 21, top: '50%', transform: 'translateY(-50%)', width: 'calc(100% - 42px)', height: 'auto', fontSize: 29.9, letterSpacing: '2.0395px' }}
        />
      </Box>

      {/* Email input — white background + real input */}
      <Box l={1222.15} t={973.77} w={390.39} h={80.39}>
        <div style={{ position: 'absolute', inset: 0, background: '#fff', border: '1px solid #d9d7d7', boxSizing: 'border-box' }} />
        <input
          type="email"
          placeholder="Email Address"
          className="cs-input"
          style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', width: 'calc(100% - 40px)', height: 'auto', fontSize: 29.9, letterSpacing: '2.0395px' }}
        />
      </Box>

      {/* Subscribe button */}
      <Box l={1626.59} t={973.77} w={202.77} h={80.39} className="cs-btn-subscribe">
        <div style={{ position: 'absolute', inset: 0, maskImage: `url("${n38008}")`, WebkitMaskImage: `url("${n38008}")`, maskSize: '202.77px 80.39px', WebkitMaskSize: '202.77px 80.39px', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', background: '#000' }} />
        <div style={{ position: 'absolute', inset: 0, maskImage: `url("${nbbeee}")`, WebkitMaskImage: `url("${nbbeee}")`, maskSize: '202.75px 80.38px', WebkitMaskSize: '202.75px 80.38px', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat' }}>
          <img alt="" src={n2a4e0} style={{ position: 'absolute', inset: '-5.81% -2.31%', display: 'block', maxWidth: 'none', width: '104.62%', height: '111.62%' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Lora', fontSize: 29.9, color: '#fff', letterSpacing: '2.0395px', pointerEvents: 'none' }}>Subscribe</div>
      </Box>
    </div>
  )
}

function Footer() {
  return (
    <div style={{ position: 'relative', width: 1920, height: 793, overflow: 'hidden' }}>
      {/* Background frame SVG */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src={f86f2b} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', maxWidth: 'none' }} />
      </div>

      {/* Gold glitter dust left */}
      <Box l={-475.75} t={-36.98} w={1051.73} h={620.08}><Img src={f040f5} /></Box>
      {/* Gold glitter dust right */}
      <Box l={1306} t={-57.54} w={1051.73} h={620.08}><Img src={f040f5} /></Box>

      {/* Logo centered top */}
      <Box l={740.12} t={0} w={394.31} h={378.61} clip>
        <div style={{ position: 'absolute', left: -114.56, top: -58.07, width: 607.73, height: 607.73 }}><Img src={f321ac} /></div>
      </Box>

      {/* Golden geometric line */}
      <Box l={553.28} t={396.16} w={768} h={44.47}><Img src={ffe12b} /></Box>

      {/* Navigation */}
      <Txt l={422.22} r={479.05} t={487.67} style={{ fontFamily: 'Lora', fontWeight: 700, fontSize: 26, lineHeight: '36px', color: '#000', textAlign: 'center', letterSpacing: '6px' }}>
        <p style={{ margin: 0 }}>Home | Fashion | Beauty | Lifestyle | Contact</p>
      </Txt>

      {/* Copyright */}
      <Txt l={354.37} r={395.14} t={559.96} style={{ fontFamily: 'Lora', fontSize: 25, lineHeight: '34px', color: '#000', textAlign: 'center', letterSpacing: '3px' }}>
        <p style={{ margin: 0 }}>© 2026 CYBERSPLASH. Designed with passion for fashion lovers.</p>
      </Txt>

      {/* Social icons */}
      <Box l={801.49} t={677.06} w={52.42} h={52.42} style={{ overflow: 'visible' }}>
        <img src={ff0bf8} alt="Facebook" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
        <img src={f8ece0} alt="" style={{ position: 'absolute', top: '18.5%', left: '27.6%', width: '44.6%', height: '81.5%' }} />
      </Box>
      <Box l={884.85} t={674.11} w={52.42} h={52.42}><Img src={f54576} /></Box>
      <Box l={968.2} t={677.06} w={45.59} h={46.53}><Img src={fa4ff7} /></Box>
      <Box l={1044.73} t={672.82} w={60.89} h={60.89}><Img src={fe8b87} /></Box>
    </div>
  )
}

export default function App() {
  const [scale, setScale] = useState(() => window.innerWidth / DESIGN_W)

  useEffect(() => {
    const update = () => setScale(window.innerWidth / DESIGN_W)
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div style={{ width: '100%', position: 'relative', height: DESIGN_H * scale }}>
      <div style={{
        width: DESIGN_W,
        position: 'absolute',
        top: 0,
        left: 0,
        transformOrigin: 'top left',
        transform: `scale(${scale})`,
      }}>
        <Hero />
        <Editorial />
        <LatestStories />
        <StyleCategories />
        <About />
        <Instagram />
        <Newsletter />
        <Footer />
      </div>
    </div>
  )
}
