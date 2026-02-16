import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Sleep Elevated. Luxury Comfort<br />
              <span className="text-blue-600">Designed for the Caribbean.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10">
              Engineered for tropical humidity, high turnover, and five-star guest expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                Request Quote
              </Link>
              <Link href="/hotel-line" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                Download Hospitality Catalogue
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Engineered for Caribbean Hospitality</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">EPA & ISO Certified</h3>
              <p className="text-slate-600">Premium materials meeting international standards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Climate-Engineered</h3>
              <p className="text-slate-600">Foam designed for tropical conditions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">High Turnover Durability</h3>
              <p className="text-slate-600">Built for heavy hospitality use</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fast Fulfillment</h3>
              <p className="text-slate-600">2-3 week delivery times</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">The CARICOM Advantage</h2>
            <p className="text-xl text-slate-600">Tariff-free pricing for Caribbean properties</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-4">0%</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Zero Import Duties</h3>
              <p className="text-slate-600">Save 20-35% compared to imported brands</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-4">Regional</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Logistics</h3>
              <p className="text-slate-600">Caribbean-based distribution and support</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="text-4xl font-bold text-sky-600 mb-4">Local</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Warranty Support</h3>
              <p className="text-slate-600">Fast, local replacement and service</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Smart Procurement Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 font-bold text-slate-900 border-b-2 border-slate-200">Feature</th>
                  <th className="text-center p-4 font-bold text-slate-700 border-b-2 border-slate-200">Imported Brands</th>
                  <th className="text-center p-4 font-bold text-blue-600 border-b-2 border-blue-200 bg-blue-50">Comfort Sleep</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-200">Climate Engineering</td>
                  <td className="text-center p-4 text-slate-600 border-b border-slate-200">Standard foam</td>
                  <td className="text-center p-4 bg-blue-50 border-b border-blue-100">
                    <span className="text-green-600 font-semibold">✓ Tropical-optimized</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-200">Delivery Time</td>
                  <td className="text-center p-4 text-slate-600 border-b border-slate-200">8-12 weeks</td>
                  <td className="text-center p-4 bg-blue-50 border-b border-blue-100">
                    <span className="text-green-600 font-semibold">✓ 2-3 weeks</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-200">Import Costs</td>
                  <td className="text-center p-4 text-slate-600 border-b border-slate-200">20-35% duties</td>
                  <td className="text-center p-4 bg-blue-50 border-b border-blue-100">
                    <span className="text-green-600 font-semibold">✓ Tariff-free</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 border-b border-slate-200">Warranty Replacement</td>
                  <td className="text-center p-4 text-slate-600 border-b border-slate-200">6-8 weeks</td>
                  <td className="text-center p-4 bg-blue-50 border-b border-blue-100">
                    <span className="text-green-600 font-semibold">✓ 1-2 weeks</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Climate Durability</td>
                  <td className="text-center p-4 text-slate-600">Standard</td>
                  <td className="text-center p-4 bg-blue-50">
                    <span className="text-green-600 font-semibold">✓ Extended lifespan</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <p className="text-2xl font-bold text-blue-600">Estimated Savings: $143,000</p>
            <p className="text-slate-600 mt-2">For a 100-room property over 7 years</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">250+</div>
              <div className="text-slate-300">Properties Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15,000+</div>
              <div className="text-slate-300">Mattresses Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">12</div>
              <div className="text-slate-300">Caribbean Islands</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-slate-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-10 shadow-lg">
            <div className="flex items-start mb-6">
              <svg className="w-12 h-12 text-blue-600 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div>
                <p className="text-lg text-slate-700 italic mb-6">
                  The Hotel Elite line has exceeded expectations. After three years of high occupancy, the mattresses show minimal wear. Our guests consistently praise the sleep quality, and the local support makes warranty claims seamless.
                </p>
                <div className="font-bold text-slate-900">Michael Richards</div>
                <div className="text-slate-600">General Manager, Crane Resort</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">90-Day Pilot Program</h2>
          <p className="text-xl mb-8 opacity-95">
            Test our Hotel Elite line in select rooms for 90 days. No commitment until you're completely satisfied with guest feedback and performance.
          </p>
          <Link href="/pilot-program" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-50 transition-colors shadow-lg inline-block">
            Start Pilot Program
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">7-Year Commercial Warranty</h2>
              <p className="text-lg text-slate-600 mb-6">
                Our warranty covers structural defects and premature sagging for seven full years. With local Caribbean support, warranty replacements are processed in 1-2 weeks, not months.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">7-year commercial warranty coverage</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Fast 1-2 week replacement processing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Caribbean-based support team</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Bulk order pricing available</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-12">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-600 mb-4">4.9★</div>
                <div className="text-2xl font-bold text-slate-900 mb-2">Customer Rating</div>
                <div className="text-slate-600">Based on 250+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
