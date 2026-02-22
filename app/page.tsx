import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Award, Truck, Clock, Check, Star, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Comfort Sleep Barbados | Premium Hospitality Mattresses',
  description: "Caribbean's premier supplier of climate-engineered hospitality mattresses. EPA & ISO certified, trusted by luxury resorts across the Caribbean.",
};

const stats = [
  { value: '15,000+', label: 'Mattresses Delivered' },
  { value: '250+', label: 'Properties Served' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '12', label: 'Caribbean Islands' },
];

const features = [
  {
    icon: Shield,
    title: 'Climate-Engineered',
    description: 'Specially designed to withstand Caribbean humidity, salt air, and tropical heat for lasting comfort.',
  },
  {
    icon: Award,
    title: 'EPA & ISO Certified',
    description: 'Meeting international quality standards with certifications that matter to premium properties.',
  },
  {
    icon: Truck,
    title: 'CARICOM Advantage',
    description: 'Zero import duties across CARICOM nations. Save 20-35% compared to international suppliers.',
  },
  {
    icon: Clock,
    title: 'Fast Regional Delivery',
    description: '2-3 weeks for bulk orders across the Caribbean with local warehouse support.',
  },
];

const products = [
  {
    name: 'Hotel Comfort',
    tier: 'Entry Level',
    description: 'Reliable comfort for budget-conscious properties with 5-year commercial warranty.',
    href: '/hotel-line',
    image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Hotel Elite',
    tier: 'Premium',
    description: 'Superior comfort for upscale hospitality with Marriott-approved quality and 7-year warranty.',
    href: '/hotel-line',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Hotel Luxury',
    tier: 'Ultra-Premium',
    description: 'Exceptional comfort for luxury resorts with 10-year commercial warranty and 5-star standards.',
    href: '/hotel-line',
    image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const testimonials = [
  {
    quote: "We replaced all 120 rooms with Comfort Sleep's Hotel Elite line. The quality remains exceptional and guest feedback has been overwhelmingly positive.",
    name: 'Michael Richards',
    title: 'General Manager, Crane Resort, Barbados',
  },
  {
    quote: "The CARICOM pricing made the investment possible. Best decision we've made for guest experience in five years of operation.",
    name: 'Sandra Thompson',
    title: 'Director of Operations, Sandy Lane, Barbados',
  },
];

export default function Home() {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-24">
          <div className="max-w-3xl">
            <div className="flex items-center mb-6">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 ml-1" />
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 ml-1" />
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 ml-1" />
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 ml-1" />
              <span className="ml-3 text-gray-200 text-sm">Trusted by 250+ Caribbean Properties</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Caribbean's Premier{' '}
              <span className="text-blue-300">Hospitality</span>{' '}
              Mattresses
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10">
              Climate-engineered for the tropics. CARICOM-priced for the region. Built for 5-star guest experiences that last.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#25278C] hover:bg-[#1a1c66] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Request a Quote
              </Link>
              <Link
                href="/hotel-line"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                View Hotel Line
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#25278C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Caribbean Properties Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manufactured in Guyana, distributed from Barbados. Regional expertise with international quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-[#25278C]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#25278C]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hotel Line Collection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three tiers to match your property standards and budget requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-[#25278C] text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    {product.tier}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <Link
                    href={product.href}
                    className="text-[#25278C] font-semibold hover:underline"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/hotel-line"
              className="bg-[#25278C] hover:bg-[#1a1c66] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
            >
              Compare All Hotel Tiers
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Engineered for Caribbean Conditions</h2>
              <p className="text-xl text-gray-600 mb-8">
                Standard mattresses fail in the Caribbean. High humidity causes foam degradation, salt air corrodes springs, and tropical heat traps moisture. Our mattresses are built specifically for these challenges.
              </p>
              <div className="space-y-4">
                {[
                  'Humidity-resistant foam maintains integrity for 5+ years',
                  'Antimicrobial protection prevents mold in tropical conditions',
                  'Advanced cooling gel for tropical temperature comfort',
                  'Marine-grade fabrics rated for coastal salt air exposure',
                  'High-density construction tested for 90%+ occupancy rates',
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-[#25278C] mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/hotel-line"
                  className="bg-[#25278C] hover:bg-[#1a1c66] text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
                >
                  See Full Comparison
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Luxury hotel room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Hotel Managers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading hospitality brands across the Caribbean
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Building2 className="w-10 h-10 text-gray-400 mr-4" />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Try Before You Buy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our 90-day Pilot Program lets you test mattresses in select rooms before committing to a full property order.
            </p>
          </div>

          <div className="bg-[#25278C]/5 rounded-2xl p-12 max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {[
                { step: '1', title: 'Apply', desc: 'Submit your property details and room count' },
                { step: '2', title: 'Test', desc: 'Install mattresses in 2-5 selected rooms for 90 days' },
                { step: '3', title: 'Convert', desc: 'Apply pilot cost toward full property order' },
              ].map((item, index) => (
                <div key={index}>
                  <div className="bg-[#25278C] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link
              href="/pilot-program"
              className="bg-[#25278C] hover:bg-[#1a1c66] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
            >
              Learn About the Pilot Program
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#25278C] to-[#1a1c66] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Guest Experience?</h2>
          <p className="text-xl mb-10 text-gray-200">
            Get a custom quote tailored to your property's size, tier requirements, and delivery timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-[#25278C] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-[#25278C] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
