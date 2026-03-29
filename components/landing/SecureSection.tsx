import { orbitron } from "@/app/layout";
import type { FC } from "react";

const SecureSection: FC = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Private Data",
      description: "Your information stays secure and confidential",
      color: "#14f195",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Provably Fair",
      description: "All results verified on-chain",
      color: "#9945ff",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast",
      description: "Instant transactions on Solana",
      color: "#ffd700",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050015] via-[#080018] to-[#050015]"></div>
      
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#14f195]/5 rounded-full blur-[150px]"></div>

      <div className="relative container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-6">
            <span className="text-5xl sm:text-6xl">🔒</span>
          </div>
          <div className={orbitron.className}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              <span className="text-white">Secure & </span>
              <span className="text-[#14f195]">Transparent</span>
            </h2>
          </div>
          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-3">
            Built on <span className="text-[#9945ff] font-semibold">Solana</span> for fast, verifiable gameplay.
          </p>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Your data stays private. All results are provably fair.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="relative h-full bg-[#0a0a1a]/60 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 text-center">
                {/* Icon */}
                <div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: `${feature.color}15`,
                    color: feature.color
                  }}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 
                  className="text-lg font-bold mb-2"
                  style={{ color: feature.color }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Solana Badge */}
        {/* <div className="mt-10 sm:mt-14 flex justify-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#9945ff] to-[#14f195]"></div>
            <span className="text-sm text-slate-400">Powered by <span className="text-white font-medium">Solana</span></span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SecureSection;
