'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

export default function NavigationClient() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Hotel Line', href: '/hotel-line' },
    { label: 'Pilot Program', href: '/pilot-program' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Warranty & Delivery', href: '/warranty' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center" aria-label="Comfort Sleep Barbados Home">
            <img
              src="https://www.comfortsleepbarbados.com/cdn/shop/files/Comfort_Sleep_Barbados_Logo-05.png"
              alt="Comfort Sleep Barbados"
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-[#25278C] border-b-2 border-[#25278C]'
                    : 'text-gray-700 hover:text-[#25278C]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+12462287378" className="flex items-center text-sm text-gray-600 hover:text-[#25278C]" aria-label="Call us at +1 (246) 228-REST">
              <Phone className="w-4 h-4 mr-1" />
              +1 (246) 228-REST
            </a>
            <Link
              href="/contact"
              className="bg-[#25278C] text-white px-6 py-2 rounded-md hover:bg-[#1a1c66] transition-colors"
            >
              Request Quote
            </Link>
          </div>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`block w-full text-left px-4 py-2 rounded-md ${
                  pathname === link.href
                    ? 'bg-[#25278C] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="block w-full bg-[#25278C] text-white px-4 py-3 rounded-md hover:bg-[#1a1c66] transition-colors text-center"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
