"use client"

import { useState, useEffect, useRef } from "react"

// =====================================================
// SERVICES DATA
// =====================================================
const SERVICES = [
  {
    num: "01",
    icon: "📡",
    tag: "BRAND GROWTH",
    title: "Digital Marketing",
    subtitle: "Full-Funnel Strategy That Actually Converts",
    desc: "We craft data-driven digital marketing strategies that move people from strangers to loyal customers. From content to campaigns, every touchpoint is intentional and measured for real ROI.",
    features: [
      "Brand identity & messaging strategy",
      "Content marketing & social media management",
      "Email campaigns & automation sequences",
      "Monthly performance reports & insights",
    ],
  },
  {
    num: "02",
    icon: "🌐",
    tag: "BUILD & CONVERT",
    title: "Web Development",
    subtitle: "High-Converting Websites Built to Perform",
    desc: "Your website is your #1 salesperson. We design and develop lightning-fast, mobile-first websites and landing pages engineered to turn visitors into leads — day and night.",
    features: [
      "Custom landing pages & full websites",
      "Speed-optimised & mobile-first builds",
      "CRM & third-party integrations",
      "A/B tested layouts for maximum conversion",
    ],
  },
  {
    num: "03",
    icon: "📘",
    tag: "PAID SOCIAL",
    title: "Meta Ads",
    subtitle: "Scroll-Stopping Ads That Fill Your Pipeline",
    desc: "We run Meta advertising campaigns on Facebook and Instagram that reach your exact audience at the perfect moment. From creative to targeting to retargeting — we handle it all.",
    features: [
      "Facebook & Instagram campaign management",
      "High-converting ad creative & copywriting",
      "Audience segmentation & lookalike targeting",
      "Retargeting funnels to recover lost leads",
    ],
  },
  {
    num: "04",
    icon: "🔍",
    tag: "PAID SEARCH",
    title: "Google Ads",
    subtitle: "Appear When It Matters Most — At the Top",
    desc: "Capture high-intent buyers exactly when they're searching for your solution. Our Google Ads campaigns are built around profit, not just clicks — with ruthless bid optimisation and clear reporting.",
    features: [
      "Search, Display & YouTube campaign setup",
      "Keyword research & negative keyword strategy",
      "Landing page alignment for Quality Score",
      "Weekly bid management & monthly reporting",
    ],
  },
  {
    num: "05",
    icon: "📈",
    tag: "LONG-TERM GROWTH",
    title: "SEO",
    subtitle: "Dominate Google Search & Maps — Organically",
    desc: "We push your business to the top of Google Search and Maps through aggressive technical SEO, local optimisation, and content that ranks. Results that compound month after month.",
    features: [
      "Technical SEO audits & on-page optimisation",
      "Google Business Profile & local SEO",
      "Authority backlink building campaigns",
      "Keyword tracking & competitor gap analysis",
    ],
  },
  {
    num: "06",
    icon: "⚡",
    tag: "SMART SYSTEMS",
    title: "AI Automation",
    subtitle: "Eliminate Busywork. Let AI Handle It.",
    desc: "Eliminate repetitive tasks with intelligent automation. CRM workflows, lead follow-up, appointment booking, and reporting — all handled by AI so your team can focus on what matters.",
    features: [
      "AI-powered CRM & lead capture workflows",
      "Automated follow-up sequences & nurturing",
      "Appointment booking & calendar integration",
      "Smart reporting dashboards & alerts",
    ],
  },
]

