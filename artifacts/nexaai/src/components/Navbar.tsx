import { useState, useEffect } from 'react';
import CubeSixteenSolid from '@/assets/icons/CubeSixteenSolid';
import Search from '@/assets/icons/Search';
import XMark from '@/assets/icons/XMark';
import ChevronDown from '@/assets/icons/ChevronDown';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: isScrolled ? 'none' : 'blur(12px)',
        background: isScrolled ? 'var(--oceanic-noir)' : 'rgba(23, 43, 54, 0.85)',
        transition: 'background 150ms cubic-bezier(0,0,0.2,1)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px', height: '64px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CubeSixteenSolid style={{ color: 'var(--forsythia)', width: '24px', height: '24px' }} />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, color: 'var(--forsythia)', fontSize: '1.25rem' }}>NexaAI</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex" style={{ display: 'none' }}>
          <ul style={{ display: 'flex', gap: '32px', listStyle: 'none' }}>
            {['Features', 'Pricing', 'Integrations', 'Docs'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: 'var(--arctic-powder)',
                    transition: 'color 150ms cubic-bezier(0,0,0.2,1)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--forsythia)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--arctic-powder)')}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <style>{`@media (min-width: 768px) { nav.hidden { display: flex !important; } .mobile-btn { display: none !important; } }`}</style>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button style={{ background: 'transparent', border: 'none', color: 'var(--arctic-powder)', cursor: 'pointer', display: 'flex' }}>
            <Search style={{ width: '20px', height: '20px' }} />
          </button>
          <button
            className="hidden md:block"
            style={{
              background: 'var(--forsythia)',
              color: 'var(--oceanic-noir)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              borderRadius: '6px',
              padding: '8px 16px',
              border: 'none',
              cursor: 'pointer',
              transition: 'opacity 150ms cubic-bezier(0,0,0.2,1)',
              fontSize: '0.9rem',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Get Started
          </button>
          <button
            className="mobile-btn"
            style={{ background: 'transparent', border: 'none', color: 'var(--arctic-powder)', cursor: 'pointer', padding: '4px' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <XMark style={{ width: '24px', height: '24px' }} /> : <ChevronDown style={{ width: '24px', height: '24px' }} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <nav
        style={{
          background: 'var(--oceanic-noir)',
          maxHeight: isOpen ? '350px' : '0',
          overflow: 'hidden',
          transition: 'max-height 350ms ease-in-out',
        }}
      >
        <ul style={{ listStyle: 'none', padding: '16px 24px', margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {['Features', 'Pricing', 'Integrations', 'Docs'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  color: 'var(--arctic-powder)',
                  fontSize: '1rem',
                  display: 'block',
                  padding: '8px 0',
                }}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <button
              style={{
                width: '100%',
                background: 'var(--forsythia)',
                color: 'var(--oceanic-noir)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                borderRadius: '6px',
                padding: '12px',
                border: 'none',
                marginTop: '8px',
              }}
            >
              Get Started
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}