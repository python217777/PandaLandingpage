// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import { Russo_One } from "next/font/google";

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the desired weights
  variable: "--font-orbitron",
});
export const russo = Russo_One({
  subsets: ["latin"],
  weight: ["400"], // Russo One supports only 400
  variable: "--font-rosso",
});


// export const metadata: Metadata = {
//   title: "Hero Tournament",
//   description: "One-time PvP Solana tournament landing page",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={orbitron.className}>
      <body>{children}</body>
    </html>
  );
}
