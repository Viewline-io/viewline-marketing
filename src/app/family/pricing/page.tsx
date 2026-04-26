import type { Metadata } from 'next'
import PricingPage from '@/components/PricingPage'

export const metadata: Metadata = {
  title: 'Family Pricing — Viewline',
  description:
    'Simple, transparent pricing for Viewline Family. Start free and upgrade when ready.',
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? ''

export default function FamilyPricingPage() {
  return (
    <PricingPage
      type="family"
      tiers={[
        {
          name: 'Free',
          price: 'Free',
          description: 'Basic visibility for a single household.',
          features: [
            '1 household profile',
            'Basic domain monitoring',
            'Scam & phishing alerts',
            'Weekly activity summary',
          ],
          cta: 'Get started free',
          ctaHref: `${APP_URL}/signup?type=family&plan=free`,
        },
        {
          name: 'Family',
          price: '$—',
          description: 'Full AI insights for your whole family.',
          features: [
            'Up to 6 member profiles',
            'AI behavioral analysis',
            'Late-night activity detection',
            'Platform escalation tracking',
            'Real-time alerts',
            'Priority support',
          ],
          cta: 'Start Family trial',
          ctaHref: `${APP_URL}/signup?type=family&plan=family`,
          highlighted: true,
        },
      ]}
    />
  )
}
