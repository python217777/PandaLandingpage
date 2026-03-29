import { orbitron } from "@/app/layout";
import type { FC } from "react";

const JoinSection: FC = () => {
  const socials = [
    {
      name: "X",
      href: "https://x.com/pandacasinos?s=21",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: "#ffffff",
      hoverBg: "hover:bg-white/10",
    },
    {
      name: "Telegram",
      href: "https://t.me/+a9EsgDO2n4MxZjdh",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      color: "#29B6F6",
      hoverBg: "hover:bg-[#29B6F6]/20",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050015] via-[#080020] to-[#050015]"></div>
      
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#5865F2]/8 rounded-full blur-[150px]"></div>

      <div className="relative container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="mb-6">
            <span className="text-5xl sm:text-6xl">📣</span>
          </div>
          <div className={orbitron.className}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">
              <span className="text-white">Join the </span>
              <span className="text-[#5865F2]">Community</span>
            </h2>
          </div>
          <p className="text-slate-400 text-base sm:text-lg max-w-md mx-auto">
            Stay updated on live events, tournaments, and giveaways.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center gap-3 px-6 sm:px-8 py-4 bg-white/5 border border-white/10 rounded-2xl ${social.hoverBg} hover:border-white/20 transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div 
                className="transition-transform duration-300 group-hover:scale-110"
                style={{ color: social.color }}
              >
                {social.icon}
              </div>
              
              {/* Name */}
              <span className="text-white font-semibold text-lg">{social.name}</span>
              
              {/* Arrow */}
              <svg 
                className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        {/* Bottom text */}
        {/* <div className="mt-10 sm:mt-14 text-center">
          <p className="text-slate-500 text-sm">
            Join <span className="text-white font-medium">2,500+</span> players already signed up
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default JoinSection;
