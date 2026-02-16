import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="hover:text-white transition-colors">Consumer Line</Link></li>
              <li><Link href="/hotel-line" className="hover:text-white transition-colors">Hotel & Resort Line</Link></li>
              <li><Link href="/pilot-program" className="hover:text-white transition-colors">Pilot Program</Link></li>
              <li><Link href="/warranty" className="hover:text-white transition-colors">Warranty</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/warranty" className="hover:text-white transition-colors">Delivery & Logistics</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+12462287378" className="hover:text-white transition-colors">
                  +1 (246) 228-REST
                </a>
              </li>
              <li>
                <a href="mailto:deliversleep@comfortsleepbarbados.com" className="hover:text-white transition-colors">
                  deliversleep@comfortsleepbarbados.com
                </a>
              </li>
              <li className="text-sm">
                Lot 18, Warehouse #1<br />
                Lears Business Park, Lears Road<br />
                St. Michael, Barbados
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Comfort Sleep Barbados. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
