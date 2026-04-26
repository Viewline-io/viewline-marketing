import Link from 'next/link'
import { Check } from 'lucide-react'

interface Tier {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  ctaHref: string
  highlighted?: boolean
}

interface PricingPageProps {
  type: 'business' | 'family'
  tiers: Tier[]
}

export default function PricingPage({ type, tiers }: PricingPageProps) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-500">
            {type === 'business' ? 'Business Plans' : 'Family Plans'}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-gray-500">Start free. Upgrade when you're ready.</p>
        </div>

        <div
          className={`grid gap-6 ${
            tiers.length === 3
              ? 'lg:grid-cols-3'
              : 'mx-auto max-w-3xl lg:grid-cols-2'
          }`}
        >
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border p-8 shadow-sm ${
                tier.highlighted
                  ? 'border-cyan-400 bg-cyan-50 ring-2 ring-cyan-400'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-4 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}

              <div>
                <h2 className="text-lg font-semibold text-gray-900">{tier.name}</h2>
                <p className="mt-1 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  {tier.price !== 'Free' && (
                    <span className="text-gray-500">/mo</span>
                  )}
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={16} className="mt-0.5 shrink-0 text-cyan-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.ctaHref}
                className={`mt-8 block rounded-xl px-6 py-3 text-center text-sm font-semibold transition-colors ${
                  tier.highlighted
                    ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                    : 'border border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          Prices shown are placeholders — final pricing coming soon.
        </p>

        <div className="mt-6 text-center">
          <Link
            href={`/${type}`}
            className="text-sm font-medium text-cyan-600 hover:text-cyan-700"
          >
            ← Back to {type === 'business' ? 'Business' : 'Family'} overview
          </Link>
        </div>
      </div>
    </section>
  )
}
