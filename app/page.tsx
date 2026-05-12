"use client"
import Marquee from "react-fast-marquee"

export default function Home() {
  return (
    <main style={{backgroundColor:'#000',color:'white',minHeight:'100vh',fontFamily:'Arial, sans-serif'}}>

      {/* NAVBAR */}
      <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'15px 30px',borderBottom:'1px solid #333',position:'sticky',top:0,backgroundColor:'#000',zIndex:100,flexWrap:'wrap',gap:'10px'}}>
        <h1 style={{fontSize:'20px',fontWeight:'bold',margin:0}}>Easy Where Solution</h1>
        <div style={{display:'flex',gap:'20px',flexWrap:'wrap'}}>
          <a href="#" style={{color:'#aaa',textDecoration:'none',fontSize:'14px'}}>Home</a>
          <a href="#" style={{color:'#aaa',textDecoration:'none',fontSize:'14px'}}>Solutions</a>
          <a href="#" style={{color:'#aaa',textDecoration:'none',fontSize:'14px'}}>About</a>
          <a href="#" style={{color:'#aaa',textDecoration:'none',fontSize:'14px'}}>Resources</a>
        </div>
        <button style={{backgroundColor:'white',color:'black',padding:'8px 20px',borderRadius:'999px',border:'none',fontWeight:'bold',cursor:'pointer',fontSize:'14px'}}>
          Get Started
        </button>
      </nav>

      {/* HERO SECTION */}
      <section style={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',padding:'60px 20px'}}>
        <div style={{backgroundColor:'#1a1a1a',color:'#aaa',padding:'6px 16px',borderRadius:'999px',fontSize:'13px',marginBottom:'25px',border:'1px solid #333'}}>
          AI That Works for You
        </div>
        <h1 style={{fontSize:'clamp(32px, 6vw, 64px)',fontWeight:'bold',maxWidth:'800px',lineHeight:'1.2',marginBottom:'20px'}}>
          Your AI Assistant to Scale Your Business
        </h1>
        <p style={{fontSize:'clamp(15px, 2vw, 18px)',color:'#aaa',maxWidth:'600px',marginBottom:'35px',lineHeight:'1.7',padding:'0 10px'}}>
         Easy Where Solution puts all your business in one place. See what is working. Fix what is not. Make smarter moves with AI.
        </p>
        <div style={{display:'flex',gap:'12px',flexWrap:'wrap',justifyContent:'center'}}>
          <button style={{backgroundColor:'white',color:'black',padding:'12px 30px',borderRadius:'999px',border:'none',fontSize:'16px',fontWeight:'bold',cursor:'pointer'}}>
            Get Started
          </button>
          <button style={{backgroundColor:'transparent',color:'white',padding:'12px 30px',borderRadius:'999px',border:'1px solid #555',fontSize:'16px',cursor:'pointer'}}>
            Login
          </button>
        </div>
      </section>

      {/* MARQUEE */}
      <section style={{padding:'35px 0',borderTop:'1px solid #222',borderBottom:'1px solid #222',backgroundColor:'#050505',overflow:'hidden'}}>
        <p style={{textAlign:'center',color:'#555',marginBottom:'20px',fontSize:'12px',letterSpacing:'3px'}}>
          TRUSTED BY LEADING PLATFORMS
        </p>
        <Marquee speed={50} gradient={false}>
          {['Google','Meta','HubSpot','Salesforce','Shopify','AWS','OpenAI','Stripe','Slack','Notion'].map((logo) => (
            <div key={logo} style={{backgroundColor:'#111',border:'1px solid #2a2a2a',borderRadius:'10px',padding:'12px 24px',marginRight:'14px',fontSize:'15px',fontWeight:'bold',color:'#666',whiteSpace:'nowrap'}}>
              {logo}
            </div>
          ))}
        </Marquee>
      </section>

      {/* STATS */}
      <section style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(150px, 1fr))',gap:'1px',backgroundColor:'#1a1a1a',borderBottom:'1px solid #222'}}>
        {[
          {number:'50M+', label:'Data Points Analyzed'},
          {number:'10+', label:'AI Trained Models'},
          {number:'70%', label:'Drop in Manual Work'},
          {number:'1000+', label:'Campaigns in Motion'},
        ].map((stat) => (
          <div key={stat.number} style={{textAlign:'center',padding:'40px 15px',backgroundColor:'#000'}}>
            <h3 style={{fontSize:'clamp(32px, 5vw, 52px)',fontWeight:'bold',marginBottom:'8px'}}>{stat.number}</h3>
            <p style={{color:'#666',fontSize:'13px'}}>{stat.label}</p>
          </div>
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section style={{padding:'70px 20px'}}>
        <p style={{textAlign:'center',color:'#666',marginBottom:'10px',fontSize:'12px',letterSpacing:'3px'}}>HOW IT WORKS</p>
        <h2 style={{textAlign:'center',fontSize:'clamp(28px, 4vw, 44px)',fontWeight:'bold',marginBottom:'50px'}}>4 Simple Steps</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',gap:'16px',maxWidth:'1200px',margin:'0 auto'}}>
          {[
            {num:'01', title:'Onboard & Connect', desc:'We set up your profile and connect your digital assets easily.'},
            {num:'02', title:'AI Audit & Launch', desc:'AI analyzes your presence and creates a custom action plan.'},
            {num:'03', title:'Campaigns Run', desc:'Your campaigns go live and are auto managed in real time.'},
            {num:'04', title:'Track Results', desc:'See live visual reports and data anytime you want.'},
          ].map((step) => (
            <div key={step.num} style={{backgroundColor:'#0d0d0d',padding:'30px',borderRadius:'16px',border:'1px solid #1f1f1f'}}>
              <h3 style={{fontSize:'36px',fontWeight:'bold',color:'#222',marginBottom:'15px'}}>{step.num}</h3>
              <h4 style={{fontSize:'17px',fontWeight:'bold',marginBottom:'10px'}}>{step.title}</h4>
              <p style={{color:'#666',lineHeight:'1.7',fontSize:'14px'}}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{borderTop:'1px solid #1a1a1a',padding:'30px 20px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'15px'}}>
        <h2 style={{fontSize:'18px',fontWeight:'bold',margin:0}}>MY AIO</h2>
        <p style={{color:'#555',margin:0,fontSize:'13px'}}>2026Easy Where Solution. All rights reserved.</p>
        <div style={{display:'flex',gap:'15px'}}>
          <a href="#" style={{color:'#555',textDecoration:'none',fontSize:'13px'}}>Privacy</a>
          <a href="#" style={{color:'#555',textDecoration:'none',fontSize:'13px'}}>Terms</a>
          <a href="#" style={{color:'#555',textDecoration:'none',fontSize:'13px'}}>Contact</a>
        </div>
      </footer>

    </main>
  )
}