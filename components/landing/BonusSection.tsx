import type { FC } from "react";
import { orbitron } from "@/app/layout";

const BonusSection: FC = () => {
  const bonuses = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      text: "Access to exclusive hosted events",
      color: "#14f195",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      text: "Priority spot in launch tournaments",
      color: "#ffd700",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Bonus rewards during opening week",
      color: "#9945ff",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050015] via-[#0a0020] to-[#050015]"></div>
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#14f195]/5 rounded-full blur-[150px]"></div>

      <div className="relative container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-6">
            <span className="text-5xl sm:text-6xl">🎁</span>
          </div>
          <div className={orbitron.className}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-[#14f195] via-[#ffd700] to-[#9945ff] bg-clip-text text-transparent">
                Early Bird Bonuses
              </span>
            </h2>
          </div>
        </div>

        {/* Bonus Card */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#14f195]/30 via-[#ffd700]/30 to-[#9945ff]/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          
          {/* Card */}
          <div className="relative bg-[#0a0a1a]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 hover:border-white/20 transition-all duration-300">
            {/* Inner decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#14f195]/5 via-transparent to-[#9945ff]/5 rounded-3xl"></div>
            
            <div className="relative space-y-6 sm:space-y-8">
              {bonuses.map((bonus, index) => (
                <div 
                  key={index}
                  className="group/item flex items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all duration-300"
                >
                  {/* Icon container */}
                  <div 
                    className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110"
                    style={{ 
                      backgroundColor: `${bonus.color}15`,
                      border: `1px solid ${bonus.color}30`,
                      color: bonus.color
                    }}
                  >
                    {bonus.icon}
                  </div>
                  
                  {/* Text */}
                  <p className="text-base sm:text-lg md:text-xl text-slate-200 font-medium">
                    {bonus.text}
                  </p>

                  {/* Checkmark */}
                  <div 
                    className="ml-auto flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: `${bonus.color}20` }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: bonus.color }}>
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom accent */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/5">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#14f195] blur-md opacity-50"></div>
                    <div className="relative w-2 h-2 rounded-full bg-[#14f195]"></div>
                  </div>
                  <span className="text-sm text-slate-400">Available for early signups only</span>
                </div>
                <span className="hidden sm:block text-slate-600">•</span>
                <span className="text-sm text-slate-500">Limited time offer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
