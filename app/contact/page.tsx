'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { getSupabaseClient } from '@/lib/supabase';
import { QuoteFormData } from '@/types';
import { validateQuoteForm, ValidationError } from '@/lib/validation';
import { contactInfo } from '@/data/contact';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    property_name: '',
    property_type: '',
    room_count: '',
    inquiry_type: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    if (validationErrors.length > 0) {
      setValidationErrors(prev => prev.filter(err => err.field !== name));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setValidationErrors([]);

    const errors = validateQuoteForm(formData);
    if (errors.length > 0) {
      setValidationErrors(errors);
      setError('Please correct the errors below.');
      return;
    }

    setIsSubmitting(true);

    try {
      const supabase = getSupabaseClient();
      const { error: submitError } = await supabase
        .from('quote_requests')
        .insert([formData]);

      if (submitError) {
        console.error('Supabase error:', submitError);
        throw new Error(submitError.message || 'Failed to submit form');
      }

      const web3Data = new FormData();
      web3Data.append('access_key', '48f8f777-acaa-4480-9540-0352cdfe4518');
      web3Data.append('subject', 'New Contact Form Submission - Comfort Sleep Distribution');
      web3Data.append('from_name', 'Comfort Sleep Website');
      web3Data.append('name', formData.name);
      web3Data.append('email', formData.email);
      web3Data.append('phone', formData.phone || '');
      web3Data.append('company', formData.property_name || '');
      web3Data.append('property_type', formData.property_type);
      web3Data.append('room_count', formData.room_count || '');
      web3Data.append('inquiry_type', formData.inquiry_type);
      web3Data.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3Data,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        console.warn('Web3Forms notification failed:', result.message);
      }

      router.push('/contact/thank-you');
    } catch (err) {
      console.error('Error submitting form:', err);
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(`Unable to submit your request: ${errorMessage}. Please try again or contact us directly at info@comfortsleepdistribution.com or call +1 (246) 228-REST (7378).`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldError = (field: keyof QuoteFormData): string | undefined => {
    return validationErrors.find(err => err.field === field)?.message;
  };

  return (
    <div className="pt-20">
      <section className="relative h-[50vh] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Request a quote, schedule a consultation, or speak with our hospitality team.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Request a Quote
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will respond within 24 hours with pricing and availability.
                </p>

                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={!!getFieldError('name')}
                        aria-describedby={getFieldError('name') ? 'name-error' : undefined}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#25278C] focus:border-transparent ${getFieldError('name') ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {getFieldError('name') && (
                        <p id="name-error" className="mt-1 text-sm text-red-600">{getFieldError('name')}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={!!getFieldError('email')}
                        aria-describedby={getFieldError('email') ? 'email-error' : undefined}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#25278C] focus:border-transparent ${getFieldError('email') ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {getFieldError('email') && (
                        <p id="email-error" className="mt-1 text-sm text-red-600">{getFieldError('email')}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        aria-invalid={!!getFieldError('phone')}
                        aria-describedby={getFieldError('phone') ? 'phone-error' : undefined}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#25278C] focus:border-transparent ${getFieldError('phone') ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {getFieldError('phone') && (
                        <p id="phone-error" className="mt-1 text-sm text-red-600">{getFieldError('phone')}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="property_name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Property Name
                      </label>
                      <input
                        type="text"
                        id="property_name"
                        name="property_name"
                        value={formData.property_name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25278C] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="property_type" className="block text-sm font-semibold text-gray-700 mb-2">
                        Property Type *
                      </label>
                      <select
                        id="property_type"
                        name="property_type"
                        required
                        value={formData.property_type}
                        onChange={handleChange}
                        aria-invalid={!!getFieldError('property_type')}
                        aria-describedby={getFieldError('property_type') ? 'property-type-error' : undefined}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#25278C] focus:border-transparent ${getFieldError('property_type') ? 'border-red-500' : 'border-gray-300'}`}
                      >
                        <option value="">Select...</option>
                        <option value="hotel">Hotel</option>
                        <option value="resort">Resort</option>
                        <option value="boutique">Boutique Property</option>
                        <option value="villa">Villa / Vacation Rental</option>
                        <option value="residential">Residential</option>
                        <option value="other">Other</option>
                      </select>
                      {getFieldError('property_type') && (
                        <p id="property-type-error" className="mt-1 text-sm text-red-600">{getFieldError('property_type')}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="room_count" className="block text-sm font-semibold text-gray-700 mb-2">
                        Number of Rooms/Units
                      </label>
                      <input
                        type="text"
                        id="room_count"
                        name="room_count"
                        value={formData.room_count}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25278C] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiry_type" className="block text-sm font-semibold text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiry_type"
                      name="inquiry_type"
                      required
                      value={formData.inquiry_type}
                      onChange={handleChange}
                      aria-invalid={!!getFieldError('inquiry_type')}
                      aria-describedby={getFieldError('inquiry_type') ? 'inquiry-type-error' : undefined}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#25278C] focus:border-transparent ${getFieldError('inquiry_type') ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Select...</option>
                      <option value="bulk_quote">Bulk Order Quote</option>
                      <option value="pilot_program">Pilot Program Application</option>
                      <option value="consumer_purchase">Consumer Purchase</option>
                      <option value="warranty_claim">Warranty Claim</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    {getFieldError('inquiry_type') && (
                      <p id="inquiry-type-error" className="mt-1 text-sm text-red-600">{getFieldError('inquiry_type')}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs, timeline, and any specific questions..."
                      aria-invalid={!!getFieldError('message')}
                      aria-describedby={getFieldError('message') ? 'message-error' : undefined}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#25278C] focus:border-transparent ${getFieldError('message') ? 'border-red-500' : 'border-gray-300'}`}
                    ></textarea>
                    {getFieldError('message') && (
                      <p id="message-error" className="mt-1 text-sm text-red-600">{getFieldError('message')}</p>
                    )}
                  </div>

                  {error && (
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                      <p className="text-red-700">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#25278C] hover:bg-[#1a1c66] text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Request
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-[#25278C] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Address</div>
                      <div className="text-gray-600">
                        Lot 18, Warehouse #1<br />
                        Lears Business Park<br />
                        Lears Road, St. Michael<br />
                        Barbados
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-[#25278C] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Phone</div>
                      <div className="text-gray-600">
                        <a href="tel:+12462287378" className="hover:text-[#25278C] block">
                          +1 (246) 228-7378 (228-REST)
                        </a>
                        <a href="tel:+12462667378" className="hover:text-[#25278C] block">
                          +1 (246) 266-7378 (266-REST)
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-[#25278C] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Email</div>
                      <a href="mailto:info@comfortsleepdistribution.com" className="text-gray-600 hover:text-[#25278C]">
                        info@comfortsleepdistribution.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-[#25278C] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Business Hours</div>
                      <div className="text-gray-600">
                        Monday - Friday: 9:00 AM - 4:00 PM<br />
                        Saturday: 9:00 AM - 12:30 PM<br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#25278C] text-white rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-gray-200 mb-4">
                  For urgent hospitality needs or time-sensitive projects, call our direct hospitality line.
                </p>
                <a
                  href="tel:+12462287378"
                  className="block text-center bg-white text-[#25278C] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call 228-REST (7378)
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Visit Our Showroom
                </h3>
                <p className="text-gray-600 mb-4">
                  Experience our mattresses in person. See the construction quality and feel the difference.
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Appointments recommended for hotel procurement teams
                </p>
                <Link
                  href="/about"
                  className="text-[#25278C] font-semibold hover:underline"
                >
                  Learn More About Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Happens Next?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#25278C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">We Review Your Request</h3>
              <p className="text-gray-600">
                Our team analyzes your needs and prepares customized recommendations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#25278C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Personal Consultation</h3>
              <p className="text-gray-600">
                A hospitality specialist contacts you to discuss your property's specific requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#25278C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Custom Quote Delivered</h3>
              <p className="text-gray-600">
                Receive detailed pricing, delivery timeline, and financing options if applicable
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
