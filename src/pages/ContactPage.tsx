import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { GoldFlourish } from '../components/GoldFlourish';
import { Newsletter } from '../components/Newsletter';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'Editorial Inquiries',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#FFFDF8] animate-in fade-in duration-300">
      {/* Top Banner / Hero */}
      <div className="py-14 sm:py-20 border-b border-[#E7D8BD]/60 bg-gradient-to-b from-[#FFFAF1] to-[#FFFDF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="text-[11px] sm:text-xs tracking-[0.35em] text-[#C9A44B] uppercase font-semibold block">
            GET IN TOUCH WITH THE ATELIER
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#7E3B54] font-normal leading-tight">
            Editorial Inquiries & Press
          </h1>
          <GoldFlourish type="floral" className="my-2" />
          <p className="text-sm sm:text-base text-[#6C5B5E] font-light leading-relaxed max-w-xl mx-auto font-serif italic">
            "Whether you represent an haute maison, an independent artisan, or have an editorial pitch, our team welcomes your correspondence."
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8 bg-[#FFFAF1] p-8 sm:p-10 rounded-2xl border border-[#E7D8BD] shadow-sm">
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#7E3B54]">
              Atelier Addresses
            </h2>
            <GoldFlourish type="floral" className="opacity-70 lg:mx-0" />

            <div className="space-y-6 text-xs sm:text-sm text-[#6C5B5E]">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#C9A44B] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#4B3A3C] block font-semibold mb-1">Paris Bureau</strong>
                  <span>24 Place Vendôme, 75001 Paris, France</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#C9A44B] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#4B3A3C] block font-semibold mb-1">New York Studio</strong>
                  <span>450 West 14th Street, Meatpacking District, NY 10014</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#C9A44B] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#4B3A3C] block font-semibold mb-1">Electronic Mail</strong>
                  <span className="block">editorial@cybersplash.magazine</span>
                  <span className="block">press@cybersplash.magazine</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#FFFDF8] rounded-xl border border-[#E7D8BD] flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#D47B9D] flex-shrink-0" />
              <span className="text-[11px] text-[#6C5B5E] leading-relaxed">
                Submissions for the Autumn 2026 Print Anthology are currently open for review.
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-10 bg-[#FFFAF1] border border-[#C9A44B] rounded-2xl text-center space-y-4 shadow-lg animate-in zoom-in-95">
                <CheckCircle2 className="w-12 h-12 text-[#C9A44B] mx-auto" />
                <h2 className="font-editorial text-3xl text-[#7E3B54]">Thank You for Your Dispatch</h2>
                <p className="text-xs sm:text-sm text-[#6C5B5E] max-w-md mx-auto leading-relaxed">
                  Your inquiry has been routed to our managing editors. We typically respond within 24 to 48 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs tracking-wider uppercase font-semibold text-[#C9A44B] hover:text-[#B38E37] underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#FFFAF1] p-8 sm:p-10 rounded-2xl border border-[#E7D8BD] shadow-sm space-y-4"
              >
                <h3 className="font-editorial text-2xl text-[#7E3B54] mb-2">
                  Send a Dispatch
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-[#6C5B5E] uppercase mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Lady / Monsieur / Name"
                      className="w-full h-11 px-4 rounded-xl bg-[#FFFDF8] border border-[#E7D8BD] text-xs sm:text-sm text-[#4B3A3C] focus:outline-none focus:border-[#C9A44B]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-[#6C5B5E] uppercase mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full h-11 px-4 rounded-xl bg-[#FFFDF8] border border-[#E7D8BD] text-xs sm:text-sm text-[#4B3A3C] focus:outline-none focus:border-[#C9A44B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#6C5B5E] uppercase mb-1.5">
                    Subject / Department
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl bg-[#FFFDF8] border border-[#E7D8BD] text-xs sm:text-sm text-[#4B3A3C] focus:outline-none focus:border-[#C9A44B]"
                  >
                    <option>Editorial Inquiries</option>
                    <option>Press & Brand Partnerships</option>
                    <option>Lookbook Submissions</option>
                    <option>Advertising & Sponsorship</option>
                    <option>General Reader Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#6C5B5E] uppercase mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, feature pitch, or inquiry..."
                    className="w-full p-4 rounded-xl bg-[#FFFDF8] border border-[#E7D8BD] text-xs sm:text-sm text-[#4B3A3C] focus:outline-none focus:border-[#C9A44B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#C9A44B] hover:bg-[#B38E37] text-white text-xs tracking-[0.25em] font-medium uppercase shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span>SEND DISPATCH</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Newsletter Strip */}
      <Newsletter />
    </div>
  );
};

