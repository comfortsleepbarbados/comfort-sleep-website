import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Hospitality insights, mattress care tips, and Caribbean property news from the Comfort Sleep Barbados team.',
};

const featuredPost = {
  title: 'Why Caribbean Hotels Lose $50,000+ Replacing Mattresses Too Early',
  excerpt:
    'Standard mattresses last 2-3 years in Caribbean conditions. Climate-engineered mattresses last 7-10 years. The math is clear — but most properties are still making the costly mistake of buying cheap.',
  category: 'Hospitality Insights',
  date: 'January 15, 2025',
  readTime: '8 min read',
  image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
  slug: '#',
};

const posts = [
  {
    title: 'The CARICOM Advantage: Why Regional Sourcing Saves Caribbean Hotels 25-35%',
    excerpt:
      'Import duties, shipping delays, and currency fluctuations make international mattress sourcing expensive. Here\'s how CARICOM manufacturing changes the equation.',
    category: 'Procurement',
    date: 'December 10, 2024',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: '#',
  },
  {
    title: 'How Humidity Destroys Hotel Mattresses (And How to Prevent It)',
    excerpt:
      'The Caribbean\'s beautiful climate is your mattresses\' worst enemy. Understand how 80%+ humidity degrades foam, creates mold, and accelerates structural failure.',
    category: 'Mattress Care',
    date: 'November 22, 2024',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: '#',
  },
  {
    title: 'Guest Sleep Quality: The Hidden Driver of Your TripAdvisor Score',
    excerpt:
      'Analysis of 10,000+ Caribbean hotel reviews reveals that mattress comfort is the #2 driver of negative reviews — ahead of food, location, and staff service.',
    category: 'Guest Experience',
    date: 'October 30, 2024',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: '#',
  },
  {
    title: 'Mattress Warranty 101: What Caribbean Hoteliers Need to Know',
    excerpt:
      'Not all warranties are created equal. Learn what to look for in a commercial mattress warranty, and why local service coverage matters more than paper guarantees.',
    category: 'Warranty & Service',
    date: 'October 5, 2024',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/6186812/pexels-photo-6186812.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: '#',
  },
  {
    title: 'The Complete Guide to Choosing Mattresses for Caribbean Villas',
    excerpt:
      'Villa properties face unique challenges: variable guest weights, occasional extreme occupancy, and premium guest expectations. Here\'s how to choose wisely.',
    category: 'Buying Guide',
    date: 'September 18, 2024',
    readTime: '9 min read',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: '#',
  },
  {
    title: 'When to Replace Hotel Mattresses: A Data-Driven Framework',
    excerpt:
      'Replacing too early wastes money. Replacing too late damages reviews. Use this framework to build a proactive mattress replacement schedule for your property.',
    category: 'Operations',
    date: 'August 25, 2024',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    slug: '#',
  },
];

const categories = [
  'All Posts',
  'Hospitality Insights',
  'Procurement',
  'Mattress Care',
  'Guest Experience',
  'Warranty & Service',
  'Buying Guide',
  'Operations',
];

export default function Blog() {
  return (
    <div className="pt-20">
      <section className="relative h-[50vh] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Hospitality Insights</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            Mattress care, procurement strategies, and guest experience insights for Caribbean hospitality professionals.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#25278C] text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  {featuredPost.category}
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{featuredPost.date}</span>
                  <span className="mx-3">·</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                <Link
                  href={featuredPost.slug}
                  className="flex items-center text-[#25278C] font-semibold hover:underline"
                >
                  Read Full Article <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-[#25278C] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-[#25278C] text-white px-3 py-1 rounded-lg text-xs font-semibold">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-xs mb-3">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">·</span>
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link
                      href={post.slug}
                      className="flex items-center text-[#25278C] text-sm font-semibold hover:underline"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Stay Informed</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get hospitality insights and product updates delivered to your inbox monthly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25278C] focus:border-transparent outline-none"
            />
            <button className="bg-[#25278C] hover:bg-[#1a1c66] text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">No spam. Unsubscribe at any time.</p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#25278C] to-[#1a1c66] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Upgrade Your Property?</h2>
          <p className="text-xl mb-10 text-gray-200">
            Put these insights into action. Request a quote or apply for our pilot program today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-[#25278C] px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Request a Quote
            </Link>
            <Link href="/pilot-program" className="border-2 border-white text-white hover:bg-white hover:text-[#25278C] px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Try the Pilot Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
