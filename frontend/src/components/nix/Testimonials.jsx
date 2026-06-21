import Image from "next/image";
import { FadeUp, Stagger, StaggerItem } from "./FadeUp";

const quotes = [
  {
    quote:
      "I've been waiting for someone to fix this for fifteen years. Nix is the first utility that nails the behavior I actually want from macOS.",
    name: "Alex Tanaka",
    role: "iOS Engineer",
    avatar:
      "https://images.unsplash.com/photo-1765776830139-72b2184dae5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MjJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc4MTc3NjYwNXww&ixlib=rb-4.1.0&q=85",
  },
  {
    quote:
      "Per-app rules, a grace period, and a real SwiftUI settings pane. It feels like Apple shipped it.",
    name: "Maya Hernández",
    role: "Product Designer",
    avatar:
      "https://images.pexels.com/photos/12396627/pexels-photo-12396627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    quote:
      "Zero CPU. Zero network. Zero noise. It just sits in the menu bar and quietly does the right thing.",
    name: "Daniel Okafor",
    role: "Site Reliability Engineer",
    avatar:
      "https://images.pexels.com/photos/17685845/pexels-photo-17685845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative py-28 md:py-36 border-t border-white/[0.06]" data-testid="testimonials-section">
      <div className="mx-auto max-w-6xl px-5">
        <FadeUp>
          <div className="max-w-3xl">
            <div className="text-[12px] uppercase tracking-[0.18em] text-white/40 mb-5">Loved by Mac users</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.05] text-white">
              Quietly indispensable.
            </h2>
          </div>
        </FadeUp>

        <Stagger className="mt-14 grid md:grid-cols-3 gap-5" stagger={0.08}>
          {quotes.map((q, i) => (
            <StaggerItem key={i}>
              <figure
                className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.015] p-7 hover:border-white/[0.14] transition-colors"
                data-testid={`testimonial-card-${i}`}
              >
                <blockquote className="text-[15px] leading-relaxed text-white/85">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-white/[0.05]">
                  <Image
                    src={q.avatar}
                    alt=""
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full object-cover grayscale border border-white/[0.08]"
                  />
                  <div>
                    <div className="text-[13px] text-white font-medium">{q.name}</div>
                    <div className="text-[11.5px] text-white/45">{q.role}</div>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};
