import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { GoldFlourish } from './GoldFlourish';

export const Newsletter: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubmitted(true);
  };

  return (
    <section className="w-full py-8 sm:py-10 bg-[#FFFAF1] border-t border-[#E7D8BD]" id="newsletter">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {isSubmitted ? (
          <div className="p-4 bg-[#FFFDF8] border border-[#C9A44B] rounded-lg text-center max-w-xl mx-auto">
            <p className="text-xs sm:text-sm text-[#4B3A3C] font-medium">
              Thank you for subscribing to Cybersplash updates.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col lg:flex-row items-center justify-between gap-6"
          >
            {/* Left text matching PDF */}
            <p className="text-xs sm:text-sm text-[#4B3A3C] font-light tracking-wide text-center lg:text-left max-w-md">
              Unlock a world of luxury fashion, expert styling tips, and exclusive updates
            </p>

            {/* Right inline inputs matching PDF */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full sm:w-44 h-10 px-4 rounded bg-white border border-[#E7D8BD] text-xs text-[#4B3A3C] placeholder-[#77666A]/70 focus:outline-none focus:border-[#C9A44B]"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-56 h-10 px-4 rounded bg-white border border-[#E7D8BD] text-xs text-[#4B3A3C] placeholder-[#77666A]/70 focus:outline-none focus:border-[#C9A44B]"
              />

              <button
                type="submit"
                className="w-full sm:w-auto h-10 px-6 rounded bg-black hover:bg-[#C9A44B] text-white text-xs tracking-wider uppercase font-medium transition-colors flex-shrink-0"
              >
                Subscribe
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
