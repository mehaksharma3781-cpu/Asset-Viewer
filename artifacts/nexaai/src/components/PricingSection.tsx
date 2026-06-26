import { useState } from 'react';
import PriceDisplay from './PriceDisplay';
import { pricingMatrix, tierFeatures } from '@/utils/pricingMatrix';
import type { Currency, Cycle, TierName } from '@/utils/pricingMatrix';
import ChevronDown from '@/assets/icons/ChevronDown';
import LinkSolid from '@/assets/icons/LinkSolid';

function BillingControls({ onChange }: { onChange: (cycle: Cycle, currency: Currency) => void }) {
  const [cycle, setCycle] = useState<Cycle>('monthly');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [currencyOpen, setCurrencyOpen] = useState(false);

  function handleCycle(c: Cycle) {
    setCycle(c);
    onChange(c, currency);
  }
  function handleCurrency(c: Currency) {
    setCurrency(c);
    setCurrencyOpen(false);
    onChange(cycle, c);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', justifyContent: 'center', marginBottom: '48px', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', background: 'var(--nocturnal-expedition)', borderRadius: '8px', padding: '4px' }}>
        {(['monthly', 'annual'] as Cycle[]).map(c => (
          <button
            key={c}
            data-testid={`toggle-${c}`}
            onClick={() => handleCycle(c)}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              padding: '6px 16px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 180ms cubic-bezier(0,0,0.2,1)',
              background: cycle === c ? 'var(--forsythia)' : 'transparent',
              color: cycle === c ? 'var(--oceanic-noir)' : 'var(--arctic-powder)',
              fontWeight: cycle === c ? 600 : 400,
            }}
          >
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </button>
        ))}
      </div>
      <div style={{ position: 'relative' }}>
        <button
          data-testid="currency-dropdown"
          onClick={() => setCurrencyOpen(!currencyOpen)}
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            fontFamily: 'Inter, sans-serif', fontSize: '0.875rem',
            padding: '6px 12px', borderRadius: '6px',
            border: '1px solid rgba(217,232,226,0.2)',
            background: 'var(--nocturnal-expedition)',
            color: 'var(--arctic-powder)', cursor: 'pointer',
          }}
        >
          {currency} <ChevronDown style={{ width: 14, height: 14 }} />
        </button>
        {currencyOpen && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, marginTop: '4px',
            background: 'var(--nocturnal-expedition)',
            border: '1px solid rgba(217,232,226,0.15)',
            borderRadius: '6px', overflow: 'hidden', zIndex: 10, minWidth: '80px',
          }}>
            {(['USD', 'INR', 'EUR'] as Currency[]).map(c => (
              <button
                key={c}
                data-testid={`currency-${c}`}
                onClick={() => handleCurrency(c)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '8px 12px', border: 'none', cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif', fontSize: '0.875rem',
                  background: currency === c ? 'rgba(255,200,1,0.1)' : 'transparent',
                  color: currency === c ? 'var(--forsythia)' : 'var(--arctic-powder)',
                }}
              >
                {c}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function PricingSection() {
  const [billing, setBilling] = useState<{ cycle: Cycle; currency: Currency }>({ cycle: 'monthly', currency: 'USD' });

  const tierStyles: Record<TierName, React.CSSProperties> = {
    Starter: {
      background: 'var(--nocturnal-expedition)',
      border: '1px solid rgba(217,232,226,0.15)',
      color: 'var(--arctic-powder)',
      transform: 'none',
    },
    Pro: {
      background: 'var(--forsythia)',
      border: '2px solid var(--forsythia)',
      color: 'var(--oceanic-noir)',
      transform: 'scale(1.05)',
    },
    Enterprise: {
      background: 'var(--oceanic-noir)',
      border: '1px solid var(--forsythia)',
      color: 'var(--arctic-powder)',
      transform: 'none',
    },
  };

  return (
    <section id="pricing" aria-labelledby="pricing-heading" style={{ padding: '100px 24px', background: 'var(--oceanic-noir)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--forsythia)', textAlign: 'center', marginBottom: '12px' }}>Pricing</p>
        <h2 id="pricing-heading" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--arctic-powder)', textAlign: 'center', marginBottom: '16px' }}>
          Simple, Transparent Pricing
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', color: 'var(--mystic-mint)', textAlign: 'center', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px', fontSize: '1.1rem' }}>
          Start free, scale as you grow. No hidden fees.
        </p>
        
        <BillingControls onChange={(cycle, currency) => setBilling({ cycle, currency })} />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'center' }}>
          {pricingMatrix.tiers.map(tier => {
            const isPro = tier === 'Pro';
            const style = tierStyles[tier];
            return (
              <article
                key={tier}
                data-testid={`pricing-card-${tier.toLowerCase()}`}
                style={{
                  ...style,
                  borderRadius: '12px',
                  padding: '40px 32px',
                  position: 'relative',
                  transition: 'box-shadow 200ms ease-out, transform 200ms ease-out',
                }}
              >
                {isPro && (
                  <div style={{
                    position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--oceanic-noir)', color: 'var(--forsythia)',
                    fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', fontWeight: 700,
                    padding: '6px 14px', borderRadius: '20px', border: '1px solid var(--forsythia)',
                    letterSpacing: '0.1em', whiteSpace: 'nowrap',
                  }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px', color: isPro ? 'var(--oceanic-noir)' : 'var(--arctic-powder)' }}>{tier}</h3>
                <PriceDisplay tier={tier} cycle={billing.cycle} currency={billing.currency} />
                <ul style={{ listStyle: 'none', padding: 0, margin: '32px 0 40px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {tierFeatures[tier].map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: isPro ? 'var(--oceanic-noir)' : 'var(--mystic-mint)' }}>
                      <LinkSolid style={{ width: 20, height: 20, color: isPro ? 'var(--oceanic-noir)' : 'var(--forsythia)', flexShrink: 0 }} />
                      <span style={{ lineHeight: 1.4 }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  data-testid={`cta-${tier.toLowerCase()}`}
                  style={{
                    width: '100%', padding: '14px', borderRadius: '8px', border: isPro ? 'none' : '1px solid rgba(255,200,1,0.4)',
                    background: isPro ? 'var(--oceanic-noir)' : 'transparent',
                    color: isPro ? 'var(--forsythia)' : 'var(--forsythia)',
                    fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 600,
                    cursor: 'pointer', transition: 'all 180ms cubic-bezier(0,0,0.2,1)',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.85'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; }}
                >
                  {tier === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}