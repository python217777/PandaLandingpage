import { orbitron } from "@/app/layout";
import type { FC } from "react";

const WinnerSection: FC = () => {
  return (
    <section className="relative py-20 sm:py-28 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050015] via-[#0a0025] to-[#050015]"></div>
      
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#ffd700]/8 rounded-full blur-[180px]"></div>
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-[#9945ff]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#14f195]/8 rounded-full blur-[120px]"></div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-[#ffd700] rounded-full animate-ping opacity-50"></div>
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#14f195] rounded-full animate-ping opacity-40" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#9945ff] rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/5 w-1 h-1 bg-[#ffd700] rounded-full animate-ping opacity-40" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative container mx-auto max-w-4xl text-center">
        {/* Trophy Emoji */}
        <div className="mb-8">
          <span className="text-6xl sm:text-7xl md:text-8xl animate-bounce" style={{ animationDuration: '2s' }}>🏆</span>
        </div>

        {/* Headline */}
        <div className={orbitron.className}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            <span className="text-white">Winners </span>
            <span className="text-[#ffd700]">Welcome</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Get in early. Play with <span className="text-[#ff4757] font-semibold">live hostesses</span>. Compete for <span className="text-[#14f195] font-semibold">real rewards</span>.
        </p>

        {/* Tagline */}
        <div className="relative inline-block mb-10">
          <div className="absolute -inset-2 bg-gradient-to-r from-[#ffd700]/30 via-[#14f195]/30 to-[#9945ff]/30 rounded-2xl blur-xl"></div>
          <div className="relative bg-[#0a0a1a]/80 border border-white/10 rounded-2xl px-8 sm:px-12 py-5 sm:py-6">
            <p className={`text-xl sm:text-2xl md:text-3xl font-bold ${orbitron.className}`}>
              <span className="text-white">Your </span>
              <span className="text-[#14f195]">Lucky</span>
              <span className="text-white"> streak starts </span>
              <span className="text-[#ffd700]">now</span>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <a  className="group relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ffd700] via-[#14f195] to-[#9945ff] rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
            <div className="relative flex items-center gap-3 px-10 sm:px-14 py-4 sm:py-5 bg-gradient-to-r from-[#ffd700] to-[#ff9500] hover:from-[#ffe033] hover:to-[#ffaa00] rounded-full transition-all duration-300 shadow-[0_0_50px_rgba(255,215,0,0.3)] group-hover:shadow-[0_0_70px_rgba(255,215,0,0.5)] group-hover:scale-105">
              <span className="text-black font-bold text-lg sm:text-xl tracking-wide">Get Started Now</span>
              <svg className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </a>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-[#ffd700]/50 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default WinnerSection;
