import Link from 'next/link'
import type { Metadata } from 'next'
import { Brain, Moon, ShieldAlert, TrendingUp, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Family Safety — Viewline',
  description:
    'AI-powered behavioral insights for families. Stay informed about your family\'s online activity without blocking access or invading privacy.',
  openGraph: {
    title: 'Viewline for Families — Stay Informed, Not Intrusive',
    description:
      "Understand your family's online activity with behavioral insights — without blocking access or invading privacy.",
  },
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? ''

const steps = [
  {
    number: '01',
    title: 'Connect your home network',
    desc: 'Viewline routes DNS through our intelligent layer. Setup takes minutes and covers all devices on your network automatically.',
  },
  {
    number: '02',
    title: 'AI analyzes behavioral patterns',
    desc: "It's not about individual sites — it's about patterns. Late-night activity, escalating content categories, sudden behavior shifts.",
  },
  {
    number: '03',
    title: 'You receive smart, actionable alerts',
    desc: 'Get notified about meaningful changes, not every page visit. Start conversations from understanding, not suspicion.',
  },
]

const features = [
  {
    icon: Brain,
    title: 'Behavioral insights',
    desc: 'Understand patterns over time, not just individual sites. AI surfaces meaningful shifts in online activity.',
  },
  {
    icon: Moon,
    title: 'Late-night detection',
    desc: 'Know when browsing happens at unusual hours — one of the most reliable early warning signs.',
  },
  {
    icon: ShieldAlert,
    title: 'Scam & phishing alerts',
    desc: 'Real-time warnings when family members visit known scam or phishing domains.',
  },
  {
    icon: TrendingUp,
    title: 'Platform escalation tracking',
    desc: 'Detect when content consumption is escalating in intensity or risk across platforms over time.',
  },
]

export default function FamilyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-4 pt-20 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-500">
            For Families
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Stay informed,{' '}
            <span className="text-cyan-500">not intrusive.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
            Viewline gives parents behavioral insights into their family's online activity
            — without blocking access, installing spyware, or breaking trust. Understand
            what's happening so you can have better conversations.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`${APP_URL}/signup?type=family`}
              className="w-full rounded-xl bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-cyan-600 sm:w-auto"
            >
              Start free trial
            </a>
            <Link
              href="/family/pricing"
              className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900"
            >
              See pricing <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-y border-gray-100 bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Blocking doesn't solve the problem.
          </h2>
          <p className="mt-4 text-gray-500">
            Kids find workarounds. Blocking erodes trust. And you're still left wondering
            what's really going on. Viewline takes a different approach: give parents
            visibility into patterns, not pages — so you can respond with context, not
            just consequences.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">How it works</h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="text-5xl font-bold text-gray-100">{step.number}</span>
                <div className="-mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Built to inform, not alarm
            </h2>
            <p className="mt-4 text-gray-500">
              Every feature is designed to give you context, not just data.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-500">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl bg-cyan-50 p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Protect your family today</h2>
          <p className="mt-3 text-gray-500">
            Start free. No credit card required. Cancel any time.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/family/pricing"
              className="rounded-xl bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-600"
            >
              View pricing
            </Link>
            <a
              href={`${APP_URL}/signup?type=family`}
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Start free — no credit card required
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
