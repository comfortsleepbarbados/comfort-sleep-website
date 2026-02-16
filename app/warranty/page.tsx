'use client';

import Link from 'next/link';
import { Shield, CheckCircle, FileText, Clock, MapPin, Truck, Phone, Mail } from 'lucide-react';

const consumerWarranty = [
  {
    product: 'Comfort Night Magic',
    duration: '5 Years',
    coverage: 'Full replacement for manufacturing defects, sagging >1.5 inches, structural failures',
    conditions: 'Proper foundation, no stains/damage, original purchaser'
  },
  {
    product: 'Comfort Custom Luxury',
    duration: '7 Years',
    coverage: 'Full replacement for manufacturing defects, sagging >1 inch, foam degradation, cooling system failure',
    conditions: 'Proper foundation, mattress protector required, original purchaser'
  },
  {
    product: 'Comfort Dreamer Back Support',
    duration: '10 Years',
    coverage: 'Full replacement for manufacturing defects, sagging >0.75 inches, any structural or material defects',
    conditions: 'Proper foundation, mattress protector required, transferable once'
  }
];

const hotelWarranty = [
  {
    product: 'Hotel Comfort',
    duration: '5 Years Commercial',
    coverage: 'Replacement for manufacturing defects, sagging >2 inches under commercial use',
    conditions: 'Institutional use only, proper foundation, no guest damage'
  },
  {
    product: 'Hotel Elite',
    duration: '7 Years Commercial',
    coverage: 'Replacement for manufacturing defects, sagging >1.5 inches, material failures under high-turnover use',
    conditions: 'Institutional use, mattress protectors, transferable between property owners'
  },
  {
    product: 'Hotel Luxury',
    duration: '10 Years Commercial',
    coverage: 'Comprehensive replacement for any manufacturing defects, sagging >1 inch, lifetime edge support guarantee',
    conditions: 'Institutional use, protectors required, fully transferable'
  }
];

const claimProcess = [
  {
    step: 1,
    title: 'Contact Support',
    description: 'Email or call with your purchase details and description of the issue',
    icon: Phone
  },
  {
    step: 2,
    title: 'Documentation',
    description: 'Provide photos, original receipt, and law label from mattress',
    icon: FileText
  },
  {
    step: 3,
    title: 'Review',
    description: 'Our team reviews your claim within 48-72 hours',
    icon: Clock
  },
  {
    step: 4,
    title: 'Resolution',
    description: 'Approved claims receive replacement delivery within 2-3 weeks',
    icon: CheckCircle
  }
];

const deliveryInfo = [
  {
    region: 'Barbados',
    timeline: '5-7 business days',
    cost: 'Free delivery on orders over BBD $500',
    notes: 'White glove service available'
  },
  {
    region: 'Eastern Caribbean (Antigua, St. Lucia, St. Vincent)',
    timeline: '10-14 business days',
    cost: 'Flat rate BBD $150 per mattress',
    notes: 'Bulk discounts available'
  },
  {
    region: 'Trinidad & Tobago',
    timeline: '12-16 business days',
    cost: 'Flat rate BBD $200 per mattress',
    notes: 'Free for hotel orders 20+ units'
  },
  {
    region: 'Other CARICOM States',
    timeline: '14-21 business days',
    cost: 'Custom quote based on location',
    notes: 'Contact for bulk pricing'
  }
];

