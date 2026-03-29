import Image from "next/image";
import myheroimage from "../../public/bg.jpg";
import { orbitron } from "@/app/layout";

export default function EarlyBirdSection() {
  return (
    <section className="relative z-20 mt-12 sm:-mt-10">
      <div className="mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <div className="relative aspect-[16/10] sm:aspect-video bg-black">
            {/* Background Image */}
            <Image
              src={myheroimage}
              alt="background"
              fill
              className="object-cover object-center opacity-70"
            />

            {/* Gradient Overlay - Solana-inspired teal/purple */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f0326]/90 via-[#14044a]/80 to-[#00d9a0]/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

            {/* Animated Glow Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9945ff]/15 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#14f195]/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#00c2ff]/10 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>

            {/* Decorative Lines - geometric accents */}
            <div className="absolute top-16 right-16 w-32 h-px bg-gradient-to-r from-transparent via-[#14f195] to-transparent opacity-60"></div>
            <div className="absolute top-20 right-24 w-20 h-px bg-gradient-to-r from-transparent via-[#9945ff] to-transparent opacity-40"></div>
            <div className="absolute bottom-20 left-16 w-24 h-px bg-gradient-to-r from-transparent via-[#14f195] to-transparent opacity-50"></div>
            <div className="absolute top-1/3 left-8 w-px h-20 bg-gradient-to-b from-transparent via-[#9945ff]/50 to-transparent"></div>
            <div className="absolute top-1/4 right-12 w-px h-16 bg-gradient-to-b from-transparent via-[#14f195]/40 to-transparent"></div>

            {/* Floating Particles */}
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#14f195] rounded-full animate-ping opacity-60"></div>
            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#9945ff] rounded-full animate-ping opacity-50" style={{ animationDelay: '0.7s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#00c2ff] rounded-full animate-ping opacity-40" style={{ animationDelay: '1.2s' }}></div>

            {/* Center Content */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
              <div className="text-center space-y-6 sm:space-y-10">
                
                {/* Early Bird Badge */}
                {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#14f195]/20 to-[#9945ff]/20 border border-[#14f195]/30 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14f195] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14f195]"></span>
                  </span>
                  <span className="text-[#14f195] text-xs sm:text-sm font-semibold tracking-widest uppercase">Limited Time Offer</span>
                </div> */}

                <div className={orbitron.className}>
                  <h1 className="font-black tracking-tight leading-tight text-white">
                    {/* Main Headline */}
                    <div className="relative mb-4">
                      <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black">
                        <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent drop-shadow-2xl">
                          EARLY BIRD
                        </span>
                      </div>
                      <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-1">
                        <span className="bg-gradient-to-r from-[#14f195] via-[#00c2ff] to-[#9945ff] bg-clip-text text-transparent">
                          TOURNAMENT SIGNUP
                        </span>
                      </div>
                    </div>

                    {/* Prize Callout */}
                    <div className="relative inline-block my-4 sm:my-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700] via-[#ffaa00] to-[#ffd700] blur-xl opacity-40 animate-pulse"></div>
                      <div className="relative px-6 sm:px-10 py-2 sm:py-3 bg-gradient-to-r from-[#ffd700]/10 to-[#ffaa00]/10 border-2 border-[#ffd700]/60 rounded-lg backdrop-blur-sm">
                        <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#ffd700] drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]">
                          ENTER TO WIN $500!
                        </span>
                      </div>
                    </div>
                  </h1>
                </div>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300/90 font-light tracking-wide max-w-2xl mx-auto">
                  The Ultimate <span className="text-[#14f195] font-semibold">PVP Gaming Platform</span> on{' '}
                  <span className="bg-gradient-to-r from-[#9945ff] to-[#14f195] bg-clip-text text-transparent font-bold">Solana</span>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
