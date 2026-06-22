import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Nix — Quit Apps When You Close Their Last Window",
  description: "Nix automatically quits Mac apps when their last window closes. Native SwiftUI utility with per-app rules, grace periods, and zero telemetry.",
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth bg-[#000000] overscroll-none">
      <body className={`${inter.className} min-h-screen bg-[#000000] text-white antialiased selection:bg-white selection:text-black`}>
        {/* Subtle Noise Texture - Removed mix-blend-screen to prevent additive blending artifacts during repaints */}
        <div 
          className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.007]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
        {/* Safe Wrapper for horizontal overflow, preserving native body background propagation */}
        <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#000000]">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
