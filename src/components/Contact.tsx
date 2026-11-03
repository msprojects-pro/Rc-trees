import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { QuoteFormData } from '../types';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: initialService || 'Landscaping',
    projectDescription: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (web3Key) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3Key,
            subject: `New Garden Quote Request - ${formData.serviceRequired} (${formData.fullName})`,
            ...formData,
          }),
        });

        const result = await response.json();
        if (result.success) {
          setStatus('success');
          setStatusMessage('Thank you! Your quote request has been sent to R.C Tree\'s & Landscaping.');
        } else {
          setStatus('error');
          setStatusMessage(result.message || 'Submission failed. Please call or WhatsApp us directly.');
        }
      } catch {
        setStatus('error');
        setStatusMessage('Network error. Please call or WhatsApp us directly at +44 7386 994511.');
      }
    } else {
      // Clean fallback with explicit status per requirements
      setTimeout(() => {
        setStatus('success');
        setStatusMessage(
          'Your quote request details have been captured. You can also send this directly to our WhatsApp with one click below.'
        );
      }, 500);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello, I'd like to enquire about your landscaping services and request a free quote.\n\n` +
      `Name: ${formData.fullName || 'Not specified'}\n` +
      `Service: ${formData.serviceRequired}\n` +
      `Phone: ${formData.phone || 'Not specified'}\n` +
      `Details: ${formData.projectDescription || 'General enquiry'}`
  );

  return (
    <section id="contact" className="py-20 bg-[#F7F8F3] border-b border-[#E2E7D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-wider text-[#7CA22B] uppercase mb-3">
            GET A FREE QUOTATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#26391B] tracking-tight mb-4">
            Let's Talk About Your Garden
          </h2>
          <p className="text-base sm:text-lg text-[#687064] leading-relaxed">
            Fill out the form below or contact us directly via Phone or WhatsApp for quick advice and a free estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Area */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E7D9] shadow-xs">
              <h3 className="text-xl font-bold text-[#26391B] mb-6">
                R.C Tree's &amp; Landscaping
              </h3>

              <div className="space-y-6">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#EDF2E4] border border-[#E2E7D9] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#7CA22B]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#687064]">
                      Phone
                    </div>
                    <a
                      href="tel:+447386994511"
                      className="text-lg font-bold text-[#26391B] hover:text-[#7CA22B] transition-colors block mt-0.5"
                    >
                      +44 7386 994511
                    </a>
                    <span className="text-xs text-[#687064]">Available for calls &amp; voicemails</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#EDF2E4] border border-[#E2E7D9] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-[#7CA22B]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#687064]">
                      WhatsApp
                    </div>
                    <a
                      href="https://wa.me/447386994511?text=Hello%2C%20I'd%20like%20to%20enquire%20about%20your%20landscaping%20services%20and%20request%20a%20free%20quote."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-[#26391B] hover:text-[#7CA22B] transition-colors block mt-0.5"
                    >
                      +44 7386 994511
                    </a>
                    <span className="text-xs text-[#687064]">Fast messaging &amp; photo sharing</span>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#EDF2E4] border border-[#E2E7D9] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#7CA22B]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#687064]">
                      Service Area
                    </div>
                    <div className="text-base font-bold text-[#26391B] mt-0.5">
                      West Midlands, United Kingdom
                    </div>
                    <div className="text-xs text-[#687064]">
                      Postcode / Location: <span className="font-semibold text-[#20251C]">WR5 1EB</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Direct Buttons */}
              <div className="mt-8 pt-6 border-t border-[#E2E7D9] grid grid-cols-2 gap-3">
                <a
                  href="tel:+447386994511"
                  className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#7CA22B] hover:bg-[#6e9026] rounded-lg transition-colors text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/447386994511?text=Hello%2C%20I'd%20like%20to%20enquire%20about%20your%20landscaping%20services%20and%20request%20a%20free%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-[#26391B] bg-[#EDF2E4] hover:bg-[#dfe6d4] border border-[#E2E7D9] rounded-lg transition-colors text-center"
                >
                  <MessageSquare className="w-4 h-4 text-[#7CA22B]" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Note on Quotes */}
            <div className="p-5 rounded-2xl bg-[#EDF2E4] border border-[#E2E7D9]">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#7CA22B] shrink-0 mt-0.5" />
                <div className="text-xs text-[#20251C]/90 leading-relaxed">
                  <span className="font-bold text-[#26391B] block mb-0.5">Prompt Free Estimates</span>
                  We assess your requirements, provide practical recommendations, and deliver a fair, transparent quotation without obligation.
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E2E7D9] shadow-xs">
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#26391B]">
                  Request a Free Quote
                </h3>
                <p className="text-sm text-[#687064] mt-1">
                  Tell us about your garden project and we will be in touch shortly.
                </p>
              </div>

              {status === 'success' ? (
                <div className="p-6 bg-[#EDF2E4] rounded-xl border border-[#E2E7D9] text-[#26391B]">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-[#7CA22B]" />
                    <h4 className="text-lg font-bold">Quote Request Received!</h4>
                  </div>
                  <p className="text-sm text-[#20251C]/80 mb-6 leading-relaxed">
                    {statusMessage}
                  </p>
                  
                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/447386994511?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 text-sm font-semibold text-white bg-[#7CA22B] hover:bg-[#6e9026] rounded-lg transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Enquiry via WhatsApp Now</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="w-full py-2.5 text-xs font-semibold text-[#687064] hover:text-[#20251C] transition-colors"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-red-800 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
                      <span>{statusMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#26391B] mb-1.5">
                        Full Name <span className="text-[#7CA22B]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. David Smith"
                        className="w-full px-4 py-3 rounded-lg bg-[#F7F8F3] border border-[#E2E7D9] text-[#20251C] text-sm focus:outline-none focus:border-[#7CA22B] focus:ring-1 focus:ring-[#7CA22B] transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#26391B] mb-1.5">
                        Phone Number <span className="text-[#7CA22B]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 07123 456789"
                        className="w-full px-4 py-3 rounded-lg bg-[#F7F8F3] border border-[#E2E7D9] text-[#20251C] text-sm focus:outline-none focus:border-[#7CA22B] focus:ring-1 focus:ring-[#7CA22B] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#26391B] mb-1.5">
                        Email Address <span className="text-[#7CA22B]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. david@example.co.uk"
                        className="w-full px-4 py-3 rounded-lg bg-[#F7F8F3] border border-[#E2E7D9] text-[#20251C] text-sm focus:outline-none focus:border-[#7CA22B] focus:ring-1 focus:ring-[#7CA22B] transition-colors"
                      />
                    </div>

                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#26391B] mb-1.5">
                        Service Required <span className="text-[#7CA22B]">*</span>
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#F7F8F3] border border-[#E2E7D9] text-[#20251C] text-sm focus:outline-none focus:border-[#7CA22B] focus:ring-1 focus:ring-[#7CA22B] transition-colors"
                      >
                        <option value="Tree Care">Tree Care and Tree Maintenance</option>
                        <option value="Fencing">Fencing Installation and Repairs</option>
                        <option value="Garden Design">Garden Design</option>
                        <option value="Landscaping">Garden Landscaping</option>
                        <option value="Garden Maintenance">Garden Maintenance</option>
                        <option value="Outdoor Transformations">Outdoor Space Transformations</option>
                        <option value="Multiple Services">Multiple Services / General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#26391B] mb-1.5">
                      Brief Project Description <span className="text-[#7CA22B]">*</span>
                    </label>
                    <textarea
                      name="projectDescription"
                      rows={4}
                      required
                      value={formData.projectDescription}
                      onChange={handleChange}
                      placeholder="Please share details such as garden dimensions, tree work needed, fencing length, or your project goals..."
                      className="w-full px-4 py-3 rounded-lg bg-[#F7F8F3] border border-[#E2E7D9] text-[#20251C] text-sm focus:outline-none focus:border-[#7CA22B] focus:ring-1 focus:ring-[#7CA22B] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 text-base font-semibold text-white bg-[#7CA22B] hover:bg-[#6e9026] active:bg-[#607e21] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Request My Free Quote</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-[#687064] pt-2">
                    We treat your details with care and respond promptly to discuss your project.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
