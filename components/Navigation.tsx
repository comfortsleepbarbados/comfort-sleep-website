import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Comfort Sleep Barbados
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
              Products
            </Link>
            <Link href="/hotel-line" className="text-gray-700 hover:text-blue-600 transition-colors">
              Hotel Line
            </Link>
            <Link href="/pilot-program" className="text-gray-700 hover:text-blue-600 transition-colors">
              Pilot Program
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/warranty" className="text-gray-700 hover:text-blue-600 transition-colors">
              Warranty & Delivery
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <a href="tel:+12462287378" className="hidden lg:flex items-center text-gray-900 font-semibold hover:text-blue-600 transition-colors">
              +1 (246) 228-REST
            </a>
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition-colors font-semibold">
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
