import { orbitron } from "@/app/layout";
import { SignUpTrigger } from "@/components/landing/ComingSoonProvider";
import type { FC } from "react";

const SignUpSection: FC = () => {
  return (
    <section className="relative py-20 sm:py-28 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050015] via-[#0a0025] to-[#050015]"></div>
      
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#14f195]/8 rounded-full blur-[180px]"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#9945ff]/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ffd700]/5 rounded-full blur-[150px]"></div>

      <div className="relative container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="mb-6">
            <span className="text-5xl sm:text-6xl">📩</span>
          </div>
          <div className={orbitron.className}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              <span className="text-white">Sign Up </span>
              <span className="text-[#14f195]">Below</span>
            </h2>
          </div>
          <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto">
            Secure your Early Bird entry and claim your spot before the tournament opens.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <SignUpTrigger variant="hero" />
        </div>

        {/* Form Card */}
        <div className="relative hidden">
          {/* Card glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#14f195]/30 via-[#9945ff]/30 to-[#14f195]/30 rounded-3xl blur-xl opacity-50"></div>
          
          {/* Card */}
          <div className="relative bg-[#0a0a1a]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10">
            {/* Inner decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#14f195]/5 via-transparent to-[#9945ff]/5 rounded-3xl"></div>
            
            <form className="relative space-y-5">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#14f195]/50 focus:ring-1 focus:ring-[#14f195]/50 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Wallet Input (Optional) */}
              <div>
                <label htmlFor="wallet" className="block text-sm font-medium text-slate-300 mb-2">
                  Solana Wallet Address <span className="text-slate-500">(optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="wallet"
                    placeholder="Your Solana wallet address"
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#9945ff]/50 focus:ring-1 focus:ring-[#9945ff]/50 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Username Input */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-slate-300 mb-2">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="username"
                    placeholder="Choose a username"
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#ffd700]/50 focus:ring-1 focus:ring-[#ffd700]/50 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group relative w-full"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#14f195] via-[#9945ff] to-[#14f195] rounded-xl blur opacity-60 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-[#14f195] to-[#00d9a0] hover:from-[#1fff9e] hover:to-[#00e8ad] rounded-xl transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(20,241,149,0.4)]">
                    <span className="text-black font-bold text-lg">Claim My Spot</span>
                    <svg className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#14f195]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free to join</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#14f195]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No spam</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#14f195]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Instant entry</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
