import Link from 'next/link';
import { CheckCircle, Home, Mail, Phone, Clock, ArrowRight, Building2, Shield, Award } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | Comfort Sleep Barbados',
  description: 'Thank you for contacting Comfort Sleep Barbados. We will respond to your inquiry within 24 hours.',
  robots: {
    index: false,
    follow: false,
  },
};

const nextSteps = [
  {
    step: '01',
    title: 'Request Reviewed',
    description: "Our hospitality team reviews your submission and prepares tailored recommendations within 2-4 business hours.",
    icon: Shield,
  },
  {
    step: '02',
    title: 'Personal Consultation',
    description: "A specialist contacts you by phone or email to discuss your property's specific requirements and timeline.",
    icon: Building2,
  },
  {
    step: '03',
    title: 'Custom Quote Delivered',
    description: "Receive a detailed quote with pricing, delivery schedule, warranty terms, and financing options if applicable.",
    icon: Award,
  },
];

const whileYouWait = [
  {
    label: 'Explore the Hotel Line',
    description: 'Compare our three hospitality tiers side-by-side.',
    href: '/hotel-line',
  },
  {
    label: 'Learn About the Pilot Program',
    description: 'Test mattresses in select rooms before committing to a full order.',
    href: '/pilot-program',
  },
  {
    label: 'Read Our Warranty Terms',
    description: 'Understand the coverage that protects your investment.',
    href: '/warranty',
  },
];

export default function ThankYou() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-flex mb-8">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center">
              <CheckCircle className="w-14 h-14 text-green-500" strokeWidth={1.5} />
            </div>
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-[#25278C] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
          </div>

          <div className="inline-block bg-green-50 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Submission Confirmed
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Thank You for Reaching Out
          </h1>

          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            We&apos;ve received your inquiry and saved it to our system. A member of our hospitality team will be in touch within{' '}
            <span className="font-semibold text-gray-900">24 business hours</span>.
          </p>

          <p className="text-gray-500 text-sm">
            Check your inbox — you may receive a confirmation email shortly.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What Happens Next</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here&apos;s exactly how we handle every inquiry from submission to quote delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nextSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 h-full">
                  <div className="flex items-center mb-5">
                    <div className="bg-[#25278C] text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="bg-[#25278C]/10 w-10 h-10 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#25278C]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">While You Wait</h2>
              <div className="space-y-4">
                {whileYouWait.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center justify-between bg-gray-50 hover:bg-[#25278C]/5 border border-gray-200 hover:border-[#25278C]/30 rounded-xl p-5 transition-all group"
                  >
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-[#25278C] transition-colors mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-gray-500 text-sm">{item.description}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#25278C] transition-colors flex-shrink-0 ml-4" />
                  </Link>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center bg-[#25278C] hover:bg-[#1a1c66] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center border-2 border-[#25278C] text-[#25278C] hover:bg-[#25278C] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  View All Products
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#25278C] text-white rounded-xl p-8">
                <h3 className="text-xl font-bold mb-2">Need an Urgent Response?</h3>
                <p className="text-gray-200 text-sm mb-6">
                  For time-sensitive projects or immediate assistance, reach our hospitality team directly.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+12462287378"
                    className="flex items-center bg-white/10 hover:bg-white/20 rounded-lg px-4 py-3 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm">Call 228-REST (7378)</div>
                      <div className="text-gray-300 text-xs">+1 (246) 228-7378</div>
                    </div>
                  </a>
                  <a
                    href="mailto:info@comfortsleepdistribution.com"
                    className="flex items-center bg-white/10 hover:bg-white/20 rounded-lg px-4 py-3 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm">Email Us Directly</div>
                      <div className="text-gray-300 text-xs">info@comfortsleepdistribution.com</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Clock className="w-5 h-5 text-[#25278C] mr-2" />
                  <h3 className="font-bold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-medium text-gray-900">9:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-gray-900">9:00 AM – 12:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">All times in Atlantic Standard Time (AST)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '24hr', label: 'Response Time' },
              { value: '250+', label: 'Properties Served' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '15+', label: 'Years in Business' },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-[#25278C] mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
