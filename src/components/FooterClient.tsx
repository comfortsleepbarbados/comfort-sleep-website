'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function FooterClient() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src="https://www.comfortsleepbarbados.com/cdn/shop/files/Comfort_Sleep_Barbados_Logo-05.png"
              alt="Comfort Sleep Barbados"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm mb-4">
              Premium hospitality mattresses manufactured in Guyana, distributed from Barbados across the Caribbean.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Consumer Line
                </Link>
              </li>
              <li>
                <Link href="/hotel-line" className="text-gray-400 hover:text-white transition-colors">
                  Hotel & Resort Line
                </Link>
              </li>
              <li>
                <Link href="/pilot-program" className="text-gray-400 hover:text-white transition-colors">
                  Pilot Program
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-gray-400 hover:text-white transition-colors">
                  Warranty Information
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-gray-400 hover:text-white transition-colors">
                  Delivery & Logistics
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Lot 18, Warehouse #1<br />
                  Lears Business Park<br />
                  Lears Road, St. Michael
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-gray-400" />
                <a href="tel:+12462287378" className="text-gray-400 hover:text-white transition-colors">
                  +1 (246) 228-REST
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-400" />
                <a href="mailto:info@comfortsleepdistribution.com" className="text-gray-400 hover:text-white transition-colors">
                  info@comfortsleepdistribution.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 Comfort Sleep Barbados. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
