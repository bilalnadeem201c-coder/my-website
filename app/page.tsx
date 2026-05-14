"use client"

import { useState, useEffect } from "react"
import Marquee from "react-fast-marquee"
import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls } from "@react-three/drei"
import "./globals.css"

// ===== 3D AI ORB COMPONENT — Lavender Mist themed =====
function AIOrb() {
  return (
    <div style={{ width: '100%', height: '340px', position: 'relative' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* LIGHTS */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 2, 5]} />
        <pointLight position={[-3, -3, -3]} intensity={1} color="#C4B5FD" />

        {/* FLOATING 3D VIOLET ORB */}
        <Float speed={4} rotationIntensity={2} floatIntensity={3}>
          <mesh>
            <icosahedronGeometry args={[1.5, 1]} />
            <meshStandardMaterial
              color="#7C3AED"
              emissive="#7C3AED"
              emissiveIntensity={1.5}
              metalness={1}
              roughness={0.1}
            />
          </mesh>
        </Float>

        {/* CAMERA CONTROL */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>

      {/* Soft glow underneath orb */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '180px',
        height: '30px',
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
    </div>
  )
}
// ===== END 3D AI ORB COMPONENT =====

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [split, setSplit] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setSplit(true)
      setTimeout(() => setLoading(false), 1000)
    }, 2200)
  }, [])

  return (
    <>
      {/* ===== PRELOADER — Lavender Mist themed ===== */}
      {loading && (
        <>
          <div className={`preloader-top ${split ? 'split' : ''}`}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #C4B5FD, #7C3AED)',
                marginBottom: '12px',
                animation: 'pulse 1.5s ease-in-out infinite',
                boxShadow: '0 0 40px rgba(124,58,237,0.4)',
              }} />
              <p className="preloader-title">Easy Where Solution</p>
            </div>
          </div>
          <div className={`preloader-bottom ${split ? 'split' : ''}`}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <p className="preloader-sub">✦ AI POWERED SOLUTIONS ✦</p>
              <div style={{
                width: 'clamp(120px, 30vw, 220px)',
                height: '2px',
                background: 'rgba(124,58,237,0.15)',
                borderRadius: '2px',
                overflow: 'hidden',
                marginTop: '8px',
              }}>
                <div style={{
                  height: '100%',
                  width: '100%',
                  background: 'linear-gradient(90deg, #7C3AED, #C4B5FD, #7C3AED)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.2s linear infinite',
                  borderRadius: '2px',
                }} />
              </div>
            </div>
          </div>

          <style>{`
            @keyframes pulse {
              0%, 100% { transform: scale(1); box-shadow: 0 0 40px rgba(124,58,237,0.4); }
              50%       { transform: scale(1.12); box-shadow: 0 0 60px rgba(124,58,237,0.6); }
            }
            @keyframes shimmer {
              0%   { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `}</style>
        </>
      )}

      {/* ===== MAIN WEBSITE ===== */}
      <main role="main" className={`main ${loading ? 'hidden' : 'visible'}`}>

        {/* ===== NAVBAR ===== */}
        <header role="banner">
          <nav role="navigation" aria-label="Main Navigation" className="navbar">
            <a href="/" className="navbar-logo">
              <span style={{ color: '#7C3AED' }}>Easy</span>
              <span style={{ color: '#1E1040' }}> Where </span>
              <span style={{ color: '#4C1D95' }}>Solution</span>
            </a>
            <div role="menubar" className="navbar-links">
              <a href="#home">Home</a>
              <a href="#solutions">Solutions</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            <a href="#contact" className="navbar-btn">✦ Get Started</a>
          </nav>
        </header>

        {/* ===== HERO ===== */}
        <section id="home" aria-labelledby="hero-heading" className="hero">

          {/* BADGE */}
          <p className="hero-badge">✦ AI That Works for You</p>

          {/* H1 TITLE */}
          <h1 id="hero-heading" className="hero-title">
            Your AI Assistant to<br />Scale Your Business
          </h1>

          {/* DESCRIPTION */}
          <p className="hero-desc">
            Easy Where Solution puts all your business in one place.
            See what is working. Fix what is not. Make smarter moves with AI.
          </p>

          {/* ===== 3D AI ORB — placed after p and h1, before buttons ===== */}
          <AIOrb />
          {/* ===== END 3D AI ORB ===== */}

          {/* CTA BUTTONS */}
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Get Started →</a>
            <a href="#solutions" className="btn-secondary">Learn More</a>
          </div>

          {/* TRUST BADGE */}
          <div style={{
            marginTop: '48px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: '#FFFFFF',
            border: '1px solid rgba(124,58,237,0.15)',
            borderRadius: '50px',
            padding: '10px 22px',
            fontSize: '12px',
            color: '#7C6FA0',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
          }}>
            <span style={{ display: 'flex' }}>
              {['#7C3AED','#5B21B6','#4C1D95','#6D28D9','#8B5CF6'].map((c, i) => (
                <span key={i} style={{
                  width: '26px', height: '26px',
                  borderRadius: '50%',
                  background: c,
                  border: '2px solid #F5F3FF',
                  marginLeft: i > 0 ? '-8px' : '0',
                  display: 'inline-block',
                }} />
              ))}
            </span>
            <span>Trusted by <strong style={{ color: '#4C1D95' }}>1,000+</strong> businesses worldwide</span>
          </div>

        </section>

        {/* ===== MARQUEE ===== */}
        <section aria-label="Trusted by leading platforms" className="marquee-section">
          <p className="marquee-label">✦ Trusted by Leading Platforms ✦</p>
          <Marquee speed={45} gradient={false}>
            {['Google','Meta','HubSpot','Salesforce','Shopify','AWS','OpenAI','Stripe','Slack','Notion'].map((name) => (
              <div key={name} className="marquee-item">
                <span style={{ marginRight: '8px', opacity: 0.4, fontSize: '10px' }}>✦</span>
                {name}
              </div>
            ))}
          </Marquee>
        </section>

        {/* ===== STATS ===== */}
        <section id="about" aria-label="Company Statistics" className="stats-section">
          {[
            { number: '50M+',  label: 'Data Points Analyzed', icon: '📊' },
            { number: '10+',   label: 'AI Trained Models',    icon: '🤖' },
            { number: '70%',   label: 'Drop in Manual Work',  icon: '⚡' },
            { number: '1000+', label: 'Campaigns in Motion',  icon: '🚀' },
          ].map((stat) => (
            <div key={stat.number} className="stat-item">
              <p style={{ fontSize: '22px', marginBottom: '8px' }}>{stat.icon}</p>
              <p className="stat-number">{stat.number}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section id="solutions" aria-labelledby="steps-heading" className="steps-section">
          <p className="section-label">✦ How It Works ✦</p>
          <h2 id="steps-heading" className="section-title">4 Simple Steps</h2>
          <div className="steps-grid">
            {[
              { num: '01', title: 'Onboard & Connect', desc: 'We set up your profile and connect your digital assets easily.',       icon: '🔗' },
              { num: '02', title: 'AI Audit & Launch',  desc: 'AI analyzes your presence and creates a custom action plan.',          icon: '🧠' },
              { num: '03', title: 'Campaigns Run',      desc: 'Your campaigns go live and are auto managed in real time.',            icon: '📣' },
              { num: '04', title: 'Track Results',      desc: 'See live visual reports and data anytime you want.',                   icon: '📈' },
            ].map((step) => (
              <article key={step.num} className="step-card">
                <p style={{ fontSize: '28px', marginBottom: '12px' }}>{step.icon}</p>
                <p aria-hidden="true" className="step-num">Step {step.num}</p>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer id="contact" role="contentinfo" className="footer">
          <div className="footer-grid">

            {/* BRAND */}
            <div>
              <p className="footer-brand-name">
                <span style={{ color: '#7C3AED' }}>Easy</span> Where Solution
              </p>
              <p className="footer-brand-desc">
                AI powered solutions to scale your business. Smarter marketing, better results.
              </p>
              <div className="social-icons">
                {[
                  { name: 'LinkedIn',  href: '#', icon: 'in' },
                  { name: 'Twitter',   href: '#', icon: '𝕏'  },
                  { name: 'Instagram', href: '#', icon: 'ig' },
                  { name: 'Facebook',  href: '#', icon: 'f'  },
                ].map((s) => (
                  <a key={s.name} href={s.href} aria-label={s.name} className="social-icon">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* COMPANY LINKS */}
            <div>
              <p className="footer-col-title">Company</p>
              <nav aria-label="Footer Company Links" className="footer-links">
                {['About Us','Services','Pricing','Blog','Careers'].map((link) => (
                  <a key={link} href="#">{link}</a>
                ))}
              </nav>
            </div>

            {/* SOLUTIONS LINKS */}
            <div>
              <p className="footer-col-title">Solutions</p>
              <nav aria-label="Footer Solutions Links" className="footer-links">
                {['AI Marketing','SEO Tools','Automation','Analytics','Integrations'].map((link) => (
                  <a key={link} href="#">{link}</a>
                ))}
              </nav>
            </div>

            {/* NEWSLETTER */}
            <div>
              <p className="footer-col-title">Newsletter</p>
              <p className="newsletter-desc">
                Get the latest AI tips and updates directly in your inbox.
              </p>
              {subscribed ? (
                <p className="newsletter-success">✓ Subscribed! Thank you!</p>
              ) : (
                <div className="newsletter-form">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                    aria-label="Email address"
                  />
                  <button
                    onClick={() => email && setSubscribed(true)}
                    className="newsletter-btn"
                  >
                    Subscribe →
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* FOOTER BOTTOM */}
          <div className="footer-bottom">
            <p className="footer-copy">© 2026 Easy Where Solution. All rights reserved.</p>
            <nav aria-label="Footer Legal Links" className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </nav>
          </div>

        </footer>
      </main>
    </>
  )
}