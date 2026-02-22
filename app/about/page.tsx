import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, Shield, Users, Globe, Check, MapPin, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: "Learn about Comfort Sleep Barbados — the Caribbean's premier hospitality mattress supplier. Our story, mission, and commitment to quality.",
};

const milestones = [
  { year: '2008', title: 'Founded in Barbados', description: 'Established as the first dedicated hospitality mattress distributor in the Eastern Caribbean.' },
  { year: '2012', title: 'CARICOM Manufacturing', description: 'Partnered with premium Guyanese manufacturer to bring regional production and zero-duty pricing to Caribbean hotels.' },
  { year: '2016', title: 'ISO 9001 Certification', description: 'Achieved international quality management certification across our full product range.' },
  { year: '2019', title: 'EPA Certification', description: 'Received EPA certification for our eco-conscious manufacturing processes and materials.' },
  { year: '2022', title: '250+ Properties', description: 'Crossed the milestone of 250 hotel and resort properties served across 12 Caribbean islands.' },
  { year: '2024', title: '15,000+ Mattresses', description: 'Delivered over 15,000 mattresses to Caribbean hospitality properties with a 98% satisfaction rate.' },
];

const certifications = [
  { name: 'ISO 9001', description: 'International Quality Management Standard', icon: Award },
  { name: 'EPA Certified', description: 'Environmental Protection Standards', icon: Shield },
  { name: 'Marriott Approved', description: 'Meeting Marriott Brand Standards', icon: Check },
  { name: 'CARICOM Member', description: 'Regional Trade Network Participant', icon: Globe },
];

const team = [
  {
    name: 'Regional Sales Team',
    description: 'Hospitality specialists with deep knowledge of Caribbean property needs and procurement processes.',
    image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Logistics & Delivery',
    description: 'Dedicated fleet and regional partners ensuring on-time delivery across all major Caribbean islands.',
    image: 'https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Warranty Support',
    description: 'Local technicians and support staff available within 48 hours for any warranty claims or service needs.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function About() {
  return (
    <div className="pt-20">
      <section className="relative h-[60vh] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Comfort Sleep Barbados</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            The Caribbean's premier hospitality mattress supplier since 2008. Regional expertise, international quality.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-xl text-gray-600 mb-6">
                Comfort Sleep Barbados was founded with a simple mission: give Caribbean hotels and resorts access to the same quality mattresses used by leading international brands — at prices that made sense for the region.
              </p>
              <p className="text-gray-600 mb-6">
                We recognized that Caribbean properties were paying a premium for imported mattresses that weren't even designed for tropical conditions. Salt air corroded springs. High humidity degraded foam. The very climate that made the Caribbean beautiful was destroying mattress investments within years.
              </p>
              <p className="text-gray-600 mb-8">
                By partnering with premium manufacturers within CARICOM, we eliminated import duties and built climate-specific engineering into every product. Today, we serve over 250 properties across 12 Caribbean islands with a 98% satisfaction rate.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#25278C] mb-2">15+</div>
                  <div className="text-gray-600 text-sm">Years in the Caribbean Market</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-[#25278C] mb-2">12</div>
                  <div className="text-gray-600 text-sm">Islands Served</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Luxury hotel room with Comfort Sleep mattress"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our commitment to the Caribbean hospitality industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Quality First', description: 'ISO 9001 and EPA certified products that meet international standards for hospitality use.' },
              { icon: Globe, title: 'Regional Advantage', description: 'CARICOM manufacturing provides duty-free access and faster delivery than any international supplier.' },
              { icon: Users, title: 'Client Partnership', description: 'We build long-term relationships with property managers, not just transactions.' },
              { icon: Shield, title: 'Reliable Support', description: 'Local warranty service and support available within 48 hours — not 48 weeks.' },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-[#25278C]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#25278C]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over 15 years building the Caribbean's most trusted hospitality mattress brand
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[#25278C]/20 hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-gray-50 rounded-xl p-6 inline-block w-full md:max-w-sm">
                      <div className="text-[#25278C] font-bold text-lg mb-1">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-[#25278C] text-white font-bold flex-shrink-0 z-10">
                    {index + 1}
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our products and processes meet the highest international and regional standards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 text-center shadow-md">
                  <div className="bg-[#25278C]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#25278C]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Teams</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to your property's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
                <div className="relative h-48">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Showroom</h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience our mattresses in person. See the construction quality and feel the difference that climate-engineering makes. Appointments are recommended for hotel procurement teams.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#25278C] mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">Lot 18, Warehouse #1, Lears Business Park, Lears Road, St. Michael, Barbados</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-[#25278C] mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+12462287378" className="text-gray-600 hover:text-[#25278C]">+1 (246) 228-7378 (228-REST)</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-[#25278C] mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:info@comfortsleepdistribution.com" className="text-gray-600 hover:text-[#25278C]">info@comfortsleepdistribution.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#25278C] rounded-xl p-10 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Partner?</h3>
              <p className="text-gray-200 mb-8">
                Whether you're outfitting a single property or managing a portfolio of hotels, we have the expertise and inventory to meet your needs.
              </p>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-[#25278C] px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
