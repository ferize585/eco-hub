"use client";

import { useState, useEffect, useRef } from "react";

function Counter({ target, suffix = "", duration = 1800 }: { target: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    let frameId: number;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry && entry.isIntersecting && !animated.current) {
        animated.current = true;
        let start: number | null = null;
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(ease * target));
          if (progress < 1) {
            frameId = requestAnimationFrame(step);
          }
        };
        frameId = requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });

    if (countRef.current) observer.observe(countRef.current);
    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [target, duration]);

  return <div ref={countRef} className="stat-num">{count.toLocaleString()}{suffix}</div>;
}

export default function Stats() {
  const statsWrapRef = useRef<HTMLDivElement>(null);
  const [barsAnimated, setBarsAnimated] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry && entry.isIntersecting) {
        timer = setTimeout(() => setBarsAnimated(true), 200);
      }
    }, { threshold: 0.3 });

    if (statsWrapRef.current) observer.observe(statsWrapRef.current);
    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <section className="stats" id="stats">
      <div className="section-header reveal">
        <span className="section-label">// Protocol Data — sourced from docs.shelby.xyz</span>
        <h2 className="section-title">Network Statistics</h2>
        <p className="section-sub">Live metrics from the Shelby Protocol. Currently running on <strong style={{ color: 'var(--cyan)' }}>shelbynet</strong> (devnet) and <strong style={{ color: 'var(--cyan)' }}>testnet</strong>.</p>
      </div>

      <div className="network-badges reveal" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
        <div className="net-badge">
          <span className="badge-dot"></span>
          <span className="badge-name">shelbynet</span>
          <span className="badge-note">~10 TiB · resets weekly</span>
        </div>
        <div className="net-badge">
          <span className="badge-dot" style={{ background: 'var(--teal)' }}></span>
          <span className="badge-name">testnet</span>
          <span className="badge-note">Aptos testnet · persistent</span>
        </div>
      </div>

      <div className="stats-wrap reveal" ref={statsWrapRef}>
        <div className="stat-item">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#63d2ff" strokeWidth="1.8"><rect x="2" y="2" width="20" height="8" rx="1"/><rect x="2" y="14" width="20" height="8" rx="1"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
          </div>
          <Counter target={16} />
          <div className="stat-label">Storage Providers</div>
          <div className="stat-sublabel">shelbynet · single region cloud</div>
          <div className="stat-bar"><div className={`stat-bar-fill ${barsAnimated ? 'animated' : ''}`} style={{ transform: barsAnimated ? 'scaleX(0.55)' : 'scaleX(0)' }}></div></div>
        </div>

        <div className="stat-item">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#63d2ff" strokeWidth="1.8"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          </div>
          <Counter target={10} suffix=" TiB" />
          <div className="stat-label">Storage Capacity</div>
          <div className="stat-sublabel">16 SPs × 1 TiB each</div>
          <div className="stat-bar"><div className={`stat-bar-fill ${barsAnimated ? 'animated' : ''}`} style={{ transform: barsAnimated ? 'scaleX(0.4)' : 'scaleX(0)' }}></div></div>
        </div>

        <div className="stat-item">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#63d2ff" strokeWidth="1.8"><polyline points="13 2 13 9 22 9"/><path d="M11 22H5a2 2 0 0 1-2-2V7l7-5 9 6.3V13"/><path d="M16 19h6M19 16v6"/></svg>
          </div>
          <Counter target={30000} />
          <div className="stat-label">Aptos Peak TPS</div>
          <div className="stat-sublabel">settlement layer throughput</div>
          <div className="stat-bar"><div className={`stat-bar-fill ${barsAnimated ? 'animated' : ''}`} style={{ transform: barsAnimated ? 'scaleX(1.0)' : 'scaleX(0)' }}></div></div>
        </div>

        <div className="stat-item">
          <div className="stat-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#63d2ff" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <Counter target={2} />
          <div className="stat-label">Active Networks</div>
          <div className="stat-sublabel">shelbynet + testnet</div>
          <div className="stat-bar"><div className={`stat-bar-fill ${barsAnimated ? 'animated' : ''}`} style={{ transform: barsAnimated ? 'scaleX(0.3)' : 'scaleX(0)' }}></div></div>
        </div>
      </div>

      <div className="stack-row reveal" style={{ marginTop: '1.5px', background: 'var(--surface)', border: '1px solid var(--border)', borderTop: 'none', borderRadius: '0 0 6px 6px', padding: '1.4rem 2.5rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'center' }}>
        <div className="stack-item">
          <span className="stack-key">Coordination Layer</span>
          <span className="stack-val">Aptos Blockchain (BFT)</span>
        </div>
        <div className="stack-divider"></div>
        <div className="stack-item">
          <span className="stack-key">Data Integrity</span>
          <span className="stack-val">Erasure Coding + Novel Audit</span>
        </div>
        <div className="stack-divider"></div>
        <div className="stack-item">
          <span className="stack-key">Bandwidth</span>
          <span className="stack-val">Dedicated Fiber Network (Geomi)</span>
        </div>
        <div className="stack-divider"></div>
        <div className="stack-item">
          <span className="stack-key">Built by</span>
          <span className="stack-val">Jump Trading Group × Aptos</span>
        </div>
      </div>
    </section>
  );
}
