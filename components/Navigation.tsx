import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-2xl font-bold text-slate-900">
              Comfort Sleep Barbados
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <Link href="/" className="text-slate-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-slate-700 hover:text-blue-600 transition-colors">
              Products
            </Link>
            <Link href="/hotel-line" className="text-slate-700 hover:text-blue-600 transition-colors">
              Hotel Line
            </Link>
            <Link href="/pilot-program" className="text-slate-700 hover:text-blue-600 transition-colors">
              Pilot Program
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-slate-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/warranty" className="text-slate-700 hover:text-blue-600 transition-colors">
              Warranty & Delivery
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <a href="tel:+12462287378" className="hidden md:flex items-center text-blue-600 font-semibold">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 (246) 228-REST
            </a>
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
