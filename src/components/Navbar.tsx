"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const networkDropdownRef = useRef<HTMLDivElement>(null);
  const devDropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 120);
  };

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      openDropdown(name);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        networkDropdownRef.current &&
        !networkDropdownRef.current.contains(event.target as Node) &&
        devDropdownRef.current &&
        !devDropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <header>
      <Link href="https://shelby.xyz" target="_blank" rel="noopener noreferrer" className="logo">
        <Image 
          src="/logo.jpg" 
          alt="Shelby Network" 
          className="logo-img" 
          width={40} 
          height={40} 
        />
        <span className="logo-wordmark">Shelby<span className="logo-dot">.</span>Network</span>
      </Link>
      <nav>
        <Link href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); }}>Home</Link>
        <Link href="#ecosystem" className="active">Ecosystem</Link>

        {/* NETWORK DROPDOWN */}
        <div 
          className="nav-dropdown-wrap" 
          ref={networkDropdownRef}
          onMouseEnter={() => openDropdown('network')}
          onMouseLeave={closeDropdown}
        >
          <button 
            className={`nav-dropdown-trigger ${activeDropdown === 'network' ? 'open' : ''}`}
            onClick={(e) => { e.stopPropagation(); toggleDropdown('network'); }}
            aria-haspopup="true" 
            aria-expanded={activeDropdown === 'network'}
          >
            Network
            <svg className="dropdown-chevron" width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className={`nav-dropdown-menu ${activeDropdown === 'network' ? 'open' : ''}`} role="menu">
            <div className="dropdown-glow-line"></div>

            <Link href="https://api.shelbynet.shelby.xyz/shelby" target="_blank" className="dropdown-item" role="menuitem">
              <div className="dropdown-item-icon">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4}>
                  <circle cx="8" cy="8" r="6"/><path d="M8 5v3l2 2"/>
                </svg>
              </div>
              <div className="dropdown-item-text">
                <span className="dropdown-item-name">ShelbyNet Devnet</span>
                <span className="dropdown-item-desc">Development network for testing features</span>
              </div>
              <span className="dropdown-item-badge badge-dev">DEV</span>
            </Link>

            <Link href="https://api.testnet.aptoslabs.com/v1" target="_blank" className="dropdown-item" role="menuitem">
              <div className="dropdown-item-icon">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4}>
                  <polygon points="8,2 14,5.5 14,10.5 8,14 2,10.5 2,5.5"/>
                  <circle cx="8" cy="8" r="2"/>
                </svg>
              </div>
              <div className="dropdown-item-text">
                <span className="dropdown-item-name">ShelbyNet Testnet</span>
                <span className="dropdown-item-desc">Public testing environment</span>
              </div>
              <span className="dropdown-item-badge badge-test">TEST</span>
            </Link>

            <div className="dropdown-divider"></div>

            <div className="dropdown-item dropdown-item--disabled" role="menuitem" aria-disabled="true">
              <div className="dropdown-item-icon">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4}>
                  <path d="M8 1l2.5 5 5.5.8-4 3.9.9 5.5L8 13.5 3.1 16.2l1-5.5L.1 6.8 5.5 6z"/>
                </svg>
              </div>
              <div className="dropdown-item-text">
                <span className="dropdown-item-name">ShelbyNet Mainnet</span>
                <span className="dropdown-item-desc">Production-grade global network</span>
              </div>
              <span className="dropdown-item-badge badge-soon">Soon</span>
            </div>
          </div>
        </div>

        {/* DEVELOPERS DROPDOWN */}
        <div 
          className="nav-dropdown-wrap" 
          ref={devDropdownRef}
          onMouseEnter={() => openDropdown('dev')}
          onMouseLeave={closeDropdown}
        >
          <button 
            className={`nav-dropdown-trigger ${activeDropdown === 'dev' ? 'open' : ''}`}
            onClick={(e) => { e.stopPropagation(); toggleDropdown('dev'); }}
            aria-haspopup="true" 
            aria-expanded={activeDropdown === 'dev'}
          >
            Developers
            <svg className="dropdown-chevron" width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className={`nav-dropdown-menu ${activeDropdown === 'dev' ? 'open' : ''}`} role="menu">
            <div className="dropdown-glow-line"></div>

            <Link href="https://docs.shelby.xyz/protocol" target="_blank" className="dropdown-item" role="menuitem">
              <div className="dropdown-item-icon">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4}>
                  <path d="M3 2h7l3 3v9H3z"/><path d="M10 2v3h3"/><path d="M5 7h6M5 10h4"/>
                </svg>
              </div>
              <div className="dropdown-item-text">
                <span className="dropdown-item-name">Documentation</span>
                <span className="dropdown-item-desc">Guides, concepts and protocol reference</span>
              </div>
            </Link>

            <Link href="https://docs.shelby.xyz/sdks/typescript" target="_blank" className="dropdown-item" role="menuitem">
              <div className="dropdown-item-icon">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4}>
                  <polyline points="5,4 2,8 5,12"/><polyline points="11,4 14,8 11,12"/><line x1="9" y1="3" x2="7" y2="13"/>
                </svg>
              </div>
              <div className="dropdown-item-text">
                <span className="dropdown-item-name">SDK</span>
                <span className="dropdown-item-desc">TypeScript &amp; React SDK for Shelby Protocol</span>
              </div>
              <span className="dropdown-item-badge badge-dev">TS</span>
            </Link>

            <Link href="https://docs.shelby.xyz/api" target="_blank" className="dropdown-item" role="menuitem">
              <div className="dropdown-item-icon">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4}>
                  <rect x="1" y="3" width="14" height="10" rx="1.5"/><path d="M4 8h8M10 6l2 2-2 2"/>
                </svg>
              </div>
              <div className="dropdown-item-text">
                <span className="dropdown-item-name">API Reference</span>
                <span className="dropdown-item-desc">REST endpoints and RPC methods</span>
              </div>
            </Link>

            <div className="dropdown-divider"></div>

            <Link href="https://github.com/shelby" target="_blank" className="dropdown-item" role="menuitem">
              <div className="dropdown-item-icon">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.4}>
                  <path d="M8 1.5a6.5 6.5 0 0 0-2.056 12.67c.325.06.445-.14.445-.31v-1.09c-1.806.393-2.187-.872-2.187-.872-.295-.75-.72-.95-.72-.95-.59-.403.044-.395.044-.395.652.046 1 .67 1 .67.58 1 1.523.71 1.894.543.059-.422.227-.71.413-.873-1.442-.164-2.957-.72-2.957-3.207 0-.708.253-1.287.668-1.74-.067-.165-.29-.824.063-1.717 0 0 .545-.175 1.785.665A6.22 6.22 0 0 1 8 5.88c.551.003 1.107.075 1.625.22 1.238-.84 1.782-.665 1.782-.665.354.893.131 1.552.064 1.716.416.454.667 1.033.667 1.741 0 2.494-1.517 3.041-2.963 3.202.233.2.44.598.44 1.205v1.786c0 .172.118.374.448.31A6.5 6.5 0 0 0 8 1.5z"/>
                </svg>
              </div>
              <div className="dropdown-item-text">
                <span className="dropdown-item-name">GitHub</span>
                <span className="dropdown-item-desc">Open source repos and code examples</span>
              </div>
            </Link>
          </div>
        </div>

        <Link href="https://discord.com/invite/shelbyserves" target="_blank" rel="noopener noreferrer">Community</Link>
        <Link href="#" className="nav-cta">Launch App</Link>
      </nav>
      <div 
        className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span></span><span></span><span></span>
      </div>
    </header>
  );
}
