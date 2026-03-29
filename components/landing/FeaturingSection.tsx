import Image from "next/image";
import hostessimg from "../../public/hostessImg.png";
import { orbitron } from "@/app/layout";
import type { FC } from "react";

const FeaturingSection: FC = () => {
  const features = [
    { text: "Guiding events", color: "#14f195" },
    { text: "Announcing winners", color: "#ffd700" },
    { text: "Hyping matches", color: "#ff4757" },
    { text: "Keeping energy high", color: "#9945ff" },
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050015] via-[#0a0025] to-[#050015]"></div>
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#9945ff]/10 rounded-full blur-[150px]"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-[#14f195]/8 rounded-full blur-[120px]"></div>

      <div className="relative container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            {/* Header */}
            <div className="mb-8">
              <div className="mb-4">
                <span className="text-5xl sm:text-6xl">💎</span>
              </div>
              <div className={orbitron.className}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2">
                  <span className="text-white">Featuring</span>
                </h2>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                  <span className="text-[#ff4757]">LIVE</span>{" "}
                  <span className="text-[#9945ff]">Hostesses</span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Enjoy a fully interactive experience with real live hostesses guiding events, announcing winners, hyping matches, and keeping the energy high.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300"
                >
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: feature.color }}
                  ></div>
                  <span className="text-sm text-slate-300">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Tagline */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#9945ff]/20 to-[#14f195]/20 rounded-xl blur-lg"></div>
              <div className="relative bg-[#0a0a1a]/80 border border-white/10 rounded-xl p-5">
                <p className="text-white text-base sm:text-lg font-medium">
                  A new kind of gaming experience — <span className="text-[#14f195]">fun</span>, <span className="text-[#ffd700]">fast</span>, and <span className="text-[#9945ff]">fully hosted</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#9945ff] via-[#ff4757] to-[#14f195] rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Animated ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-dashed border-[#9945ff]/30 animate-spin" style={{ animationDuration: '20s' }}></div>
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden">
                {/* Border gradient */}
                <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-br from-[#9945ff] via-[#ff4757] to-[#14f195]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a1a]">
                    <Image
                      className="w-full h-full object-cover"
                      src={hostessimg}
                      alt="Live Hostess"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#9945ff]/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 px-3 py-1.5 bg-[#ff4757] rounded-full text-xs font-bold text-white shadow-lg animate-bounce" style={{ animationDuration: '2s' }}>
                LIVE
              </div>
              <div className="absolute -bottom-2 -left-2 px-3 py-1.5 bg-[#14f195] rounded-full text-xs font-bold text-black shadow-lg">
                Interactive
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturingSection;
