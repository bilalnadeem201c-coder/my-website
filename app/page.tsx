"use client"
import { useState, useEffect } from "react"
import Marquee from "react-fast-marquee"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [split, setSplit] = useState(false)

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
          <style>{`
            @keyframes fadeText {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
          `}</style>

          <div style={{
            position:'fixed', top:0, left:0,
            width:'100%', height:'50%',
            backgroundColor:'#000', zIndex:9999,
            display:'flex', alignItems:'flex-end',
            justifyContent:'center', paddingBottom:'10px',
            transform: split ? 'translateY(-100%)' : 'translateY(0)',
            transition:'transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)',
          }}>
            <p style={{
              fontSize:'clamp(22px, 5vw, 44px)',
              fontWeight:'bold', color:'white',
              fontFamily:'Arial, sans-serif',
              letterSpacing:'6px', margin:0,
              animation:'fadeText 0.8s ease forwards',
              textAlign:'center', padding:'0 20px',
            }}>
              Easy Where Solution
            </p>
          </div>

          <div style={{
            position:'fixed', bottom:0, left:0,
            width:'100%', height:'50%',
            backgroundColor:'#000', zIndex:9999,
            display:'flex', alignItems:'flex-start',
            justifyContent:'center', paddingTop:'10px',
            transform: split ? 'translateY(100%)' : 'translateY(0)',
            transition:'transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)',
          }}>
            <p style={{
              fontSize:'12px', color:'#555',
              fontFamily:'Arial, sans-serif',
              letterSpacing:'4px', margin:0,
              animation:'fadeText 0.8s ease forwards',
            }}>
              AI POWERED SOLUTIONS
            </p>
          </div>
        </>
      )}

      {/* ===== MAIN WEBSITE ===== */}
      <main
        role="main"
        style={{
          backgroundColor:'#000', color:'white',
          minHeight:'100vh', fontFamily:'Arial, sans-serif',
          opacity: loading ? 0 : 1,
          transition:'opacity 0.5s ease 0.2s',
        }}
      >

        {/* NAVBAR */}
        <header role="banner">
          <nav
            role="navigation"
            aria-label="Main Navigation"
            style={{
              display:'flex', justifyContent:'space-between',
              alignItems:'center', padding:'15px 30px',
              borderBottom:'1px solid #333', position:'sticky',
              top:0, backgroundColor:'#000', zIndex:100,
              flexWrap:'wrap', gap:'10px',
            }}
          >
            <a href="/" style={{
              fontSize:'18px', fontWeight:'bold',
              color:'white', textDecoration:'none',
            }}>
              Easy Where Solution
            </a>

            <div role="menubar" style={{display:'flex',gap:'20px',flexWrap:'wrap'}}>
              <a role="menuitem" href="#home" style={{color:'#aaa',textDecoration:'none',fontSize:'14px'}}>Home</a>
              <a role="menuitem" href="#solutions" style={{color:'#aaa',textDecoration:'none',fontSize:'14px'}}>Solutions</a>
              <a role="menuitem" href="#about" style={{color:'#aaa',textDecoration:'none',fontSize:'14px'}}>About</a>
              <a role="menuitem" href="#contact" style={{color:'#aaa',textDecoration:'none',fontSize:'14px'}}>Contact</a>
            </div>

            <a href="#contact" style={{
              backgroundColor:'white', color:'black',
              padding:'8px 20px', borderRadius:'999px',
              textDecoration:'none', fontWeight:'bold',
              fontSize:'14px', display:'inline-block',
            }}>
              Get Started
            </a>
          </nav>
        </header>

        {/* HERO */}
        <section
          id="home"
          aria-labelledby="hero-heading"
          style={{
            display:'flex', flexDirection:'column',
            alignItems:'center', textAlign:'center',
            padding:'80px 20px',
          }}
        >
          <p style={{
            backgroundColor:'#85077e', color:'#aaa',
            padding:'6px 16px', borderRadius:'999px',
            fontSize:'13px', marginBottom:'25px',
            border:'1px solid #333', display:'inline-block',
          }}>
            AI That Works for You
          </p>

          <h1
            id="hero-heading"
            style={{
              fontSize:'clamp(32px, 6vw, 64px)',
              fontWeight:'bold', maxWidth:'800px',
              lineHeight:'1.2', marginBottom:'20px',
            }}
          >
            Your AI Assistant to Scale Your Business
          </h1>

          <p style={{
            fontSize:'clamp(15px, 2vw, 18px)',
            color:'#aaa', maxWidth:'600px',
            marginBottom:'35px', lineHeight:'1.7',
            padding:'0 10px',
          }}>
            Easy Where Solution puts all your business in one place.
            See what is working. Fix what is not. Make smarter moves with AI.
          </p>

          <div style={{display:'flex',gap:'12px',flexWrap:'wrap',justifyContent:'center'}}>
            <a href="#contact" style={{
              backgroundColor:'white', color:'black',
              padding:'12px 30px', borderRadius:'999px',
              textDecoration:'none', fontSize:'16px',
              fontWeight:'bold', display:'inline-block',
            }}>
              Get Started
            </a>
            <a href="#about" style={{
              backgroundColor:'transparent', color:'white',
              padding:'12px 30px', borderRadius:'999px',
              border:'1px solid #555', textDecoration:'none',
              fontSize:'16px', display:'inline-block',
            }}>
              Learn More
            </a>
          </div>
        </section>

        {/* MARQUEE */}
        <section
          aria-label="Trusted by leading platforms"
          style={{
            padding:'35px 0',
            borderTop:'1px solid #222',
            borderBottom:'1px solid #222',
            backgroundColor:'#050505',
            overflow:'hidden',
          }}
        >
          <p style={{
            textAlign:'center', color:'#555',
            marginBottom:'20px', fontSize:'12px',
            letterSpacing:'3px',
          }}>
            TRUSTED BY LEADING PLATFORMS
          </p>
          <Marquee speed={50} gradient={false}>
            {['Google','Meta','HubSpot','Salesforce','Shopify','AWS','OpenAI','Stripe','Slack','Notion'].map((name) => (
              <div key={name} style={{
                backgroundColor:'#111',
                border:'1px solid #2a2a2a',
                borderRadius:'10px',
                padding:'12px 24px',
                marginRight:'14px',
                fontSize:'15px',
                fontWeight:'bold',
                color:'#666',
                whiteSpace:'nowrap',
              }}>
                {name}
              </div>
            ))}
          </Marquee>
        </section>

        {/* STATS */}
        <section
          id="about"
          aria-label="Company Statistics"
          style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit, minmax(150px, 1fr))',
            gap:'1px',
            backgroundColor:'#1a1a1a',
            borderBottom:'1px solid #222',
          }}
        >
          {[
            {number:'50M+', label:'Data Points Analyzed'},
            {number:'10+', label:'AI Trained Models'},
            {number:'70%', label:'Drop in Manual Work'},
            {number:'1000+', label:'Campaigns in Motion'},
          ].map((stat) => (
            <div key={stat.number} style={{textAlign:'center',padding:'40px 15px',backgroundColor:'#000'}}>
              <p style={{fontSize:'clamp(32px, 5vw, 52px)',fontWeight:'bold',margin:'0 0 8px 0'}}>{stat.number}</p>
              <p style={{color:'#666',fontSize:'13px',margin:0}}>{stat.label}</p>
            </div>
          ))}
        </section>

        {/* HOW IT WORKS */}
        <section
          id="solutions"
          aria-labelledby="steps-heading"
          style={{padding:'70px 20px'}}
        >
          <p style={{textAlign:'center',color:'#666',marginBottom:'10px',fontSize:'12px',letterSpacing:'3px'}}>
            HOW IT WORKS
          </p>
          <h2
            id="steps-heading"
            style={{textAlign:'center',fontSize:'clamp(28px, 4vw, 44px)',fontWeight:'bold',marginBottom:'50px'}}
          >
            4 Simple Steps
          </h2>
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',
            gap:'16px',
            maxWidth:'1200px',
            margin:'0 auto',
          }}>
            {[
              {num:'01', title:'Onboard & Connect', desc:'We set up your profile and connect your digital assets easily.'},
              {num:'02', title:'AI Audit & Launch', desc:'AI analyzes your presence and creates a custom action plan.'},
              {num:'03', title:'Campaigns Run', desc:'Your campaigns go live and are auto managed in real time.'},
              {num:'04', title:'Track Results', desc:'See live visual reports and data anytime you want.'},
            ].map((step) => (
              <article key={step.num} style={{
                backgroundColor:'#0d0d0d',
                padding:'30px',
                borderRadius:'16px',
                border:'1px solid #1f1f1f',
              }}>
                <p aria-hidden="true" style={{fontSize:'36px',fontWeight:'bold',color:'#222',margin:'0 0 15px 0'}}>{step.num}</p>
                <h3 style={{fontSize:'17px',fontWeight:'bold',marginBottom:'10px'}}>{step.title}</h3>
                <p style={{color:'#666',lineHeight:'1.7',fontSize:'14px',margin:0}}>{step.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer
          id="contact"
          role="contentinfo"
          style={{
            borderTop:'1px solid #1a1a1a',
            padding:'30px 20px',
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            flexWrap:'wrap',
            gap:'15px',
          }}
        >
          <p style={{fontSize:'16px',fontWeight:'bold',margin:0}}>Easy Where Solution</p>
          <p style={{color:'#555',margin:0,fontSize:'13px'}}>
            © 2026 Easy Where Solution. All rights reserved.
          </p>
          <nav aria-label="Footer Navigation" style={{display:'flex',gap:'15px'}}>
            <a href="/privacy" style={{color:'#555',textDecoration:'none',fontSize:'13px'}}>Privacy</a>
            <a href="/terms" style={{color:'#555',textDecoration:'none',fontSize:'13px'}}>Terms</a>
            <a href="#contact" style={{color:'#555',textDecoration:'none',fontSize:'13px'}}>Contact</a>
          </nav>
        </footer>

      </main>
    </>
  )
}