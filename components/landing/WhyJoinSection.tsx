import { orbitron } from "@/app/layout";
import type { FC } from "react";

const WhyJoinSection: FC = () => {
  const benefits = [
    {
      emoji: "🚀",
      title: "Early Bird $500 Draw",
      description: "All Early Bird signups automatically enter the $500 prize draw.",
      accentColor: "#ffd700",
    },
    {
      emoji: "⚔️",
      title: "Early Access to Tournaments",
      description: "Compete head-to-head in launch events for real prizes.",
      accentColor: "#ff4757",
    },
    {
      emoji: "🎤",
      title: "Live Hostess Events",
      description: "Exclusive hosted sessions for early players only.",
      accentColor: "#9945ff",
    },
    {
      emoji: "⚡️",
      title: "Powered by Solana",
      description: "Ultra-fast, low-fee, provably fair gameplay.",
      accentColor: "#14f195",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050015] via-[#080020] to-[#050015]"></div>
      
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ffd700]/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#9945ff]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#14f195]/5 rounded-full blur-[120px]"></div>

      <div className="relative container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="mb-6">
            <span className="text-5xl sm:text-6xl">💰</span>
          </div>
          <div className={orbitron.className}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="text-white">Why Join </span>
              <span className="text-[#ffd700]">Early?</span>
            </h2>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              {/* Card glow on hover */}
              <div 
                className="absolute -inset-0.5 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-500"
                style={{ background: benefit.accentColor }}
              ></div>
              
              {/* Card */}
              <div className="relative h-full bg-[#0a0a1a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-300 group-hover:transform group-hover:-translate-y-1">
                {/* Inner gradient */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10"
                  style={{ background: benefit.accentColor }}
                ></div>

                <div className="relative flex gap-5">
                  {/* Emoji */}
                  <div className="flex-shrink-0">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300"
                      style={{ 
                        backgroundColor: `${benefit.accentColor}15`,
                        border: `1px solid ${benefit.accentColor}30`
                      }}
                    >
                      {benefit.emoji}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-lg sm:text-xl font-bold mb-2"
                      style={{ color: benefit.accentColor }}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
