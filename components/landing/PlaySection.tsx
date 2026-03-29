import { orbitron } from "@/app/layout";
import { SignUpTrigger } from "@/components/landing/ComingSoonProvider";
import type { FC } from "react";

const PlaySection: FC = () => {
  return (
    <section className="relative py-20 sm:py-28 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050015] via-[#0a0020] to-[#050015]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#9945ff]/8 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#14f195]/5 rounded-full blur-[100px]"></div>
      
      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#14f195 1px, transparent 1px), linear-gradient(90deg, #14f195 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }}></div>

      <div className="relative container mx-auto max-w-5xl">
        {/* Main Content */}
        <div className="text-center mb-12 sm:mb-16">
          
          {/* Emoji + Headline */}
          <div className={orbitron.className}>
            <div className="mb-6">
              <span className="text-5xl sm:text-6xl md:text-7xl">🎮</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="text-white">Play. </span>
              <span className="bg-gradient-to-r from-[#14f195] to-[#00d9a0] bg-clip-text text-transparent">Win. </span>
              <span className="bg-gradient-to-r from-[#9945ff] to-[#14f195] bg-clip-text text-transparent">Get Lucky.</span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-4 leading-relaxed">
            Be among the first players to join the{' '}
            <span className="text-white font-semibold">GotLucky</span>{' '}
            launch tournaments.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Sign up now for exclusive Early Bird rewards, instant entry into our{' '}
            <span className="text-[#ffd700] font-bold">$500 Draw</span>, and priority access to all game modes.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Card 1 - Early Bird Rewards */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#14f195] to-[#9945ff] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-[#0d0d1a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:border-[#14f195]/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#14f195]/20 to-[#14f195]/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-[#14f195]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Early Bird Rewards</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Exclusive bonuses and perks reserved only for our founding players.</p>
            </div>
          </div>

          {/* Card 2 - $500 Draw Entry */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ffd700] to-[#ff9500] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-[#0d0d1a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:border-[#ffd700]/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ffd700]/20 to-[#ffd700]/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-[#ffd700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">$500 Draw Entry</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Automatic entry into our launch giveaway just for signing up early.</p>
            </div>
          </div>

          {/* Card 3 - Priority Access */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9945ff] to-[#14f195] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-[#0d0d1a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 h-full hover:border-[#9945ff]/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#9945ff]/20 to-[#9945ff]/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-[#9945ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Priority Access</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Be first in line for all new game modes and tournament launches.</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <SignUpTrigger variant="hero" />
        </div>

      </div>
    </section>
  );
};

export default PlaySection;
