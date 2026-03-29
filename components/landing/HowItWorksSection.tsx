import { orbitron } from "@/app/layout";
import type { FC } from "react";

const HowItWorksSection: FC = () => {
  const steps = [
    {
      number: "1",
      title: "Sign Up",
      description: "Enter your email or wallet.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      gradient: "from-[#14f195] to-[#00d9a0]",
      glowColor: "#14f195",
      borderColor: "border-[#14f195]/30",
      hoverBorder: "hover:border-[#14f195]/60",
    },
    {
      number: "2",
      title: "Get Entered",
      description: "Instantly receive your entry into the $500 Early Bird Draw.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-[#ffd700] to-[#ff9500]",
      glowColor: "#ffd700",
      borderColor: "border-[#ffd700]/30",
      hoverBorder: "hover:border-[#ffd700]/60",
    },
    {
      number: "3",
      title: "Play Early",
      description: "Unlock early access to Jackpot, Coin Flip, and Mines.",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-[#9945ff] to-[#14f195]",
      glowColor: "#9945ff",
      borderColor: "border-[#9945ff]/30",
      hoverBorder: "hover:border-[#9945ff]/60",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050015] via-[#080020] to-[#050015]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[#14f195]/5 rounded-full blur-[120px] -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-[#9945ff]/5 rounded-full blur-[120px] -translate-y-1/2"></div>

      <div className="relative container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="mb-6">
            <span className="text-5xl sm:text-6xl">📝</span>
          </div>
          <div className={orbitron.className}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-slate-300 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-[72px] left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-[#14f195]/40 via-[#ffd700]/40 to-[#9945ff]/40"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 top-full w-[2px] h-8 -translate-x-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
                )}
                
                {/* Card */}
                <div className={`relative bg-[#0a0a1a]/80 backdrop-blur-xl border ${step.borderColor} ${step.hoverBorder} rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-1`}>
                  {/* Glow effect on hover */}
                  <div 
                    className="absolute -inset-0.5 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ background: `linear-gradient(135deg, ${step.glowColor}, transparent)` }}
                  ></div>
                  
                  <div className="relative">
                    {/* Step Number Badge */}
                    <div className="flex justify-center mb-6">
                      <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                        <span className="text-black font-black text-xl">{step.number}</span>
                        {/* Pulse ring */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} animate-ping opacity-20`}></div>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
                        style={{ color: step.glowColor }}
                      >
                        {step.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl sm:text-2xl font-bold text-center mb-3 ${orbitron.className}`}>
                      <span className={`bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                        {step.title}
                      </span>
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-center text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <div className="flex -space-x-1">
              <div className="w-2 h-2 rounded-full bg-[#14f195]"></div>
              <div className="w-2 h-2 rounded-full bg-[#ffd700]"></div>
              <div className="w-2 h-2 rounded-full bg-[#9945ff]"></div>
            </div>
            <span className="text-sm text-slate-400">Takes less than 30 seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
