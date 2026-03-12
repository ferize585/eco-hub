import NetworkCanvas from "./NetworkCanvas";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-tag">Early Access — shelbynet + testnet Live</div>
        <h1>Shelby Network<br/><span className="gradient">Ecosystem</span></h1>
        <p className="hero-sub">High-performance decentralized blob storage built for video streaming, AI inference, and large-scale data — powered by Aptos and Jump Trading infrastructure.</p>
        <div className="hero-actions">
          <a href="#ecosystem" className="btn-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12l4 4 4-4"/></svg>
            Explore Modules
          </a>
          <a href="https://github.com/shelby" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            View on GitHub
          </a>
        </div>
        <div className="hero-visual">
          <NetworkCanvas />
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-inner" id="ticker">
          <div className="ticker-item"><span className="dot"></span> Network <span className="up">shelbynet + testnet</span></div>
          <div className="ticker-item"><span className="dot"></span> Storage Providers <span className="up">16 active</span></div>
          <div className="ticker-item"><span className="dot"></span> Storage Capacity <span>~10 TiB</span></div>
          <div className="ticker-item"><span className="dot"></span> Aptos TPS <span className="up">30,000</span></div>
          <div className="ticker-item"><span className="dot"></span> Settlement Layer <span>Aptos Blockchain</span></div>
          <div className="ticker-item"><span className="dot"></span> SP Disk per Node <span>1 TiB</span></div>
          <div className="ticker-item"><span className="dot"></span> Status <span className="up">Early Access</span></div>
          <div className="ticker-item"><span className="dot"></span> Uptime <span className="up">99.99%</span></div>
          <div className="ticker-item"><span className="dot"></span> Built by <span>Jump Trading × Aptos</span></div>
          {/* duplicate for seamless loop */}
          <div className="ticker-item"><span className="dot"></span> Network <span className="up">shelbynet + testnet</span></div>
          <div className="ticker-item"><span className="dot"></span> Storage Providers <span className="up">16 active</span></div>
          <div className="ticker-item"><span className="dot"></span> Storage Capacity <span>~10 TiB</span></div>
          <div className="ticker-item"><span className="dot"></span> Aptos TPS <span className="up">30,000</span></div>
          <div className="ticker-item"><span className="dot"></span> Settlement Layer <span>Aptos Blockchain</span></div>
          <div className="ticker-item"><span className="dot"></span> SP Disk per Node <span>1 TiB</span></div>
          <div className="ticker-item"><span className="dot"></span> Status <span className="up">Early Access</span></div>
          <div className="ticker-item"><span className="dot"></span> Uptime <span className="up">99.99%</span></div>
          <div className="ticker-item"><span className="dot"></span> Built by <span>Jump Trading × Aptos</span></div>
        </div>
      </div>
    </>
  );
}
