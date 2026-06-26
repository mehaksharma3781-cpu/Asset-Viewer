import ArrowTrendingUp from '@/assets/icons/ArrowTrendingUp';
import ChevronRight from '@/assets/icons/ChevronRight';

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, var(--oceanic-noir), var(--nocturnal-expedition))',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '120px 24px 60px',
      }}
    >
      {/* Background Blobs */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          background: 'var(--forsythia)',
          opacity: 0.10,
          borderRadius: '50%',
          filter: 'blur(80px)',
          top: '-10%',
          left: '-10%',
          zIndex: 0,
          animation: 'blobFloat 7s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'var(--deep-saffron)',
          opacity: 0.08,
          borderRadius: '50%',
          filter: 'blur(80px)',
          bottom: '-5%',
          right: '-5%',
          zIndex: 0,
          animation: 'blobFloat 9s ease-in-out infinite reverse',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: 'var(--forsythia)',
          opacity: 0.06,
          borderRadius: '50%',
          filter: 'blur(80px)',
          top: '50%',
          left: '50%',
          zIndex: 0,
          animation: 'blobFloat 6s ease-in-out infinite 2s',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%', maxWidth: '1000px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid rgba(255, 200, 1, 0.3)',
            color: 'var(--forsythia)',
            borderRadius: '20px',
            padding: '6px 16px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            marginBottom: '24px',
            animation: 'fadeUp 0.4s ease-out both',
            animationDelay: '0ms',
          }}
        >
          <ArrowTrendingUp style={{ width: '16px', height: '16px' }} />
          <span>AI-Powered Automation</span>
        </div>

        <h1
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: 'var(--arctic-powder)',
            maxWidth: '800px',
            margin: '0 auto 24px',
            lineHeight: 1.1,
            animation: 'fadeUp 0.4s ease-out both',
            animationDelay: '80ms',
          }}
        >
          Automate Everything. Scale Without Limits.
        </h1>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.125rem',
            color: 'var(--mystic-mint)',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: 1.6,
            animation: 'fadeUp 0.4s ease-out both',
            animationDelay: '150ms',
          }}
        >
          TezFlow ka AI engine aapke data ko intelligent workflows mein badal deta hai — real time mein.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeUp 0.4s ease-out both',
            animationDelay: '220ms',
          }}
        >
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--forsythia)',
              color: 'var(--oceanic-noir)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              padding: '14px 28px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'opacity 150ms ease-out, transform 150ms ease-out',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <ArrowTrendingUp style={{ width: '18px', height: '18px' }} />
            Start Free Trial
          </button>
          
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'transparent',
              color: 'var(--arctic-powder)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              padding: '14px 28px',
              borderRadius: '8px',
              border: '1px solid var(--arctic-powder)',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'background 150ms ease-out',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(241, 246, 244, 0.1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            Watch Demo
            <ChevronRight style={{ width: '18px', height: '18px' }} />
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(24px, 5vw, 64px)',
            marginTop: 'auto',
            paddingTop: '80px',
            flexWrap: 'wrap',
            animation: 'fadeUp 0.4s ease-out both',
            animationDelay: '300ms',
          }}
        >
          {[
            { value: '10M+', label: 'Data Points' },
            { value: '99.9%', label: 'Uptime' },
            { value: '150+', label: 'Integrations' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '2.5rem', fontWeight: 700, color: 'var(--forsythia)', lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'var(--mystic-mint)', marginTop: '8px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}