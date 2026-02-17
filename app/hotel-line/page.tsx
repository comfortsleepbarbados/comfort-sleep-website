'use client';

import Link from 'next/link';
import { Check, Shield, Award, TrendingUp, Clock, Building2, Truck, Users } from 'lucide-react';
import ProductGallery from '@/components/ProductGallery';

const hotelProducts = [
  {
    id: 'hotel-comfort',
    name: 'Hotel Comfort',
    tier: 'Entry Level',
    description: 'Reliable comfort for budget-conscious properties',
    features: [
      'High-density support foam',
      'Durable quilted cover',
      'Anti-microbial protection',
      'Humidity-resistant construction',
      'Edge reinforcement',
      '5-year commercial warranty',
      'High turnover tested'
    ],
    specs: {
      density: '1.8 lb/ft³',
      height: '13 inches',
      firmness: 'Medium-Firm'
    },
    idealFor: 'Guesthouses, Budget Hotels, Vacation Rentals',
    gallery: {
      mainImage: {
        large: 'https://picsum.photos/id/1018/1200/900',
        thumb: 'https://picsum.photos/id/1018/800/600',
        alt: 'Hotel Comfort - Main View',
        description: 'Hotel Comfort - Soft, inviting feel perfect for leisure-focused resorts'
      },
      thumbnails: [
        {
          large: 'https://picsum.photos/id/1025/1200/900',
          thumb: 'https://picsum.photos/id/1025/400/300',
          alt: 'Hotel Comfort - Detail',
          description: 'Close-up of plush comfort layers and fabric detail'
        },
        {
          large: 'https://picsum.photos/id/1019/1200/900',
          thumb: 'https://picsum.photos/id/1019/400/300',
          alt: 'Hotel Comfort - Side View',
          description: 'Side view showing pocketed coil construction'
        }
      ]
    }
  },
  {
    id: 'hotel-elite',
    name: 'Hotel Elite',
    tier: 'Premium',
    description: 'Superior comfort for upscale hospitality',
    features: [
      'Multi-layer comfort system',
      'Humidity-resistant construction',
      'Double sided pillow-top',
      'Reinforced edge support',
      '7-year commercial warranty',
      'Marriott-approved quality'
    ],
    specs: {
      density: '2.2 lb/ft³',
      height: '15 inches',
      firmness: 'Medium'
    },
    idealFor: 'Boutique Hotels, Resort Properties, 4-Star Establishments',
    gallery: {
      mainImage: {
        large: 'https://picsum.photos/id/1026/1200/900',
        thumb: 'https://picsum.photos/id/1026/800/600',
        alt: 'Hotel Elite - Main View',
        description: 'Hotel Elite - Premium pillow-top for upscale accommodations'
      },
      thumbnails: [
        {
          large: 'https://picsum.photos/id/1027/1200/900',
          thumb: 'https://picsum.photos/id/1027/400/300',
          alt: 'Hotel Elite - Detail',
          description: 'Multi-layer pillow top construction detail'
        },
        {
          large: 'https://picsum.photos/id/1028/1200/900',
          thumb: 'https://picsum.photos/id/1028/400/300',
          alt: 'Hotel Elite - Side View',
          description: 'Side profile showing reinforced coil system'
        }
      ]
    }
  },
  {
    id: 'hotel-luxury',
    name: 'Hotel Luxury',
    tier: 'Ultra-Premium',
    description: 'Exceptional comfort for luxury resorts',
    features: [
      'Multi-zone support system',
      'Advanced humidity-resistant technology',
      'Double sided pillow-top',
      'Lifetime edge guarantee',
      '10-year commercial warranty',
      '5-star resort standard'
    ],
    specs: {
      density: '2.5 lb/ft³',
      height: '17 inches',
      firmness: 'Plush Medium'
    },
    idealFor: 'Luxury Resorts, 5-Star Hotels, Premium Villas',
    gallery: {
      mainImage: {
        large: 'https://picsum.photos/id/1031/1200/900',
        thumb: 'https://picsum.photos/id/1031/800/600',
        alt: 'Hotel Luxury - Main View',
        description: 'Hotel Luxury - Firm back support for optimal spinal alignment'
      },
      thumbnails: [
        {
          large: 'https://picsum.photos/id/1032/1200/900',
          thumb: 'https://picsum.photos/id/1032/400/300',
          alt: 'Hotel Luxury - Detail',
          description: 'Heavy-duty coil system for firm support'
        },
        {
          large: 'https://picsum.photos/id/1033/1200/900',
          thumb: 'https://picsum.photos/id/1033/400/300',
          alt: 'Hotel Luxury - Side View',
          description: 'Commercial-grade quilting and construction'
        }
      ]
    }
  }
];

