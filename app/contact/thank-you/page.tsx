import Link from 'next/link';
import { CheckCircle, Home, Mail, Phone } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | Comfort Sleep',
  description: 'Thank you for contacting Comfort Sleep. We will respond to your inquiry within 24 hours.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYou() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Thank You for Your Inquiry!
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              We've received your quote request and a member of our hospitality team will contact you within 24 hours.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                What Happens Next?
              </h2>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#25278C] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    1
                  </span>
                  <span className="text-gray-600">
                    Our team will review your request and prepare customized recommendations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#25278C] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    2
                  </span>
                  <span className="text-gray-600">
                    A hospitality specialist will contact you via email or phone
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#25278C] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    3
                  </span>
                  <span className="text-gray-600">
                    You'll receive a detailed quote with pricing, delivery timeline, and options
                  </span>
                </li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-[#25278C] hover:bg-[#1a1c66] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <Home className="w-5 h-5 mr-2" />
                Return to Home
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center border-2 border-[#25278C] text-[#25278C] hover:bg-[#25278C] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Our Products
              </Link>
            </div>

            <div className="border-t pt-8">
              <p className="text-gray-600 mb-4">
                Need immediate assistance?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a
                  href="tel:+12462287378"
                  className="inline-flex items-center justify-center text-[#25278C] hover:underline"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (246) 228-7378
                </a>
                <a
                  href="mailto:info@comfortsleepdistribution.com"
                  className="inline-flex items-center justify-center text-[#25278C] hover:underline"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@comfortsleepdistribution.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
