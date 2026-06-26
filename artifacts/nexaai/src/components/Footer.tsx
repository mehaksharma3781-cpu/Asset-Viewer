import CubeSixteenSolid from '@/assets/icons/CubeSixteenSolid';
import ArrowTrendingUp from '@/assets/icons/ArrowTrendingUp';
import LinkSolid from '@/assets/icons/LinkSolid';
import Search from '@/assets/icons/Search';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--oceanic-noir)', padding: '80px 24px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', justifyContent: 'space-between' }}>
          
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <CubeSixteenSolid style={{ color: 'var(--forsythia)', width: '28px', height: '28px' }} />
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 800, color: 'var(--forsythia)', fontSize: '1.5rem' }}>NexaAI</span>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', color: 'var(--mystic-mint)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Automate everything. Scale without limits. Transforming raw data into intelligent workflows.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px' }}>
            <div>
              <h4 style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--arctic-powder)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Product</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Features', 'Pricing', 'Integrations', 'Changelog'].map(link => (
                  <li key={link}>
                    <a href="#" style={{ fontFamily: 'Inter, sans-serif', color: 'var(--mystic-mint)', fontSize: '0.9rem', transition: 'color 150ms' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--arctic-powder)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--mystic-mint)'}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--arctic-powder)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['About', 'Blog', 'Careers', 'Press'].map(link => (
                  <li key={link}>
                    <a href="#" style={{ fontFamily: 'Inter, sans-serif', color: 'var(--mystic-mint)', fontSize: '0.9rem', transition: 'color 150ms' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--arctic-powder)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--mystic-mint)'}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--arctic-powder)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>Resources</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Docs', 'API Reference', 'Status', 'Support'].map(link => (
                  <li key={link}>
                    <a href="#" style={{ fontFamily: 'Inter, sans-serif', color: 'var(--mystic-mint)', fontSize: '0.9rem', transition: 'color 150ms' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--arctic-powder)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--mystic-mint)'}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div style={{ height: '1px', background: 'var(--nocturnal-expedition)', margin: '48px 0 24px' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', color: 'var(--mystic-mint)', fontSize: '0.85rem', margin: 0 }}>
            © {new Date().getFullYear()} NexaAI. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button style={{ background: 'transparent', border: 'none', color: 'var(--mystic-mint)', cursor: 'pointer', padding: '4px', transition: 'color 150ms' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--arctic-powder)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--mystic-mint)'} aria-label="Twitter">
              <ArrowTrendingUp style={{ width: '20px', height: '20px' }} />
            </button>
            <button style={{ background: 'transparent', border: 'none', color: 'var(--mystic-mint)', cursor: 'pointer', padding: '4px', transition: 'color 150ms' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--arctic-powder)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--mystic-mint)'} aria-label="LinkedIn">
              <LinkSolid style={{ width: '20px', height: '20px' }} />
            </button>
            <button style={{ background: 'transparent', border: 'none', color: 'var(--mystic-mint)', cursor: 'pointer', padding: '4px', transition: 'color 150ms' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--arctic-powder)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--mystic-mint)'} aria-label="GitHub">
              <Search style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}