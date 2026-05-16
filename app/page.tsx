"use client"

import { useState, useEffect, useRef } from "react"
import Marquee from "react-fast-marquee"
import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls } from "@react-three/drei"
import "./globals.css"

// ===== ORBITING LOGOS COMPONENT =====
function OrbWithLogos() {
  const [angle, setAngle] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setAngle(prev => (prev + 0.4) % 360)
    }, 16)
    return () => clearInterval(interval)
  }, [])
  if (!mounted) return null

  const logos = [
    { src: '/logos/googleads.svg',     alt: 'Google',      color: '#4285F4' },
    { src: '/logos/meta.svg',          alt: 'Meta',        color: '#0866FF' },
    { src: '/logos/claude-ai-icon.svg',alt: 'OpenAI',      color: '#7C3AED' },
    { src: '/logos/googlemap.svg',     alt: 'Google Maps', color: '#34A853' },
    { src: '/logos/html5.svg',         alt: 'HTML5',       color: '#E34F26' },
  ]

  const orbitRadius = 140

  return (
    <div style={{
      position: 'relative',
      width: '340px',
      height: '340px',
      margin: '30px auto',
    }}>
      {/* 3D ORB CANVAS */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[2, 2, 5]} />
          <pointLight position={[-3, -3, -3]} intensity={1} color="#C4B5FD" />
          <Float speed={4} rotationIntensity={2} floatIntensity={3}>
            <mesh>
              <icosahedronGeometry args={[1.5, 4]} />
              <meshStandardMaterial
                color="#7C3AED"
                emissive="#7C3AED"
                emissiveIntensity={1.5}
                metalness={0.8}
                roughness={0.05}
              />
            </mesh>
          </Float>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      {/* ORBIT RING */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: `${orbitRadius * 2}px`,
        height: `${orbitRadius * 2}px`,
        borderRadius: '50%',
        border: '1px solid rgba(124,58,237,0.25)',
        zIndex: 2,
        pointerEvents: 'none',
      }} />

      {/* ORBITING LOGOS */}
      {logos.map((logo, i) => {
        const logoAngle = ((angle + (i * 360) / logos.length) * Math.PI) / 180
        const x = Math.cos(logoAngle) * orbitRadius
        const y = Math.sin(logoAngle) * orbitRadius
        return (
          <div key={logo.alt} style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            width: '44px', height: '44px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: `1.5px solid ${logo.color}55`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px',
            boxShadow: `0 0 14px ${logo.color}44`,
            zIndex: 3,
          }}>
            <img
              src={logo.src}
              alt={logo.alt}
              style={{ width: '24px', height: '24px', objectFit: 'contain' }}
            />
          </div>
        )
      })}

      {/* GLOW UNDERNEATH */}
      <div style={{
        position: 'absolute',
        bottom: '10px', left: '50%',
        transform: 'translateX(-50%)',
        width: '180px', height: '30px',
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
    </div>
  )
}
// ===== END ORBITING LOGOS =====