// =====================================================
// SERVICES SECTION
// =====================================================
export default function ServicesSection() {
  const sectionRef  = useRef(null)
  const headingRef  = useRef(null)
  const cardRefs    = useRef([])
  const ctaRef      = useRef(null)

  const [headingIn, setHeadingIn] = useState(false)
  const [cardsIn,   setCardsIn]   = useState(new Array(SERVICES.length).fill(false))
  const [ctaIn,     setCtaIn]     = useState(false)
  const [openIdx,   setOpenIdx]   = useState(null)

  // Heading observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeadingIn(true) },
      { threshold: 0.4 }
    )
    if (headingRef.current) obs.observe(headingRef.current)
    return () => obs.disconnect()
  }, [])

  // Cards staggered observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = Number(entry.target.dataset.idx)
            setTimeout(() => {
              setCardsIn(prev => {
                const next = [...prev]
                next[i] = true
                return next
              })
            }, i * 120)
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.06 }
    )
    cardRefs.current.forEach(el => { if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  // CTA observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setCtaIn(true) },
      { threshold: 0.3 }
    )
    if (ctaRef.current) obs.observe(ctaRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <style>{`
        /* ── SECTION ── */
        .srv {
          width: 100%;
          padding: 110px 24px 0;
          border-top: 1px solid var(--glass-border);
          overflow: hidden;
        }

        /* ── HEADING ── */
        .srv-heading {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 72px;
          opacity: 0;
          transform: translateY(44px);
          transition: opacity 0.85s cubic-bezier(0.22,1,0.36,1),
                      transform 0.85s cubic-bezier(0.22,1,0.36,1);
        }
        .srv-heading.in { opacity: 1; transform: translateY(0); }

        .srv-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: var(--violet);
          letter-spacing: 5px;
          text-transform: uppercase;
          opacity: 0.8;
          margin-bottom: 18px;
        }
        .srv-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(34px, 5.5vw, 68px);
          font-weight: 700;
          line-height: 1.07;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, var(--white) 30%, var(--violet) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
        }
        .srv-sub {
          font-family: 'Inter', sans-serif;
          font-size: clamp(13px, 1.8vw, 16px);
          color: var(--text-muted);
          line-height: 1.85;
          max-width: 540px;
          margin: 0 auto;
        }

        /* ── CARDS LIST (vertical stack, myaio style) ── */
        .srv-list {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0;
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          overflow: hidden;
        }

        /* ── SINGLE CARD ── */
        .srv-card {
          position: relative;
          display: grid;
          grid-template-columns: 56px 1fr auto;
          align-items: start;
          gap: 0 24px;
          padding: 36px 40px;
          background: var(--card-bg);
          border-bottom: 1px solid var(--glass-border);
          cursor: pointer;
          overflow: hidden;

          opacity: 0;
          transform: translateY(60px);
          transition:
            opacity   0.7s cubic-bezier(0.22,1,0.36,1),
            transform 0.7s cubic-bezier(0.22,1,0.36,1),
            background 0.3s ease;
        }
        .srv-card:last-child { border-bottom: none; }
        .srv-card.in  { opacity: 1; transform: translateY(0); }
        .srv-card:hover { background: #FDFCFF; }

        /* Violet bar on left edge — slides in on hover */
        .srv-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--violet), var(--violet-dark));
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
          border-radius: 0 2px 2px 0;
        }
        .srv-card:hover::before,
        .srv-card.expanded::before { transform: scaleY(1); }

        /* Col 1 — number */
        .srv-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          font-weight: 700;
          color: var(--border);
          line-height: 1;
          padding-top: 4px;
          transition: color 0.3s ease;
          user-select: none;
        }
        .srv-card:hover .srv-num,
        .srv-card.expanded .srv-num { color: var(--violet); }

        /* Col 2 — content */
        .srv-body {}

        .srv-card-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 6px;
        }
        .srv-icon {
          font-size: 26px;
          line-height: 1;
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .srv-card:hover .srv-icon { transform: translateY(-3px) scale(1.12); }

        .srv-card-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .srv-tag {
          font-family: 'Inter', sans-serif;
          font-size: 9px;
          font-weight: 700;
          color: var(--violet);
          letter-spacing: 2.5px;
          text-transform: uppercase;
          opacity: 0.65;
        }
        .srv-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(18px, 2.2vw, 24px);
          font-weight: 700;
          color: var(--white);
          line-height: 1.15;
        }

        /* Expandable area */
        .srv-expand {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .srv-expand.open { grid-template-rows: 1fr; }
        .srv-expand-inner { overflow: hidden; }

        .srv-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(12px, 1.3vw, 14px);
          color: var(--text-muted);
          line-height: 1.85;
          margin: 14px 0 20px;
          padding-left: 0;
        }
        .srv-features {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 24px;
          margin-bottom: 22px;
        }
        .srv-feature {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: var(--gray-light);
          line-height: 1.5;
        }
        .srv-check {
          width: 18px; height: 18px;
          border-radius: 5px;
          background: linear-gradient(135deg, var(--violet), var(--violet-dark));
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 9px;
          font-weight: 700;
          color: #fff;
          margin-top: 1px;
          box-shadow: 0 3px 10px var(--violet-glow);
        }
        .srv-card-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: var(--violet);
          text-decoration: none;
          letter-spacing: 0.3px;
          transition: gap 0.2s;
        }
        .srv-card-link:hover { gap: 13px; }

        /* Col 3 — toggle button */
        .srv-toggle {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1.5px solid var(--glass-border);
          background: transparent;
          color: var(--text-muted);
          font-size: 20px;
          font-weight: 300;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          margin-top: 6px;
          transition: all 0.3s ease;
          line-height: 1;
        }
        .srv-card:hover .srv-toggle,
        .srv-card.expanded .srv-toggle {
          border-color: var(--violet);
          color: var(--violet);
          background: var(--violet-dim);
          box-shadow: 0 0 16px var(--violet-glow);
        }
        .srv-toggle-icon {
          display: inline-block;
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .srv-card.expanded .srv-toggle-icon { transform: rotate(45deg); }

        /* ── BOTTOM CTA ── */
        .srv-cta-strip {
          text-align: center;
          padding: 90px 24px 100px;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1),
                      transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        .srv-cta-strip.in { opacity: 1; transform: translateY(0); }

        .srv-cta-badge {
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          letter-spacing: 4px;
          font-weight: 700;
          color: var(--violet);
          background: var(--violet-dim);
          border: 1px solid var(--violet-border);
          border-radius: 20px;
          padding: 5px 18px;
          margin-bottom: 22px;
          text-transform: uppercase;
        }
        .srv-cta-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(28px, 4.5vw, 56px);
          font-weight: 700;
          color: var(--white);
          margin-bottom: 18px;
          line-height: 1.15;
        }
        .srv-cta-desc {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: var(--text-muted);
          max-width: 460px;
          margin: 0 auto 38px;
          line-height: 1.75;
        }
        .srv-cta-note {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: var(--text-muted);
          margin-top: 14px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .srv { padding: 70px 16px 0; }
          .srv-heading { margin-bottom: 48px; }
          .srv-list { border-radius: 16px; }
          .srv-card {
            grid-template-columns: 40px 1fr auto;
            gap: 0 14px;
            padding: 26px 20px;
            /* Force visible on mobile — no scroll-trigger needed */
            opacity: 1 !important;
            transform: none !important;
          }
          .srv-num { font-size: 26px; }
          .srv-features { grid-template-columns: 1fr; }
          .srv-cta-strip { padding: 60px 16px 70px; }
        }
        @media (max-width: 480px) {
          .srv-title { font-size: clamp(28px, 9vw, 36px); }
          .srv-card { grid-template-columns: 34px 1fr auto; gap: 0 10px; padding: 20px 16px; }
          .srv-toggle { width: 32px; height: 32px; font-size: 16px; }
        }
      `}</style>

      <section id="services" ref={sectionRef} className="srv" aria-labelledby="srv-heading">

        {/* HEADING */}
        <div ref={headingRef} className={`srv-heading ${headingIn ? 'in' : ''}`}>
          <p className="srv-eyebrow">✦ WHAT WE DO ✦</p>
          <h2 id="srv-heading" className="srv-title">
            Every Service You Need.<br />One Team That Delivers.
          </h2>
          <p className="srv-sub">
            Stop juggling five different agencies. From paid ads to organic growth — everything
            works together under one roof, driven by data, built for growth.
          </p>
        </div>

        {/* CARDS */}
        <div className="srv-list">
          {SERVICES.map((s, i) => {
            const isOpen = openIdx === i
            return (
              <div
                key={s.num}
                ref={el => { cardRefs.current[i] = el }}
                data-idx={i}
                className={`srv-card ${cardsIn[i] ? 'in' : ''} ${isOpen ? 'expanded' : ''}`}
                onClick={() => setOpenIdx(isOpen ? null : i)}
                role="button"
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOpenIdx(isOpen ? null : i) }}
                aria-expanded={isOpen}
              >
                {/* Number */}
                <span className="srv-num" aria-hidden="true">{s.num}</span>

                {/* Body */}
                <div className="srv-body">
                  <div className="srv-card-top">
                    <span className="srv-icon" aria-hidden="true">{s.icon}</span>
                    <div className="srv-card-meta">
                      <span className="srv-tag">{s.tag}</span>
                      <h3 className="srv-card-title">{s.title}</h3>
                    </div>
                  </div>

                  {/* Expandable */}
                  <div className={`srv-expand ${isOpen ? 'open' : ''}`}>
                    <div className="srv-expand-inner">
                      <p className="srv-desc">{s.desc}</p>
                      <ul className="srv-features">
                        {s.features.map((f, fi) => (
                          <li key={fi} className="srv-feature">
                            <span className="srv-check" aria-hidden="true">✓</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#contact"
                        className="srv-card-link"
                        onClick={e => e.stopPropagation()}
                      >
                        Get Started <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Toggle */}
                <button
                  className="srv-toggle"
                  aria-label={isOpen ? `Collapse ${s.title}` : `Expand ${s.title}`}
                  onClick={e => { e.stopPropagation(); setOpenIdx(isOpen ? null : i) }}
                >
                  <span className="srv-toggle-icon">+</span>
                </button>
              </div>
            )
          })}
        </div>

        {/* BOTTOM CTA */}
        <div ref={ctaRef} className={`srv-cta-strip ${ctaIn ? 'in' : ''}`}>
          <span className="srv-cta-badge">✦ ALL SERVICES INCLUDED ✦</span>
          <h3 className="srv-cta-title">
            Ready to Grow Your Business<br />With Every Tool You Need?
          </h3>
          <p className="srv-cta-desc">
            One strategy, one team, one goal — your growth. No commitments, no juggling.
          </p>
          <a href="#contact" className="btn-primary" style={{ fontSize: '14px', padding: '14px 38px' }}>
            ✦ Book a Free Strategy Call
          </a>
          <p className="srv-cta-note">No commitments. Results or your money back.</p>
        </div>

      </section>
    </>
  )
}