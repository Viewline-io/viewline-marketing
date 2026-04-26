import type { Metadata } from 'next'
import PricingPage from '@/components/PricingPage'

export const metadata: Metadata = {
  title: 'Business Pricing — Viewline',
  description:
    'Simple, transparent pricing for Viewline Business. Start free and upgrade when ready.',
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? ''

export default function BusinessPricingPage() {
  return (
    <PricingPage
      type="business"
      tiers={[
        {
          name: 'Starter',
          price: 'Free',
          description: 'For small teams just getting started.',
          features: [
            'Up to 5 devices',
            'Domain-level monitoring',
            'Warning interstitials',
            'Weekly digest reports',
          ],
          cta: 'Get started free',
          ctaHref: `${APP_URL}/signup?type=business&plan=starter`,
        },
        {
          name: 'Pro',
          price: '$—',
          description: 'For growing businesses that need more visibility.',
          features: [
            'Up to 25 devices',
            'Real-time alerts',
            'Daily & weekly digests',
            'Role-based access (admin / member)',
            'Priority support',
          ],
          cta: 'Start Pro trial',
          ctaHref: `${APP_URL}/signup?type=business&plan=pro`,
          highlighted: true,
        },
        {
          name: 'Business+',
          price: '$—',
          description: 'For teams that need full control and advanced reporting.',
          features: [
            'Unlimited devices',
            'Real-time & custom alerts',
            'Advanced analytics',
            'Multiple admin roles',
            'Custom digest schedules',
            'Dedicated support',
          ],
          cta: 'Contact us',
          ctaHref: `${APP_URL}/signup?type=business&plan=business-plus`,
        },
      ]}
    />
  )
}