// ===== PROBLEM / SOLUTION SECTION =====
function ProblemSolution() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [leftVisible, setLeftVisible] = useState(false)
  const [rightVisible, setRightVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          setTimeout(() => setLeftVisible(true), 200)
          setTimeout(() => setRightVisible(true), 500)
        }
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const problems = [
    {
      num: "01",
      title: "Feeling Ignored",
      desc: "You hired a marketing agency, paid thousands, and now they barely respond to your emails. No results. No answers."
    },
    {
      num: "02",
      title: "Invisible on Google",
      desc: "Your competitors show up first on Google Maps and Search. Your business is buried on page 3 where no one looks."
    },
    {
      num: "03",
      title: "Losing Leads Daily",
      desc: "Missed calls, slow follow-ups, and no system in place. Every unanswered call is money walking out the door."
    },
    {
      num: "04",
      title: "Wasting Ad Budget",
      desc: "Running Google or Meta Ads with zero ROI? Wrong targeting and poor creatives burn your budget with nothing to show."
    },
  ]

  const solutions = [
    {
      icon: "✦",
      title: "Always Reachable, Always Responsive",
      desc: "24/7 direct access through our Client Portal. Real humans + AI working around the clock so you're never left waiting."
    },
    {
      icon: "✦",
      title: "Dominate Local Search",
      desc: "We push your business to the top of Google Maps and Search using aggressive SEO strategies that actually work."
    },
    {
      icon: "✦",
      title: "Zero Missed Opportunities",
      desc: "Our AI CRM captures every lead, follows up instantly, and books appointments — so you never lose a customer again."
    },
    {
      icon: "✦",
      title: "Ads That Actually Convert",
      desc: "Data-driven Google & Meta campaigns with high-converting creatives, precise targeting, and full monthly reporting."
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="problem-solution"
      aria-labelledby="ps-heading"
      className="ps-section"
    >
      {/* HEADER */}
      <div className={`ps-header ${visible ? 'ps-visible' : ''}`}>
        <p className="ps-label">✦ THE REAL PROBLEM ✦</p>
        <h2 id="ps-heading" className="ps-title">
          The Problem vs Our Solution
        </h2>
        <p className="ps-subtitle">
          We built Easy Where Solution because we understand the frustrations
          business owners face with marketing — and we built a better way.
        </p>
      </div>

      {/* TWO BOXES */}
      <div className="ps-grid">

        {/* LEFT — PROBLEMS */}
        <div className={`ps-left ${leftVisible ? 'ps-left-visible' : ''}`}>
          <div className="ps-box-header">
            <p className="ps-box-label ps-box-label--problem">MORE THAN LIKELY, YOU ARE</p>
            <h3 className="ps-box-title">Struggling With These Issues</h3>
            <p className="ps-box-desc">
              Sound familiar? You're not alone. Most business owners face these exact problems.
            </p>
          </div>

          {problems.map((p) => (
            <div key={p.num} className="ps-problem-item">
              <span className="ps-problem-num">{p.num}</span>
              <div className="ps-problem-content">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}

          <div className="ps-quote">
            "It's tough to trust anyone in the marketing space when you've been burned by empty promises before."
          </div>
        </div>

        {/* RIGHT — SOLUTIONS */}
        <div className={`ps-right ${rightVisible ? 'ps-right-visible' : ''}`}>
          <div className="ps-box-header">
            <p className="ps-box-label ps-box-label--solution">OUR SOLUTION</p>
            <h3 className="ps-box-title">Here's How We Fix It</h3>
            <p className="ps-box-desc">
              We don't make promises — we build systems that deliver real, measurable results.
            </p>
          </div>

          {solutions.map((s, i) => (
            <div key={i} className="ps-solution-item">
              <div className="ps-solution-icon">{s.icon}</div>
              <div className="ps-solution-content">
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}

          <div className="ps-guarantee">
            <span className="ps-guarantee-badge">GUARANTEED</span>
            <p className="ps-guarantee-text">
              If you don't see <strong>significant growth within 180 days</strong>, we keep working at no extra cost. That's our promise.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
// ===== END PROBLEM / SOLUTION =====


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
      {/* ===== PRELOADER ===== */}
      {loading && (
        <>
          <div className={`preloader-top ${split ? 'split' : ''}`}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '48px', height: '48px',
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
                  height: '100%', width: '100%',
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
              50% { transform: scale(1.12); box-shadow: 0 0 60px rgba(124,58,237,0.6); }
            }
            @keyframes shimmer {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }
          `}</style>
        </>
      )}

      {/* ===== MAIN WEBSITE ===== */}
      <main role="main" className={`main ${loading ? 'hidden' : 'visible'}`}>

        {/* NAVBAR */}
        <header role="banner">
          <nav role="navigation" aria-label="Main Navigation" className="navbar">
            <a href="/" className="navbar-logo">
              <span style={{ color: '#7C3AED' }}>Easy</span>
              <span> Where </span><span>Solution</span>
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

        {/* HERO */}
        <section id="home" aria-labelledby="hero-heading" className="hero">
          <p className="hero-badge">✦ AI That Works for You</p>
          <h1 id="hero-heading" className="hero-title">
            Your AI Assistant to<br />Scale Your Business
          </h1>
          <p className="hero-desc">
            Easy Where Solution puts all your business in one place.
            See what is working. Fix what is not. Make smarter moves with AI.
          </p>

          {/* CTA BUTTONS */}
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Get Started →</a>
            <a href="#solutions" className="btn-secondary">Learn More</a>
          </div>

          {/* ✅ PROBLEM / SOLUTION — RIGHT AFTER BUTTONS */}
          <ProblemSolution />

          {/* 3D ORB + ORBITING LOGOS */}
          <OrbWithLogos />

          {/* TRUST BADGE */}
          <div style={{
            marginTop: '48px',
            display: 'flex', alignItems: 'center', gap: '12px',
            background: '#FFFFFF',
            border: '1px solid rgba(124,58,237,0.2)',
            borderRadius: '50px',
            padding: '10px 22px',
            fontSize: '12px', color: '#9CA3AF',
          }}>
            <span style={{ fontSize: '18px' }}>✦</span>
            <span>Trusted by <strong style={{ color: '#7C3AED' }}>1,000+</strong> businesses worldwide</span>
          </div>
        </section>

        {/* MARQUEE */}
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

        {/* STATS */}
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

        {/* HOW IT WORKS */}
        <section id="solutions" aria-labelledby="steps-heading" className="steps-section">
          <p className="section-label">✦ HOW IT WORKS ✦</p>
          <h2 id="steps-heading" className="section-title">4 Simple Steps</h2>
          <div className="steps-grid">
            {[
              { num: '01', title: 'Onboard & Connect', desc: 'We set up your profile and connect your digital assets easily.', icon: '🔗' },
              { num: '02', title: 'AI Audit & Launch',  desc: 'AI analyzes your presence and creates a custom action plan.',   icon: '🧠' },
              { num: '03', title: 'Campaigns Run',      desc: 'Your campaigns go live and are auto managed in real time.',     icon: '📣' },
              { num: '04', title: 'Track Results',      desc: 'See live visual reports and data anytime you want.',            icon: '📈' },
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

        {/* FOOTER */}
        <footer id="contact" role="contentinfo" className="footer">
          <div className="footer-grid">
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
                  <a key={s.name} href={s.href} aria-label={s.name} className="social-icon">{s.icon}</a>
                ))}
              </div>
            </div>

            <div>
              <p className="footer-col-title">COMPANY</p>
              <nav aria-label="Footer Company Links" className="footer-links">
                {['About Us','Services','Pricing','Blog','Careers'].map((link) => (
                  <a key={link} href="#">{link}</a>
                ))}
              </nav>
            </div>

            <div>
              <p className="footer-col-title">SOLUTIONS</p>
              <nav aria-label="Footer Solutions Links" className="footer-links">
                {['AI Marketing','SEO Tools','Automation','Analytics','Integrations'].map((link) => (
                  <a key={link} href="#">{link}</a>
                ))}
              </nav>
            </div>

            <div>
              <p className="footer-col-title">NEWSLETTER</p>
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