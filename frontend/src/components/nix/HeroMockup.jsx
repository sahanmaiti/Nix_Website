"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const SETTINGS_IMG = "/images/settings.png";
const MENUBAR_IMG = "/images/menubar.png";

const MotionImage = motion.create(Image);

export const HeroMockup = () => {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto" data-testid="hero-mockup">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-x-32 -top-16 -bottom-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(124,43,255,0.1),transparent_70%)]" />
        <div className="absolute right-1/4 top-1/2 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_70%)]" />
      </div>

      <div className="relative mx-auto w-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
        <div className="relative w-[220%] -ml-[60%] md:w-[180%] md:-ml-[40%] lg:w-[160%] lg:-ml-[30%] -mt-[2%] -mb-[12%]">
          
          {/* Settings Window */}
          <MotionImage
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            src={SETTINGS_IMG}
            alt="Nix Settings"
            width={3600}
            height={2338}
            className="block w-full h-auto select-none drop-shadow-2xl"
            style={{ willChange: "transform" }}
            draggable={false}
            priority
          />

          {/* Menubar Popover */}
          <div className="absolute inset-0 w-full h-full translate-y-[46%] translate-x-[2%]">
            <MotionImage
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              src={MENUBAR_IMG}
              alt="Nix Menubar"
              width={3600}
              height={2338}
              className="w-full h-auto select-none drop-shadow-xl"
              style={{ willChange: "transform" }}
              draggable={false}
              priority
            />
          </div>
          
        </div>
      </div>

      {/* Soft reflection */}
      <div className="pointer-events-none mx-auto mt-2 h-10 w-[78%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_70%)] blur-md" />
    </div>
  );
};
