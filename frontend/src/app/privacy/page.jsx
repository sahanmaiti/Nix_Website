import { Nav } from "@/components/nix/Nav";
import { Footer } from "@/components/nix/Footer";

export const metadata = {
  title: "Privacy Policy — Nix",
  description: "Nix Privacy Policy and Data Collection Details.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main className="relative pt-36 md:pt-44 pb-24 md:pb-32 px-5 min-h-screen">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-8">
            Privacy Policy
          </h1>
          
          <div className="space-y-8 text-[15px] md:text-[16px] leading-relaxed text-white/70">
            <p>
              Your Mac stays entirely yours. Nix is designed from the ground up to respect your privacy and run as quietly as possible.
            </p>

            <section>
              <h2 className="text-xl font-medium text-white mb-3">What Nix Collects Locally</h2>
              <p>
                Nix stores all of its operational data — including your app rules, grace period settings, and whitelist preferences — strictly on your local machine using standard macOS <code>UserDefaults</code>. None of this data is ever transmitted off your device. There is no analytics SDK, no crash reporter, and no usage tracking.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-3">License Validation (Lemon Squeezy)</h2>
              <p>
                The only network activity Nix performs is a single, secure license check when you activate the app. We partner with Lemon Squeezy as our Merchant of Record to process payments and issue licenses.
              </p>
              <p className="mt-3">
                During activation, Nix sends three pieces of information to Lemon Squeezy to validate your purchase:
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2">
                <li>Your license key</li>
                <li>An anonymized device instance ID (to manage activation limits)</li>
                <li>Your email address (if accessing the customer portal)</li>
              </ul>
              <p className="mt-3">
                This validation ensures your license is valid. Once validated, the status is securely cached in your local macOS Keychain.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-3">No Third Parties</h2>
              <p>
                Aside from the Lemon Squeezy license check, no other third party is involved. Nix never phones home, never profiles your app usage, and has absolutely no other network code built into the app.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-3">Contact</h2>
              <p>
                If you have any questions about this policy or how Nix handles your data, please contact us at <a href="mailto:support@nixapp.com" className="text-white hover:underline transition-all">support@nixapp.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
