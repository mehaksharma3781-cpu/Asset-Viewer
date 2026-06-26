import { useRef, useEffect } from 'react';
import { computePrice, computeOriginalPrice, pricingMatrix } from '@/utils/pricingMatrix';
import type { TierName, Cycle, Currency } from '@/utils/pricingMatrix';

interface PriceDisplayProps {
  tier: TierName;
  cycle: Cycle;
  currency: Currency;
}

export default function PriceDisplay({ tier, cycle, currency }: PriceDisplayProps) {
  const priceRef = useRef<HTMLSpanElement>(null);
  const originalRef = useRef<HTMLSpanElement>(null);
  const symbolRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (priceRef.current) {
      priceRef.current.textContent = computePrice(tier, cycle, currency).toString();
    }
    if (originalRef.current) {
      originalRef.current.textContent = computeOriginalPrice(tier, currency).toString();
    }
    if (symbolRef.current) {
      symbolRef.current.textContent = pricingMatrix.symbols[currency];
    }
  }, [tier, cycle, currency]);

  const price = computePrice(tier, cycle, currency);
  const original = computeOriginalPrice(tier, currency);
  const symbol = pricingMatrix.symbols[currency];
  const savings = Math.round(((original - price) / original) * 100);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
        <span ref={symbolRef} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '1.5rem', fontWeight: 700 }}>{symbol}</span>
        <span ref={priceRef} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>{price}</span>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'var(--mystic-mint)' }}>/{cycle === 'annual' ? 'yr' : 'mo'}</span>
      </div>
      {cycle === 'annual' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
          <span style={{ textDecoration: 'line-through', color: 'var(--mystic-mint)', fontSize: '0.875rem', fontFamily: 'Inter' }}>
            <span ref={originalRef}>{original}</span>/{symbol}
          </span>
          <span style={{ background: 'rgba(255,200,1,0.15)', color: 'var(--forsythia)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'Inter' }}>
            Save {savings}%
          </span>
        </div>
      )}
    </div>
  );
}