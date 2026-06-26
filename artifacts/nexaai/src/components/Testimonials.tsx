const testimonials = [
  {
    initials: 'SR',
    name: 'Sarah Reynolds',
    role: 'CTO, DataStream Inc.',
    quote: 'NexaAI cut our data pipeline build time by 80%. We went from weeks of engineering work to production pipelines in an afternoon. The AI-driven ETL is genuinely magic.',
  },
  {
    initials: 'MK',
    name: 'Marcus Kim',
    role: 'Head of Analytics, Vertex Labs',
    quote: 'The real-time analytics layer is unlike anything we have used before. Dashboards update instantly, and the predictive models caught an anomaly that saved us $200K.',
  },
  {
    initials: 'AP',
    name: 'Anita Patel',
    role: 'VP Engineering, ScaleOps',
    quote: 'Enterprise security was a blocker for us. NexaAI cleared every audit. SOC 2 compliance, SSO, granular RBAC — all out of the box. Onboarding took one day.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '100px 24px', background: 'linear-gradient(to bottom, var(--oceanic-noir), var(--nocturnal-expedition))' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--forsythia)', textAlign: 'center', marginBottom: '12px' }}>Trusted by 500+ Teams</p>
        <h2 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--arctic-powder)', textAlign: 'center', marginBottom: '64px' }}>
          What Our Customers Say
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {testimonials.map((t, i) => (
            <article
              key={i}
              style={{
                background: 'var(--nocturnal-expedition)',
                border: '1px solid rgba(217,232,226,0.15)',
                borderRadius: '12px',
                padding: '32px',
                transition: 'transform 180ms cubic-bezier(0,0,0.2,1), box-shadow 180ms',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: 'var(--forsythia)', color: 'var(--oceanic-noir)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'JetBrains Mono, monospace', fontWeight: 700, fontSize: '1.1rem'
                }}>
                  {t.initials}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--arctic-powder)', fontWeight: 700, fontSize: '1.05rem', margin: 0 }}>{t.name}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', color: 'var(--mystic-mint)', fontSize: '0.875rem', margin: '4px 0 0' }}>{t.role}</p>
                </div>
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', color: 'var(--mystic-mint)', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
                "{t.quote}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}