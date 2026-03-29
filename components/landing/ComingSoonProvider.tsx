"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type ComingSoonContextValue = {
  openComingSoon: () => void;
};

const ComingSoonContext = createContext<ComingSoonContextValue | null>(null);

export function ComingSoonProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openComingSoon = useCallback(() => setOpen(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <ComingSoonContext.Provider value={{ openComingSoon }}>
      {children}
      {open ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Close dialog"
          />
          <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0a0a1a] p-8 shadow-[0_0_60px_rgba(20,241,149,0.15)]">
            <h2
              id="coming-soon-title"
              className="mb-2 text-center text-2xl font-bold text-white"
            >
              Coming soon
            </h2>
            <p className="mb-6 text-center text-sm text-slate-400">
              Sign up will be available shortly.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-full rounded-xl bg-gradient-to-r from-[#14f195] to-[#00d9a0] py-3 font-bold text-black transition-all hover:from-[#1fff9e] hover:to-[#00e8ad]"
            >
              OK
            </button>
          </div>
        </div>
      ) : null}
    </ComingSoonContext.Provider>
  );
}

function useComingSoon() {
  const ctx = useContext(ComingSoonContext);
  if (!ctx) {
    throw new Error("SignUpTrigger must be used within ComingSoonProvider");
  }
  return ctx.openComingSoon;
}

type SignUpTriggerProps = { variant: "header" | "hero" };

export function SignUpTrigger({ variant }: SignUpTriggerProps) {
  const openComingSoon = useComingSoon();

  if (variant === "header") {
    return (
      <button
        type="button"
        onClick={openComingSoon}
        className="group relative cursor-pointer border-0 bg-transparent p-0"
      >
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#14f195] to-[#9945ff] opacity-50 blur transition-opacity duration-300 group-hover:opacity-80"></div>
        <div className="relative flex items-center gap-2 rounded-full bg-gradient-to-r from-[#14f195] to-[#00d9a0] px-4 py-2 transition-all duration-300 hover:from-[#1fff9e] hover:to-[#00e8ad] sm:px-6 sm:py-2.5">
          <span className="text-sm font-bold text-black sm:text-base">
            Sign Up
          </span>
          <svg
            className="hidden h-4 w-4 text-black transition-transform group-hover:translate-x-0.5 sm:block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={openComingSoon}
      className="group relative inline-block cursor-pointer border-0 bg-transparent p-0"
    >
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#14f195] via-[#9945ff] to-[#14f195] opacity-70 blur-lg transition-all duration-300 group-hover:opacity-100 group-hover:blur-xl"></div>
      <div className="relative flex items-center gap-3 rounded-full bg-gradient-to-r from-[#14f195] to-[#00d9a0] px-8 py-3 shadow-[0_0_40px_rgba(20,241,149,0.3)] transition-all duration-300 hover:from-[#1fff9e] hover:to-[#00e8ad] group-hover:scale-105 group-hover:shadow-[0_0_60px_rgba(20,241,149,0.5)] sm:px-12 sm:py-4">
        <span className="text-base font-bold tracking-wide text-black sm:text-lg">
          Sign Up Now
        </span>
        <svg
          className="h-5 w-5 text-black transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </div>
    </button>
  );
}
