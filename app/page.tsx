import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Sleep Elevated. Luxury Comfort Designed for the Caribbean.
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Mattresses engineered for tropical humidity, high turnover, and five-star guest expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors font-semibold text-lg">
                Request Quote
              </Link>
              <Link href="/hotel-line" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-md hover:bg-blue-50 transition-colors font-semibold text-lg">
                Download Hospitality Catalogue
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900">EPA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900">ISO 9001</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900">7-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900">Marriott Supplier</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Engineered for Caribbean Hospitality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of tropical luxury accommodation...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">EPA & ISO Certified</h3>
              <p className="text-gray-600">Certified quality and safety standards</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Climate-Engineered</h3>
              <p className="text-gray-600">Designed for tropical humidity</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">High Turnover Durability</h3>
              <p className="text-gray-600">Built for constant use</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Fulfillment</h3>
              <p className="text-gray-600">2-3 week delivery</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The CARICOM Advantage
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Zero Import Duties</h3>
              <p className="text-gray-600 text-lg">
                Save 20-35% compared to international imports
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regional Logistics</h3>
              <p className="text-gray-600 text-lg">
                Faster shipping, lower costs, better support
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Accountability</h3>
              <p className="text-gray-600 text-lg">
                Caribbean-based warranty service and support
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Smart Procurement Comparison
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="py-4 px-6 text-left font-bold">Factor</th>
                  <th className="py-4 px-6 text-left font-bold">Imported Brands</th>
                  <th className="py-4 px-6 text-left font-bold bg-blue-600">Comfort Sleep</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-semibold">Climate Engineering</td>
                  <td className="py-4 px-6 text-gray-600">❌</td>
                  <td className="py-4 px-6 bg-blue-50 text-blue-900 font-semibold">✓ Tropical-optimized</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-semibold">Delivery Time</td>
                  <td className="py-4 px-6 text-gray-600">6-12 weeks</td>
                  <td className="py-4 px-6 bg-blue-50 text-blue-900 font-semibold">2-3 weeks</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-semibold">Import Costs</td>
                  <td className="py-4 px-6 text-gray-600">20-35% tariffs</td>
                  <td className="py-4 px-6 bg-blue-50 text-blue-900 font-semibold">Zero duties</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-semibold">Warranty Replacement</td>
                  <td className="py-4 px-6 text-gray-600">Months + shipping</td>
                  <td className="py-4 px-6 bg-blue-50 text-blue-900 font-semibold">2-3 weeks locally</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-semibold">Climate Durability</td>
                  <td className="py-4 px-6 text-gray-600">3-4 years typical</td>
                  <td className="py-4 px-6 bg-blue-50 text-blue-900 font-semibold">5-7 years proven</td>
                </tr>
                <tr className="bg-yellow-50 border-b-4 border-yellow-400">
                  <td className="py-4 px-6 font-bold text-lg">True 5-Year Cost<br /><span className="text-sm font-normal">(100-room property)</span></td>
                  <td className="py-4 px-6 font-bold text-xl text-red-600">$485,000</td>
                  <td className="py-4 px-6 bg-green-100 font-bold text-xl text-green-700">$342,000<br /><span className="text-base">Saves $143,000</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors font-semibold text-lg">
              Calculate My Savings
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">250+</div>
              <div className="text-xl text-gray-300">Properties Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">15,000+</div>
              <div className="text-xl text-gray-300">Mattresses Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">12</div>
              <div className="text-xl text-gray-300">Caribbean Islands</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-xl text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <div className="flex gap-4 mb-6">
              <svg className="w-12 h-12 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div>
                <p className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                  Comfort Sleep transformed our guest experience. Their Hotel Elite line has maintained exceptional quality through three years of high occupancy. The CARICOM pricing made the upgrade possible for all 120 rooms.
                </p>
                <div className="font-semibold text-gray-900">Michael Richards</div>
                <div className="text-gray-600">General Manager, Crane Resort</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hotel Elite Mattress Line
            </h2>
            <p className="text-xl text-gray-600">
              Climate-engineered hospitality mattresses for tropical environments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">7-Year</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Warranty</h3>
              <p className="text-gray-600">Transferable, manufacturing defect coverage</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">90-Day</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pilot Program</h3>
              <p className="text-gray-600">Trial option available</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">20+</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bulk Order Pricing</h3>
              <p className="text-gray-600">Minimum 20 rooms</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/hotel-line" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors font-semibold text-lg mr-4">
              Explore Hotel Line
            </Link>
            <Link href="/pilot-program" className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-md hover:bg-blue-50 transition-colors font-semibold text-lg">
              Apply for Pilot Program
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Upgrade Your Guest Experience?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a custom quote and savings calculation for your property
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors font-semibold text-lg">
            Request Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
