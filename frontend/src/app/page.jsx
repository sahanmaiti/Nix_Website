import { Nav } from "@/components/nix/Nav";
import { Hero } from "@/components/nix/Hero";
import { Problem } from "@/components/nix/Problem";
import { HowItWorks } from "@/components/nix/HowItWorks";
import { Features } from "@/components/nix/Features";
import { WhyNix } from "@/components/nix/WhyNix";
import { BuiltForMac } from "@/components/nix/BuiltForMac";
import { Privacy } from "@/components/nix/Privacy";
import { FAQ } from "@/components/nix/FAQ";
import { Pricing } from "@/components/nix/Pricing";
import { Footer } from "@/components/nix/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <WhyNix />
        <BuiltForMac />
        <Privacy />
        {/* <Testimonials /> - Hidden per user request */}
        <FAQ />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
