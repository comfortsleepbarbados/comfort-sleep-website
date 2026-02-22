import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Shield, Star, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Consumer Products',
  description: 'Premium consumer mattresses from Comfort Sleep Barbados. Climate-engineered for Caribbean living with 5-10 year warranties.',
};

const consumerProducts = [
  {
    name: 'Comfort Night Magic',
    tier: 'Essential',
    description: 'Dependable comfort for everyday sleep with proven durability for Caribbean conditions.',
    features: [
      'High-density support foam',
      'Quilted comfort layer',
      'Antimicrobial protection',
      'Humidity-resistant construction',
      'Edge reinforcement',
      '5-year residential warranty',
    ],
    specs: {
      density: '1.8 lb/ft³',
      height: '10 inches',
      firmness: 'Medium-Firm',
    },
    sizes: ['Single', 'Double', 'Queen', 'King'],
    image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Comfort Custom Luxury',
    tier: 'Premium',
    description: 'Multi-layer comfort system with advanced cooling for the ultimate residential sleep experience.',
    features: [
      'Multi-layer comfort system',
      'Cooling gel infusion',
      'Pillow-top construction',
      'Reinforced edge support',
      'Motion isolation',
      '7-year residential warranty',
    ],
    specs: {
      density: '2.2 lb/ft³',
      height: '13 inches',
      firmness: 'Medium',
    },
    sizes: ['Single', 'Double', 'Queen', 'King', 'Super King'],
    image: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Comfort Dreamer Back Support',
    tier: 'Orthopedic',
    description: 'Clinically designed spinal support with premium materials for health-conscious sleepers.',
    features: [
      'Orthopedic support zones',
      'Advanced pressure relief',
      'Cooling technology',
      'Hypoallergenic materials',
      'Transferable once warranty',
      '10-year residential warranty',
    ],
    specs: {
      density: '2.5 lb/ft³',
      height: '12 inches',
      firmness: 'Medium-Firm',
    },
    sizes: ['Single', 'Double', 'Queen', 'King', 'Super King'],
    image: 'https://images.pexels.com/photos/6186812/pexels-photo-6186812.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const whyChoose = [
  {
    icon: Shield,
    title: 'Caribbean-Built',
    description: 'Designed specifically for tropical climate conditions — humidity resistance built in from day one.',
  },
  {
    icon: Award,
    title: 'EPA & ISO Certified',
    description: 'Meeting international quality and environmental standards you can trust.',
  },
  {
    icon: Star,
    title: 'Industry-Leading Warranty',
    description: 'Up to 10 years of comprehensive coverage on residential products.',
  },
  {
    icon: Check,
    title: 'Local Support',
    description: 'Warranty claims handled locally — no shipping overseas, no long waits.',
  },
];

export default function Products() {
  return (
    <div className="pt-20">
      <section className="relative h-[60vh] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Consumer Products</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            Premium mattresses crafted for Caribbean living. Climate-engineered comfort for your home.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#25278C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index}>
                  <Icon className="w-8 h-8 mx-auto mb-3" />
                  <div className="font-semibold text-lg mb-1">{item.title}</div>
                  <div className="text-gray-200 text-sm">{item.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Consumer Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three collections to match your comfort preferences and budget
            </p>
          </div>

          <div className="space-y-20">
            {consumerProducts.map((product, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? '' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#25278C] text-white px-4 py-2 rounded-lg font-semibold">
                      {product.tier}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-4xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-xl text-gray-600 mb-6">{product.description}</p>

                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Shield className="w-5 h-5 text-[#25278C] mr-2" />
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-[#25278C] mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Specifications</h4>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500 mb-1">Density</p>
                        <p className="font-semibold text-gray-900">{product.specs.density}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Height</p>
                        <p className="font-semibold text-gray-900">{product.specs.height}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">Firmness</p>
                        <p className="font-semibold text-gray-900">{product.specs.firmness}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Available Sizes:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size, idx) => (
                        <span
                          key={idx}
                          className="bg-[#25278C]/10 text-[#25278C] text-sm px-3 py-1 rounded-lg font-medium"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="bg-[#25278C] hover:bg-[#1a1c66] text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
                  >
                    Request Quote for {product.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Consumer Product Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the right mattress for your needs and budget
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-[#25278C] to-[#1a1c66] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">
                    <div className="text-lg">Night Magic</div>
                    <div className="text-sm font-normal text-gray-200">Essential</div>
                  </th>
                  <th className="px-6 py-4 text-center font-semibold bg-white/10">
                    <div className="text-lg">Custom Luxury</div>
                    <div className="text-sm font-normal text-gray-200">Premium</div>
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    <div className="text-lg">Back Support</div>
                    <div className="text-sm font-normal text-gray-200">Orthopedic</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Mattress Height</td>
                  <td className="px-6 py-4 text-center text-gray-700">10 inches</td>
                  <td className="px-6 py-4 text-center text-gray-900 bg-blue-50">13 inches</td>
                  <td className="px-6 py-4 text-center text-gray-700">12 inches</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Cooling Technology</td>
                  <td className="px-6 py-4 text-center text-gray-700">Standard</td>
                  <td className="px-6 py-4 text-center text-gray-900 bg-blue-50">Gel Infusion</td>
                  <td className="px-6 py-4 text-center text-gray-700">Advanced</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Antimicrobial</td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Humidity Resistance</td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Check className="w-5 h-5 text-green-600 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Warranty</td>
                  <td className="px-6 py-4 text-center text-gray-700">5 Years</td>
                  <td className="px-6 py-4 text-center text-gray-900 bg-blue-50 font-semibold">7 Years</td>
                  <td className="px-6 py-4 text-center text-gray-700 font-semibold">10 Years</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 text-center">
                    <Link href="/contact" className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-sm">
                      Get Quote
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    <Link href="/contact" className="inline-block bg-[#25278C] hover:bg-[#1a1c66] text-white px-6 py-2 rounded-lg font-semibold transition-colors text-sm">
                      Get Quote
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Link href="/contact" className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-sm">
                      Get Quote
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#25278C] to-[#1a1c66] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Sleep Better?</h2>
          <p className="text-xl mb-10 text-gray-200">
            Visit our showroom or request a quote. Our team will help you find the perfect mattress for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-[#25278C] px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Request a Quote
            </Link>
            <Link href="/warranty" className="border-2 border-white text-white hover:bg-white hover:text-[#25278C] px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Warranty Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
