"use client"
import { useState, useEffect } from "react"
import Marquee from "react-fast-marquee"
import "./styles.css"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [split, setSplit] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setSplit(true)
      setTimeout(() => setLoading(false), 1000)
    }, 2000)
  }, [])

  return (
    <>
      {/* ===== PRELOADER ===== */}
      {loading && (
        <>
          <div className={`preloader-top ${split ? 'split' : ''}`}>
            <p className="preloader-title">Easy Where Solution</p>
          </div>
          <div className={`preloader-bottom ${split ? 'split' : ''}`}>
            <p className="preloader-sub">AI POWERED SOLUTIONS</p>
          </div>
        </>
      )}

      {/* ===== MAIN WEBSITE ===== */}
      <main role="main" className={`main ${loading ? 'hidden' : 'visible'}`}>

        {/* NAVBAR */}
        <header role="banner">
          <nav role="navigation" aria-label="Main Navigation" className="navbar">
            <a href="/" className="navbar-logo">Easy Where Solution</a>
            <div role="menubar" className="navbar-links">
              <a href="#home">Home</a>
              <a href="#solutions">Solutions</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            <a href="#contact" className="navbar-btn">Get Started</a>
          </nav>
        </header>

        {/* HERO */}
        <section id="home" aria-labelledby="hero-heading" className="hero">
          <p className="hero-badge">✦ AI That Works for You</p>
          <h1 id="hero-heading" className="hero-title">
            Your AI Assistant to Scale Your Business
          </h1>
          <p className="hero-desc">
            Easy Where Solution puts all your business in one place.
            See what is working. Fix what is not. Make smarter moves with AI.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn-primary">Get Started</a>
            <a href="#solutions" className="btn-secondary">Learn More</a>
          </div>
        </section>

        {/* MARQUEE */}
        <section aria-label="Trusted by leading platforms" className="marquee-section">
          <p className="marquee-label">TRUSTED BY LEADING PLATFORMS</p>
          <Marquee speed={50} gradient={false}>
            {['Google','Meta','HubSpot','Salesforce','Shopify','AWS','OpenAI','Stripe','Slack','Notion'].map((name) => (
              <div key={name} className="marquee-item">{name}</div>
            ))}
          </Marquee>
        </section>

        {/* STATS */}
        <section id="about" aria-label="Company Statistics" className="stats-section">
          {[
            {number:'50M+', label:'Data Points Analyzed'},
            {number:'10+', label:'AI Trained Models'},
            {number:'70%', label:'Drop in Manual Work'},
            {number:'1000+', label:'Campaigns in Motion'},
          ].map((stat) => (
            <div key={stat.number} className="stat-item">
              <p className="stat-number">{stat.number}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* HOW IT WORKS */}
        <section id="solutions" aria-labelledby="steps-heading" className="steps-section">
          <p className="section-label">HOW IT WORKS</p>
          <h2 id="steps-heading" className="section-title">4 Simple Steps</h2>
          <div className="steps-grid">
            {[
              {num:'01', title:'Onboard & Connect', desc:'We set up your profile and connect your digital assets easily.'},
              {num:'02', title:'AI Audit & Launch', desc:'AI analyzes your presence and creates a custom action plan.'},
              {num:'03', title:'Campaigns Run', desc:'Your campaigns go live and are auto managed in real time.'},
              {num:'04', title:'Track Results', desc:'See live visual reports and data anytime you want.'},
            ].map((step) => (
              <article key={step.num} className="step-card">
                <p aria-hidden="true" className="step-num">{step.num}</p>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" role="contentinfo" className="footer">
          <div className="footer-grid">

            {/* BRAND */}
            <div>
              <p className="footer-brand-name">Easy Where Solution</p>
              <p className="footer-brand-desc">
                AI powered solutions to scale your business. Smarter marketing, better results.
              </p>
              <div className="social-icons">
                {[
                  {name:'LinkedIn', href:'#', icon:'in'},
                  {name:'Twitter', href:'#', icon:'𝕏'},
                  {name:'Instagram', href:'#', icon:'ig'},
                  {name:'Facebook', href:'#', icon:'f'},
                ].map((s) => (
                  <a key={s.name} href={s.href} aria-label={s.name} className="social-icon">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* COMPANY LINKS */}
            <div>
              <p className="footer-col-title">COMPANY</p>
              <nav aria-label="Footer Company Links" className="footer-links">
                {['About Us','Services','Pricing','Blog','Careers'].map((link) => (
                  <a key={link} href="#">{link}</a>
                ))}
              </nav>
            </div>

            {/* SOLUTIONS LINKS */}
            <div>
              <p className="footer-col-title">SOLUTIONS</p>
              <nav aria-label="Footer Solutions Links" className="footer-links">
                {['AI Marketing','SEO Tools','Automation','Analytics','Integrations'].map((link) => (
                  <a key={link} href="#">{link}</a>
                ))}
              </nav>
            </div>

            {/* NEWSLETTER */}
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
                  />
                  <button
                    onClick={() => email && setSubscribed(true)}
                    className="newsletter-btn"
                  >
                    Subscribe
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
<link rel="stylesheet" href="globals.css" />