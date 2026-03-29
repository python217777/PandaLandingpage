import { FC } from "react";
import { orbitron } from "@/app/layout";

const GamePreviewSection: FC = () => {
  const games = [
    {
      number: "1",
      title: "Jackpot",
      description: "A high-excitement pot where players compete to take it all.",
      glowColor: "rgba(255, 215, 0, 0.4)",
      bgPattern: "radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)",
      accentColor: "#ffd700",
    },
    {
      number: "2",
      title: "Coin Flip",
      description: "Fast PVP duels. Pick your side, place your bet, and watch it flip live.",
      glowColor: "rgba(20, 241, 149, 0.4)",
      bgPattern: "radial-gradient(circle at 20% 80%, rgba(20, 241, 149, 0.1) 0%, transparent 50%)",
      accentColor: "#14f195",
    },
    {
      number: "3",
      title: "Mines",
      description: "Test your nerves. Cash out before you hit a mine — or lose it all.",
      glowColor: "rgba(255, 71, 87, 0.4)",
      bgPattern: "radial-gradient(circle at 50% 50%, rgba(255, 71, 87, 0.1) 0%, transparent 50%)",
      accentColor: "#ff4757",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050015] via-[#08001a] to-[#050015]"></div>
      
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-[#ffd700]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-[#14f195]/5 rounded-full blur-[120px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9945ff]/3 rounded-full blur-[150px]"></div>

      <div className="relative container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="mb-6">
            <span className="text-5xl sm:text-6xl">🔥</span>
          </div>
          <div className={orbitron.className}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-[#14f195] via-[#14f195] to-[#9945ff] bg-clip-text text-transparent">
                Launch Games
              </span>
            </h2>
          </div>
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Three ways to play. Three ways to win big.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {games.map((game, index) => (
            <div key={index} className="group relative">
              {/* Card glow */}
              <div 
                className="absolute -inset-1 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500"
                style={{ background: `linear-gradient(135deg, ${game.glowColor}, transparent)` }}
              ></div>
              
              {/* Card */}
              <div className="relative h-full bg-[#0a0a1a]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 overflow-hidden hover:border-white/20 transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                {/* Background pattern */}
                <div 
                  className="absolute inset-0 opacity-60"
                  style={{ background: game.bgPattern }}
                ></div>
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                <div className="relative">
                  {/* Number */}
                  <div 
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-lg font-bold mb-6"
                    style={{ 
                      backgroundColor: `${game.accentColor}20`,
                      color: game.accentColor,
                      border: `1px solid ${game.accentColor}40`
                    }}
                  >
                    {game.number}
                  </div>

                  {/* Title */}
                  <div className={orbitron.className}>
                    <h3 
                      className="text-2xl sm:text-3xl font-black mb-4"
                      style={{ color: game.accentColor }}
                    >
                      {game.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {game.description}
                  </p>

                  {/* Status indicator */}
                  <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                    <div className="relative">
                      <div 
                        className="absolute inset-0 rounded-full animate-ping opacity-40"
                        style={{ backgroundColor: game.accentColor }}
                      ></div>
                      <div 
                        className="relative w-2 h-2 rounded-full"
                        style={{ backgroundColor: game.accentColor }}
                      ></div>
                    </div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider">Available at Launch</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <svg className="w-5 h-5 text-[#14f195]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm text-slate-400">All games powered by <span className="text-[#14f195] font-semibold">Solana</span> for instant, provably fair results</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamePreviewSection;
