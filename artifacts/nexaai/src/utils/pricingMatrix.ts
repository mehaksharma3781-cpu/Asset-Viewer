export type Currency = 'USD' | 'INR' | 'EUR';
export type Cycle = 'monthly' | 'annual';
export type TierName = 'Starter' | 'Pro' | 'Enterprise';

export const pricingMatrix = {
  tiers: ['Starter', 'Pro', 'Enterprise'] as TierName[],
  baseRates: {
    Starter:    { USD: 29,   INR: 2400,  EUR: 27  },
    Pro:        { USD: 79,   INR: 6500,  EUR: 72  },
    Enterprise: { USD: 199,  INR: 16500, EUR: 182 },
  },
  annualMultiplier: 0.8,
  tariffVariables:  { INR: 1.05, USD: 1.00, EUR: 1.02 },
  symbols:          { INR: '₹',  USD: '$',  EUR: '€'  },
};

export function computePrice(tier: TierName, cycle: Cycle, currency: Currency): number {
  const base   = pricingMatrix.baseRates[tier][currency];
  const tariff = pricingMatrix.tariffVariables[currency];
  const mult   = cycle === 'annual' ? pricingMatrix.annualMultiplier : 1;
  return Math.round(base * mult * tariff);
}

export function computeOriginalPrice(tier: TierName, currency: Currency): number {
  const base   = pricingMatrix.baseRates[tier][currency];
  const tariff = pricingMatrix.tariffVariables[currency];
  return Math.round(base * tariff);
}

export const tierFeatures: Record<TierName, string[]> = {
  Starter: [
    '5 data pipelines',
    '1M records/month',
    'Standard integrations',
    'Email support',
    'Basic analytics',
  ],
  Pro: [
    '25 data pipelines',
    '50M records/month',
    '150+ integrations',
    'Priority support',
    'Advanced analytics',
    'Custom workflows',
  ],
  Enterprise: [
    'Unlimited pipelines',
    'Unlimited records',
    'All integrations + custom',
    'Dedicated support',
    'Full analytics suite',
    'SSO + audit logs',
    'SLA guarantee',
  ],
};