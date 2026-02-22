import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Clock, Building2, Shield, Star, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pilot Program',
  description: 'Test Comfort Sleep Barbados mattresses in select rooms for 90 days before committing to a full property order. Risk-free trial for hospitality properties.',
};

const steps = [
  {
    step: '01',
    title: 'Apply Online',
    description: 'Submit your property details, room count, and preferred mattress tier through our contact form.',
    icon: Building2,
  },
  {
    step: '02',
    title: 'Consultation',
    description: 'Our hospitality specialist reviews your application and schedules a property visit or call within 48 hours.',
    icon: Clock,
  },
  {
    step: '03',
    title: 'Pilot Installation',
    description: 'We deliver and install mattresses in 2-5 selected rooms. White-glove service included.',
    icon: Shield,
  },
  {
    step: '04',
    title: 'Test & Evaluate',
    description: 'Run the pilot for 90 days. Collect guest feedback. Track comfort complaints and reviews.',
    icon: Star,
  },
  {
    step: '05',
    title: 'Full Conversion',
    description: "Love the results? Apply the pilot cost toward your full property order. No wasted investment.",
    icon: Check,
  },
];

const benefits = [
  'Zero risk — test before full commitment',
  'Pilot cost applied to full order',
  'Professional installation included',
  'Guest feedback tracking support',
  '90-day evaluation period',
  'Priority support during pilot',
  'Flexible tier selection',
  'No minimum room requirement',
];

const eligibility = [
  { label: 'Property Type', value: 'Hotels, Resorts, Boutique Properties, Villas' },
  { label: 'Minimum Rooms', value: '2 pilot rooms (no maximum)' },
  { label: 'Pilot Duration', value: '90 days' },
  { label: 'Eligible Tiers', value: 'Hotel Comfort, Hotel Elite, Hotel Luxury' },
  { label: 'Regions Served', value: 'All CARICOM member states' },
  { label: 'Approval Timeline', value: '3-5 business days' },
];

const faqs = [
  {
    question: 'What happens after the 90-day pilot?',
    answer: "You have three options: convert to a full property order (with pilot cost credited), extend the pilot period, or return the mattresses. There's no obligation to purchase.",
  },
  {
    question: 'Is the pilot program free?',
    answer: 'The pilot program is not free — you pay for the mattresses used during the trial. However, this cost is fully credited toward a full property order if you choose to convert.',
  },
  {
    question: 'How many rooms must be in the pilot?',
    answer: "We recommend a minimum of 2 rooms to gather meaningful guest feedback. There's no maximum — some properties pilot up to 20 rooms.",
  },
  {
    question: 'Can I mix tiers in the pilot?',
    answer: 'Yes. Many properties test different tiers in different room categories to find the right match for each accommodation type.',
  },
  {
    question: 'What support do I receive during the pilot?',
    answer: 'You receive priority access to our hospitality team, guest feedback tracking templates, and a mid-pilot check-in call with your account manager.',
  },
  {
    question: 'Do you handle delivery and installation?',
    answer: 'Yes. Our team delivers and installs pilot mattresses with full white-glove service. We also remove and dispose of existing mattresses if required.',
  },
];

export default function PilotProgram() {
  return (
    <div className="pt-20">
      <section className="relative h-[70vh] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#25278C] px-4 py-2 rounded-lg text-sm font-semibold mb-6">
              90-Day Risk-Free Trial
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Pilot Program
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Test our hotel mattresses in select rooms before committing to a full property order. Experience the difference firsthand with your own guests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#25278C] hover:bg-[#1a1c66] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
              >
                Apply for Pilot Program
              </Link>
              <Link
                href="/hotel-line"
                className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-center"
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
            {[
              { value: '90', label: 'Day Trial Period' },
              { value: '100%', label: 'Cost Credited to Full Order' },
              { value: '48hr', label: 'Application Response' },
              { value: '250+', label: 'Properties Converted' },
            ].map((stat, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How the Pilot Program Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A straightforward five-step process from application to full property conversion
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-[#25278C]/20"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="text-center relative">
                    <div className="bg-[#25278C] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold relative z-10">
                      {step.step}
                    </div>
                    <div className="bg-[#25278C]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-[#25278C]" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                    {index < steps.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-[#25278C]/40 hidden md:block absolute top-4 -right-4" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Program Benefits</h2>
              <p className="text-xl text-gray-600 mb-8">
                Everything you need to make a confident, data-driven decision about your mattress investment.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-6 h-6 text-[#25278C] mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Eligibility Requirements</h2>
              <p className="text-xl text-gray-600 mb-8">
                The pilot program is open to all hospitality properties across CARICOM member states.
              </p>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    {eligibility.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900 text-sm">{item.label}</td>
                        <td className="px-6 py-4 text-gray-600 text-sm">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about the pilot program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#25278C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Building2 className="w-16 h-16 mx-auto mb-6 text-white/80" />
              <h2 className="text-3xl font-bold mb-4">What a Pilot Property Said</h2>
            </div>
            <p className="text-xl italic text-center mb-6">
              "We piloted 5 rooms with the Hotel Elite line. Within 30 days, those rooms had noticeably better guest reviews. We converted all 80 rooms three months later. The pilot program made the decision easy."
            </p>
            <div className="text-center">
              <div className="font-semibold text-lg">Patricia Clarke</div>
              <div className="text-gray-300">General Manager, Treasure Beach Hotel, Barbados</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#25278C] to-[#1a1c66] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Pilot?</h2>
          <p className="text-xl mb-10 text-gray-200">
            Apply today. Our team will review your application and reach out within 48 business hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-[#25278C] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Apply for Pilot Program
            </Link>
            <Link
              href="/hotel-line"
              className="border-2 border-white text-white hover:bg-white hover:text-[#25278C] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Compare Hotel Tiers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
