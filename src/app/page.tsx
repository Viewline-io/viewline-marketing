import Link from 'next/link'
import type { Metadata } from 'next'
import { Shield, Eye, Bell, Lock, Building2, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Viewline — Digital Security, Simplified',
  description:
    'Viewline gives businesses and families the visibility they need to stay safe online — without blocking, tracking, or invading privacy.',
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? ''

const trustProps = [
  { icon: Shield, label: 'No blocking', desc: 'We inform, never restrict.' },
  { icon: Eye, label: 'Full visibility', desc: 'See what matters, clearly.' },
  { icon: Bell, label: 'Smart alerts', desc: 'Notified when it counts.' },
  { icon: Lock, label: 'Privacy first', desc: 'Your data stays yours.' },
]

const businessFeatures = [
  'Chrome extension monitoring',
  'Warning interstitials',
  'Weekly digest reports',
  'Role-based access',
]

const familyFeatures = [
  'Behavioral pattern analysis',
  'Late-night activity detection',
  'Scam & phishing alerts',
  'Platform escalation tracking',
]

export default function HomePage() {
  return (
    <div className='home-bg'>
      {/* Hero */}
      <section className="bg-tile2 px-4 pt-20 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Digital security,{' '}
            <span className="text-cyan-500">simplified.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500 sm:text-xl">
            Viewline gives businesses and families the visibility they need to stay
            safe online — without blocking, tracking, or invading privacy.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/business"
              className="w-full rounded-xl bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-cyan-600 sm:w-auto"
            >
              For Business
            </Link>
            <Link
              href="/family"
              className="w-full rounded-xl border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50 sm:w-auto"
            >
              For Families
            </Link>
          </div>

        <div className='backgroud-texture'>
          <div className='bg-tile2'></div>
          <div className='gradient-background'></div>
        </div>

        </div>

      </section>


      {/* Trust bar */}
      <section className="border-y border-gray-100 bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {trustProps.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex flex-col items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-500">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{label}</p>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution split */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              One platform, two solutions
            </h2>
            <p className="mt-4 text-gray-500">
              Choose the protection that fits your situation.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Business card */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">
                <Building2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">For Business</h3>
              <p className="mt-3 text-gray-500">
                Smart network monitoring for small businesses — no IT team required.
                Know when employees visit high-risk sites. Get weekly digests and
                real-time alerts on your terms.
              </p>
              <ul className="mt-5 flex-1 space-y-2">
                {businessFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/business"
                  className="text-sm font-semibold text-cyan-600 hover:text-cyan-700"
                >
                  Learn more →
                </Link>
                <Link href="/business/pricing" className="text-sm text-gray-500 hover:text-gray-700">
                  See pricing
                </Link>
              </div>
            </div>

            {/* Family card */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">For Families</h3>
              <p className="mt-3 text-gray-500">
                AI-powered behavioral insights that help parents stay informed without
                blocking or spying. Understand patterns, not just pages.
              </p>
              <ul className="mt-5 flex-1 space-y-2">
                {familyFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/family"
                  className="text-sm font-semibold text-cyan-600 hover:text-cyan-700"
                >
                  Learn more →
                </Link>
                <Link href="/family/pricing" className="text-sm text-gray-500 hover:text-gray-700">
                  See pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Not sure which fits you?
          </h2>
          <p className="mt-4 text-gray-400">
            Both solutions are built on the same platform — start with one and add
            the other any time.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`${APP_URL}/signup?type=business`}
              className="w-full rounded-xl bg-cyan-500 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-cyan-600 sm:w-auto"
            >
              Business — Get started
            </a>
            <a
              href={`${APP_URL}/signup?type=family`}
              className="w-full rounded-xl border border-gray-700 px-8 py-4 text-base font-semibold text-gray-200 transition-colors hover:border-gray-600 hover:bg-gray-800 sm:w-auto"
            >
              Family — Get started
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