const caricomBenefits = [
  {
    title: 'Zero Import Duties',
    description: 'Save 20-35% compared to international suppliers',
    icon: TrendingUp
  },
  {
    title: 'Fast Delivery',
    description: '2-3 weeks for bulk orders across the Caribbean',
    icon: Clock
  },
  {
    title: 'Regional Support',
    description: 'Caribbean-based warranty service and replacements',
    icon: Building2
  },
  {
    title: 'Flexible Terms',
    description: 'Payment plans available for qualified properties',
    icon: Users
  }
];

export default function HotelLine() {
  return (
    <div className="pt-20">
      <section className="relative h-[70vh] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hotel Elite Line
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Climate-engineered mattresses for Caribbean hospitality. Built for high turnover, tropical humidity, and five-star guest expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#25278C] hover:bg-[#1a1c66] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Request Bulk Quote
              </Link>
              <Link
                href="/pilot-program"
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Try Our Pilot Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The CARICOM Advantage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manufactured in Guyana, distributed from Barbados. Premium quality at regional prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caricomBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-[#25278C]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#25278C]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Tier</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three quality levels to match your property standards and budget
            </p>
          </div>

          <div className="space-y-16">
            {hotelProducts.map((product, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="mb-4">
                    <div className="inline-block bg-[#25278C] text-white px-4 py-2 rounded-lg font-semibold mb-4">
                      {product.tier}
                    </div>
                  </div>
                  <ProductGallery
                    productId={product.id}
                    productName={product.name}
                    mainImage={product.gallery.mainImage}
                    thumbnails={product.gallery.thumbnails}
                  />
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-4xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-xl text-gray-600 mb-6">{product.description}</p>

                  <div className="bg-white rounded-lg p-6 shadow-md mb-6">
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

                  <div className="bg-white rounded-lg p-6 shadow-md mb-6">
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
                    <p className="text-sm font-semibold text-gray-700 mb-2">Ideal For:</p>
                    <p className="text-gray-600">{product.idealFor}</p>
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hotel Line Comparison</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare features, specifications, and pricing across our three hotel mattress tiers
            </p>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-[#25278C] to-[#1a1c66] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">
                    <div className="text-lg">Hotel Comfort</div>
                    <div className="text-sm font-normal text-gray-200">Entry Level</div>
                  </th>
                  <th className="px-6 py-4 text-center font-semibold bg-white/10">
                    <div className="text-lg">Hotel Elite</div>
                    <div className="text-sm font-normal text-gray-200">Premium</div>
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    <div className="text-lg">Hotel Luxury</div>
                    <div className="text-sm font-normal text-gray-200">Ultra-Premium</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Mattress Height</td>
                  <td className="px-6 py-4 text-center text-gray-700">13 inches</td>
                  <td className="px-6 py-4 text-center text-gray-900 bg-blue-50">15 inches</td>
                  <td className="px-6 py-4 text-center text-gray-700">17 inches</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Foam Density</td>
                  <td className="px-6 py-4 text-center text-gray-700">1.8 lb/ft³</td>
                  <td className="px-6 py-4 text-center text-gray-900 bg-blue-50">2.2 lb/ft³</td>
                  <td className="px-6 py-4 text-center text-gray-700">2.5 lb/ft³</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Firmness Level</td>
                  <td className="px-6 py-4 text-center text-gray-700">Medium-Firm</td>
                  <td className="px-6 py-4 text-center text-gray-900 bg-blue-50">Medium</td>
                  <td className="px-6 py-4 text-center text-gray-700">Plush Medium</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Cooling Technology</td>
                  <td className="px-6 py-4 text-center text-gray-700">Standard</td>
                  <td className="px-6 py-4 text-center text-gray-900 bg-blue-50">Advanced</td>
                  <td className="px-6 py-4 text-center text-gray-700">Maximum Gel Infusion</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Edge Support</td>
                  <td className="px-6 py-4 text-center text-gray-700">Reinforced</td>
                  <td className="px-6 py-4 text-center text-gray-900 bg-blue-50">Reinforced</td>
                  <td className="px-6 py-4 text-center text-gray-700">Lifetime Guarantee</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Cover Quality</td>
                  <td className="px-6 py-4 text-center text-gray-700">Durable Quilted</td>
                  <td className="px-6 py-4 text-center text-gray-900 bg-blue-50">Double Sided Pillow-Top</td>
                  <td className="px-6 py-4 text-center text-gray-700">Double Sided Pillow-Top</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Antimicrobial Protection</td>
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
                <tr className="hover:bg-gray-50 transition-colors">
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
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">High Turnover Tested</td>
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
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Commercial Warranty</td>
                  <td className="px-6 py-4 text-center text-gray-700">5 Years</td>
                  <td className="px-6 py-4 text-center text-gray-900 bg-blue-50 font-semibold">7 Years</td>
                  <td className="px-6 py-4 text-center text-gray-700 font-semibold">10 Years</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Expected Lifespan</td>
                  <td className="px-6 py-4 text-center text-gray-700">5-7 years</td>
                  <td className="px-6 py-4 text-center text-gray-900 bg-blue-50">7-10 years</td>
                  <td className="px-6 py-4 text-center text-gray-700">10+ years</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Ideal For</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-700">Guesthouses, Budget Hotels, Vacation Rentals</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900 bg-blue-50">Boutique Hotels, Resorts, 4-Star Properties</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-700">Luxury Resorts, 5-Star Hotels, Premium Villas</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4 text-center">
                    <Link
                      href="/contact"
                      className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-sm"
                    >
                      Get Quote
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-center bg-blue-50">
                    <Link
                      href="/contact"
                      className="inline-block bg-[#25278C] hover:bg-[#1a1c66] text-white px-6 py-2 rounded-lg font-semibold transition-colors text-sm"
                    >
                      Get Quote
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <Link
                      href="/contact"
                      className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-sm"
                    >
                      Get Quote
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Not sure which tier is right for your property?</span>
            </p>
            <p className="text-gray-600 mb-4">
              Try our 90-day Pilot Program to test mattresses in select rooms before committing to a full order.
            </p>
            <Link
              href="/pilot-program"
              className="inline-block bg-[#25278C] hover:bg-[#1a1c66] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn About Pilot Program
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Caribbean Climate Challenges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our mattresses are specifically engineered to withstand Caribbean conditions
            </p>
          </div>

          <div className="overflow-x-auto mb-16">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-[#25278C] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Climate Challenge</th>
                  <th className="px-6 py-4 text-left font-semibold">Standard Mattresses</th>
                  <th className="px-6 py-4 text-left font-semibold">Comfort Sleep Hotel Line</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">High Humidity (75-95%)</div>
                    <div className="text-sm text-gray-600">Year-round moisture exposure</div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Foam degradation within 18-24 months, mold growth in layers, odor development
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900">Moisture-resistant foam maintains integrity 5+ years, antimicrobial protection</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">Tropical Heat (28-32°C)</div>
                    <div className="text-sm text-gray-600">Consistent warm temperatures</div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Heat retention causes guest discomfort, accelerated material breakdown
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900">Advanced cooling gel technology, enhanced airflow channels keep guests comfortable</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">Salt Air Exposure</div>
                    <div className="text-sm text-gray-600">Coastal property corrosion</div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Steel springs rust within 2-3 years, fabric degradation, structural failure
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900">Corrosion-resistant coated springs, marine-grade fabrics rated for coastal use</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">High Guest Turnover</div>
                    <div className="text-sm text-gray-600">300+ nights per year usage</div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Visible sagging by year 2, edge collapse, uneven support surfaces
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900">High-density foam tested to 90%+ occupancy, reinforced edge support maintains shape</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">Dust Mites & Allergens</div>
                    <div className="text-sm text-gray-600">Tropical breeding conditions</div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Rapid dust mite colonization, allergen accumulation, guest complaints
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900">Hypoallergenic materials, antimicrobial treatment, dust mite resistant barriers</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">Commercial Laundering</div>
                    <div className="text-sm text-gray-600">Frequent high-temp washing</div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Cover shrinkage, zipper failure, fabric wear after 100+ washes
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900">Pre-shrunk commercial-grade fabrics, industrial zippers, stain-resistant treatments</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Engineered for Caribbean Conditions</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-[#25278C] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Humidity Resistance</h4>
                    <p className="text-gray-600">Specialized foam composition prevents mold and maintains structure in 80%+ humidity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-[#25278C] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">High Turnover Durability</h4>
                    <p className="text-gray-600">Tested for 90%+ occupancy rates with guest weights up to 300 lbs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-[#25278C] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Heat Dissipation</h4>
                    <p className="text-gray-600">Enhanced airflow design keeps guests comfortable in tropical temperatures</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-[#25278C] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Easy Maintenance</h4>
                    <p className="text-gray-600">Removable covers and stain-resistant fabrics for housekeeping efficiency</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Luxury hotel room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#25278C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Trusted By Leading Caribbean Brands</h2>
            <p className="text-xl text-gray-200">250+ properties across 12 Caribbean islands</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15,000+</div>
                <div className="text-gray-200 text-sm">Mattresses Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">250+</div>
                <div className="text-gray-200 text-sm">Properties Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-gray-200 text-sm">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">7 Years</div>
                <div className="text-gray-200 text-sm">Avg. Warranty</div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-lg italic mb-4">
                "We replaced all 120 rooms with Comfort Sleep's Hotel Elite line three years ago. The quality remains exceptional, guest feedback has been overwhelmingly positive, and the CARICOM pricing made the investment possible. Best decision we've made for guest experience."
              </p>
              <div className="flex items-center">
                <Building2 className="w-12 h-12 text-white/60 mr-4" />
                <div>
                  <div className="font-semibold">Michael Richards</div>
                  <div className="text-gray-300 text-sm">General Manager, Crane Resort, Barbados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <Truck className="w-12 h-12 text-[#25278C] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bulk Pricing</h3>
              <p className="text-gray-600 mb-6">
                Volume discounts start at 20 units. Larger orders qualify for enhanced terms and expedited delivery.
              </p>
              <Link
                href="/contact"
                className="text-[#25278C] font-semibold hover:underline"
              >
                Get Volume Quote →
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <Shield className="w-12 h-12 text-[#25278C] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Warranty</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive coverage designed for hospitality. Transferable between property owners.
              </p>
              <Link
                href="/warranty"
                className="text-[#25278C] font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <Award className="w-12 h-12 text-[#25278C] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pilot Program</h3>
              <p className="text-gray-600 mb-6">
                Test our Hotel Line in select rooms for 90 days before committing to a full property order.
              </p>
              <Link
                href="/pilot-program"
                className="text-[#25278C] font-semibold hover:underline"
              >
                Apply Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#25278C] to-[#1a1c66] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Guest Experience?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Schedule a consultation with our hospitality team. We'll help you choose the right tier and quantities for your property.
          </p>
          <Link
            href="/contact"
            className="bg-white hover:bg-gray-100 text-[#25278C] px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
