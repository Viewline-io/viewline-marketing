'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? ''

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header-bg ml-10 mr-10 rounded-b-lg sticky top-0 z-50 border-b border-gray-100 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          Viewline
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/business"
            className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-900"
          >
            For Business
          </Link>
          <Link
            href="/family"
            className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-900"
          >
            For Families
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`${APP_URL}/login`}
            className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-900"
          >
            Sign In
          </a>
          <a
            href={`${APP_URL}/signup`}
            className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-cyan-600"
          >
            Get Started
          </a>
        </div>

        <button
          className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            <Link
              href="/business"
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              For Business
            </Link>
            <Link
              href="/family"
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              For Families
            </Link>
            <a
              href={`${APP_URL}/login`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              Sign In
            </a>
            <a
              href={`${APP_URL}/signup`}
              className="mt-2 rounded-lg bg-cyan-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-cyan-600"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
