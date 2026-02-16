export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">C</span>
              </div>
              <span className="text-2xl font-bold text-slate-800">Comfort Sleep</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#products" className="text-slate-600 hover:text-blue-600 transition-colors">Products</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Experience the Perfect
              <span className="block text-blue-600">Night's Sleep</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Premium mattresses and sleep solutions designed with cutting-edge technology to give you the rest you deserve.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
              Shop Mattresses
            </button>
          </div>
        </section>

        <section id="products" className="bg-slate-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Our Collections</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Memory Foam</h3>
                <p className="text-slate-600 mb-6">
                  Contouring support that adapts to your body shape for personalized comfort all night long.
                </p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">Learn More →</a>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Hybrid Collection</h3>
                <p className="text-slate-600 mb-6">
                  The perfect blend of memory foam comfort and innerspring support for the best of both worlds.
                </p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">Learn More →</a>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Cooling Series</h3>
                <p className="text-slate-600 mb-6">
                  Advanced cooling technology keeps you comfortable throughout the night, no matter the season.
                </p>
                <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">Learn More →</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl p-12 text-center text-white">
              <h2 className="text-4xl font-bold mb-4">100-Night Sleep Trial</h2>
              <p className="text-xl mb-8 opacity-90">
                Try any Comfort Sleep mattress risk-free. If you're not completely satisfied, we'll pick it up for free.
              </p>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-50 transition-all transform hover:scale-105 shadow-lg">
                Start Your Trial
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="bg-slate-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Comfort Sleep?</h2>
                <p className="text-lg text-slate-600 mb-6">
                  For over a decade, we've been committed to revolutionizing the way people sleep. Our mattresses are crafted with premium materials and backed by science.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">Certified organic and eco-friendly materials</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">10-year warranty on all mattresses</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">Free shipping and returns nationwide</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">24/7 customer support</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-2xl p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-blue-600 mb-2">50K+</div>
                  <div className="text-xl text-slate-700">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">C</span>
                </div>
                <span className="text-xl font-bold">Comfort Sleep</span>
              </div>
              <p className="text-slate-400">Bringing you the perfect night's sleep since 2014.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Memory Foam</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Hybrid</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cooling</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Comfort Sleep. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
