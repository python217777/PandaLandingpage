import { orbitron } from "@/app/layout";
import { SignUpTrigger } from "@/components/landing/ComingSoonProvider";
import type { FC } from "react";

const HeaderSection: FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Background with blur */}
      <div className="absolute inset-0 bg-[#050015]/80 backdrop-blur-md border-b border-white/5"></div>
      
      <div className="relative container mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="group flex items-center gap-2">
          <div className={orbitron.className}>
            <span className="text-xl sm:text-2xl font-black tracking-tight">
              <span className="text-[#14f195]">Panda</span>
            </span>
          </div>
        </a>

        {/* Right side */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Live indicator - hidden on very small screens */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14f195] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14f195]"></span>
            </span>
            <span className="text-xs text-slate-400 font-medium">Early Bird Open</span>
          </div>

          {/* CTA Button */}
          <SignUpTrigger variant="header" />
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
