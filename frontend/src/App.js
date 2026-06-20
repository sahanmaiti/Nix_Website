import "@/App.css";
import { Nav } from "@/components/nix/Nav";
import { Hero } from "@/components/nix/Hero";
import { Problem } from "@/components/nix/Problem";
import { HowItWorks } from "@/components/nix/HowItWorks";
import { Features } from "@/components/nix/Features";
import { WhyNix } from "@/components/nix/WhyNix";
import { BuiltForMac } from "@/components/nix/BuiltForMac";
import { Privacy } from "@/components/nix/Privacy";
import { Testimonials } from "@/components/nix/Testimonials";
import { FAQ } from "@/components/nix/FAQ";
import { Download } from "@/components/nix/Download";
import { Footer } from "@/components/nix/Footer";

function App() {
  return (
    <div
      className="min-h-screen bg-black text-white antialiased selection:bg-white selection:text-black overflow-x-hidden"
      data-testid="nix-landing"
    >
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <WhyNix />
        <BuiltForMac />
        <Privacy />
        <Testimonials />
        <FAQ />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;
