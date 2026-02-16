import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold mb-4">Comfort Sleep Barbados</div>
            <p className="text-slate-400">Premium mattresses engineered for Caribbean hospitality.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/hotel-line" className="hover:text-white transition-colors">Hotel Elite Line</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Commercial Series</Link></li>
              <li><Link href="/pilot-program" className="hover:text-white transition-colors">Bulk Ordering</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/warranty" className="hover:text-white transition-colors">Delivery & Logistics</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Barbados</li>
              <li>+1 (246) 228-REST</li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Comfort Sleep Distribution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
