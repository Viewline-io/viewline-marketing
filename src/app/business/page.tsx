import Link from 'next/link'
import type { Metadata } from 'next'
import { Monitor, AlertCircle, MailOpen, Users, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Business Security — Viewline',
  description:
    "Network monitoring for small businesses without an IT department. See what's happening on your network and get notified when it matters.",
  openGraph: {
    title: 'Viewline for Business — Network Security Without the IT Team',
    description:
      "See exactly what's happening on your network. Get notified when it matters. No IT expertise required.",
  },
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? ''

const steps = [
  {
    number: '01',
    title: 'Install the Chrome extension',
    desc: 'Team members install the Viewline extension in seconds. No configuration, no IT support required.',
  },
  {
    number: '02',
    title: 'Activity is monitored in real time',
    desc: "Viewline watches for visits to high-risk domains across your team. When something looks off, users see a warning — not a block.",
  },
  {
    number: '03',
    title: 'You get notified on your terms',
    desc: 'Choose real-time alerts, daily summaries, or weekly digests. Stay informed without being overwhelmed.',
  },
]

const features = [
  {
    icon: Monitor,
    title: 'Real-time monitoring',
    desc: 'See domain-level activity across all connected devices as it happens.',
  },
  {
    icon: AlertCircle,
    title: 'Warning interstitials',
    desc: 'Employees see a clear warning when visiting risky sites — informed, not blocked.',
  },
  {
    icon: MailOpen,
    title: 'Digest reports',
    desc: 'Weekly or daily email summaries of network activity. Signal, not noise.',
  },
  {
    icon: Users,
    title: 'Role-based access',
    desc: 'Owners, admins, and members each see the right level of detail.',
  },
]

export default function BusinessPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-tile px-4 pt-20 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-500">
            For Business
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Protect your network —{' '}
            <span className="text-cyan-500">without an IT department.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
            Your employees are online all day. Viewline gives you real-time visibility
            into your network activity — so you can stay one step ahead of threats,
            without blocking anyone or hiring a security team.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`${APP_URL}/signup?type=business`}
              className="w-full rounded-xl bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-sm transition-colors hover:bg-cyan-600 sm:w-auto"
            >
              Start free trial
            </a>
            <Link
              href="/business/pricing"
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
            One click is all it takes.
          </h2>
          <p className="mt-4 text-gray-500">
            A phishing link. A compromised download. A lookalike domain. Your employees
            aren't careless — they're targeted. Without visibility into your network,
            you won't know until the damage is done.
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
              Everything you need
            </h2>
            <p className="mt-4 text-gray-500">
              Built for owners who want security without complexity.
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
          <h2 className="text-2xl font-bold text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-500">
            No per-seat surprises. No hidden fees. Start free and scale as you grow.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/business/pricing"
              className="rounded-xl bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-600"
            >
              View pricing
            </Link>
            <a
              href={`${APP_URL}/signup?type=business`}
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Start free — no credit card required
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
