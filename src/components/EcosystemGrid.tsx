export default function EcosystemGrid() {
  const modules = [
    {
      num: "01",
      title: "Shelby Wallet",
      desc: "Secure digital wallet for Shelby assets. Multi-chain support with hardware wallet integration and MPC key management.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#63d2ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2"/>
          <path d="M2 10h20"/>
          <path d="M6 15h4"/>
          <circle cx="17" cy="15" r="1.5"/>
        </svg>
      ),
      delay: ""
    },
    {
      num: "02",
      title: "Shelby Explorer",
      desc: "Explore network transactions and activity in real-time. Deep analytics, contract verification, and address tracking.",
      link: "https://ferize585.github.io/explorer/",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#63d2ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
          <path d="M11 8v6M8 11h6"/>
        </svg>
      ),
      delay: "reveal-delay-1"
    },
    {
      num: "03",
      title: "Shelby Node",
      desc: "Run and manage Shelby network nodes. One-click deployment, automated rewards, and live performance dashboards.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#63d2ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="8" height="8" rx="1"/>
          <rect x="14" y="2" width="8" height="8" rx="1"/>
          <rect x="2" y="14" width="8" height="8" rx="1"/>
          <path d="M14 17h2a2 2 0 0 1 2 2v1M20 14h-2a2 2 0 0 0-2 2v1"/>
        </svg>
      ),
      delay: "reveal-delay-2"
    },
    {
      num: "04",
      title: "Shelby AI",
      desc: "AI-powered services inside the Shelby ecosystem. On-chain inference, autonomous agents, and smart contract auditing.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#63d2ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10"/>
          <path d="M22 2 12 12"/>
          <path d="m15 2 7 7"/>
          <path d="M22 9V2h-7"/>
        </svg>
      ),
      delay: ""
    },
    {
      num: "05",
      title: "Shelby Cloud",
      desc: "Decentralized cloud infrastructure. Edge compute, distributed storage, and permissionless hosting with 99.9% uptime SLA.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#63d2ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
          <path d="M13 14v-4M11 14v-4"/>
        </svg>
      ),
      delay: "reveal-delay-1"
    },
    {
      num: "06",
      title: "Shelby Marketplace",
      desc: "Marketplace for apps and services. Discover, deploy, and monetize dApps across the Shelby ecosystem.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#63d2ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
          <path d="M3 6h18"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      ),
      delay: "reveal-delay-2"
    }
  ];

  return (
    <section className="ecosystem" id="ecosystem">
      <div className="section-header reveal">
        <span className="section-label">// Core Modules</span>
        <h2 className="section-title">Ecosystem Infrastructure</h2>
        <p className="section-sub">Six foundational pillars powering the Shelby Network stack.</p>
      </div>

      <div className="modules-grid">
        {modules.map((m) => (
          m.link ? (
            <a key={m.num} className={`module-card reveal ${m.delay}`} href={m.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <span className="card-num">{m.num}</span>
              <div className="card-icon">{m.icon}</div>
              <h3 className="card-title">{m.title}</h3>
              <p className="card-desc">{m.desc}</p>
              <span className="card-btn">{m.title === "Shelby Explorer" ? "Launch Explorer" : "View Demo"} <span className="arrow">→</span></span>
            </a>
          ) : (
            <div key={m.num} className={`module-card reveal ${m.delay}`}>
              <span className="card-num">{m.num}</span>
              <div className="card-icon">{m.icon}</div>
              <h3 className="card-title">{m.title}</h3>
              <p className="card-desc">{m.desc}</p>
              <button className="card-btn">View Demo <span className="arrow">→</span></button>
            </div>
          )
        ))}
      </div>
    </section>
  );
}
