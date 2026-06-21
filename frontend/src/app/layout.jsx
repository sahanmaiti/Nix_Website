import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "Nix | Fullstack App",
  description: "Nix - Modern Mac App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth bg-[#000000]">
      <body className={`${inter.className} min-h-screen bg-[#000000] text-white antialiased selection:bg-white selection:text-black overflow-x-hidden relative`}>
        {/* Subtle Noise Texture */}
        <div 
          className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-screen"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
