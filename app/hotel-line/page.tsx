import Link from 'next/link';

export default function HotelLine() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hotel Elite Line
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Commercial-grade mattresses engineered for Caribbean hospitality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors font-semibold text-lg">
                Request Quote
              </Link>
              <Link href="/pilot-program" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-md hover:bg-blue-50 transition-colors font-semibold text-lg">
                Try Pilot Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Built for Caribbean Hotels
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The Hotel Elite line is specifically engineered to handle the unique challenges of tropical hospitality environments. High humidity, constant guest turnover, and the need for long-lasting comfort require a different approach to mattress design.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our mattresses use climate-optimized foam that resists moisture absorption and maintains structural integrity in humid conditions. This means longer lifespan, better guest comfort, and lower total cost of ownership.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-blue-600 mb-2">5-7 Years</div>
                <div className="text-xl text-gray-700">Average Lifespan</div>
                <div className="text-sm text-gray-600 mt-2">vs. 3-4 years for imported brands</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-4">7-Year</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Warranty</h3>
              <p className="text-gray-600">
                Full manufacturing defect coverage with fast local replacement service
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-4">2-3 Weeks</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Delivery Time</h3>
              <p className="text-gray-600">
                Regional distribution means faster delivery compared to international shipping
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-4">Zero</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Import Duties</h3>
              <p className="text-gray-600">
                CARICOM manufacturing means no tariffs or import fees
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Construction</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Climate-engineered high-density foam core</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Moisture-resistant comfort layers</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Reinforced edge support system</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Commercial-grade quilted cover</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Fire-retardant materials (EPA certified)</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Sizes</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-900">Twin</span>
                  <span className="text-gray-600">39" × 75"</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-900">Full/Double</span>
                  <span className="text-gray-600">54" × 75"</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-900">Queen</span>
                  <span className="text-gray-600">60" × 80"</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="font-semibold text-gray-900">King</span>
                  <span className="text-gray-600">76" × 80"</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">California King</span>
                  <span className="text-gray-600">72" × 84"</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-6">
                Custom sizes available for bulk orders of 50+ units
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Bulk Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Volume discounts for properties ordering 20+ mattresses
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-blue-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">20-49</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Units</div>
                <div className="text-gray-600">Standard bulk pricing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50-99</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Units</div>
                <div className="text-gray-600">Additional discount</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Units</div>
                <div className="text-gray-600">Maximum volume pricing</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors font-semibold text-lg">
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Trusted by Leading Caribbean Properties
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            250+ hotels and resorts across 12 Caribbean islands
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors font-semibold text-lg">
              Request Quote
            </Link>
            <Link href="/pilot-program" className="bg-white text-gray-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors font-semibold text-lg">
              Try Pilot Program
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
