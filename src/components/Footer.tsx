import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div>
            <span className="text-lg font-bold text-gray-900">Viewline</span>
            <p className="mt-1 text-sm text-gray-500">Digital security, simplified.</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Solutions
              </h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href="/business" className="text-sm text-gray-500 hover:text-gray-900">
                    For Business
                  </Link>
                </li>
                <li>
                  <Link href="/family" className="text-sm text-gray-500 hover:text-gray-900">
                    For Families
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Pricing
              </h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="/business/pricing"
                    className="text-sm text-gray-500 hover:text-gray-900"
                  >
                    Business Plans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/family/pricing"
                    className="text-sm text-gray-500 hover:text-gray-900"
                  >
                    Family Plans
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Viewline. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