export default function WarrantyDelivery() {
  return (
    <div className="pt-20">
      <section className="relative h-[60vh] bg-gradient-to-br from-[#25278C] to-[#1a1c66] flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <Shield className="w-16 h-16 mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Warranty & Delivery
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            Comprehensive protection and reliable delivery across the Caribbean. Your investment is protected by our industry-leading warranties.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Consumer Product Warranties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading coverage for residential use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consumerWarranty.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-[#25278C] transition-colors">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.product}</h3>
                  <div className="bg-[#25278C] text-white px-4 py-2 rounded-lg font-bold text-lg inline-block">
                    {item.duration}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#25278C] mr-2" />
                    Coverage
                  </h4>
                  <p className="text-gray-600 text-sm">{item.coverage}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <FileText className="w-5 h-5 text-[#25278C] mr-2" />
                    Conditions
                  </h4>
                  <p className="text-gray-600 text-sm">{item.conditions}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Commercial/Hotel Warranties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed for high-turnover hospitality environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hotelWarranty.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#25278C] transition-colors shadow-md">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.product}</h3>
                  <div className="bg-[#25278C] text-white px-4 py-2 rounded-lg font-bold text-lg inline-block">
                    {item.duration}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#25278C] mr-2" />
                    Coverage
                  </h4>
                  <p className="text-gray-600 text-sm">{item.coverage}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <FileText className="w-5 h-5 text-[#25278C] mr-2" />
                    Conditions
                  </h4>
                  <p className="text-gray-600 text-sm">{item.conditions}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service & Support: Regional vs. International</h2>
            <p className="text-lg text-gray-600 max-w-4xl">
              A warranty is only as good as its execution. Here's what makes CARICOM manufacturing the smarter choice for Caribbean properties.
            </p>
          </div>

          <div className="overflow-x-auto mb-8 shadow-lg rounded-lg">
            <table className="w-full bg-white border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#25278C] to-[#1a1c66]">
                  <th className="px-6 py-5 text-left font-semibold text-white text-base">Service Element</th>
                  <th className="px-6 py-5 text-left font-semibold text-white text-base">International Suppliers</th>
                  <th className="px-6 py-5 text-left font-semibold text-white text-base">Comfort Sleep (Regional)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Warranty Claim Process</td>
                  <td className="px-6 py-4 text-gray-600 text-sm">Contact distributor → Photos required → Approval from USA → Wait for shipping</td>
                  <td className="px-6 py-4 bg-blue-50 text-gray-900 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-600 inline mr-2" />
                    Single point of contact → Inspection within 48hrs → Immediate replacement
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Replacement Timeline</td>
                  <td className="px-6 py-4 text-gray-600">8-16 weeks (ship from USA + customs)</td>
                  <td className="px-6 py-4 bg-blue-50 text-gray-900 font-medium">
                    <CheckCircle className="w-5 h-5 text-green-600 inline mr-2" />
                    48 hours (warehouse stock available)
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Defective Mattress Logistics</td>
                  <td className="px-6 py-4 text-gray-600">Ship back to USA at your expense</td>
                  <td className="px-6 py-4 bg-blue-50 text-gray-900 font-medium">
                    <CheckCircle className="w-5 h-5 text-green-600 inline mr-2" />
                    We handle pickup and disposal
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Communication</td>
                  <td className="px-6 py-4 text-gray-600">Time zone differences, email-only support</td>
                  <td className="px-6 py-4 bg-blue-50 text-gray-900 font-medium">
                    <CheckCircle className="w-5 h-5 text-green-600 inline mr-2" />
                    Same time zone, phone/WhatsApp/email
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Emergency Inventory</td>
                  <td className="px-6 py-4 text-gray-600">Must wait for new shipment</td>
                  <td className="px-6 py-4 bg-blue-50 text-gray-900 font-medium">
                    <CheckCircle className="w-5 h-5 text-green-600 inline mr-2" />
                    Local warehouse maintains stock
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Custom Orders</td>
                  <td className="px-6 py-4 text-gray-600">Minimum order quantities, long lead times</td>
                  <td className="px-6 py-4 bg-blue-50 text-gray-900 font-medium">
                    <CheckCircle className="w-5 h-5 text-green-600 inline mr-2" />
                    Flexible quantities, 3-4 week custom runs
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">On-Site Support</td>
                  <td className="px-6 py-4 text-gray-600">Rare, requires international travel</td>
                  <td className="px-6 py-4 bg-blue-50 text-gray-900 font-medium">
                    <CheckCircle className="w-5 h-5 text-green-600 inline mr-2" />
                    Available within 24-48 hours
                  </td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="px-6 py-5 font-bold text-gray-900">Total Downtime</td>
                  <td className="px-6 py-5 font-bold text-gray-900 text-lg">60-120+ days per issue</td>
                  <td className="px-6 py-5 bg-blue-50 font-bold text-gray-900 text-lg">2-3 days per issue</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-[#25278C] mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">7-Year Transferable Warranty</h4>
                <p className="text-gray-600 text-sm mb-3">Full coverage for commercial use with hassle-free claims process</p>
                <Link href="/warranty" className="text-[#25278C] font-semibold text-sm hover:underline">Download Terms →</Link>
              </div>
              <div className="text-center">
                <Truck className="w-12 h-12 text-[#25278C] mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">CARICOM Delivery Network</h4>
                <p className="text-gray-600 text-sm mb-3">2-4 week delivery to all major Caribbean islands, tariff-free</p>
                <Link href="/contact" className="text-[#25278C] font-semibold text-sm hover:underline">Get Delivery Quote →</Link>
              </div>
              <div className="text-center">
                <Phone className="w-12 h-12 text-[#25278C] mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support Hotline</h4>
                <p className="text-gray-600 text-sm mb-3">WhatsApp, phone, and email support during your business hours</p>
                <a href="tel:+12462287378" className="text-[#25278C] font-semibold text-sm hover:underline">Call Now →</a>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 italic text-center">
            Service timelines based on Barbados-based operations. Other islands may vary slightly. All warranty claims subject to terms and conditions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to File a Warranty Claim</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent process with quick resolution
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {claimProcess.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <div className="bg-[#25278C] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-4">
                        {item.step}
                      </div>
                      <div className="bg-[#25278C]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                        <Icon className="w-10 h-10 text-[#25278C]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 bg-[#25278C]/5 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's NOT Covered</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Damage from improper foundations or bed frames</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Stains, burns, cuts, or physical damage</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Normal comfort preference changes</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Commercial use of residential mattresses</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Mattresses without original law labels</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">Purchases without proof of receipt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Truck className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Delivery Information</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional delivery service across the Caribbean
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {deliveryInfo.map((region, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <MapPin className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{region.region}</h3>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-gray-300" />
                    <div>
                      <p className="font-semibold text-sm text-gray-300">Timeline</p>
                      <p className="text-white">{region.timeline}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Truck className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-gray-300" />
                    <div>
                      <p className="font-semibold text-sm text-gray-300">Delivery Cost</p>
                      <p className="text-white">{region.cost}</p>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-3 mt-3">
                    <p className="text-sm text-gray-200">{region.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Delivery Services Include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                <p>Delivery to room of choice</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                <p>Unpacking and setup</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                <p>Packaging removal</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                <p>Old mattress removal (add'l fee)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Need Help with a Warranty Claim?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our customer support team is ready to assist with any warranty questions or claims. We're committed to making the process as smooth as possible.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-[#25278C] mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+1 (246) 555-SLEEP</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-[#25278C] mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">warranty@comfortsleep.bb</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-[#25278C] mr-4 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Support Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM AST</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM AST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#25278C]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Tips for Warranty Maintenance</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#25278C] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Use a Mattress Protector</p>
                    <p className="text-gray-600 text-sm">Required for Comfort Custom Luxury and above to maintain warranty</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#25278C] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Proper Foundation</p>
                    <p className="text-gray-600 text-sm">Use a solid platform or slatted base with slats no more than 3 inches apart</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#25278C] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Keep Your Receipt</p>
                    <p className="text-gray-600 text-sm">Store proof of purchase in a safe place - you'll need it for warranty claims</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#25278C] mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Don't Remove Law Label</p>
                    <p className="text-gray-600 text-sm">The white law label is required for all warranty claims</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#25278C] to-[#1a1c66] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Purchase?</h2>
          <p className="text-xl mb-8 text-gray-200">
            All our mattresses come with comprehensive warranty protection and professional delivery across the Caribbean.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white hover:bg-gray-100 text-[#25278C] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Browse Consumer Products
            </Link>
            <Link
              href="/hotel-line"
              className="border-2 border-white text-white hover:bg-white hover:text-[#25278C] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              View Hotel Line
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
